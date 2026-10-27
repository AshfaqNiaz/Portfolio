let lang="ur";try{lang=localStorage.getItem("lang")||"ur"}catch(e){}
let tab="home",LIST=[],cur=0;
const $=s=>document.querySelector(s),L=o=>o[lang],P=a=>a[lang=="en"?0:1];
function xbtn(k){return(AUTH&&DBON())?`<button class="xd2" data-x="${esc(k)}">🗑 ${P(UI.adm.del)}</button>`:""}
const VW=(arr,caps,t,b)=>arr.map((s,i)=>({s,c:caps[i],k:i<b?t+":"+i:"x:"+XID[t][i-b]})).filter(o=>!HID.has(o.k));
function gal(id,list){LIST[id]=list.map(o=>({s:o.s,c:o.c?L(o.c):""}));
 return `<div class="masonry">${list.map((o,i)=>`<figure data-g="${id}" data-i="${i}"><img loading="lazy" src="${o.s}" alt="">${o.c?`<figcaption>${L(o.c)}</figcaption>`:""}${xbtn(o.k)}</figure>`).join("")}</div>`}
const gz=(id,arr,caps,t,b)=>{const l=VW(arr,caps,t,b);return l.length?gal(id,l):`<p class="sub">${P(UI.empty)}</p>`};
function render(){
 const S=SITE,ur=lang=="ur";
 document.documentElement.lang=lang;document.documentElement.dir=ur?"rtl":"ltr";document.body.className=ur?"ur":"";
 $("#lang").textContent=ur?"English":"اردو";$("#brand").textContent=L(S.name);
 const cu=UI.tabs.find(t=>t[0]==tab)||UI.tabs[0];
 $("#nav").innerHTML=`<button id="ddb">☰ ${ur?cu[2]:cu[1]} ▾</button><div class="ddl" id="ddl">${UI.tabs.map(t=>`<button data-t="${t[0]}" class="${t[0]==tab?"on":""}">${ur?t[2]:t[1]}</button>`).join("")}</div>`;
 const BV=S.books.map((b,i)=>({b,k:b.id?"x:"+b.id:"b:"+i})).filter(o=>!HID.has(o.k));
 const bk=BV.map((o,j)=>{const b=o.b;return `<div class="book"><img loading="lazy" data-g="books" data-i="${j}" src="${b.img||IMG.b[b.i]}" alt="${L(b)}"><div class="bd"><span class="tag">${P(b.c)}</span>${b.y||""}<h3>${L(b)}</h3><p>${L(b.d)}</p>${xbtn(o.k)}</div></div>`}).join("");
 LIST.books=BV.map(o=>({s:o.b.img||IMG.b[o.b.i],c:L(o.b)+(o.b.y?" — "+o.b.y:"")}));
 const cn=(k,im,ti)=>`<div class="card"><div class="im" data-go="${k}"><img src="${im}" alt=""></div><div class="bd"><h3>${ti}</h3></div></div>`;
 const bio=`<div class="two"><div><div class="arch" style="margin-bottom:20px"><img src="${IMG.p[2]}" alt=""></div><div class="facts">${S.facts.map(f=>`<div><span>${P(f)}</span><b>${ur?f[3]:f[2]}</b></div>`).join("")}</div></div><div>${S.intro.map(p=>`<p>${L(p)}</p>`).join("")}<h3 style="color:var(--g);margin-top:22px">${P(UI.h.now)}</h3><p>${L(S.present)}</p><h3 style="color:var(--g)">${P(UI.h.career)}</h3><div class="tl">${S.career.map(c=>`<div><em>${c[0]}</em><br>${L(c[1])}</div>`).join("")}</div></div></div>`;
 const hd=(k,im)=>`${im?`<div class="arch sm"><img src="${im}" alt=""></div>`:""}<h2 class="t">${P(UI.h[k])}</h2><p class="sub">${P(UI.sub[k])}</p>`;
 const C=S.contact,wa="https://wa.me/92"+C.phone.slice(1);
 const ct=`<div class="ct"><div><small>${P(UI.btn.email)}</small><b>${C.email}</b></div><div><small>${P(UI.btn.call)}</small><b dir="ltr">${C.phone.replace(/(\d{4})(\d{7})/,"$1-$2")}</b></div><a href="${wa}" target="_blank" rel="noopener"><small>${P(UI.btn.wa)}</small><b>WhatsApp</b></a><a href="${C.fb}" target="_blank" rel="noopener"><small>${P(UI.btn.fb)}</small><b>${L(S.name)}</b></a><div><small>${P(UI.btn.addr)}</small><b>${L(C.addr)}</b></div></div>`;
 $("#app").innerHTML=`
 <section class="tab ${tab=="home"?"on":""}"><div class="hero pat"><div class="wrap"><div><span class="chip">${L(S.badge)}</span><h1>${L(S.name)}</h1><div class="roles">${L(S.roles)}</div><p>${L(S.tagline)}</p><button class="btn" data-go="bio">${P(UI.btn.read)}</button><button class="btn o" data-go="books">${P(UI.btn.books)}</button></div><div class="arch"><img src="${IMG.p[1]}" alt="${L(S.name)}"></div></div></div><div class="flag"></div>
 <main><div class="stats">${S.stats.map(s=>`<div class="stat"><b>${s[0]}</b><span>${ur?s[3]+" · "+s[4]:s[1]+" · "+s[2]}</span></div>`).join("")}</div>
 <div class="two" style="grid-template-columns:1fr"><div style="max-width:820px;margin:auto;text-align:center"><p>${L(S.intro[0])}</p><p>${L(S.intro[1])}</p></div></div>
 <h2 class="t" style="margin-top:34px">${P(UI.h.explore)}</h2><br><div class="cards">${cn("books",IMG.b[1],P(UI.h.books))}${cn("mags",IMG.g[1],P(UI.h.mags))}${cn("media",IMG.m[3],P(UI.h.media))}${cn("videos",SITE.videos[0].img||IMG.b[11],P(UI.h.videos))}</div></main></section>
 <section class="tab ${tab=="bio"?"on":""}"><main>${hd("bio").replace(/<p.*<\/p>/,"")}${bio}</main></section>
 <section class="tab ${tab=="books"?"on":""}"><main>${hd("books",IMG.p[0])}<div class="shelf">${bk}</div><ul class="more"><h3 style="color:var(--g)">${P(UI.h.other)}</h3>${S.otherBooks.map(o=>`<li>${L(o)}</li>`).join("")}</ul></main></section>
 <section class="tab ${tab=="mags"?"on":""}"><main>${hd("mags",IMG.p[3])}${gz("mags",IMG.g,S.gcap,"g",BASE.g)}</main></section>
 <section class="tab ${tab=="media"?"on":""}"><main>${hd("media",IMG.p[4])}${gz("media",IMG.m,S.mcap,"m",BASE.m)}</main></section>
 <section class="tab ${tab=="videos"?"on":""}"><main>${hd("videos",IMG.p[3])}<div class="vids">${S.videos.map((v,i)=>({v,k:v.id?"x:"+v.id:"v:"+i})).filter(o=>!HID.has(o.k)).map(({v,k})=>`<div class="vc"><a class="vim${v.img?"":" pat"}" href="${v.u}" target="_blank" rel="noopener">${v.img?`<img src="${v.img}" alt="">`:`<span class="vph">Facebook</span>`}<i>▶</i></a><div class="bd"><h3>${L(v.t)}</h3><p>${L(v.d)}</p><a class="btn" href="${v.u}" target="_blank" rel="noopener">${P(UI.btn.watch)}</a>${xbtn(k)}</div></div>`).join("")}</div></main></section>
 <section class="tab ${tab=="self"?"on":""}"><main>${hd("self",IMG.p[3])}${gz("self",IMG.s,SITE.scap,"s",BASE.s)}</main></section>
 <section class="tab ${tab=="hist"?"on":""}"><main>${hd("hist",IMG.p[0])}${gz("hist",IMG.h,SITE.hcap,"h",BASE.h)}</main></section>
 <section class="tab ${tab=="contact"?"on":""}"><main>${hd("contact",IMG.p[0])}${ct}</main></section>
 <section class="tab ${tab=="admin"?"on":""}"><main>${hd("admin",IMG.p[4])}${adminHtml()}</main></section>`;
 $("#fz").textContent=L(S.slogan)+" 🇵🇰";$("#fc").textContent="© "+L(S.name);
 document.title=L(S.name)+" | "+(ur?"Ashfaq Niaz":"اشفاق نیاز");
}
function go(t){tab=t;render();scrollTo(0,0);try{location.hash=t}catch(e){}}
function show(g,i){const x=LIST[g];if(!x)return;cur=i;window.cg=g;$("#li").src=x[i].s;$("#lc").textContent=x[i].c;$("#lb").classList.add("on")}
function step(d){const x=LIST[window.cg];show(window.cg,(cur+d+x.length)%x.length)}
document.addEventListener("click",e=>{if(e.target.closest(".xd2"))return;const t=e.target.closest("[data-t],[data-go],[data-g]");
 if(e.target.id=="lang"){lang=lang=="ur"?"en":"ur";try{localStorage.setItem("lang",lang)}catch(_){}render();return}
 if(!t)return;if(t.dataset.t)go(t.dataset.t);else if(t.dataset.go)go(t.dataset.go);else show(t.dataset.g,+t.dataset.i)});
$("#lx").onclick=()=>$("#lb").classList.remove("on");$("#lp").onclick=()=>step(-1);$("#ln").onclick=()=>step(1);
$("#lb").onclick=e=>{if(e.target.id=="lb")$("#lb").classList.remove("on")};
document.addEventListener("keydown",e=>{if(!$("#lb").classList.contains("on"))return;if(e.key=="Escape")$("#lb").classList.remove("on");if(e.key=="ArrowLeft")step(-1);if(e.key=="ArrowRight")step(1)});
/* ===== ADMIN: login + upload panel (stored in this browser; export file publishes to everyone) ===== */
const OK=["86e71c6294c4eff9a097c27f856125db1f638d5b49d409eb7c51db04ff3cbf67", "2274adcf18703d711b256242f8ae1483ebabefec9a5b01090273c180180474e4"];
const CATS=[["History","تاریخ"],["Saints","اولیاء"],["Naat","نعت"],["Ghazal","غزل"],["Journalism","صحافت"],["Biography","شخصیت"],["Other","دیگر"]];
const BASE={b:SITE.books.length,g:IMG.g.length,m:IMG.m.length,v:SITE.videos.length,s:IMG.s.length,h:IMG.h.length};
let AUTH=false,MSG="",REMOTE=[],LOCAL=[];try{AUTH=sessionStorage.getItem("adm")=="1"}catch(e){}
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let PR=0,DBST="",HID=new Set(),XID={g:[],m:[],s:[],h:[]};
const TK={book:"tBook",mag:"tMag",media:"tMedia",video:"tVid",self:"tSelf",hist:"tHist"},TABOF={book:"books",mag:"mags",media:"media",video:"videos",self:"self",hist:"hist"};
const tabName=id=>{const t=UI.tabs.find(x=>x[0]==id);return t?(lang=="ur"?t[2]:t[1]):id};
function toast(m){const d=document.createElement("div");d.className="toast";d.textContent=m;document.body.appendChild(d);setTimeout(()=>d.remove(),4500)}
const allItems=()=>{const s=new Set(),o=[];[...REMOTE,...LOCAL].forEach(x=>{if(!s.has(x.id)){s.add(x.id);o.push(x)}});
 const by={},gone=new Set();PR=0;o.forEach(x=>(by[x.type]=by[x.type]||[]).push(x));
 Object.values(by).forEach(a=>{if(a.length>MAXPER){a.sort((p,q)=>(p.ts||parseInt(p.id)||0)-(q.ts||parseInt(q.id)||0));a.slice(0,a.length-MAXPER).forEach(x=>{gone.add(x.id);PR++})}});
 return o.filter(x=>!gone.has(x.id))};
async function sha(t){if(!(window.crypto&&crypto.subtle))return"";const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
const DB=()=>new Promise((ok,no)=>{const r=indexedDB.open("ashfaq-admin",1);r.onupgradeneeded=()=>r.result.createObjectStore("k");r.onsuccess=()=>ok(r.result);r.onerror=no});
async function dbGet(){try{const d=await DB();return await new Promise(ok=>{const q=d.transaction("k").objectStore("k").get("items");q.onsuccess=()=>ok(q.result||[]);q.onerror=()=>ok([])})}catch(e){return[]}}
async function dbSet(v){try{const d=await DB();d.transaction("k","readwrite").objectStore("k").put(v,"items")}catch(e){}}
const DBON=()=>!!(SUPA.url&&SUPA.key),H=t=>({apikey:SUPA.key,...((t||!SUPA.key.startsWith("sb_"))?{Authorization:"Bearer "+(t||SUPA.key)}:{})}),FDIR={book:"books",mag:"magazines",media:"media",video:"videos",self:"self-photo",hist:"historical"};
let TOK="";try{TOK=sessionStorage.getItem("tok")||""}catch(e){}
async function dbRows(){DBST="";let all=[],o=0;for(;;){const r=await fetch(SUPA.url+"/rest/v1/items?select=*&order=created_at.asc&limit=1000&offset="+o,{headers:H()});if(!r.ok){DBST="HTTP "+r.status+": "+(await r.text()).slice(0,140);throw 0}const a=await r.json();all=all.concat(a);if(a.length<1000)break;o+=1000}return all}
async function loadRemote(){
 if(DBON()){try{const rows=await dbRows();HID=new Set(rows.filter(x=>x.type=="book"&&x.cat==-1).map(x=>x.url));return rows.filter(x=>!(x.type=="book"&&x.cat==-1)).map(x=>({id:x.id,type:x.type,en:x.en||"",ur:x.ur||"",d:{en:x.d_en||"",ur:x.d_ur||""},y:x.year||"",cat:x.cat||0,u:x.url||"",img:x.img||"",ts:Date.parse(x.created_at)||0}))}catch(e){if(!DBST)DBST=String(e);return[]}}
 try{const r=await fetch("data/extra-content.json",{cache:"no-store"});if(r.ok){const j=await r.json();return j.items||[]}}catch(e){}return[]}
async function dbAdd(x){let img="";
 if(x.img){const b=await(await fetch(x.img)).blob(),p=FDIR[x.type]+"/"+x.id+".jpg",r=await fetch(SUPA.url+"/storage/v1/object/pictures/"+p,{method:"POST",headers:{...H(TOK),"Content-Type":"image/jpeg"},body:b});if(!r.ok)throw{status:r.status};img=SUPA.url+"/storage/v1/object/public/pictures/"+p}
 const r2=await fetch(SUPA.url+"/rest/v1/items",{method:"POST",headers:{...H(TOK),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({type:x.type,en:x.en,ur:x.ur,d_en:x.d.en,d_ur:x.d.ur,year:x.y,cat:x.cat,url:x.u,img})});
 if(!r2.ok)throw{status:r2.status};
 const mine=(await loadRemote()).filter(i=>i.type==x.type).sort((a,b)=>a.ts-b.ts);
 for(const o of mine.slice(0,Math.max(0,mine.length-MAXPER)))await dbDel(o);
 const rest=(await loadRemote()).sort((a,b)=>a.ts-b.ts);
 for(const o of rest.slice(0,Math.max(0,rest.length-MAXALL)))await dbDel(o)}
async function dbHide(k){const r=await fetch(SUPA.url+"/rest/v1/items",{method:"POST",headers:{...H(TOK),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({type:"book",en:"hidden",cat:-1,url:k})});if(!r.ok)throw{status:r.status}}
async function dbDel(o){const k="/object/public/pictures/";
 if(o.img.includes(k))await fetch(SUPA.url+"/storage/v1/object/pictures/"+o.img.split(k)[1],{method:"DELETE",headers:H(TOK)});
 const r=await fetch(SUPA.url+"/rest/v1/items?id=eq."+o.id,{method:"DELETE",headers:H(TOK)});if(!r.ok)throw{status:r.status}}
document.addEventListener("click",e=>{const l=$("#ddl");if(!l)return;if(e.target.closest("#ddb"))l.classList.toggle("on");else if(!e.target.closest("#ddl"))l.classList.remove("on")});
function readImg(f,mx,q){return new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,mx/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);const g=c.getContext("2d");g.fillStyle="#fff";g.fillRect(0,0,c.width,c.height);g.drawImage(im,0,0,c.width,c.height);ok(c.toDataURL("image/jpeg",q))};im.onerror=no;im.src=r.result};r.onerror=no;r.readAsDataURL(f)})}
function merge(){SITE.books.length=BASE.b;IMG.g.length=BASE.g;IMG.m.length=BASE.m;SITE.videos.length=BASE.v;IMG.s.length=BASE.s;IMG.h.length=BASE.h;SITE.scap={};SITE.hcap={};XID={g:[],m:[],s:[],h:[]};
 Object.keys(SITE.gcap).forEach(k=>{if(+k>=BASE.g)delete SITE.gcap[k]});Object.keys(SITE.mcap).forEach(k=>{if(+k>=BASE.m)delete SITE.mcap[k]});
 allItems().forEach(x=>{const d=x.d||{},en=esc(x.en||x.ur),ur=esc(x.ur||x.en),T={en,ur},D={en:esc(d.en||d.ur),ur:esc(d.ur||d.en)};
  if(x.type=="book")SITE.books.push({id:x.id,img:x.img,y:esc(x.y),c:CATS[x.cat||0],en,ur,d:D});
  else if(x.type=="mag"){IMG.g.push(x.img);XID.g.push(x.id);SITE.gcap[IMG.g.length-1]=T}
  else if(x.type=="media"){IMG.m.push(x.img);XID.m.push(x.id);SITE.mcap[IMG.m.length-1]=T}
  else if(x.type=="self"){IMG.s.push(x.img);XID.s.push(x.id);if(en)SITE.scap[IMG.s.length-1]=T}
  else if(x.type=="hist"){IMG.h.push(x.img);XID.h.push(x.id);if(en)SITE.hcap[IMG.h.length-1]=T}
  else if(x.type=="video")SITE.videos.push({id:x.id,u:/^https?:\/\//.test(x.u)?esc(x.u):"#",t:T,d:D,img:x.img||""})})}
function adminHtml(){const A=UI.adm;
 if(!AUTH)return `<div class="adm"><label>${P(A.user)}<input id="au" autocomplete="username"></label><label>${P(A.pass)}<input id="ap" type="password" autocomplete="current-password"></label><button class="btn" id="alog">${P(A.login)}</button><p class="err" id="am">${MSG}</p></div>`;
 const o=(v,k)=>`<option value="${v}">${P(A[k])}</option>`,all=allItems(),st=DBON()?(DBST?`<p class="err">⚠ ${esc(DBST)}</p>`:`<p class="ok">✔ ${P(A.conn)} (${REMOTE.length})</p>`):`<p class="err">⚠ ${P(A.noconn)}</p>`;
 return `<div class="adm"><div class="row"><b>${P(A.welcome)}</b><button id="aout">${P(A.logout)}</button></div>${st}
 <label>${P(A.type)}<select id="at">${o("book","tBook")}${o("mag","tMag")}${o("media","tMedia")}${o("video","tVid")}${o("self","tSelf")}${o("hist","tHist")}</select></label>
 ${lang=="en"?`<label>${P(A.ten)}<input id="aen" dir="ltr"></label>`:`<label>${P(A.tur)}<input id="aur" dir="rtl"></label>`}
 ${lang=="en"?`<label data-for="book video">${P(A.den)}<textarea id="ade" rows="2" dir="ltr"></textarea></label>`:`<label data-for="book video">${P(A.dur)}<textarea id="adu" rows="2" dir="rtl"></textarea></label>`}
 <label data-for="book">${P(A.year)}<input id="ay" dir="ltr"></label><label data-for="book">${P(A.cat)}<select id="ac">${CATS.map((c,i)=>`<option value="${i}">${P(c)}</option>`).join("")}</select></label>
 <label data-for="video">${P(A.link)}<input id="al" dir="ltr" placeholder="https://www.facebook.com/..."></label>
 <label>${P(A.img)}<input type="file" id="af" accept="image/*"></label>
 <button class="btn" id="aadd">${P(A.add)}</button><p class="ok" id="am">${MSG}</p>
 ${PR?`<p class="err">${P(A.pruned)} (${PR})</p>`:""}<h3 style="color:var(--g)">${P(A.list)} (${all.length})</h3>${all.map(x=>`<div class="row"><span>${esc(x.en||x.ur||"🖼")} <small>(${P(A[TK[x.type]]||A.tBook)})</small></span><button data-del="${esc(x.id)}">${P(A.del)}</button></div>`).join("")}
 ${DBON()?`<p style="color:var(--mu);font-size:.9rem">${P(A.dbhelp)}</p>`:`<button class="btn" id="aexp">${P(A.exp)}</button><p style="color:var(--mu);font-size:.9rem">${P(A.help)}</p>`}</div>`}
function sync(){const s=$("#at");if(!s)return;document.querySelectorAll(".adm [data-for]").forEach(l=>l.classList.toggle("hide",!l.dataset.for.split(" ").includes(s.value)))}
const _r=render;render=function(){_r();sync()};
document.addEventListener("change",e=>{if(e.target.id=="at")sync()});
document.addEventListener("click",async e=>{const i=e.target.id,A=UI.adm;
 if(i=="alog"){const u=$("#au").value.trim().toLowerCase().replace(/\s+/g," "),pw=$("#ap").value;let ok=false;
  if(DBON()){if(["ashfaq niaz","اشفاق نیاز"].includes(u)){try{const r=await fetch(SUPA.url+"/auth/v1/token?grant_type=password",{method:"POST",headers:{apikey:SUPA.key,"Content-Type":"application/json"},body:JSON.stringify({email:SUPA.email,password:pw})});if(r.ok){TOK=(await r.json()).access_token;try{sessionStorage.setItem("tok",TOK)}catch(_){}ok=true}}catch(_){}}}
  else{const h=await sha(u+":"+pw);ok=!!h&&OK.includes(h)}
  if(ok){AUTH=true;MSG="";try{sessionStorage.setItem("adm","1")}catch(_){}}else MSG=P(A.bad);if(ok&&DBON()){REMOTE=await loadRemote();merge()}render()}
 else if(i=="aout"){AUTH=false;MSG="";TOK="";try{sessionStorage.removeItem("adm");sessionStorage.removeItem("tok")}catch(_){}render()}
 else if(i=="aadd"){const g=s=>($(s)||{value:""}).value.trim(),t=$("#at").value,en=g("#aen"),ur=g("#aur"),f=$("#af").files[0],u=$("#al").value.trim();
  if((!(en||ur)&&t!="self"&&t!="hist")||(t!="video"&&!f)||(t=="video"&&!/^https?:\/\//.test(u))){$("#am").className="err";$("#am").textContent=P(A.need);return}
  let img="";try{if(f)img=await readImg(f,t=="mag"?1300:t=="book"?700:1000,.74)}catch(_){$("#am").className="err";$("#am").textContent=P(A.need);return}
  const row={id:Date.now()+"-"+Math.random().toString(36).slice(2,7),type:t,en,ur,d:{en:g("#ade"),ur:g("#adu")},y:$("#ay").value.trim(),cat:+$("#ac").value,u,img};
  if(DBON()){try{await dbAdd(row)}catch(er){MSG=P(A.dberr);toast(P(A.dberr));if(er&&(er.status==401||er.status==403)){AUTH=false;TOK="";try{sessionStorage.removeItem("adm");sessionStorage.removeItem("tok")}catch(_){}}render();return}REMOTE=await loadRemote();merge();MSG=P(A.added);render();toast(P(A.toast).replace("#",P(A[TK[t]])).replace("%",tabName(TABOF[t])));return}
  LOCAL.push(row);await dbSet(LOCAL);merge();MSG=P(A.added);render();toast(P(A.toast).replace("#",P(A[TK[t]])).replace("%",tabName(TABOF[t])))}
 else if(e.target.dataset&&e.target.dataset.x){const k=e.target.dataset.x;if(!confirm(P(A.sure)))return;
  try{if(k.startsWith("x:")){const o=REMOTE.find(x=>x.id==k.slice(2));if(o)await dbDel(o)}else await dbHide(k);REMOTE=await loadRemote();toast(P(A.deleted))}catch(er){MSG=P(A.dberr);toast(P(A.dberr))}merge();render()}
 else if(e.target.dataset&&e.target.dataset.del){const d=e.target.dataset.del;
  if(DBON()){const o=REMOTE.find(x=>x.id==d);try{if(o)await dbDel(o);REMOTE=await loadRemote()}catch(er){MSG=P(A.dberr)}merge();render();return}
  REMOTE=REMOTE.filter(x=>x.id!=d);LOCAL=LOCAL.filter(x=>x.id!=d);await dbSet(LOCAL);merge();render()}
 else if(i=="aexp"){if(!window.JSZip){$("#am").className="err";$("#am").textContent=P(A.zerr);return}
  const z=new JSZip(),FD={book:"books",mag:"magazines",media:"media",video:"videos",self:"self-photo",hist:"historical"};
  const items=allItems().map(x=>{const y={...x};if(y.img&&y.img.startsWith("data:")){const p="images/"+(FD[y.type]||"other")+"/"+y.id+".jpg";z.file(p,y.img.split(",")[1],{base64:true});y.img=p}return y});
  z.file("data/extra-content.json",JSON.stringify({items}));
  const a=document.createElement("a");a.href=URL.createObjectURL(await z.generateAsync({type:"blob"}));a.download="update-"+new Date().toISOString().slice(0,10)+".zip";a.click()}
});
(async()=>{REMOTE=await loadRemote();LOCAL=DBON()?[]:await dbGet();merge();render()})();
try{const h=location.hash.slice(1);if(UI.tabs.some(t=>t[0]==h))tab=h}catch(e){}
render();
