var translations = {"en": {"explore": "Explore Resources", "quick": "Free counselling \u00b7 Anonymous chat \u00b7 Talk to Counsellor", "stats": ["1 in 7: Adolescents worldwide experience a mental disorder (WHO)", "~20%: Indian students report symptoms of anxiety/depression (NIMHANS)", "50%+: Would use anonymous support if available", "35%: Increase in reported stress post-pandemic (UNESCO)", "40%: Students reporting sleep disturbances during exams", "60%: Prefer digital/anonymous first contact for mental health support"], "mediaTitle": "Media Resources", "galleryTitle": "Relaxing Images", "helplinesTitle": "Helplines"}, "hi": {"explore": "\u0938\u0902\u0938\u093e\u0927\u0928 \u090f\u0915\u094d\u0938\u092a\u094d\u0932\u094b\u0930 \u0915\u0930\u0947\u0902", "quick": "\u092e\u0941\u092b\u094d\u0924 \u0915\u093e\u0909\u0902\u0938\u0932\u093f\u0902\u0917 \u00b7 \u0917\u0941\u092e\u0928\u093e\u092e \u091a\u0948\u091f \u00b7 \u0938\u0947\u0932\u094d\u092b-\u0906\u0915\u0932\u0928", "stats": ["1 \u092e\u0947\u0902 7: \u0935\u093f\u0936\u094d\u0935\u0935\u094d\u092f\u093e\u092a\u0940 \u0915\u093f\u0936\u094b\u0930 \u092e\u0928\u094b\u0935\u0948\u091c\u094d\u091e\u093e\u0928\u093f\u0915 \u0935\u093f\u0915\u093e\u0930 \u0915\u093e \u0905\u0928\u0941\u092d\u0935 (WHO)", "~20%: \u092d\u093e\u0930\u0924\u0940\u092f \u091b\u093e\u0924\u094d\u0930\u094b\u0902 \u092e\u0947\u0902 \u091a\u093f\u0902\u0924\u093e/\u0921\u093f\u092a\u094d\u0930\u0947\u0936\u0928 \u0915\u0947 \u0932\u0915\u094d\u0937\u0923 (NIMHANS)", "50%+: \u0909\u092a\u0932\u092c\u094d\u0927 \u0939\u094b\u0928\u0947 \u092a\u0930 \u0917\u0941\u092e\u0928\u093e\u092e \u0938\u092e\u0930\u094d\u0925\u0928 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902\u0917\u0947", "35%: \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u0915\u0947 \u092c\u093e\u0926 \u0924\u0928\u093e\u0935 \u092e\u0947\u0902 \u0935\u0943\u0926\u094d\u0927\u093f (UNESCO)", "40%: \u092a\u0930\u0940\u0915\u094d\u0937\u093e\u0913\u0902 \u0915\u0947 \u0926\u094c\u0930\u093e\u0928 \u0928\u0940\u0902\u0926 \u092e\u0947\u0902 \u0916\u0932\u0932", "60%: \u0921\u093f\u091c\u093f\u091f\u0932/\u0917\u0941\u092e\u0928\u093e\u092e \u092a\u094d\u0930\u0925\u092e \u0938\u0902\u092a\u0930\u094d\u0915 \u092a\u0938\u0902\u0926 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902"], "mediaTitle": "\u092e\u0940\u0921\u093f\u092f\u093e \u0938\u0902\u0938\u093e\u0927\u0928", "galleryTitle": "\u0906\u0930\u093e\u092e\u0926\u093e\u092f\u0915 \u091a\u093f\u0924\u094d\u0930", "helplinesTitle": "\u0939\u0947\u0932\u094d\u092a\u0932\u093e\u0907\u0928"}};

document.addEventListener('DOMContentLoaded', function(){ populateInitial(); setupLangTheme(); setupSearch(); setupChat(); setupProfile(); setupFadeIn(); buildArticles(); setupRipples(); setupPageFade(); });

function populateInitial(){
  var q = document.getElementById('quoteTrack');
  q.textContent = '🌱 You are not alone • 💡 Small steps matter • 💪 Keep going - breathe • 🌤️ Every sunrise brings new hope • 🧠 Your feelings are valid • 👣 One gentle step at a time • 🌿 Pause. Inhale 4 • Hold 4 • Exhale 6 • 💚 Ask for help when needed • ✨ Progress over perfection • 🤝 We grow stronger together • 📖 Your story is still being written';

  var media = document.getElementById('mediaGrid');
  var mediaList = [
    {title:'5-min Guided Breath', url:'https://www.youtube.com/watch?v=VUjiXcfKBn8'},
    {title:'Grounding Exercise', url:'https://www.youtube.com/watch?v=inpok4MKVLM'},
    {title:'Sleep Relaxation', url:'https://www.youtube.com/watch?v=1ZYbU82GVz4'},
    {title:'Calm Nature Scenes', url:'https://www.youtube.com/watch?v=OdIJ2x3nxzQ'},
    {title:'Focus Music Playlist', url:'https://www.youtube.com/watch?v=5qap5aO4i9A'}
  ];
  mediaList.forEach(function(m){ var btn=document.createElement('button'); btn.className='media-btn'; btn.textContent=m.title; btn.onclick=function(){ window.open(m.url,'_blank'); }; media.appendChild(btn); });

  var gallery = document.getElementById('galleryWrap');
  // Build captions for the first six tiles
  var captions = [
    'Breathe with nature',
    'Stress relief hacks',
    'Why mental health matters',
    'Small steps, big change',
    'Mindful sunrise',
    'Grounding in green'
  ];
  // Prefer user provided images, then web nature fallbacks, then local SVGs
  var userImgs = [
    'images/relaxing/user_1.jpg','images/relaxing/user_2.jpg','images/relaxing/user_3.jpg','images/relaxing/user_4.jpg',
    'images/relaxing/user_5.jpg','images/relaxing/user_6.jpg'
  ];
  var webFallbacks = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'
  ];
  var defaults = ["relax_1.svg","relax_2.svg","relax_3.svg","relax_4.svg"].map(function(n){return 'images/relaxing/'+n;});
  var list = userImgs.concat(webFallbacks).concat(defaults);
  var fallbackPool = webFallbacks.concat(defaults);
  list.slice(0,8).forEach(function(src,idx){
    var fig=document.createElement('figure'); var img=document.createElement('img'); img.src=src; img.alt='relaxing';
    img.onerror=function(){ var next = fallbackPool[idx % fallbackPool.length]; if(img.src!==next){ img.src=next; } };
    fig.appendChild(img);
    if(idx<captions.length){ var cap=document.createElement('figcaption'); cap.textContent=captions[idx]; fig.appendChild(cap); }
    gallery.appendChild(fig);
  });

  var hel = document.getElementById('helplineBox');
  var helplines = [
    {name:'KIRAN Mental Health Helpline', number:'1800-599-0019', meta:'24x7'},
    {name:'NIMHANS', number:'080-46110007', meta:'9am-6pm'},
    {name:'Vandrevala Foundation', number:'9999666555', meta:'24x7'},
    {name:'AASRA', number:'+91-9820466726', meta:'24x7'}
  ];
  var grid=document.createElement('div'); grid.className='helpline-grid';
  helplines.forEach(function(h){
    var d=document.createElement('div'); d.className='helpline-card';
    d.innerHTML='<div><div><strong>'+h.name+'</strong></div><div class="meta">'+h.meta+'</div><div>'+h.number+'</div></div>';
    var b=document.createElement('button'); b.className='copy-btn'; b.textContent='Copy'; b.addEventListener('click', function(){ navigator.clipboard && navigator.clipboard.writeText(h.number); b.textContent='Copied'; setTimeout(function(){ b.textContent='Copy'; },1200); });
    d.appendChild(b); grid.appendChild(d);
  });
  hel.innerHTML=''; hel.appendChild(grid);

  var stats = document.querySelector('#stats .cards');
  var statList = translations['en'].stats.concat(["3x: Higher help‑seeking when peers normalize talking about feelings (JAMA Pediatrics)", "70%: Report improved mood after 10‑min guided breathing (Mindfulness trials)"]); 
  var statCards = stats.querySelectorAll('.card');
  statCards.forEach(function(c,i){ c.querySelector('h3').innerText = statList[i].split(':')[0]; c.querySelector('p').innerText = statList[i].split(':').slice(1).join(':').trim(); });
}

function setupLangTheme(){
  var langBtn = document.getElementById('langBtn');
  var themeBtn = document.getElementById('themeBtn');
  var lang = localStorage.getItem('lang') || 'en';
  function applyLang(){
    langBtn.textContent = lang.toUpperCase();
    var t = translations[lang];
    document.getElementById('exploreBtn').textContent = t.explore;
    document.querySelector('.subtitle').textContent = t.quick;
    var statCards = document.querySelectorAll('#stats .card');
    statCards.forEach(function(c,i){ var s=(translations[lang].stats[i]||'').split(':'); c.querySelector('h3').innerText = s[0]||''; c.querySelector('p').innerText = s.slice(1).join(':').trim(); });
    document.querySelector('#media h2').innerText = t.mediaTitle;
    document.querySelector('#gallery h2').innerText = t.galleryTitle;
    document.querySelector('#helplines h2').innerText = t.helplinesTitle;
    document.getElementById('faqTitle').innerText = lang==='en'?'FAQ':'अक्सर पूछे जाने वाले प्रश्न';
    document.getElementById('contactTitle').innerText = lang==='en'?'Contact Us':'संपर्क करें';
    // Rebuild FAQ in selected language only
    buildFAQ(lang);
    localStorage.setItem('lang', lang);
    if(window.applyLang) window.applyLang(lang);
  }
  applyLang();
  langBtn.addEventListener('click', function(){ lang = lang==='en'?'hi':'en'; applyLang(); });

  var theme = localStorage.getItem('theme') || 'light';
  function setTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); themeBtn.textContent = t==='dark'?'☀️':'🌙'; }
  setTheme(theme==='dark'?'dark':'light');
  themeBtn.addEventListener('click', function(){ setTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'); });
}

function setupSearch(){
  var suggestions = ['Meditation','Relaxing BGM','Videos','Relaxing Images','Helplines','Contact','About Us','Explore'];
  var input = document.getElementById('searchInput');
  var sugBox = document.getElementById('suggestions');
  input.addEventListener('input', function(){
    var q = input.value.trim().toLowerCase();
    if(!q){ sugBox.style.display='none'; return; }
    sugBox.innerHTML='';
    var matches = suggestions.filter(function(s){ return s.toLowerCase().includes(q); }).slice(0,6);
    matches.forEach(function(m){ var btn=document.createElement('button'); btn.textContent=m; btn.onclick=function(){ input.value=m; sugBox.style.display='none'; handleSuggestionClick(m); }; sugBox.appendChild(btn); });
    sugBox.style.display = matches.length? 'block':'none';
  });
  input.addEventListener('focus', function(){ if(input.value) sugBox.style.display='block'; });
  document.addEventListener('click', function(e){ if(!e.target.closest('.search-wrap')) sugBox.style.display='none'; });
}

function handleSuggestionClick(text){
  var map = {'meditation':'#explore','relaxing bgm':'#explore','videos':'#media','relaxing images':'#gallery','helplines':'#helplines','contact':'contact.html','about us':'about.html','explore':'#explore'};
  var key = text.toLowerCase();
  if(map[key]){
    if(map[key].startsWith('#')) document.querySelector(map[key]).scrollIntoView({behavior:'smooth'});
    else window.location.href = map[key];
  }
}

function setupProfile(){
  var p = document.getElementById('profileBtn');
  var menu = document.getElementById('profileMenu');
  p.addEventListener('click', function(){ menu.style.display = menu.style.display==='block'?'none':'block'; });
  document.addEventListener('click', function(e){ if(!e.target.closest('#profileBtn') && !e.target.closest('#profileMenu')) menu.style.display='none'; });
  // Enhance settings menu
  var settingsBtn = Array.from(menu.querySelectorAll('.btn')).find(function(b){ return (b.textContent||'').toLowerCase().includes('settings'); });
  if(settingsBtn && !document.getElementById('settingsPanel')){
    var panel=document.createElement('div'); panel.id='settingsPanel'; panel.style.marginTop='8px'; panel.innerHTML = '\n      <div class="card" style="cursor:auto">\n        <h3 style="margin-top:0">Settings</h3>\n        <label><input type="checkbox" id="animToggle" checked> Smooth animations</label><br>\n        <label><input type="checkbox" id="reduceMotion"> Reduce motion</label><br>\n        <label>Theme: <select id="themeSelect"><option value="light">Light</option><option value="dark">Dark</option></select></label>\n      </div>\n    ';
    menu.appendChild(panel);
    var themeSel=panel.querySelector('#themeSelect'); themeSel.value=(localStorage.getItem('theme')||'light');
    themeSel.addEventListener('change',function(){ document.documentElement.setAttribute('data-theme', themeSel.value); localStorage.setItem('theme', themeSel.value); });
    panel.querySelector('#reduceMotion').addEventListener('change',function(e){ document.documentElement.style.setProperty('--motion', e.target.checked?'0':'1'); });
  }
}

document.addEventListener('click', function(e){ if(e.target && e.target.id==='exploreBtn') window.location.href='resources.html'; });

// Make Explore cards open relevant content
document.addEventListener('click', function(e){ var card=e.target.closest('#explore .card'); if(!card) return; var t=(card.querySelector('h3')||{}).innerText||''; t=t.toLowerCase(); if(t.includes('meditation')){ window.location.href='resources.html#meditation'; } else if(t.includes('bgm')){ window.location.href='resources.html#audio'; } else if(t.includes('videos')){ window.location.href='resources.html#videos'; } else if(t.includes('images')){ document.querySelector('#gallery').scrollIntoView({behavior:'smooth'}); }
});

function setupChat(){
  var chatBtn = document.getElementById('chatButton');
  var chatWindow = document.getElementById('chatWindow');
  var closeChat = document.getElementById('closeChat');
  var chatBody = document.getElementById('chatBody');
  var chatInput = document.getElementById('chatInput');
  var sendBtn = document.getElementById('sendBtn');
  var lang = localStorage.getItem('lang') || 'en';
  chatBtn.addEventListener('click', function(){
    var open = chatWindow.style.display!=='none';
    if(open){ chatWindow.style.opacity='0'; chatWindow.style.transform='scale(0.95)'; setTimeout(function(){ chatWindow.style.display='none'; },180); }
    else{ chatWindow.style.display='flex'; chatWindow.style.opacity='1'; chatWindow.style.transform='scale(1)'; }
  });
  closeChat.addEventListener('click', function(){ chatWindow.style.display='none'; });
  function append(who, text){ var d = document.createElement('div'); d.style.margin='8px 0'; d.innerHTML = '<strong>'+who+':</strong><div style="margin-top:6px">'+text+'</div>'; chatBody.appendChild(d); chatBody.scrollTop = chatBody.scrollHeight; }
  async function send(){ var txt = chatInput.value.trim(); if(!txt) return; append('You', txt); chatInput.value=''; append('Mentora','<em>Thinking...</em>'); try{ var res = await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({message:txt, lang})}); var j = await res.json(); chatBody.removeChild(chatBody.lastChild); append('Mentora', j.text || 'Sorry, try again.'); }catch(err){ chatBody.removeChild(chatBody.lastChild); append('Mentora','Offline tip: Try deep breathing: inhale 4s, hold 4s, exhale 6s.'); } }
  sendBtn.addEventListener('click', send); chatInput.addEventListener('keypress',function(e){ if(e.key==='Enter') send(); });
  append('Mentora','Hi - I am Mentora. Try prompts: "I feel stressed", "Motivate me", "Help me sleep", "Study plan for exams", "Grounding exercise", "How to talk to a friend", or type "helpline".');
  window.applyLang = function(l){ lang = l; };
}

function setupFadeIn(){
  var io = new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting) en.target.classList.add('visible'); else en.target.classList.remove('visible'); }); },{threshold:0.12});
  document.querySelectorAll('.fade-in').forEach(function(el){ io.observe(el); });
}

function setupRipples(){
  document.querySelectorAll('button, .btn, .media-btn, .card').forEach(function(el){
    if(!el.classList.contains('ripple-wrap')) el.classList.add('ripple-wrap');
    el.addEventListener('click', function(e){
      var circle=document.createElement('span'); circle.className='ripple';
      var rect=el.getBoundingClientRect(); var size=Math.max(rect.width,rect.height); circle.style.width=circle.style.height=size+'px';
      circle.style.left=(e.clientX-rect.left-size/2)+'px'; circle.style.top=(e.clientY-rect.top-size/2)+'px';
      el.appendChild(circle); setTimeout(function(){ circle.remove(); },600);
    });
  });
}

function setupPageFade(){
  document.body.classList.add('page-fade-enter');
  requestAnimationFrame(function(){ document.body.classList.add('page-fade-enter-active'); });
  document.querySelectorAll('a[href]')
    .forEach(function(a){ a.addEventListener('click', function(e){ var href=a.getAttribute('href'); if(href && !href.startsWith('#') && !a.target){ e.preventDefault(); document.body.style.opacity='0'; setTimeout(function(){ window.location.href=href; },200); } }); });
}

function buildFAQ(lang){
  var wrap=document.getElementById('faqWrap'); if(!wrap) return; wrap.innerHTML='';
  var listEN=[
    {q:'What is Mentora?', a:'Mentora is a student‑first mental health platform offering self‑help guides, helplines, media resources and an optional chat assistant.'},
    {q:'Is it free?', a:'Core resources are free and open. We plan to keep helpline information and self‑help guides always free.'},
    {q:'Is this a substitute for therapy?', a:'No. We provide education and signposting. For emergencies call official helplines or local services.'},
    {q:'How do you protect privacy?', a:'We avoid collecting personal data on the homepage. Feedback is anonymous. See our Privacy Policy.'},
    {q:'How can I feel better right now?', a:'Try box‑breathing (4‑4‑6), grounding 5‑4‑3‑2‑1, a short walk, drink water, and speak to a supportive person.'},
    {q:'Who is behind Mentora?', a:'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px">'+
        ['Nitin Pathak','Chaitanya Arora','Ankit Kr. Giri','Alankrit Gupta','Umang Singhal','Himani Bhatnagar']
          .map(function(n){return '<div class="card" style="min-height:auto"><strong>'+n+'</strong></div>';}).join('')+
      '</div>'},
    {q:'How can I contact you?', a:'Email us at mentora24x7@gmail.com.'}
  ];
  var listHI=[
    {q:'मेंटोरा क्या है?', a:'मेंटोरा छात्रों के लिए मानसिक स्वास्थ्य प्लेटफ़ॉर्म है जो स्व‑सहायता गाइड, हेल्पलाइन, मीडिया संसाधन और वैकल्पिक चैट सहायक प्रदान करता है।'},
    {q:'क्या यह मुफ्त है?', a:'मुख्य संसाधन निःशुल्क और खुले हैं। हेल्पलाइन जानकारी और गाइड्स हमेशा मुफ्त रखने की योजना है।'},
    {q:'क्या यह थेरेपी का विकल्प है?', a:'नहीं। हम शिक्षा और मार्गदर्शन देते हैं। आपातकाल में आधिकारिक हेल्पलाइन या स्थानीय सेवाओं को कॉल करें।'},
    {q:'गोपनीयता कैसे सुरक्षित रहती है?', a:'हम होमपेज पर व्यक्तिगत डेटा संग्रह सीमित रखते हैं। प्रतिक्रिया गुमनाम रहती है।'},
    {q:'अभी बेहतर महसूस कैसे करें?', a:'बॉक्स‑ब्रीदिंग (4‑4‑6), 5‑4‑3‑2‑1 ग्राउंडिंग, थोड़ी सैर, पानी पिएँ और सहायक व्यक्ति से बात करें।'},
    {q:'मेंटोरा किसने बनाया?', a:'टीम: Nitin Pathak, Chaitanya Arora, Ankit Kr. Giri, Alankrit Gupta, Umang Singhal, Himani Bhatnagar.'},
    {q:'कैसे संपर्क करें?', a:'हमें ईमेल करें: mentora24x7@gmail.com.'}
  ];
  (lang==='hi'?listHI:listEN).forEach(function(it){ var d=document.createElement('div'); d.className='card'; d.innerHTML='<h3>'+it.q+'</h3><p>'+it.a+'</p>'; wrap.appendChild(d); });
}

function buildArticles(){
  var wrap=document.getElementById('articlesWrap'); if(!wrap) return;
  var articles=[
    {title:'Understanding Anxiety in Students', summary:'Why it happens, common signs, and gentle ways to cope.', link:'https://www.nimh.nih.gov/health/topics/anxiety-disorders', img:'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=400&auto=format&fit=crop'},
    {title:'Sleep and Mental Health', summary:'How sleep affects mood and concentration, plus quick fixes.', link:'https://www.cdc.gov/sleep/index.html', img:'https://images.unsplash.com/photo-1500111709600-7761aa8216d8?q=80&w=400&auto=format&fit=crop'},
    {title:'How to Ground Yourself in 60 Seconds', summary:'A simple 5‑4‑3‑2‑1 technique to calm your body.', link:'https://www.healthline.com/health/grounding-techniques', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop'},
    {title:'Talk to a Friend About Feelings', summary:'Practical tips to start a supportive conversation.', link:'https://www.mind.org.uk/information-support/tips-for-everyday-living/', img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop'},
    {title:'Study Stress: Pomodoro and Task Chunking', summary:'Beat procrastination with small, timed focus blocks.', link:'https://www.schooloflife.com/article/how-to-stop-procrastinating/', img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop'}
  ];
  wrap.innerHTML='';
  articles.forEach(function(a){ var d=document.createElement('div'); d.className='card article-card'; d.innerHTML='<img src="'+a.img+'" alt="article"><div style="flex:1"><h3>'+a.title+'</h3><p>'+a.summary+'</p><button class="media-btn" onclick="window.open(\''+a.link+'\',\'_blank\')">Read</button></div>'; wrap.appendChild(d); });
}
