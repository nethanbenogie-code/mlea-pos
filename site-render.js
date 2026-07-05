/* ============================================================
   MLEA SITE RENDER ENGINE (site-render.js)
   Priority: localStorage override → published content.json → SITE_DEFAULTS
   Paints all [data-c] elements and the repeatable lists.
   ============================================================ */
(function(){
  'use strict';
  var D = window.SITE_DEFAULTS || {};
  var KEY = (D.meta && D.meta.storeKey) || 'site_content';

  function merge(base, over){
    if(Array.isArray(base)) return (over!=null ? over : base);
    if(typeof base==='object' && base){
      var out={}; for(var k in base) out[k]=base[k];
      if(over && typeof over==='object'){ for(var j in over) out[j]=merge(base[j], over[j]); }
      return out;
    }
    return (over!=null ? over : base);
  }
  function loadContent(cb){
    var content = D;
    fetch('content.json', {cache:'no-store'})
      .then(function(r){ return r.ok ? r.json() : null; })
      .catch(function(){ return null; })
      .then(function(published){
        if(published) content = merge(D, published);
        try{ var raw=localStorage.getItem(KEY); if(raw){ content=merge(content, JSON.parse(raw)); } }catch(e){}
        cb(content);
      });
  }
  function getPath(obj, path){ var p=path.split('.'),c=obj; for(var i=0;i<p.length;i++){ if(c==null)return undefined; c=c[p[i]]; } return c; }
  function setText(el,val,html){ if(html) el.innerHTML=val; else el.textContent=val; }

  function paint(C){
    document.querySelectorAll('[data-c]').forEach(function(el){
      var v=getPath(C, el.getAttribute('data-c'));
      if(v===undefined||v===null) return;
      setText(el, v, el.hasAttribute('data-html'));
    });

    // NAV
    var nav=document.getElementById('navLinks');
    if(nav && C.nav){ nav.innerHTML=C.nav.filter(function(n){return n.show!==false;}).map(function(n){
      return '<a href="'+n.href+'"'+(n.cta?' class="nav-cta"':'')+'>'+n.label+'</a>'; }).join(''); }

    // HERO cta + trust
    var hc=document.getElementById('heroCta');
    if(hc && C.hero){ var h='';
      if(C.hero.ctaPrimary && C.hero.ctaPrimary.show!==false) h+='<a href="'+C.hero.ctaPrimary.href+'" class="btn-primary">'+C.hero.ctaPrimary.label+' →</a>';
      if(C.hero.ctaGhost && C.hero.ctaGhost.show!==false) h+='<a href="'+C.hero.ctaGhost.href+'" class="btn-ghost">'+C.hero.ctaGhost.label+'</a>';
      hc.innerHTML=h; }
    var ht=document.getElementById('heroTrust');
    if(ht && C.hero && C.hero.trust){ ht.innerHTML=C.hero.trust.filter(function(t){return t.show!==false;}).map(function(t){
      return '<span><b>✓</b> '+t.text+'</span>'; }).join(''); }

    // RECEIPT lines
    var rl=document.getElementById('receiptLines');
    if(rl && C.hero && C.hero.receipt && C.hero.receipt.lines){
      rl.innerHTML = C.hero.receipt.lines.filter(function(x){return x.show!==false;}).map(function(l){
        return '<div class="r-row"><span>'+l.name+'</span><span>'+l.amt+'</span></div>'; }).join('');
    }

    // SPOTLIGHT
    fillGrid('spotGrid', C.spotlight && C.spotlight.items, function(s){
      return '<div class="prob"><span class="x">'+(s.icon||'✕')+'</span><div><h3>'+s.title+'</h3><p>'+s.text+'</p></div></div>'; });

    // FEATURES
    fillGrid('featGrid', C.features && C.features.items, function(f){
      return '<div class="feat reveal"><div class="ic">'+f.icon+'</div><h3>'+f.title+'</h3><p>'+f.text+'</p></div>'; });

    // VERTICALS
    fillGrid('vertList', C.verticals && C.verticals.show!==false ? C.verticals.items : [], function(v){
      return '<span class="vert"><span class="e">'+v.emoji+'</span> '+v.label+'</span>'; });

    // PRICING
    fillGrid('priceGrid', C.pricing && C.pricing.plans, function(p){
      var lis=(p.features||[]).map(function(f){return '<li><span class="ck">✓</span> '+f+'</li>';}).join('');
      return '<div class="plan'+(p.featured?' featured':'')+' reveal">'+
        (p.featured?'<span class="badge">Most popular</span>':'')+
        '<h3>'+p.name+'</h3><div class="ptag">'+p.tag+'</div>'+
        '<div class="price">'+p.price+'<small>'+(p.unit||'')+'</small></div>'+
        '<div class="once">'+(p.once||'')+'</div>'+
        '<ul>'+lis+'</ul>'+
        '<a href="#buy" class="buy '+(p.buyStyle||'dark')+'">Choose '+p.name+'</a></div>'; });

    // STEPS
    fillGrid('stepGrid', C.steps && C.steps.items, function(s){
      return '<div class="step reveal"><div class="n">'+s.n+'</div><h3>'+s.title+'</h3><p>'+s.text+'</p></div>'; });

    // FAQ
    fillGrid('faqGrid', C.faq && C.faq.items, function(f){
      return '<div class="faq reveal"><h3>'+f.q+'</h3><p>'+f.a+'</p></div>'; });

    // FOOTER cols
    footCol('footCol1', C.footer && C.footer.col1);
    footCol('footCol2', C.footer && C.footer.col2);
    footCol('footCol3', C.footer && C.footer.col3);

    // TRIAL button
    if(C.trial){ var tb=document.getElementById('trialBtn'); if(tb){ tb.href=C.trial.btnHref||'#buy'; tb.textContent=C.trial.btnText||''; } }

    // BUY paypal + messenger
    if(C.buy){
      var pp=document.getElementById('paypalBtn'); if(pp){ pp.href='https://www.paypal.com/myaccount/transfer/homepage/pay?recipient='+encodeURIComponent(C.buy.paypal||''); }
      var mg=document.getElementById('msgrLink'); if(mg){ mg.href=C.buy.msgrLink||'#'; }
    }

    // SECTION toggles
    toggle('#problems', C.spotlight && C.spotlight.show);
    toggle('#features', C.features && C.features.show);
    toggle('#pricing', C.pricing && C.pricing.show);
    toggle('#how', C.steps && C.steps.show);
    toggle('#trial', C.trial && C.trial.show);
    toggle('#faq', C.faq && C.faq.show);
    toggle('#buy', C.buy && C.buy.show);

    initReveal();
  }

  function fillGrid(id, arr, tpl){ var el=document.getElementById(id); if(!el)return; el.innerHTML = arr?arr.filter(function(x){return x.show!==false;}).map(tpl).join(''):''; }
  function footCol(id, arr){ var el=document.getElementById(id); if(!el||!arr)return; el.innerHTML=arr.filter(function(x){return x.show!==false;}).map(function(a){ var ext=(a.href&&a.href.indexOf('http')===0)?' target="_blank" rel="noopener"':''; return '<a href="'+a.href+'"'+ext+'>'+a.label+'</a>'; }).join(''); }
  function toggle(sel, show){ var el=document.querySelector(sel); if(!el)return; if(show===false) el.classList.add('hide'); else el.classList.remove('hide'); }

  function initReveal(){
    var els=[].slice.call(document.querySelectorAll('.reveal'));
    function showAll(){ els.forEach(function(e){e.classList.add('in');}); }
    if(!('IntersectionObserver' in window)){ showAll(); return; }
    var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){io.observe(e);});
    requestAnimationFrame(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});});
    setTimeout(showAll, 3500);
  }

  loadContent(paint);
})();
