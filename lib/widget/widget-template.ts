/**
 * Generates the self-contained widget JS served to third-party sites.
 * The output is a vanilla JS IIFE that uses Shadow DOM for CSS isolation.
 */
export function generateWidgetScript(slug: string, apiBase: string): string {
  const cleanBase = apiBase.replace(/\/$/, '')
  const apiUrl = `${cleanBase}/api/widget/reviews?slug=${slug}&limit=10`

  return `(function(){
  if(window.__trustlyWidgetLoaded)return;
  window.__trustlyWidgetLoaded=true;

  var SLUG="${slug}";
  var API="${apiUrl}";

  /* ── helpers ── */
  function el(tag,attrs,children){
    var e=document.createElement(tag);
    if(attrs)Object.keys(attrs).forEach(function(k){
      if(k==='style'&&typeof attrs[k]==='object'){
        Object.assign(e.style,attrs[k]);
      }else if(k.startsWith('on')){
        e.addEventListener(k.slice(2).toLowerCase(),attrs[k]);
      }else{
        e.setAttribute(k,attrs[k]);
      }
    });
    (children||[]).forEach(function(c){
      if(typeof c==='string'){e.appendChild(document.createTextNode(c));}
      else if(c)e.appendChild(c);
    });
    return e;
  }

  function stars(rating){
    var wrap=el('span',{style:{display:'inline-flex',gap:'2px'}});
    for(var i=0;i<5;i++){
      var s=document.createElement('span');
      s.innerHTML=i<rating
        ?'<svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>'
        :'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>';
      wrap.appendChild(s);
    }
    return wrap;
  }

  /* ── mount ── */
  var host=el('div',{style:{position:'fixed',bottom:'110px',right:'20px',zIndex:'2147483647',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'}});
  document.body.appendChild(host);
  var shadow=host.attachShadow({mode:'closed'});

  /* ── styles ── */
  var css=document.createElement('style');
  css.textContent=\`
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    @keyframes bounceIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
    @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    .tw-btn{
      width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;
      background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
      box-shadow:0 4px 15px rgba(102,126,234,.4);
      display:flex;align-items:center;justify-content:center;
      position:relative;transition:transform .2s,box-shadow .2s;
      animation:bounceIn .5s ease-out 2s both;
    }
    .tw-btn:hover{transform:scale(1.1);box-shadow:0 6px 25px rgba(102,126,234,.55);}
    .tw-badge{
      position:absolute;top:-4px;right:-4px;
      background:linear-gradient(135deg,#f59e0b,#d97706);
      color:#fff;font-size:11px;font-weight:700;
      min-width:24px;height:24px;border-radius:12px;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,.2);padding:0 5px;
    }
    .tw-panel{
      position:absolute;bottom:72px;right:0;
      width:380px;max-height:80vh;
      background:#fff;border-radius:20px;
      box-shadow:0 12px 40px rgba(0,0,0,.15);
      display:flex;flex-direction:column;overflow:hidden;
      animation:slideUp .3s ease-out;
    }
    @media(max-width:440px){
      .tw-panel{width:calc(100vw - 32px);right:-4px;}
    }
    .tw-header{
      padding:20px 20px 16px;
      background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
      color:#fff;position:relative;
    }
    .tw-close{
      position:absolute;top:12px;right:12px;
      background:rgba(255,255,255,.2);border:none;
      width:28px;height:28px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;color:#fff;font-size:18px;line-height:1;
      transition:background .2s;
    }
    .tw-close:hover{background:rgba(255,255,255,.35);}
    .tw-company{font-size:17px;font-weight:700;margin-bottom:2px;}
    .tw-subtitle{font-size:12px;opacity:.85;margin-bottom:8px;}
    .tw-score-row{display:flex;align-items:center;gap:8px;}
    .tw-score-num{font-size:22px;font-weight:800;}
    .tw-review-count{font-size:12px;opacity:.8;margin-left:4px;}
    .tw-body{flex:1;overflow:hidden;position:relative;min-height:180px;}
    .tw-review{
      position:absolute;inset:0;padding:20px;
      display:flex;flex-direction:column;gap:10px;
      opacity:0;transition:opacity .5s;
    }
    .tw-review.active{opacity:1;}
    .tw-author-row{display:flex;align-items:center;gap:10px;}
    .tw-avatar{
      width:40px;height:40px;border-radius:50%;
      background:linear-gradient(135deg,#667eea,#764ba2);
      color:#fff;display:flex;align-items:center;justify-content:center;
      font-weight:700;font-size:14px;flex-shrink:0;
    }
    .tw-author-name{font-weight:600;font-size:14px;color:#1f2937;}
    .tw-author-date{font-size:12px;color:#9ca3af;}
    .tw-text{
      font-size:14px;line-height:1.55;color:#374151;
      display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;
      overflow:hidden;
    }
    .tw-dots{
      display:flex;justify-content:center;gap:6px;padding:8px 0 4px;
    }
    .tw-dot{
      width:7px;height:7px;border-radius:50%;
      background:#d1d5db;border:none;padding:0;cursor:pointer;
      transition:background .2s,transform .2s;
    }
    .tw-dot.active{background:#667eea;transform:scale(1.3);}
    .tw-footer{
      padding:12px 20px 14px;border-top:1px solid #f3f4f6;
      display:flex;flex-direction:column;align-items:center;gap:8px;
    }
    .tw-cta{
      display:inline-flex;align-items:center;gap:6px;
      background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
      color:#fff;text-decoration:none;font-size:13px;font-weight:600;
      padding:10px 20px;border-radius:10px;
      transition:opacity .2s;width:100%;justify-content:center;
    }
    .tw-cta:hover{opacity:.9;}
    .tw-powered{font-size:10px;color:#9ca3af;}
    .tw-powered a{color:#9ca3af;text-decoration:none;}
    .tw-powered a:hover{color:#667eea;}
  \`;
  shadow.appendChild(css);

  /* ── root wrapper ── */
  var root=el('div');
  shadow.appendChild(root);

  /* ── state ── */
  var open=false, current=0, timer=null, paused=false, data=null;

  /* ── button ── */
  var btnEl=el('button',{class:'tw-btn',style:{},onClick:toggle});
  var starIcon=document.createElement('span');
  starIcon.innerHTML='<svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>';
  btnEl.appendChild(starIcon);
  var badge=el('span',{class:'tw-badge'},['...']);
  btnEl.appendChild(badge);
  root.appendChild(btnEl);

  /* ── panel (built after data loads) ── */
  var panelEl=null;
  var reviewEls=[];
  var dotEls=[];

  function toggle(){
    if(!data)return;
    open=!open;
    if(open)showPanel();
    else hidePanel();
  }

  function showPanel(){
    if(!panelEl)buildPanel();
    panelEl.style.display='flex';
    panelEl.style.animation='none';
    void panelEl.offsetHeight;
    panelEl.style.animation='slideUp .3s ease-out';
    startTimer();
  }

  function hidePanel(){
    if(panelEl)panelEl.style.display='none';
    stopTimer();
  }

  function buildPanel(){
    var c=data.company;
    var r=data.reviews;

    /* header */
    var closeBtn=el('button',{class:'tw-close',onClick:function(){open=false;hidePanel();}});
    closeBtn.textContent='\\u2715';

    var companyEl=el('div',{class:'tw-company'},[c.name]);
    var subtitleEl=el('div',{class:'tw-subtitle'},['Avis Google']);
    var scoreRow=el('div',{class:'tw-score-row'},[
      el('span',{class:'tw-score-num'},[c.score.toFixed(1).replace('.',',')]),
      stars(Math.round(c.score)),
      el('span',{class:'tw-review-count'},['('+c.totalReviews+' avis)'])
    ]);
    var header=el('div',{class:'tw-header'},[companyEl,subtitleEl,scoreRow,closeBtn]);

    /* reviews */
    var body=el('div',{class:'tw-body'});
    r.forEach(function(rev,i){
      var card=el('div',{class:'tw-review'+(i===0?' active':'')});
      var avatarEl=el('div',{class:'tw-avatar'},[rev.avatar]);
      var nameEl=el('div',{class:'tw-author-name'},[rev.author]);
      var dateRow=el('div',{style:{display:'flex',alignItems:'center',gap:'6px'}},[
        stars(rev.rating),
        el('span',{class:'tw-author-date'},[rev.date])
      ]);
      var nameBlock=el('div',{},[nameEl,dateRow]);
      card.appendChild(el('div',{class:'tw-author-row'},[avatarEl,nameBlock]));
      var textEl=el('div',{class:'tw-text'},[rev.text]);
      card.appendChild(textEl);
      body.appendChild(card);
      reviewEls.push(card);
    });

    /* dots */
    var dots=el('div',{class:'tw-dots'});
    r.forEach(function(_,i){
      var d=el('button',{class:'tw-dot'+(i===0?' active':''),onClick:function(){goTo(i);}});
      dots.appendChild(d);
      dotEls.push(d);
    });

    /* footer */
    var wallUrl='https://'+SLUG+'.codaya.fr/wall-of-love';
    var cta=el('a',{class:'tw-cta',href:wallUrl,target:'_blank',rel:'noopener noreferrer'},['Voir tous les avis \\u2192']);
    var powered=document.createElement('div');
    powered.className='tw-powered';
    powered.innerHTML='Powered by <a href="https://trustly.codaya.fr" target="_blank" rel="noopener noreferrer">Trustly</a>';

    var footer=el('div',{class:'tw-footer'},[cta,powered]);

    panelEl=el('div',{class:'tw-panel'},[header,body,dots,footer]);
    panelEl.style.display='none';

    panelEl.addEventListener('mouseenter',function(){paused=true;});
    panelEl.addEventListener('mouseleave',function(){paused=false;});

    root.appendChild(panelEl);
  }

  function goTo(idx){
    reviewEls[current].className='tw-review';
    dotEls[current].className='tw-dot';
    current=idx;
    reviewEls[current].className='tw-review active';
    dotEls[current].className='tw-dot active';
    resetTimer();
  }

  function next(){
    if(paused)return;
    goTo((current+1)%reviewEls.length);
  }

  function startTimer(){stopTimer();timer=setInterval(next,5000);}
  function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
  function resetTimer(){stopTimer();startTimer();}

  /* ── fetch data ── */
  fetch(API).then(function(r){return r.json();}).then(function(d){
    data=d;
    badge.textContent=d.company.score.toFixed(1).replace('.',',');
    /* auto-open once on first visit after 5s */
    setTimeout(function(){
      if(!open&&data){open=true;showPanel();}
    },3000);
  }).catch(function(e){
    console.warn('[Trustly Widget] Failed to load reviews',e);
  });

})();`
}
