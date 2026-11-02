/* Vanguard Wilderness Protection: demo site script */
(function(){
/* ---------- data ---------- */
const ICONS={
 poach:'<path d="M24 4 6 11v12c0 11 8 19 18 22 10-3 18-11 18-22V11z"/><path d="M17 24l5 5 9-10"/>',
 wild:'<path d="M24 25c-6 0-11 6-11 11 0 4 3 6 6 6 2 0 3-1 5-1s3 1 5 1c3 0 6-2 6-6 0-5-5-11-11-11z"/><ellipse cx="13" cy="20" rx="3.5" ry="4.5"/><ellipse cx="20" cy="12" rx="3.5" ry="4.5"/><ellipse cx="28" cy="12" rx="3.5" ry="4.5"/><ellipse cx="35" cy="20" rx="3.5" ry="4.5"/>',
 theft:'<rect x="8" y="20" width="32" height="22" rx="1"/><path d="M15 20v-6a9 9 0 0 1 18 0v6"/><circle cx="24" cy="30" r="3"/><path d="M24 33v4"/>',
 prop:'<path d="M4 40h40M8 40V18M16 40V18M24 40V18M32 40V18M40 40V18M4 24h40M4 32h40"/>',
 tres:'<circle cx="24" cy="24" r="18"/><path d="M11 11l26 26"/><path d="M20 18l-3 12h8l-2 8"/>',
 mon:'<circle cx="16" cy="26" r="8"/><circle cx="34" cy="26" r="8"/><path d="M24 24v-8M16 18V8h4M34 18V8h-4"/>'
};
const SERV=[
 {k:'poach',t:'Anti-Poaching Operations',s:'night',short:'Proactive patrols to identify, prevent and respond to illegal activity.',
  p:'We provide dedicated anti-poaching security services aimed at identifying, preventing and responding to illegal activities that threaten wildlife.',
  l:['Proactive patrols','Identification of suspicious activity','Monitoring of vulnerable areas','Reporting of potential poaching threats','Support for wildlife protection operations'],cap:'Night patrol over the plains'},
 {k:'wild',t:'Wildlife Protection',s:'hero',short:'Safeguarding animals against illegal hunting, theft and other threats.',
  p:'Wildlife is a valuable natural resource that deserves responsible protection. Our services focus on safeguarding animals against illegal hunting, theft and other security threats through observation, monitoring and preventative security measures.',l:[],cap:'Herd at dusk'},
 {k:'theft',t:'Wildlife Theft Prevention',s:'giraffe',short:'Preventing illegal removal of wildlife from private land.',
  p:'Illegal wildlife removal and theft pose serious risks to private wildlife properties and conservation areas. We assist with:',
  l:['Monitoring of vulnerable locations','Identifying suspicious movements and activities','Preventative patrols','Reporting and documentation of incidents'],cap:'Giraffe at first light'},
 {k:'prop',t:'Property & Wilderness Security',s:'perimeter',short:'Perimeter monitoring and patrols for lodges, farms and reserves.',
  p:'Protecting wildlife also means securing the land and facilities in which they live. Our property security services focus on:',
  l:['General property security','Perimeter monitoring','Security patrols','Access awareness and trespassing prevention','Identification and reporting of security concerns'],cap:'Perimeter fence line at night'},
 {k:'tres',t:'Trespassing Prevention',s:'dunes',short:'Identifying and discouraging unauthorised entry onto protected land.',
  p:'Unauthorised access can create security risks for both wildlife and property owners. We provide monitoring and preventative security measures to help identify and discourage unauthorised entry onto protected properties.',l:[],cap:'Open country, watched'},
 {k:'mon',t:'Wildlife Monitoring',s:'tracking',short:'Observation, tracking and reporting of animal movements.',
  p:'Understanding wildlife activity is an important part of effective protection. Our wildlife monitoring activities may include:',
  l:['Wildlife observation','Tracking and identification','Monitoring animal movements','Identifying unusual activity','Reporting relevant observations to management'],cap:'Reading spoor in the sand'}
];
const VALUES=[
 ['Integrity','We operate with honesty, accountability and professionalism.','<path d="M17 3 4 8v8c0 7 6 13 13 15 7-2 13-8 13-15V8z"/>'],
 ['Commitment','We take our responsibility towards wildlife protection seriously.','<path d="M17 30S4 22 4 12a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 10-13 18-13 18z"/>'],
 ['Professionalism','We maintain high standards in our conduct, operations and service delivery.','<path d="M17 4l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z"/>'],
 ['Respect for Wildlife','We recognise the importance of responsible wildlife management and conservation.','<path d="M6 28C6 14 15 6 28 6c0 13-8 22-22 22zM6 28 20 14"/>'],
 ['Vigilance','We believe that awareness, prevention and consistent monitoring are essential to effective protection.','<path d="M2 17s6-10 15-10 15 10 15 10-6 10-15 10S2 17 2 17z"/><circle cx="17" cy="17" r="4"/>']
];
const PROCESS=[
 ['Assess','We visit the property and learn its terrain, wildlife and vulnerabilities.'],
 ['Plan','A security plan matched to size, population, risk and operations.'],
 ['Deploy','Trained rangers and patrols placed where they matter most.'],
 ['Monitor','Consistent observation of wildlife, perimeters and activity.'],
 ['Report','Clear reporting to management and a professional response.']
];
const BADGES=[
 ['Anti-poaching training','<path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6z"/>'],
 ['Ranger training & certification','<circle cx="12" cy="9" r="6"/><path d="M8 14l-2 8 6-3 6 3-2-8"/>'],
 ['Firearm competency','<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5"/>'],
 ['First aid training','<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>'],
 ['Wildlife tracking','<ellipse cx="12" cy="15" rx="5" ry="6"/><circle cx="6" cy="6" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="18" cy="6" r="2"/>'],
 ['Wildlife identification & knowledge','<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'],
 ['Previous security experience','<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3M3 13h18"/>']
];

/* ---------- builders ---------- */
const $=s=>document.querySelector(s);
$('#ticker').innerHTML=[...SERV,...SERV].map(s=>`<span>${s.t}</span>`).join('');
$('#wwd').innerHTML=SERV.map(s=>`<a href="#services"><svg class="ic" viewBox="0 0 48 48">${ICONS[s.k]}</svg><h3>${s.t.replace(' Operations','').replace(' & Wilderness','')}</h3><p>${s.short}</p><span class="more">View service →</span></a>`).join('');
$('#values').innerHTML=VALUES.map(v=>`<div><svg viewBox="0 0 34 34">${v[2]}</svg><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join('');
$('#process').innerHTML=PROCESS.map((p,i)=>`<div><span class="dot">0${i+1}</span><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');
$('#badges').innerHTML=BADGES.map(b=>`<div class="badge"><span class="seal"><svg viewBox="0 0 24 24">${b[1]}</svg></span><b>${b[0]}</b></div>`).join('');
$('#chips').innerHTML=['Anti-poaching','Wildlife protection','Theft prevention','Property security','Trespassing prevention','Wildlife monitoring','Ranger deployment'].map((c,i)=>`<label><input type="checkbox" id="c${i}" ${i===0||i===3?'checked':''}><span>${c}</span></label>`).join('');
$('#svcList').innerHTML=SERV.map((s,i)=>`<article class="svc" data-i="${i}"><span class="n">0${i+1}</span><div class="body"><h3>${s.t}</h3><p>${s.p}</p>${s.l.length?'<ul>'+s.l.map(x=>`<li>${x}</li>`).join('')+'</ul>':''}<div class="plate mplate" data-scene="${s.s}"><div class="cap">${s.cap}</div></div></div></article>`).join('');
$('#svcArch').innerHTML=SERV.map((s,i)=>`<div class="plate" data-scene="${s.s}" style="position:absolute;inset:10px;opacity:${i?0:1}"><div class="cap">${s.cap}</div></div>`).join('');

/* ---------- illustrated scenes ---------- */
function rng(seed){let s=seed%2147483647;return()=>(s=s*16807%2147483647)/2147483647}
function ridge(r,W,H,y,amp,n){const pts=[];for(let i=0;i<=n;i++){pts.push([i*W/n, y-amp*(.5+.5*Math.sin(i*.8+r()*3))-r()*amp*.3])}
  let d=`M0 ${H} L${pts[0][0]} ${pts[0][1]}`;for(let i=1;i<pts.length;i++){const[x0,y0]=pts[i-1],[x1,y1]=pts[i];d+=` Q${x0} ${y0} ${(x0+x1)/2} ${(y0+y1)/2}`}d+=` L${W} ${pts[n][1]} L${W} ${H} Z`;return d}
function grass(r,W,y,n,h,c,op=1){let d='';for(let i=0;i<n;i++){const x=r()*W,hh=h*(.4+r()),b=(r()-.5)*hh*.6;d+=`M${x.toFixed(1)} ${y} q${(b/2).toFixed(1)} ${(-hh/2).toFixed(1)} ${b.toFixed(1)} ${(-hh).toFixed(1)} `}return `<path d="${d}" stroke="${c}" stroke-width="1.6" fill="none" opacity="${op}" stroke-linecap="round"/>`}
function stars(r,W,H,n,c='#F2ECDD'){let s='';for(let i=0;i<n;i++){s+=`<circle cx="${(r()*W).toFixed(0)}" cy="${(r()*H).toFixed(0)}" r="${(r()*1.3+.3).toFixed(2)}" fill="${c}" opacity="${(r()*.7+.2).toFixed(2)}"/>`}return s}
const use=(id,x,y,w,h,fill,flip=false,extra='')=>flip?`<g transform="translate(${x+w} ${y}) scale(-1 1)" ${extra}><use href="#${id}" width="${w}" height="${h}" fill="${fill}" color="${fill}"/></g>`:`<use href="#${id}" x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" color="${fill}" ${extra}/>`;
const L=(depth,inner)=>`<g data-depth="${depth}">${inner}</g>`;
let gid=0;
const S={
 hero(o={}){const r=rng(o.seed||7),W=1600,H=900,id='h'+(gid++);return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1A12"/><stop offset=".42" stop-color="#17311F"/><stop offset=".66" stop-color="#5E5129"/><stop offset=".78" stop-color="#C9903F"/><stop offset=".86" stop-color="#F0C46A"/></linearGradient>
  <radialGradient id="${id}g" cx="${o.sx||1080}" cy="640" r="560" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFE3A0" stop-opacity=".95"/><stop offset=".12" stop-color="#F5C46A" stop-opacity=".6"/><stop offset="1" stop-color="#C9903F" stop-opacity="0"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/>${L(.05,stars(r,W,380,120))}
  <rect width="${W}" height="${H}" fill="url(#${id}g)"/><circle cx="${o.sx||1080}" cy="655" r="70" fill="#FFE7AE"/>
  ${L(.1,`<path d="${ridge(r,W,H,640,40,9)}" fill="#6E5A2C" opacity=".7"/>${use('s-gi',260,560,44,68,'#4A3D1F')}${use('s-gi',318,566,40,62,'#4A3D1F',true)}`)}
  ${L(.2,`<path d="${ridge(r,W,H,690,30,7)}" fill="#3A3219"/>${use('s-ac',(o.hx?160:1290),500,300,240,'#2A2412')}${use('s-ac',60,560,200,160,'#2A2412')}`)}
  ${L(.35,`<path d="M0 760 Q400 735 800 752 T1600 745 L1600 900 L0 900 Z" fill="#14140B"/>
   ${use('s-el',(o.hx||820),560,260,208,'#0E100A')}${use('s-el',(o.hx||820)+230,585,230,184,'#0E100A')}${use('s-el',(o.hx||820)+180,668,110,88,'#0E100A')}${use('s-el',(o.hx||820)+440,612,190,152,'#0E100A',true)}
   ${grass(r,W,770,500,26,'#0E100A')}`)}
  ${L(.5,`<path d="M0 820 Q500 795 1000 815 T1600 805 L1600 900 L0 900 Z" fill="#0A0C07"/>${grass(r,W,830,420,40,'#0A0C07')}`)}</svg>`},
 hero2(){return S.hero({seed:21,sx:420,hx:760})},
 night(){const r=rng(3),W=900,H=1100,id='n'+(gid++);return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050E0B"/><stop offset=".6" stop-color="#0F2A22"/><stop offset="1" stop-color="#244B3E"/></linearGradient>
  <radialGradient id="${id}m" cx="620" cy="260" r="320" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#DCE6D6" stop-opacity=".45"/><stop offset="1" stop-color="#DCE6D6" stop-opacity="0"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/>${stars(r,W,700,220)}<rect width="${W}" height="${H}" fill="url(#${id}m)"/>
  <circle cx="620" cy="260" r="64" fill="#EEEBD9"/><circle cx="600" cy="245" r="10" fill="#D9D6C2"/><circle cx="640" cy="282" r="7" fill="#D9D6C2"/>
  ${L(.1,`<path d="${ridge(r,W,H,780,60,6)}" fill="#163A2F"/>${use('s-ac',520,620,300,240,'#0E2A21')}`)}
  ${L(.25,`<path d="M0 880 C200 840 380 850 520 870 C700 896 800 880 900 860 L900 1100 L0 1100 Z" fill="#0A1E18"/>
   ${use('s-ra',140,640,90,224,'#06120E')}
   <g>${use('s-rh',330,756,300,180,'#9FC1B2')}${use('s-rh',332,760,298,178,'#06120E')}</g>
   <g>${use('s-rh',600,800,170,102,'#9FC1B2',true)}${use('s-rh',600,803,169,101,'#06120E',true)}</g>`)}
  ${L(.4,`<path d="M0 960 Q450 930 900 965 L900 1100 L0 1100 Z" fill="#051310"/>${grass(r,W,975,260,40,'#051310')}`)}</svg>`},
 dunes(){const r=rng(11),W=1600,H=900,id='d'+(gid++);return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E8CB8C"/><stop offset=".6" stop-color="#E7A867"/><stop offset="1" stop-color="#C97B42"/></linearGradient>
  <linearGradient id="${id}a" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C46A33"/><stop offset="1" stop-color="#9E4A22"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/><circle cx="1250" cy="230" r="80" fill="#FFF1CF" opacity=".9"/>
  ${L(.08,`<path d="M0 560 C240 470 420 420 600 500 C760 560 880 470 1060 430 C1240 390 1420 470 1600 520 L1600 900 L0 900Z" fill="#D58A50" opacity=".8"/>`)}
  ${L(.18,`<path d="M-50 900 L-50 640 C200 600 420 460 640 380 C700 360 760 380 800 410 C900 480 1100 560 1700 600 L1700 900Z" fill="url(#${id}a)"/>
   <path d="M640 380 C700 360 760 380 800 410 C900 480 1100 560 1700 600 L1700 900 L900 900 C860 700 760 520 640 380Z" fill="#7A3518" opacity=".75"/>
   ${use('s-ox',600,300,96,103,'#2A140B')}${use('s-ox',700,322,80,86,'#2A140B',true)}`)}
  ${L(.32,`<path d="M0 900 L0 760 C300 700 600 720 900 790 C1100 836 1300 820 1600 760 L1600 900Z" fill="#5E2914"/>`)}</svg>`},
 giraffe(){const r=rng(5),W=1600,H=900,id='g'+(gid++);return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A2D29"/><stop offset=".45" stop-color="#6E5F4A"/><stop offset=".75" stop-color="#E2A873"/><stop offset=".85" stop-color="#F6D49C"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/><circle cx="360" cy="700" r="90" fill="#FFE8B8" opacity=".85"/>
  ${L(.1,`<path d="${ridge(r,W,H,700,36,8)}" fill="#8F6A45" opacity=".6"/>`)}
  ${L(.22,`<path d="${ridge(r,W,H,740,24,6)}" fill="#3F2F1E"/>${use('s-ac',700,420,420,336,'#24190F')}
   ${use('s-gi',1020,330,250,382,'#1E150C')}${use('s-gi',1180,400,200,306,'#1E150C',true)}${use('s-gi',620,560,110,168,'#2E2214')}`)}
  ${L(.4,`<path d="M0 800 Q800 770 1600 800 L1600 900 L0 900Z" fill="#150F08"/>${grass(r,W,805,400,36,'#150F08')}`)}</svg>`},
 perimeter(){const r=rng(17),W=1600,H=900,id='p'+(gid++);let posts='',wires='';const vx=1150,vy=600;
  const P=[];for(let i=0;i<14;i++){const t=Math.pow(i/13,1.7);const x=-60+(vx+60)*t, y=920-(920-vy)*t, h=560*(1-t)+16;P.push([x,y,h,t]);posts+=`<rect x="${x.toFixed(1)}" y="${(y-h).toFixed(1)}" width="${Math.max(2,18*(1-t)).toFixed(1)}" height="${h.toFixed(1)}" fill="#030907"/>`}
  for(let k=1;k<=6;k++){wires+=`<path d="M${P.map(p=>`${p[0].toFixed(1)} ${(p[1]-p[2]*k/6.4).toFixed(1)}`).join(' L')}" stroke="#7FA394" stroke-opacity=".55" stroke-width="1.4" fill="none"/>`}
  return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#040B0A"/><stop offset=".45" stop-color="#11291F"/><stop offset=".68" stop-color="#4C6E5A"/></linearGradient>
  <radialGradient id="${id}m" cx="380" cy="220" r="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#DCE6D6" stop-opacity=".35"/><stop offset="1" stop-color="#DCE6D6" stop-opacity="0"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/>${L(.05,stars(r,W,560,320))}<rect width="${W}" height="${H}" fill="url(#${id}m)"/><circle cx="380" cy="220" r="46" fill="#EEEBD9"/>
  ${L(.12,`<path d="${ridge(r,W,H,612,22,10)}" fill="#0B1D17"/>${use('s-ac',1240,460,220,176,'#071511')}
   <g fill="#F5C46A">${[1300,1318,1334,1352].map((x,i)=>`<rect x="${x}" y="${598-i%2*3}" width="7" height="5" opacity="${.6+i*.1}"/>`).join('')}</g>
   <circle cx="1326" cy="600" r="60" fill="#F5C46A" opacity=".08"/>`)}
  ${L(.3,`<path d="M0 900 L0 660 Q800 610 1600 625 L1600 900Z" fill="#07130F"/>${wires}${posts}${grass(r,W,900,300,50,'#06100C')}`)}</svg>`},
 tracking(){const r=rng(29),W=1200,H=800,id='t'+(gid++);let sand='';for(let i=0;i<900;i++){sand+=`<circle cx="${(r()*W).toFixed(0)}" cy="${(r()*H).toFixed(0)}" r="${(r()*2+.4).toFixed(1)}" fill="${r()>.5?'#9C7A48':'#F1DDB0'}" opacity="${(r()*.5+.2).toFixed(2)}"/>`}
  const rh=(x,y,s,a)=>`<g transform="translate(${x} ${y}) rotate(${a}) scale(${s})" fill="#7E5F35" stroke="#5E4426" stroke-width="2"><path d="M-40 10 C-42 -14 -22 -26 0 -26 C22 -26 42 -14 40 10 C38 34 20 44 0 44 C-20 44 -38 34 -40 10 Z" opacity=".85"/><path d="M-20 -30 C-20 -52 20 -52 20 -30 C10 -24 -10 -24 -20 -30 Z" opacity=".85"/><path d="M-44 -6 C-62 -22 -48 -44 -28 -34 C-30 -24 -36 -14 -44 -6 Z" opacity=".85"/><path d="M44 -6 C62 -22 48 -44 28 -34 C30 -24 36 -14 44 -6 Z" opacity=".85"/></g>`;
  let ruler='<g font-family="IBM Plex Mono, monospace" font-size="16" fill="#2B2012">';for(let i=0;i<=30;i++){const x=300+i*20;ruler+=`<path d="M${x} 560 V${i%10?570:582}" stroke="#2B2012" stroke-width="2"/>`;if(i%10===0)ruler+=`<text x="${x-6}" y="604">${i}</text>`}ruler+='<path d="M300 560 H900" stroke="#2B2012" stroke-width="2"/><text x="914" y="570">cm</text></g>';
  return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><radialGradient id="${id}v" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="#D2B07A"/>${L(.05,sand)}
  ${L(.1,`${rh(420,380,1.4,-12)}${rh(760,300,1.4,-16)}${rh(1000,460,1.15,-10)}
   <g fill="none" stroke="#2B2012" stroke-width="2" stroke-dasharray="6 6"><circle cx="420" cy="380" r="112"/></g>`)}
  ${ruler}<text x="200" y="200" font-family="IBM Plex Mono, monospace" font-size="18" fill="#2B2012" letter-spacing="2">RHINO · 3-TOED SPOOR</text><path d="M330 290 L300 212" stroke="#2B2012" stroke-width="2"/>
  <rect width="${W}" height="${H}" fill="url(#${id}v)"/></svg>`},
 rangers(){const r=rng(41),W=1600,H=900,id='r'+(gid++);return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#132219"/><stop offset=".5" stop-color="#7A6232"/><stop offset=".72" stop-color="#F0C06A"/><stop offset=".8" stop-color="#FFE2A2"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#${id}s)"/><circle cx="1150" cy="690" r="120" fill="#FFF0C6"/>
  ${L(.1,`<path d="${ridge(r,W,H,700,30,8)}" fill="#7C5E2C" opacity=".7"/>${use('s-ac',140,520,260,208,'#3A2C14')}`)}
  ${L(.25,`<path d="M0 900 L0 760 C400 730 900 690 1150 690 C1350 690 1480 720 1600 740 L1600 900Z" fill="#120E07"/>
   ${use('s-ra',1000,510,80,200,'#120E07')}${use('s-ra',1110,494,84,210,'#120E07')}${use('s-ra',1222,514,78,196,'#120E07',true)}`)}
  ${L(.4,grass(r,W,900,300,60,'#0B0904'))}</svg>`},
 command(){const r=rng(51),W=1200,H=700;let topo='';for(let k=0;k<14;k++){const cx=600+Math.sin(k)*30,cy=360+Math.cos(k)*20,rx=60+k*42,ry=40+k*26;topo+=`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${-12+k} ${cx} ${cy})" fill="none" stroke="#C9A24A" stroke-opacity="${.5-k*.025}" stroke-width="1.2"/>`}
  let grid='';for(let x=0;x<=W;x+=100)grid+=`<path d="M${x} 0V${H}" stroke="#F2ECDD" stroke-opacity=".06"/>`;for(let y=0;y<=H;y+=100)grid+=`<path d="M0 ${y}H${W}" stroke="#F2ECDD" stroke-opacity=".06"/>`;
  const sec=[['SECTOR A',240,180],['SECTOR B',820,160],['SECTOR C',900,520],['SECTOR D',260,540]].map(s=>`<text x="${s[1]}" y="${s[2]}" font-family="IBM Plex Mono, monospace" font-size="16" letter-spacing="3" fill="#E6C979" opacity=".8">${s[0]}</text>`).join('');
  return `<svg class="scene" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><rect width="${W}" height="${H}" fill="#102118"/>${grid}${L(.08,topo)}
   <path d="M150 600 C300 420 420 300 600 360 C760 410 840 260 1050 200" fill="none" stroke="#E6C979" stroke-width="2.4" stroke-dasharray="10 8"/>
   ${[[150,600],[600,360],[1050,200]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="#102118" stroke="#E6C979" stroke-width="2.4"/>`).join('')}${sec}
   <text x="40" y="60" font-family="IBM Plex Mono, monospace" font-size="15" letter-spacing="3" fill="#F2ECDD" opacity=".6">PATROL ROUTE · ILLUSTRATIVE</text></svg>`}
};
document.querySelectorAll('[data-scene]').forEach(el=>{const f=S[el.dataset.scene];if(f)el.insertAdjacentHTML('afterbegin',f())});

/* ---------- router ---------- */
const PAGES=['home','about','services','team','contact'];let cur=null;
function show(name,anim){if(!PAGES.includes(name))name='home';if(name===cur)return;
  const go=()=>{document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='p-'+name));
   document.querySelectorAll('.links a,.drawer a').forEach(a=>{if(a.getAttribute('href')==='#'+name)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
   window.scrollTo(0,0);cur=name;onScroll()};
  if(anim&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const v=$('#veil');v.classList.remove('run');void v.offsetWidth;v.classList.add('run');setTimeout(go,450)}else go()}
addEventListener('hashchange',()=>{closeD();show(location.hash.slice(1),true)});

/* ---------- nav / drawer ---------- */
const D=$('#drawer');function closeD(){D.classList.remove('open');D.setAttribute('aria-hidden','true')}
$('#burger').onclick=()=>{D.classList.add('open');D.setAttribute('aria-hidden','false')};$('#dclose').onclick=closeD;
D.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(a.getAttribute('href')==='#'+cur)closeD()}));

/* ---------- scroll: nav state, parallax, service image ---------- */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function onScroll(){const y=scrollY;$('#nav').classList.toggle('solid',y>40);
  if(!reduce)document.querySelectorAll('.page.active [data-parallax]').forEach(pl=>{const rc=pl.getBoundingClientRect();if(rc.bottom<0||rc.top>innerHeight)return;const off=-rc.top;pl.querySelectorAll('[data-depth]').forEach(g=>g.setAttribute('transform',`translate(0 ${(off*parseFloat(g.dataset.depth)).toFixed(1)})`))});
  if(cur==='services'){const items=[...document.querySelectorAll('.svc')];let a=0;items.forEach((it,i)=>{if(it.getBoundingClientRect().top<innerHeight*.5)a=i});
   document.querySelectorAll('#svcArch .plate').forEach((p,i)=>p.style.opacity=i===a?1:0)}}
addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ---------- form ---------- */
const F=$('#form');
F.addEventListener('submit',e=>{e.preventDefault();let ok=true;
  const req=[['f-name','Enter your name.'],['f-email','Enter an email address so we can reply.'],['f-type','Choose a property type.'],['f-region','Choose a region.']];
  req.forEach(([id,msg])=>{const el=$('#'+id),f=el.closest('.field');let bad=!el.value.trim();if(id==='f-email'&&!bad&&!/^\S+@\S+\.\S+$/.test(el.value))bad=true,msg='Check the email address, for example name@farm.com.na.';f.classList.toggle('bad',bad);f.querySelector('.err').textContent=bad?msg:'';if(bad)ok=false});
  const c=$('#f-consent');$('#consentErr').textContent=c.checked?'':' Tick the box to continue.';if(!c.checked)ok=false;
  if(ok){$('#sent').hidden=false}else{const first=F.querySelector('.bad input,.bad select');first&&first.focus()}});
$('#again').onclick=()=>{F.reset();$('#sent').hidden=true};
show(location.hash.slice(1)||'home',false);
})();
