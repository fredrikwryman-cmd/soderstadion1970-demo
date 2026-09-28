import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.-iFofLld.js";import{r as Se}from"./index.DuBhfsGl.js";import{a as $e,f as Re}from"./money.DJkdqdQI.js";var we=Se();const ue="http://localhost:4000".replace(/\/+$/,"");function M(a){return a.ok===!1&&a.status===401}function q(a,...t){for(const s of t){const n=a[s];if(typeof n=="string"&&n.trim()!=="")return n}}function Te(a){if(!a||typeof a!="object")return;const t=a,s=t.tillatnaOvergangar??t.tillatna??t.allowedTransitions??t.allowed??t.transitions;if(!Array.isArray(s)||s.length===0)return;const n=s.filter(m=>typeof m=="string"&&m.trim()!=="");return n.length>0?n:void 0}function Fe(a){const t=a.headers.get("retry-after");if(!t)return;const s=Number(t.trim());if(Number.isFinite(s)&&s>=0)return Math.ceil(s);const n=Date.parse(t);if(!Number.isNaN(n)){const m=Math.ceil((n-Date.now())/1e3);return m>0?m:0}}function be(a){return a===400?"Uppgifterna gick inte att godta. Kontrollera fälten och försök igen.":a===401?"Du är inte inloggad längre. Logga in igen.":a===403?"Ditt konto saknar behörighet för den här åtgärden.":a===404?"Posten hittades inte. Den kan ha tagits bort.":a===409?"Ändringen krockade med postens nuvarande läge. Läs in listan på nytt.":a===429?"För många försök på kort tid. Vänta en stund och försök igen.":a>=500?"Något gick fel hos oss. Ändringen kan ha uteblivit — läs in på nytt och kontrollera.":"Något gick fel. Försök igen."}async function E(a,{metod:t="GET",kropp:s}={}){let n;try{n=await fetch(`${ue}${a}`,{method:t,credentials:"include",headers:{accept:"application/json",...s!==void 0?{"content-type":"application/json"}:{}},body:s!==void 0?JSON.stringify(s):void 0})}catch{return{ok:!1,kod:"natverksfel",meddelande:"Vi når inte servern just nu. Kontrollera uppkopplingen och försök igen."}}const m=await n.text().catch(()=>"");let o;if(m.trim()!=="")try{o=JSON.parse(m)}catch{if(n.ok)return{ok:!1,kod:"ogiltigt_svar",meddelande:"Vi fick ett svar som inte gick att tolka. Försök igen.",status:n.status};o=void 0}if(!n.ok){const i=o&&typeof o=="object"?o:{},d=i.error&&typeof i.error=="object"?i.error:{};return{ok:!1,status:n.status,kod:q(i,"kod","code","fel")??q(d,"code","kod")??`http_${n.status}`,meddelande:q(i,"meddelande","message","detalj","detail")??q(d,"message","meddelande")??be(n.status),tillatnaOvergangar:Te(o),retryEfterSekunder:n.status===429?Fe(n):void 0}}return{ok:!0,data:o,status:n.status}}function se(a){if(Array.isArray(a))return a;if(a&&typeof a=="object"){const t=a.items;if(Array.isArray(t))return t}return[]}function ee(a){const t=new URLSearchParams;for(const[n,m]of Object.entries(a)){if(m==null)continue;const o=String(m).trim();o!==""&&t.set(n,o)}const s=t.toString();return s===""?"":`?${s}`}function Ce(a,t){return E("/api/admin/login",{metod:"POST",kropp:{epost:a,losen:t}})}function Ae(){return E("/api/admin/logout",{metod:"POST"})}function Ie(){return E("/api/admin/me")}function ze(a={}){return E(`/api/admin/products${ee({...a})}`)}function Le(a){return E(`/api/admin/products/${encodeURIComponent(a)}`)}function Ee(a){return E("/api/admin/products",{metod:"POST",kropp:a})}function De(a,t){return E(`/api/admin/products/${encodeURIComponent(a)}`,{metod:"PATCH",kropp:t})}function Me(a){return E(`/api/admin/products/${encodeURIComponent(a)}`,{metod:"DELETE"})}function Be(a,t){return E(`/api/admin/products/${encodeURIComponent(a)}/variants`,{metod:"POST",kropp:t})}function Pe(a,t){return E(`/api/admin/variants/${encodeURIComponent(a)}`,{metod:"PATCH",kropp:t})}function Ue(a){return E(`/api/admin/variants/${encodeURIComponent(a)}`,{metod:"DELETE"})}function Oe(a,t,s){return E(`/api/admin/variants/${encodeURIComponent(a)}/stock`,{metod:"POST",kropp:{delta:t,reason:s}})}function je(a,t){return E(`/api/admin/media/${encodeURIComponent(a)}`,{metod:"PATCH",kropp:t})}function Ve(a){return E(`/api/admin/media/${encodeURIComponent(a)}`,{metod:"DELETE"})}const Ke=12*1024*1024,Ge=["image/jpeg","image/png","image/webp"],pe="JPEG, PNG eller WebP";function me(a,t){return t&&t.trim()!==""?t:a==="for_stor"?"Filen är större än 12 MB.":a==="otillaten_typ"?`Filtypen stöds inte. Ladda upp ${pe}.`:a==="gick_ej_avkoda"?"Filen gick inte att läsa som en bild. Den kan vara skadad.":a==="alt_saknas"?"Filen saknade alternativtext.":"Filen togs inte emot."}function He(a){if(!a||typeof a!="object")return{uppladdade:[],avvisade:[]};const t=a,s=t.uppladdade??t.uploaded??t.media,n=Array.isArray(s)?s.filter(i=>i&&typeof i=="object"):[],m=t.avvisade??t.rejected??t.errors,o=Array.isArray(m)?m.filter(i=>!!(i&&typeof i=="object")).map(i=>{const d=q(i,"kod","code")??"okand";return{filnamn:q(i,"filnamn","filename","name","fil")??"Filen",kod:d,meddelande:me(d,q(i,"meddelande","message","detalj","detail"))}}):[];return{uppladdade:n,avvisade:o}}function qe(a,t,s){return new Promise(n=>{const m=new FormData;t.forEach(({fil:d,alt:b},k)=>{m.append("fil",d,d.name),m.append(`alt_${k}`,b)});const o=t.length===1?t[0]:void 0;o&&m.append("alt",o.alt);const i=new XMLHttpRequest;i.open("POST",`${ue}/api/admin/products/${encodeURIComponent(a)}/media/upload`),i.withCredentials=!0,i.setRequestHeader("accept","application/json"),s&&(i.upload.onprogress=d=>{if(!d.lengthComputable)return;const b=Math.round(d.loaded/d.total*100);s(Math.min(100,Math.max(0,b)))}),i.onerror=()=>{n({ok:!1,kod:"natverksfel",meddelande:"Vi når inte servern just nu. Kontrollera uppkopplingen och försök igen. Bilderna kan ha nått fram — läs in produkten på nytt och kontrollera innan du skickar dem igen."})},i.ontimeout=()=>{n({ok:!1,kod:"tidsgrans",meddelande:"Uppladdningen tog för lång tid och avbröts. Prova med färre eller mindre bilder."})},i.onabort=()=>{n({ok:!1,kod:"avbruten",meddelande:"Uppladdningen avbröts."})},i.onload=()=>{const d=i.status,b=typeof i.responseText=="string"?i.responseText:"";let k;if(b.trim()!=="")try{k=JSON.parse(b)}catch{k=void 0}const v=k&&typeof k=="object"?k:{},g=Array.isArray(v.uppladdade)||Array.isArray(v.uploaded)||Array.isArray(v.avvisade)||Array.isArray(v.rejected);if(d>=200&&d<300||d===400&&g){n({ok:!0,data:He(k),status:d});return}if(d===413){n({ok:!1,status:d,kod:"for_stor_kropp",meddelande:"Filerna var för stora för servern. Gränsen är 12 MB per bild — ladda upp färre åt gången, eller förminska bilden först."});return}if(d===0){n({ok:!1,kod:"natverksfel",meddelande:"Vi når inte servern just nu. Kontrollera uppkopplingen och försök igen."});return}const p=v.error&&typeof v.error=="object"?v.error:{};n({ok:!1,status:d,kod:q(v,"kod","code","fel")??q(p,"code","kod")??`http_${d}`,meddelande:q(v,"meddelande","message","detalj","detail")??q(p,"message","meddelande")??be(d)})},i.send(m)})}function _e(a){if(!Number.isFinite(a)||a<0)return"—";if(a<1024)return`${a} B`;const t=["kB","MB","GB"];let s=a/1024,n=0;for(;s>=1024&&n<t.length-1;)s=s/1024,n+=1;return`${new Intl.NumberFormat("sv-SE",{maximumFractionDigits:s<10?1:0}).format(s)} ${t[n]??"MB"}`}function Je(a,t){return E(`/api/admin/products/${encodeURIComponent(a)}/compliance`,{metod:"PATCH",kropp:t})}function Xe(a={}){return E(`/api/admin/orders${ee({...a})}`)}function We(a,t,s){return E(`/api/admin/orders/${encodeURIComponent(a)}/status`,{metod:"PATCH",kropp:{status:t,reason:s}})}function Ye(a={}){return`${ue}/api/admin/orders.csv${ee({...a})}`}async function Qe(a){const t=await E(`/api/admin/returns${ee({status:a})}`);return t.ok?{ok:!0,data:se(t.data),status:t.status}:t}function Ze(a,t,s){return E(`/api/admin/returns/${encodeURIComponent(a)}`,{metod:"PATCH",kropp:{status:t,note:s}})}async function ea(){const a=await E("/api/admin/intresseanmalningar");return a.ok?{ok:!0,data:se(a.data),status:a.status}:a}async function aa(a){const t=await E(`/api/admin/intresseanmalningar/${encodeURIComponent(a)}`);return t.ok?{ok:!0,data:se(t.data),status:t.status}:t}function ta(a,t=""){return E(`/api/admin/intresseanmalningar/${encodeURIComponent(a)}/meddela`,{metod:"POST",kropp:{reason:t}})}function ra(a=""){return E("/api/admin/intresseanmalningar/stada",{metod:"POST",kropp:{reason:a}})}const ie=600;function na(){return E("/api/admin/upphamtning")}function sa(a,t=""){return E("/api/admin/upphamtning",{metod:"PUT",kropp:{text:a,reason:t}})}async function la(a={}){const t=await E(`/api/admin/audit${ee({...a})}`);return t.ok?{ok:!0,data:se(t.data),status:t.status}:t}function ae(a,t="SEK"){try{return $e(a,t)}catch{return"—"}}const ia={pending:"Påbörjad",awaiting_payment:"Väntar på betalning",paid:"Betald",failed:"Misslyckad betalning",cancelled:"Avbruten",shipped:"Skickad",completed:"Slutförd",returned:"Ångrad",partially_refunded:"Delvis återbetald",refunded:"Återbetald"},ye=["pending","awaiting_payment","paid","failed","cancelled","shipped","completed","returned","partially_refunded","refunded"];function Z(a){return ia[a]??a}const da={requested:"Anmäld",handled:"Hanterad",rejected:"Avvisad"};function oa(a){return da[a]??a}function Y(a){if(!a)return"—";const t=new Date(a);return Number.isNaN(t.getTime())?"—":new Intl.DateTimeFormat("sv-SE",{dateStyle:"short",timeStyle:"short"}).format(t)}function ca(a){if(!a)return"—";const t=new Date(a);return Number.isNaN(t.getTime())?"—":new Intl.DateTimeFormat("sv-SE",{dateStyle:"short"}).format(t)}function ma({onInloggad:a}){const t=r.useId(),s=`${t}-epost`,n=`${t}-losen`,m=`${t}-fel`,o=`${t}-epost-fel`,i=`${t}-losen-fel`,[d,b]=r.useState(""),[k,v]=r.useState(""),[g,p]=r.useState({}),[j,_]=r.useState(null),[c,x]=r.useState(!1),[h,T]=r.useState(0),F=r.useRef(!1),u=r.useRef(null),w=r.useRef(null);r.useEffect(()=>{if(h<=0)return;const N=window.setInterval(()=>{T(R=>R<=1?0:R-1)},1e3);return()=>window.clearInterval(N)},[h]);function l(N){return N>=120?`${Math.ceil(N/60)} minuter`:N===1?"1 sekund":`${N} sekunder`}async function f(N){if(N.preventDefault(),F.current||h>0)return;const R={};if(d.trim()===""&&(R.epost="Fyll i din e-postadress."),k===""&&(R.losen="Fyll i ditt lösenord."),p(R),_(null),Object.keys(R).length>0){R.epost?u.current?.focus():w.current?.focus();return}F.current=!0,x(!0);const z=await Ce(d.trim(),k);if(F.current=!1,x(!1),z.ok){v(""),a(z.data.user);return}_(z),z.status===429&&typeof z.retryEfterSekunder=="number"&&T(z.retryEfterSekunder),u.current?.focus()}const $=h>0,C=c||$,y=[j?m:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"adm-kort adm-login",children:[e.jsx("style",{children:ua}),e.jsx("h2",{className:"adm-kort__rubrik",children:"Logga in"}),e.jsxs("form",{className:"adm-login__form",onSubmit:f,noValidate:!0,"aria-describedby":y||void 0,children:[j&&e.jsxs("p",{className:"adm-fel",id:m,role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Inloggningen misslyckades."})," ",j.meddelande,$&&e.jsxs(e.Fragment,{children:[" ","Du kan försöka igen om ",l(h),"."]}),j.status===429&&typeof j.retryEfterSekunder!="number"&&e.jsxs(e.Fragment,{children:[" ","Servern angav ingen väntetid — vänta en stund innan du försöker igen."]})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:s,children:"E-postadress"}),e.jsx("input",{className:"adm-input",id:s,ref:u,type:"email",name:"epost",value:d,autoComplete:"email",autoCapitalize:"off",spellCheck:!1,"aria-invalid":g.epost?!0:void 0,"aria-describedby":g.epost?o:void 0,onChange:N=>b(N.target.value)}),g.epost&&e.jsx("p",{className:"adm-faltfel",id:o,role:"alert",children:g.epost})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:n,children:"Lösenord"}),e.jsx("input",{className:"adm-input",id:n,ref:w,type:"password",name:"losen",value:k,autoComplete:"current-password","aria-invalid":g.losen?!0:void 0,"aria-describedby":g.losen?i:void 0,onChange:N=>v(N.target.value)}),g.losen&&e.jsx("p",{className:"adm-faltfel",id:i,role:"alert",children:g.losen})]}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp",disabled:C,"aria-busy":c||void 0,children:c?"Loggar in …":"Logga in"})}),e.jsxs("p",{className:"adm-hjalp",children:["Konton skapas på servern med ",e.jsx("code",{children:"npm run admin:skapa"}),". Det finns ingen registrering och ingen självbetjänad återställning av lösenord."]})]})]})}const ua=`
.adm-login {
  max-inline-size: 28rem;
}

.adm-login__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.adm-login code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: var(--text-xs);
  background-color: var(--color-surface);
  padding: 0.1rem 0.3rem;
  border-radius: var(--radius-xs);
}
`,W=3;function pa(a){return a.size>Ke?`Filen är ${_e(a.size)}. Gränsen är 12 MB per bild.`:a.type!==""&&!Ge.includes(a.type)?`Filtypen stöds inte. Ladda upp ${pe}.`:null}function fa({produktId:a,onUppladdade:t,onOautentiserad:s}){const[n,m]=r.useState([]),[o,i]=r.useState(!1),[d,b]=r.useState(!1),[k,v]=r.useState(0),[g,p]=r.useState(null),[j,_]=r.useState(null),[c,x]=r.useState(""),h=r.useRef(!1),T=r.useRef(0),F=r.useRef(new Set),u=r.useRef(0);r.useEffect(()=>{const S=F.current;return()=>{for(const A of S)URL.revokeObjectURL(A);S.clear()}},[]);function w(S){F.current.has(S)&&(URL.revokeObjectURL(S),F.current.delete(S))}function l(S){if(!S)return;const A=Array.from(S);if(A.length===0)return;const D=[];let U=0;for(const B of A){if([...n,...D].some(le=>le.fil.name===B.name&&le.fil.size===B.size&&le.fil.lastModified===B.lastModified)){U+=1;continue}const ke=URL.createObjectURL(B);F.current.add(ke),T.current+=1,D.push({nyckel:`fil-${T.current}`,fil:B,alt:"",forhandsUrl:ke,lokaltFel:pa(B)})}D.length>0&&m(B=>[...B,...D]);const X=[];D.length>0&&X.push(D.length===1?"En fil tillagd. Skriv en alternativtext för den.":`${D.length} filer tillagda. Skriv en alternativtext för varje.`),U>0&&X.push(U===1?"En fil var redan vald och hoppades över.":`${U} filer var redan valda och hoppades över.`),x(X.join(" "))}function f(S){l(S.target.files),S.target.value=""}function $(S){const A=n.find(D=>D.nyckel===S);A&&w(A.forhandsUrl),m(D=>D.filter(U=>U.nyckel!==S)),x(`${A?.fil.name??"Filen"} togs bort ur satsen.`)}function C(S,A){m(D=>D.map(U=>U.nyckel===S?{...U,alt:A}:U))}function y(S){S.preventDefault(),u.current+=1,i(!0)}function N(S){S.preventDefault(),u.current=Math.max(0,u.current-1),u.current===0&&i(!1)}function R(S){S.preventDefault()}function z(S){S.preventDefault(),u.current=0,i(!1),l(S.dataTransfer?.files??null)}const I=n.filter(S=>S.lokaltFel===null),L=I.filter(S=>S.alt.trim().length<W),V=n.length-I.length,K=!d&&I.length>0&&L.length===0;function G(){return n.length===0?null:I.length===0?"Ingen av de valda filerna går att ladda upp. Ta bort dem och välj andra.":L.length===1?`En bild saknar alternativtext: ${L[0]?.fil.name??""}. Alternativtexten måste vara minst ${W} tecken.`:L.length>1?`${L.length} bilder saknar alternativtext. Varje bild behöver minst ${W} tecken.`:null}function O(S,A){const U=`${A.uppladdade.length} av ${S} bilder uppladdade.`;if(A.avvisade.length===0)return U;const X=A.avvisade.map(Q=>`${Q.filnamn}: ${me(Q.kod,Q.meddelande)}`).join(" "),B=A.avvisade.length===1?"En avvisades.":`${A.avvisade.length} avvisades.`;return`${U} ${B} ${X}`}async function H(){if(h.current||I.length===0||L.length>0)return;h.current=!0,b(!0),v(0),_(null),p(null),x(I.length===1?"Laddar upp en bild.":`Laddar upp ${I.length} bilder.`);const S=I.length,A=await qe(a,I.map(B=>({fil:B.fil,alt:B.alt.trim()})),v);if(h.current=!1,b(!1),!A.ok){if(M(A)){s();return}_(A),x(`Uppladdningen misslyckades. ${A.meddelande}`);return}p(A.data),A.data.uppladdade.length>0&&t(A.data.uppladdade);const D=new Set(A.data.avvisade.map(B=>B.filnamn)),U=I.filter(B=>!D.has(B.fil.name));for(const B of U)w(B.forhandsUrl);const X=new Set(U.map(B=>B.nyckel));m(B=>B.filter(Q=>!X.has(Q.nyckel))),x(O(S,A.data))}const J=G();return e.jsxs("div",{className:"bu",children:[e.jsx("style",{children:ka}),e.jsxs("div",{className:"bu-yta","data-over":o?"ja":"nej",onDragEnter:y,onDragLeave:N,onDragOver:R,onDrop:z,children:[e.jsx("p",{className:"bu-yta__text",children:o?"Släpp filerna nu — de läggs till i listan nedan.":"Dra bildfiler hit, eller välj dem med knappen."}),e.jsx("input",{className:"bu-fil",id:"adm-bu-fil",type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp",onChange:f}),e.jsx("label",{className:"bu-fil__etikett",htmlFor:"adm-bu-fil",children:"Välj bildfiler"}),e.jsxs("p",{className:"bu-yta__villkor",children:[pe,". Högst 12 MB per bild. Flera filer åt gången går bra."]})]}),e.jsxs("p",{className:"bu-varfor",children:[e.jsx("strong",{className:"bu-varfor__rubrik",children:"Alternativtexten är inte valfri."})," ","Den är allt en skärmläsare har att läsa upp, allt en sökmotor har att indexera, och allt som visas för den som sitter på en långsam uppkoppling där bilden aldrig kommer fram. Databasen kräver den därför, och en bild utan alternativtext går inte att spara. Beskriv vad bilden visar — motiv, färg, tryck — inte att det är en bild."]}),j&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Uppladdningen gick inte igenom."})," ",j.meddelande]}),n.length===0?e.jsx("p",{className:"adm-tom",children:"Inga filer valda ännu."}):e.jsx("ul",{className:"bu-lista",children:n.map((S,A)=>e.jsxs("li",{className:"bu-rad",children:[e.jsx("img",{className:"bu-rad__bild",src:S.forhandsUrl,alt:""}),e.jsxs("div",{className:"bu-rad__innehall",children:[e.jsxs("p",{className:"bu-rad__namn",children:[S.fil.name,e.jsxs("span",{className:"bu-rad__storlek",children:[" ","— ",_e(S.fil.size)]})]}),S.lokaltFel&&e.jsxs("p",{className:"adm-faltfel",children:["Skickas inte: ",S.lokaltFel]}),S.lokaltFel===null&&e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`adm-bu-alt-${S.nyckel}`,children:"Alternativtext (obligatorisk)"}),e.jsx("textarea",{className:"adm-textarea",id:`adm-bu-alt-${S.nyckel}`,rows:2,value:S.alt,"aria-invalid":S.alt.trim()!==""&&S.alt.trim().length<W?!0:void 0,"aria-describedby":`adm-bu-althjalp-${S.nyckel}`,onChange:D=>C(S.nyckel,D.target.value)}),e.jsxs("p",{className:"adm-hjalp",id:`adm-bu-althjalp-${S.nyckel}`,children:["Minst ",W," tecken. Bild ",A+1," av"," ",n.length,"."]})]}),e.jsx("div",{className:"adm-knappar",children:e.jsxs("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:d,onClick:()=>$(S.nyckel),children:["Ta bort ",S.fil.name," ur satsen"]})})]})]},S.nyckel))}),d&&e.jsxs("div",{className:"bu-forlopp",children:[e.jsxs("p",{className:"bu-forlopp__text",children:["Laddar upp … ",k," %"]}),e.jsx("div",{className:"bu-forlopp__bard","aria-hidden":"true",children:e.jsx("div",{className:"bu-forlopp__fyllning",style:{inlineSize:`${k}%`}})})]}),g&&e.jsxs("div",{className:"bu-resultat",children:[g.uppladdade.length>0&&e.jsx("p",{className:"adm-klart",children:g.uppladdade.length===1?"En bild lades till i produkten.":`${g.uppladdade.length} bilder lades till i produkten.`}),g.avvisade.length>0&&e.jsxs("div",{className:"adm-fel",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:g.avvisade.length===1?"En fil togs inte emot":`${g.avvisade.length} filer togs inte emot`}),e.jsx("ul",{className:"bu-avvisade",children:g.avvisade.map((S,A)=>e.jsxs("li",{children:[e.jsx("strong",{children:S.filnamn})," ",me(S.kod,S.meddelande)]},`${S.filnamn}-${A}`))})]})]}),e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"button",className:"adm-knapp",disabled:!K,"aria-busy":d||void 0,onClick:()=>void H(),children:d?"Laddar upp …":I.length===1?"Ladda upp bilden":`Ladda upp ${I.length} bilder`}),J&&e.jsx("span",{className:"bu-hinder",children:J}),V>0&&e.jsx("span",{className:"bu-hinder",children:V===1?"En fil hoppas över.":`${V} filer hoppas över.`})]}),e.jsx("p",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:c})]})}const ka=`
.bu {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Släppytan. Streckad ram i vila. Ramen är green-700 mot vitt (8.38:1) och
 * klarar därmed 1.4.11 med god marginal — signalgrönt hade legat på 2.99:1
 * mot bone och fått bära en markering som betyder något, vilket den inte får. */
.bu-yta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1rem;
  border: var(--border-thick) dashed var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
}

/* MARKERING VID DRAG: ramen byter FORM (streckad blir hel) och blir tjockare,
 * och ytan byter ton. Tre skillnader varav två syns i gråskala och i tvingat
 * högkontrastläge. Texten i ytan byts dessutom ut i JSX:en ovan — färg ensam
 * hade brutit 1.4.1. */
.bu-yta[data-over='ja'] {
  border-style: solid;
  border-width: var(--border-sticker);
  background-color: var(--color-surface);
}

.bu-yta__text {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink-muted);
}

.bu-yta__villkor {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* Dold för ögat, kvar i tabbordningen. Samma teknik som .sr-only i global.css
 * och som VariantPickers radioknappar. display: none eller visibility: hidden
 * hade tagit bort inputen ur tabbordningen och därmed stängt ute alla som inte
 * använder mus — se filhuvudet. */
.bu-fil {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}

/* Etiketten ÄR knappen man ser. Måtten följer .adm-knapp, och 2.75rem höjd
 * ligger en bra bit över golvet i WCAG 2.2 2.5.8. */
.bu-fil__etikett {
  display: inline-flex;
  align-items: center;
  min-block-size: 2.75rem;
  padding: 0.55rem 1.1rem;
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  cursor: pointer;
  transition: background-color var(--motion-fast) var(--ease-out);
}

/* Hover går MÖRKARE: 8.38:1 blir 13.41:1. Kontrasten stiger när man pekar. */
.bu-fil__etikett:hover {
  background-color: var(--color-surface-hero);
}

/* Fokusringen flyttas från den dolda inputen till etiketten. Utan den här
 * regeln ritas ringen runt en osynlig 1x1-ruta och tangentbordsanvändaren
 * tappar bort sig helt. */
.bu-fil:focus-visible + .bu-fil__etikett {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 0.125rem;
}

/* Förklaringen till alt-kravet. Bone-yta med svart text (17.36:1) och en tjock
 * svart kantlinje. Ingen färg bär betydelse — orden gör det. */
.bu-varfor {
  border-inline-start: var(--border-sticker) solid var(--color-black);
  padding: 0.5rem 0.75rem;
  background-color: var(--color-surface);
  color: var(--color-ink);
  font-size: var(--text-sm);
}

.bu-varfor__rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

.bu-lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.bu-rad {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  padding: 0.85rem;
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-sm);
}

/* Förhandsvisningen. Fast ruta så att listan inte hoppar när bilder med olika
 * proportioner läggs till. Ramen är dekor här, inte betydelsebärande. */
.bu-rad__bild {
  inline-size: 6rem;
  block-size: 6rem;
  object-fit: cover;
  border: var(--border-hairline) solid var(--color-line-soft);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface);
}

.bu-rad__innehall {
  flex: 1 1 16rem;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bu-rad__namn {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-ink);
  overflow-wrap: anywhere;
}

.bu-rad__storlek {
  font-weight: 400;
  color: var(--color-ink-muted);
  font-variant-numeric: tabular-nums;
}

.bu-forlopp {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.bu-forlopp__text {
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.bu-forlopp__bard {
  block-size: 0.75rem;
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface);
  overflow: hidden;
}

/* Fyllningen är green-700, inte signalgrönt: bården bär en pågående åtgärd och
 * ska synas mot sin botten. Ingen text ligger ovanpå. */
.bu-forlopp__fyllning {
  block-size: 100%;
  background-color: var(--color-surface-primary);
  transition: inline-size var(--motion-fast) var(--ease-out);
}

.bu-resultat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bu-avvisade {
  margin: 0.4rem 0 0;
  padding-inline-start: 1.1rem;
  font-size: var(--text-sm);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Texten som förklarar varför knappen är avstängd. Svart på vitt, 19.44:1. */
.bu-hinder {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-ink);
  max-inline-size: 44ch;
}
`;function ga(a){return`/media/${a.replace(/^\/+/,"").replace(/^media\//,"")}-400.jpg`}function va({bilder:a,onAndrad:t,onOautentiserad:s}){const[n,m]=r.useState(""),[o,i]=r.useState(null),[d,b]=r.useState(!1),[k,v]=r.useState(null),[g,p]=r.useState(null),j=r.useRef(!1),_=r.useRef({}),c=r.useRef(null),x=r.useRef(null);r.useEffect(()=>{const l=c.current;l&&(c.current=null,_.current[l]?.focus())},[a]);async function h(l,f){if(j.current)return;j.current=!0,b(!0),i(null);const $=l.map((y,N)=>({...y,sortOrder:N}));t($);const C=$.filter((y,N)=>{const R=f.find(z=>z.id===y.id);return!R||R.sortOrder!==N});for(const y of C){const N=await je(y.id,{sortOrder:y.sortOrder});if(!N.ok){if(j.current=!1,b(!1),M(N)){s();return}t(f),i(N),m(`Ordningen kunde inte sparas. ${N.meddelande}`);return}}j.current=!1,b(!1)}function T(l,f){const $=l+f;if($<0||$>=a.length)return;const C=a,y=[...a],N=y[l],R=y[$];!N||!R||(y[l]=R,y[$]=N,c.current=`${f===-1?"upp":"ner"}:${N.id}`,m(`${N.alt} flyttad till plats ${$+1} av ${a.length}.`+($===0?" Den är nu produktens huvudbild.":"")),h(y,C))}function F(l,f){if(l===f||l<0||f<0||l>=a.length||f>=a.length)return;const $=a,C=[...a],[y]=C.splice(l,1);y&&(C.splice(f,0,y),m(`${y.alt} flyttad till plats ${f+1} av ${a.length}.`+(f===0?" Den är nu produktens huvudbild.":"")),h(C,$))}function u(l){t(a.map(f=>f.id===l.id?l:f))}function w(l,f){const $=a.filter(C=>C.id!==l);t($),m($.length===0?`${f} togs bort. Produkten har inga bilder kvar.`:`${f} togs bort. ${$.length} bilder kvar.`),x.current?.focus()}return e.jsxs("div",{className:"bl",children:[e.jsx("style",{children:xa}),o&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Ändringen gick inte igenom."})," ",o.meddelande]}),e.jsx("p",{className:"adm-hjalp",tabIndex:-1,ref:x,children:a.length===0?"Produkten har inga sparade bilder ännu.":`${a.length} sparade bilder. Den första i listan är produktens huvudbild — den visas i butikens produktkort och som första bild på produktsidan. Ordna med knapparna Flytta upp och Flytta ner, eller genom att dra en rad.`}),a.length>0&&e.jsx("ol",{className:"bl-lista",children:a.map((l,f)=>e.jsx("li",{className:"bl-rad","data-mal":g===f&&k!==f?"ja":"nej",onDragOver:$=>{k!==null&&($.preventDefault(),p(f))},onDrop:$=>{if(k===null)return;$.preventDefault();const C=k;v(null),p(null),F(C,f)},children:e.jsx(ha,{bild:l,index:f,antal:a.length,ordnar:d,knappRef:_,onFlytta:T,onSparad:u,onBorttagen:()=>w(l.id,l.alt),onDragStart:()=>v(f),onDragEnd:()=>{v(null),p(null)},onOautentiserad:s})},l.id))}),e.jsx("p",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:n})]})}function ha({bild:a,index:t,antal:s,ordnar:n,knappRef:m,onFlytta:o,onSparad:i,onBorttagen:d,onDragStart:b,onDragEnd:k,onOautentiserad:v}){const[g,p]=r.useState(a.alt),[j,_]=r.useState(null),[c,x]=r.useState(null),[h,T]=r.useState(!1),[F,u]=r.useState(!1),[w,l]=r.useState(!1),[f,$]=r.useState(!1),C=r.useRef(!1),y=r.useRef(null),N=`adm-bl-${a.id}`,R=t===0;r.useEffect(()=>{C.current||p(a.alt)},[a.alt]);async function z(){if(C.current)return;if(g.trim().length<W){_(`Alternativtext är obligatorisk och måste vara minst ${W} tecken. Beskriv vad bilden visar för den som inte kan se den.`),u(!1),y.current?.focus();return}_(null),u(!1),x(null),C.current=!0,T(!0);const L=await je(a.id,{alt:g.trim()});if(C.current=!1,T(!1),L.ok){u(!0),i(L.data);return}if(M(L)){v();return}x(L)}async function I(){if(C.current)return;C.current=!0,$(!0);const L=await Ve(a.id);if(C.current=!1,$(!1),L.ok){d();return}if(M(L)){v();return}l(!1),x(L)}return e.jsxs("div",{className:"bl-rad__innehall",children:[e.jsx("span",{className:"bl-handtag",draggable:!0,"aria-hidden":"true",onDragStart:b,onDragEnd:k,children:"⣿"}),e.jsx("img",{className:"bl-rad__bild",src:ga(a.path),alt:""}),e.jsxs("div",{className:"bl-rad__falt",children:[e.jsxs("p",{className:"bl-rad__plats",children:[e.jsxs("span",{className:"bl-rad__nummer",children:["Plats ",t+1," av ",s]}),R&&e.jsx("span",{className:"bl-rad__huvud",children:"Huvudbild"}),R&&e.jsx("span",{className:"bl-rad__forklaring",children:"Visas i produktkortet och först på produktsidan."})]}),c&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Kunde inte spara bilden."})," ",c.meddelande]}),F&&e.jsx("p",{className:"adm-klart","aria-live":"polite",children:"Alternativtexten är sparad."}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`${N}-alt`,children:"Alternativtext (obligatorisk)"}),e.jsx("textarea",{className:"adm-textarea",id:`${N}-alt`,rows:2,value:g,ref:y,"aria-invalid":j?!0:void 0,"aria-describedby":j?`${N}-alt-fel`:void 0,onChange:L=>{p(L.target.value),u(!1)}}),j&&e.jsx("p",{className:"adm-faltfel",id:`${N}-alt-fel`,role:"alert",children:j})]}),e.jsxs("p",{className:"bl-rad__sokvag",children:["Sökväg: ",e.jsx("span",{className:"bl-rad__kod",children:a.path}),e.jsxs("span",{className:"bl-rad__forklaring",children:[" ","Pekar på filen på servern och går inte att skriva om här — byt bild genom att ladda upp en ny och ta bort den här."]})]}),e.jsxs("div",{className:"adm-knappar",children:[e.jsxs("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:t===0||n,ref:L=>{m.current[`upp:${a.id}`]=L},onClick:()=>o(t,-1),children:["Flytta upp",e.jsxs("span",{className:"sr-only",children:[" — ",a.alt,", till plats ",t]})]}),e.jsxs("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:t===s-1||n,ref:L=>{m.current[`ner:${a.id}`]=L},onClick:()=>o(t,1),children:["Flytta ner",e.jsxs("span",{className:"sr-only",children:[" ","— ",a.alt,", till plats ",t+2]})]}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--liten",disabled:h,"aria-busy":h||void 0,onClick:()=>void z(),children:h?"Sparar …":"Spara alternativtexten"}),w?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"bl-rad__varning",children:["Ta bort bilden ",a.alt," permanent?"]}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--ingrepp adm-knapp--liten",disabled:f,"aria-busy":f||void 0,onClick:()=>void I(),children:f?"Tar bort …":"Ja, ta bort"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>l(!1),children:"Avbryt"})]}):e.jsxs("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>l(!0),children:["Ta bort bilden",e.jsxs("span",{className:"sr-only",children:[" ",a.alt]})]})]})]})]})}const xa=`
.bl {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.bl-lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Raden. Ramen är green-700 mot vitt (8.38:1) och bär betydelse — den visar
 * var en bild slutar och nästa börjar — alltså måste den klara 3:1 enligt
 * 1.4.11. Signalgrönt hade legat på 2.99:1 mot bone. */
.bl-rad {
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
}

/* SLÄPPMÅL: ramen byter FORM (hel blir streckad) och blir tjockare. Ingen
 * färgskillnad bär markeringen — den syns i gråskala och i tvingat
 * högkontrastläge. */
.bl-rad[data-mal='ja'] {
  border-style: dashed;
  border-width: var(--border-thick);
  background-color: var(--color-surface);
}

.bl-rad__innehall {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.85rem;
}

/* Draghandtaget. Grabb-markören är den enda signal det behöver ge, eftersom
 * det bara vänder sig till den som redan har mus. */
.bl-handtag {
  flex: 0 0 auto;
  padding: 0.25rem;
  color: var(--color-ink-muted);
  font-size: var(--text-lg);
  line-height: 1;
  cursor: grab;
  user-select: none;
}

.bl-rad__bild {
  inline-size: 5rem;
  block-size: 5rem;
  object-fit: cover;
  border: var(--border-hairline) solid var(--color-line-soft);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface);
}

.bl-rad__falt {
  flex: 1 1 18rem;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bl-rad__plats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-xs);
}

.bl-rad__nummer {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink-muted);
  font-variant-numeric: tabular-nums;
}

/* Huvudbildsbrickan: GULDYTA MED SVART TEXT, 14.96:1. Det är den enda
 * tillåtna riktningen för guld — som textfärg på ljust mäter den 1.30:1.
 * Brickan innehåller ordet "Huvudbild"; färgen är eftertryck, aldrig
 * informationen (1.4.1). */
.bl-rad__huvud {
  display: inline-block;
  padding: 0.1rem 0.45rem;
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  border-radius: var(--radius-xs);
  font-family: var(--font-display);
  font-size: var(--text-2xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

.bl-rad__forklaring {
  color: var(--color-ink-muted);
  font-weight: 400;
}

.bl-rad__sokvag {
  font-size: var(--text-xs);
  color: var(--color-ink);
  overflow-wrap: anywhere;
}

.bl-rad__kod {
  font-family: var(--font-body);
  font-weight: 700;
}

/* Varningstexten vid en bekräftelse. Fet svart text på kortets vita botten
 * (19.44:1). Ingen färg bär betydelsen — orden gör det. */
.bl-rad__varning {
  font-weight: 700;
  color: var(--color-ink);
  font-size: var(--text-sm);
}
`;function fe(a){const t=a.replace(/ /g,"").replace(/\s/g,"").replace(/kr$/i,"");if(t==="")return{ok:!1,meddelande:"Fyll i ett belopp."};let s="",n=t;n.startsWith("-")?(s="-",n=n.slice(1)):n.startsWith("+")&&(n=n.slice(1));const m=n.split(/[.,]/);if(m.length>2)return{ok:!1,meddelande:"Beloppet får innehålla högst ett komma."};const o=m[0]===""?"0":m[0],i=m[1]??"";if(!/^\d+$/.test(o))return{ok:!1,meddelande:"Beloppet får bara innehålla siffror och komma."};if(i!==""&&!/^\d{1,2}$/.test(i))return{ok:!1,meddelande:"Beloppet får ha högst två decimaler."};if(o.length>12)return{ok:!1,meddelande:"Beloppet är orimligt stort."};const d=(i+"00").slice(0,2),b=+`${s}${o}${d}`;return Number.isSafeInteger(b)?{ok:!0,oren:b}:{ok:!1,meddelande:"Beloppet gick inte att tolka."}}function Ne(a){if(!Number.isInteger(a))return"";const t=a<0,s=String(Math.abs(a)).padStart(3,"0");return`${t?"-":""}${s.slice(0,-2)},${s.slice(-2)}`}function ba(a){if(a===null||a==="")return"";const t=new Date(a);return Number.isNaN(t.getTime())?"":new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().slice(0,16)}function ja(a){const t=new Date(a);return Number.isNaN(t.getTime())?"":t.toISOString()}function _a(a){if(a.trim()==="")return"Ingen släpptid: produkten går att köpa så snart den är publicerad.";const t=new Date(a);if(Number.isNaN(t.getTime()))return"Tiden går inte att läsa.";const s=t.toLocaleString("sv-SE",{dateStyle:"full",timeStyle:"short"});return t.getTime()>Date.now()?`Släpps ${s}. Fram till dess visas nedräkning och köp nekas.`:`Släpptiden passerade ${s}. Produkten går att köpa.`}function P({id:a,etikett:t,varde:s,onChange:n,fel:m,hjalp:o,typ:i="text",rader:d,faltRef:b,namn:k,inputMode:v}){const g=`${a}-fel`,p=`${a}-hjalp`,j=[o?p:null,m?g:null].filter(Boolean).join(" ");function _(c){b&&k&&(b.current[k]=c)}return e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:a,children:t}),d?e.jsx("textarea",{className:"adm-textarea",id:a,rows:d,value:s,"aria-invalid":m?!0:void 0,"aria-describedby":j||void 0,ref:_,onChange:c=>n(c.target.value)}):e.jsx("input",{className:"adm-input",id:a,type:i,inputMode:v,value:s,"aria-invalid":m?!0:void 0,"aria-describedby":j||void 0,ref:_,onChange:c=>n(c.target.value)}),o&&e.jsx("p",{className:"adm-hjalp",id:p,children:o}),m&&e.jsx("p",{className:"adm-faltfel",id:g,role:"alert",children:m})]})}function ge({produktId:a,onStang:t,onOautentiserad:s}){const[n,m]=r.useState(a),[o,i]=r.useState(null),[d,b]=r.useState(a!==null),[k,v]=r.useState(null),[g,p]=r.useState(!1),j=r.useRef(null),_=r.useCallback(async x=>{b(!0);const h=await Le(x);if(b(!1),h.ok){v(null),i(h.data);return}if(M(h)){s();return}v(h)},[s]);r.useEffect(()=>{n&&_(n)},[n,_]),r.useEffect(()=>{j.current?.focus()},[]);function c(){p(!0)}return n===null?e.jsxs("div",{className:"adm-red",children:[e.jsx("style",{children:te}),e.jsxs("div",{className:"adm-kort",children:[e.jsx("h3",{className:"adm-kort__rubrik",tabIndex:-1,ref:j,children:"Ny produkt"}),e.jsx("p",{className:"adm-hjalp",children:"Produkten skapas först med sina grunduppgifter. Varianter, bilder och GPSR-uppgifter läggs till efteråt — de behöver en produkt att höra till."}),e.jsx(ve,{produkt:null,onSparad:x=>{c(),m(x.id),i(x)},onOautentiserad:s}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar",onClick:()=>t(g),children:"Avbryt"})})]})]}):d?e.jsxs("div",{className:"adm-red",children:[e.jsx("style",{children:te}),e.jsx("p",{className:"adm-laddar","aria-live":"polite",children:"Hämtar produkten …"})]}):k&&!o?e.jsxs("div",{className:"adm-red",children:[e.jsx("style",{children:te}),e.jsxs("div",{className:"adm-kort",children:[e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Produkten kunde inte hämtas."})," ",k.meddelande]}),e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"button",className:"adm-knapp",onClick:()=>void _(n),children:"Försök igen"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar",onClick:()=>t(g),children:"Tillbaka till listan"})]})]})]}):o?e.jsxs("div",{className:"adm-red",children:[e.jsx("style",{children:te}),e.jsxs("div",{className:"adm-red__topp",children:[e.jsx("h3",{className:"adm-red__rubrik",tabIndex:-1,ref:j,children:o.title}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--ljus adm-knapp--liten",onClick:()=>t(g),children:"Tillbaka till listan"})]}),e.jsx(ve,{produkt:o,onSparad:x=>{c(),i(h=>h?{...h,...x}:x)},onOautentiserad:s}),e.jsx(ya,{produkt:o,onAndrad:x=>{c(),i(h=>h&&{...h,variants:x})},onOautentiserad:s}),e.jsx(Ra,{produkt:o,onAndrad:x=>{c(),i(h=>h&&{...h,media:x})},onOautentiserad:s}),e.jsx(wa,{produkt:o,onSparad:x=>{c(),i(h=>h&&{...h,compliance:x})},onOautentiserad:s}),e.jsx(Ta,{produkt:o,onBorttagen:()=>t(!0),onOautentiserad:s})]}):null}function ve({produkt:a,onSparad:t,onOautentiserad:s}){const[n,m]=r.useState(a?.title??""),[o,i]=r.useState(a?.slug??""),[d,b]=r.useState(a?.sku??""),[k,v]=r.useState(a?.description??""),[g,p]=r.useState(a?Ne(a.priceMinor):""),[j,_]=r.useState(String(a?.vatRate??2500)),[c,x]=r.useState(a?.status??"draft"),[h,T]=r.useState((a?.tags??[]).join(", ")),[F,u]=r.useState(ba(a?.releaseAt??null)),[w,l]=r.useState({}),[f,$]=r.useState(null),[C,y]=r.useState(!1),[N,R]=r.useState(!1),z=r.useRef(!1),I=r.useRef({}),L=["titel","slug","sku","pris","moms"];async function V(G){if(G.preventDefault(),z.current)return;const O={};n.trim()===""&&(O.titel="Titeln får inte vara tom."),o.trim()===""&&(O.slug="Slug får inte vara tom."),d.trim()===""&&(O.sku="Artikelnumret får inte vara tomt.");const H=fe(g);H.ok?H.oren<0&&(O.pris="Baspriset kan inte vara negativt."):O.pris=H.meddelande;const J=Number(j.trim());if((!Number.isInteger(J)||J<0||J>1e4)&&(O.moms="Momssatsen anges i punkter: 2500 för 25 %."),l(O),y(!1),$(null),Object.keys(O).length>0){const D=L.find(U=>O[U]);D&&I.current[D]?.focus();return}if(!H.ok)return;const S={title:n.trim(),slug:o.trim(),sku:d.trim(),description:k,priceMinor:H.oren,vatRate:J,status:c,tags:h.split(",").map(D=>D.trim()).filter(D=>D!==""),releaseAt:F.trim()===""?"":ja(F)};z.current=!0,R(!0);const A=a?await De(a.id,S):await Ee(S);if(z.current=!1,R(!1),A.ok){y(!0),t(A.data);return}if(M(A)){s();return}$(A)}const K=Number(j.trim());return e.jsxs("section",{className:"adm-kort","aria-labelledby":"adm-grund-rubrik",children:[e.jsx("h4",{className:"adm-kort__rubrik",id:"adm-grund-rubrik",children:"Grunduppgifter"}),e.jsxs("form",{className:"adm-red__form",onSubmit:V,noValidate:!0,children:[f&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Kunde inte spara."})," ",f.meddelande]}),C&&e.jsx("p",{className:"adm-klart","aria-live":"polite",children:"Grunduppgifterna är sparade."}),e.jsxs("div",{className:"adm-red__rutnat",children:[e.jsx(P,{id:"adm-grund-titel",namn:"titel",faltRef:I,etikett:"Titel",varde:n,onChange:m,fel:w.titel}),e.jsx(P,{id:"adm-grund-slug",namn:"slug",faltRef:I,etikett:"Slug",varde:o,onChange:i,fel:w.slug,hjalp:"Adressen i butiken: /produkt/slug"}),e.jsx(P,{id:"adm-grund-sku",namn:"sku",faltRef:I,etikett:"Artikelnummer",varde:d,onChange:b,fel:w.sku}),e.jsx(P,{id:"adm-grund-pris",namn:"pris",faltRef:I,etikett:"Baspris i kronor",varde:g,onChange:p,fel:w.pris,inputMode:"decimal",hjalp:"Inklusive moms. Skriv 149 eller 149,50 — beloppet lagras i ören."}),e.jsx(P,{id:"adm-grund-moms",namn:"moms",faltRef:I,etikett:"Momssats i punkter",varde:j,onChange:_,fel:w.moms,inputMode:"numeric",hjalp:Number.isInteger(K)&&K>=0&&K<=1e4?`2500 = 25 %. Nuvarande värde motsvarar ${Re(K)}.`:"2500 = 25 %."}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-grund-status",children:"Status"}),e.jsxs("select",{className:"adm-select",id:"adm-grund-status",value:c,onChange:G=>x(G.target.value),children:[e.jsx("option",{value:"draft",children:"Utkast"}),e.jsx("option",{value:"active",children:"Publicerad"}),e.jsx("option",{value:"archived",children:"Arkiverad"})]}),e.jsx("p",{className:"adm-hjalp",children:"Bara publicerade produkter syns i butiken."})]}),e.jsx(P,{id:"adm-grund-taggar",etikett:"Taggar",varde:h,onChange:T,hjalp:"Kommaseparerade."})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-grund-slapptid",children:"Släpptid"}),e.jsxs("div",{className:"adm-slapp",children:[e.jsx("input",{className:"adm-input",id:"adm-grund-slapptid",type:"datetime-local",value:F,onChange:G=>u(G.target.value),"aria-describedby":"adm-grund-slapptid-hjalp adm-grund-slapptid-lage"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar",onClick:()=>u(""),"aria-disabled":F===""||void 0,children:"Ta bort släpptid"})]}),e.jsx("p",{className:"adm-slapp__lage",id:"adm-grund-slapptid-lage","aria-live":"polite",children:_a(F)}),e.jsx("p",{className:"adm-hjalp",id:"adm-grund-slapptid-hjalp",children:"Tiden anges i din egen tidszon. Före släpptiden syns produkten med nedräkning men går inte att köpa — spärren sitter på servern, inte på knappen. Lämna tomt för en produkt utan släpp."})]}),e.jsx(P,{id:"adm-grund-beskrivning",etikett:"Beskrivning",varde:k,onChange:v,rader:5}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp",disabled:N,"aria-busy":N||void 0,children:N?"Sparar …":a?"Spara grunduppgifter":"Skapa produkt"})})]})]})}function ya({produkt:a,onAndrad:t,onOautentiserad:s}){const n=a.variants??[];function m(i){t(n.map(d=>d.id===i.id?i:d))}function o(i){t(n.filter(d=>d.id!==i))}return e.jsxs("section",{className:"adm-kort","aria-labelledby":"adm-variant-rubrik",children:[e.jsx("h4",{className:"adm-kort__rubrik",id:"adm-variant-rubrik",children:"Varianter"}),n.length===0?e.jsx("p",{className:"adm-tom",children:"Produkten har inga varianter ännu. Utan minst en variant går den inte att lägga i varukorgen."}):e.jsx("ul",{className:"adm-red__lista",children:n.map(i=>e.jsx("li",{children:e.jsx(Na,{variant:i,onSparad:m,onBorttagen:()=>o(i.id),onOautentiserad:s})},i.id))}),e.jsx($a,{produktId:a.id,onSkapad:i=>t([...n,i]),onOautentiserad:s})]})}function Na({variant:a,onSparad:t,onBorttagen:s,onOautentiserad:n}){const[m,o]=r.useState(a.name),[i,d]=r.useState(a.sku),[b,k]=r.useState(Ne(a.priceDiffMinor)),[v,g]=r.useState(()=>a.measurements.map(N=>({etikett:N.etikett,cm:N.cm.toLocaleString("sv-SE",{maximumFractionDigits:1})}))),[p,j]=r.useState({}),[_,c]=r.useState(null),[x,h]=r.useState(!1),[T,F]=r.useState(!1),[u,w]=r.useState(!1),l=r.useRef(!1),f=r.useRef({}),$=`adm-variant-${a.id}`;async function C(N){if(N.preventDefault(),l.current)return;const R={};m.trim()===""&&(R.namn="Variantnamnet får inte vara tomt."),i.trim()===""&&(R.sku="Artikelnumret får inte vara tomt.");const z=fe(b);z.ok||(R.diff=z.meddelande),j(R),F(!1),c(null);const I=[];if(v.forEach((V,K)=>{const G=V.etikett.trim(),O=V.cm.trim();if(G===""&&O==="")return;if(G===""){R[`matt-${K}`]='Skriv vad måttet avser, till exempel "Bredd över bröstet".';return}const H=Number(O.replace(",","."));if(!Number.isFinite(H)||H<=0){R[`matt-${K}`]="Ange ett tal i centimeter, större än noll.";return}I.push({etikett:G,cm:Math.round(H*10)/10})}),j(R),Object.keys(R).length>0){const V=["namn","sku","diff"].find(K=>R[K]);V&&f.current[V]?.focus();return}if(!z.ok)return;l.current=!0,h(!0);const L=await Pe(a.id,{name:m.trim(),sku:i.trim(),priceDiffMinor:z.oren,measurements:I});if(l.current=!1,h(!1),L.ok){F(!0),t(L.data);return}if(M(L)){n();return}c(L)}async function y(){if(l.current)return;l.current=!0;const N=await Ue(a.id);if(l.current=!1,N.ok){s();return}if(M(N)){n();return}w(!1),c(N)}return e.jsxs("div",{className:"adm-red__rad",children:[e.jsxs("form",{className:"adm-red__form",onSubmit:C,noValidate:!0,children:[_&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Kunde inte spara varianten."})," ",_.meddelande]}),T&&e.jsxs("p",{className:"adm-klart","aria-live":"polite",children:["Varianten ",m," är sparad."]}),e.jsxs("div",{className:"adm-red__rutnat",children:[e.jsx(P,{id:`${$}-namn`,namn:"namn",faltRef:f,etikett:"Variantnamn",varde:m,onChange:o,fel:p.namn}),e.jsx(P,{id:`${$}-sku`,namn:"sku",faltRef:f,etikett:"Artikelnummer",varde:i,onChange:d,fel:p.sku}),e.jsx(P,{id:`${$}-diff`,namn:"diff",faltRef:f,etikett:"Prisdifferens i kronor",varde:b,onChange:k,fel:p.diff,inputMode:"decimal",hjalp:"Påslag mot baspriset. Får vara negativt, t.ex. -20."}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("span",{className:"adm-etikett",children:"Lager"}),e.jsxs("p",{className:"adm-red__saldo",children:[a.stock," st",e.jsx("span",{className:"adm-hjalp",children:" — ändras med justeringen nedan"})]})]})]}),e.jsxs("fieldset",{className:"adm-matt",children:[e.jsxs("legend",{className:"adm-etikett",children:["Mått för ",a.name||"storleken"]}),v.length===0?e.jsx("p",{className:"adm-hjalp",children:"Inga mått angivna. Storleken visas utan mått i butiken."}):e.jsx("ul",{className:"adm-matt__lista",children:v.map((N,R)=>e.jsxs("li",{className:"adm-matt__rad",children:[e.jsxs("div",{className:"adm-falt adm-matt__benamning",children:[e.jsxs("label",{className:"adm-etikett",htmlFor:`${$}-matt-${R}-etikett`,children:["Benämning ",R+1]}),e.jsx("input",{className:"adm-input",id:`${$}-matt-${R}-etikett`,type:"text",value:N.etikett,onChange:z=>{const I=[...v];I[R]={...N,etikett:z.target.value},g(I)},"aria-invalid":p[`matt-${R}`]!==void 0||void 0,"aria-describedby":p[`matt-${R}`]!==void 0?`${$}-matt-${R}-fel`:void 0})]}),e.jsxs("div",{className:"adm-falt adm-matt__cm",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`${$}-matt-${R}-cm`,children:"Centimeter"}),e.jsx("input",{className:"adm-input",id:`${$}-matt-${R}-cm`,type:"text",inputMode:"decimal",value:N.cm,onChange:z=>{const I=[...v];I[R]={...N,cm:z.target.value},g(I)},"aria-invalid":p[`matt-${R}`]!==void 0||void 0})]}),e.jsxs("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>g(v.filter((z,I)=>I!==R)),children:["Ta bort",e.jsxs("span",{className:"sr-only",children:[" måttet ",N.etikett||R+1]})]}),p[`matt-${R}`]!==void 0&&e.jsx("p",{className:"adm-faltfel adm-matt__fel",id:`${$}-matt-${R}-fel`,children:p[`matt-${R}`]})]},`matt-${R}`))}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>g([...v,{etikett:"",cm:""}]),"aria-disabled":v.length>=8||void 0,children:"Lägg till mått"})}),e.jsx("p",{className:"adm-hjalp",children:"Måtten visas vid den valda storleken på produktsidan, och alla storlekar tillsammans i en tabell ett klick bort. Benämningen blir kolumnrubrik — använd samma benämning på alla storlekar av samma produkt, annars får tabellen en kolumn per stavning. Högst 8 mått."})]}),e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--liten",disabled:x,"aria-busy":x||void 0,children:x?"Sparar …":"Spara varianten"}),u?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"adm-red__varning",children:["Ta bort ",a.name," permanent?"]}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--ingrepp adm-knapp--liten",onClick:()=>void y(),children:"Ja, ta bort"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>w(!1),children:"Avbryt"})]}):e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>w(!0),children:"Ta bort varianten"})]})]}),e.jsx(Sa,{variant:a,onJusterad:N=>t({...a,stock:N}),onOautentiserad:n})]})}function Sa({variant:a,onJusterad:t,onOautentiserad:s}){const[n,m]=r.useState(""),[o,i]=r.useState(""),[d,b]=r.useState({}),[k,v]=r.useState(null),[g,p]=r.useState(null),[j,_]=r.useState(!1),c=r.useRef(!1),x=r.useRef({}),h=`adm-lager-${a.id}`;async function T(F){if(F.preventDefault(),c.current)return;const u={},w=Number(n.trim());if(n.trim()===""||!Number.isInteger(w)?u.delta="Ange en hel förändring, t.ex. 5 eller -2.":w===0&&(u.delta="En justering på noll ändrar ingenting."),o.trim()===""&&(u.orsak="Ange varför lagret ändras. Orsaken sparas i audit-loggen."),b(u),p(null),v(null),Object.keys(u).length>0){const f=["delta","orsak"].find($=>u[$]);f&&x.current[f]?.focus();return}c.current=!0,_(!0);const l=await Oe(a.id,w,o.trim());if(c.current=!1,_(!1),l.ok){const f=l.data;m(""),i(""),p(`Lagret ändrades från ${f.stockBefore} till ${f.stockAfter} st.`),t(f.stockAfter);return}if(M(l)){s();return}v(l)}return e.jsx("form",{className:"adm-red__lager",onSubmit:T,noValidate:!0,children:e.jsxs("fieldset",{className:"adm-red__falt",children:[e.jsxs("legend",{className:"adm-etikett",children:["Justera lager",e.jsxs("span",{className:"sr-only",children:[" för ",a.name]})]}),k&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Justeringen gick inte igenom."})," ",k.meddelande]}),g&&e.jsx("p",{className:"adm-klart","aria-live":"polite",children:g}),e.jsxs("div",{className:"adm-red__rutnat",children:[e.jsx(P,{id:`${h}-delta`,namn:"delta",faltRef:x,etikett:"Förändring",varde:n,onChange:m,fel:d.delta,inputMode:"numeric",hjalp:"Skillnad, inte nytt saldo. 5 lägger till, -2 drar av."}),e.jsx(P,{id:`${h}-orsak`,namn:"orsak",faltRef:x,etikett:"Orsak (obligatorisk)",varde:o,onChange:i,fel:d.orsak,hjalp:"T.ex. inventering, svinn, retur tillbaka i lager."})]}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--liten",disabled:j,"aria-busy":j||void 0,children:j?"Justerar …":"Justera lagret"})})]})})}function $a({produktId:a,onSkapad:t,onOautentiserad:s}){const[n,m]=r.useState(""),[o,i]=r.useState(""),[d,b]=r.useState("0"),[k,v]=r.useState("0,00"),[g,p]=r.useState({}),[j,_]=r.useState(null),[c,x]=r.useState(!1),h=r.useRef(!1),T=r.useRef({});async function F(u){if(u.preventDefault(),h.current)return;const w={};n.trim()===""&&(w.namn="Variantnamnet får inte vara tomt."),o.trim()===""&&(w.sku="Artikelnumret får inte vara tomt.");const l=Number(d.trim());(!Number.isInteger(l)||l<0)&&(w.lager="Startlagret måste vara ett heltal, noll eller mer.");const f=fe(k);if(f.ok||(w.diff=f.meddelande),p(w),_(null),Object.keys(w).length>0){const C=["namn","sku","lager","diff"].find(y=>w[y]);C&&T.current[C]?.focus();return}if(!f.ok)return;h.current=!0,x(!0);const $=await Be(a,{name:n.trim(),sku:o.trim(),stock:l,priceDiffMinor:f.oren});if(h.current=!1,x(!1),$.ok){m(""),i(""),b("0"),v("0,00"),t($.data);return}if(M($)){s();return}_($)}return e.jsx("form",{className:"adm-red__form adm-red__rad",onSubmit:F,noValidate:!0,children:e.jsxs("fieldset",{className:"adm-red__falt",children:[e.jsx("legend",{className:"adm-etikett",children:"Lägg till variant"}),j&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Varianten skapades inte."})," ",j.meddelande]}),e.jsxs("div",{className:"adm-red__rutnat",children:[e.jsx(P,{id:"adm-nyvariant-namn",namn:"namn",faltRef:T,etikett:"Variantnamn",varde:n,onChange:m,fel:g.namn,hjalp:"T.ex. M eller Svart / L."}),e.jsx(P,{id:"adm-nyvariant-sku",namn:"sku",faltRef:T,etikett:"Artikelnummer",varde:o,onChange:i,fel:g.sku}),e.jsx(P,{id:"adm-nyvariant-lager",namn:"lager",faltRef:T,etikett:"Startlager",varde:d,onChange:b,fel:g.lager,inputMode:"numeric"}),e.jsx(P,{id:"adm-nyvariant-diff",namn:"diff",faltRef:T,etikett:"Prisdifferens i kronor",varde:k,onChange:v,fel:g.diff,inputMode:"decimal"})]}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--liten",disabled:c,"aria-busy":c||void 0,children:c?"Skapar …":"Lägg till varianten"})})]})})}function Ra({produkt:a,onAndrad:t,onOautentiserad:s}){const n=a.media??[];return e.jsxs("section",{className:"adm-kort","aria-labelledby":"adm-bild-rubrik",children:[e.jsx("h4",{className:"adm-kort__rubrik",id:"adm-bild-rubrik",children:"Bilder"}),e.jsx(fa,{produktId:a.id,onUppladdade:m=>t([...n,...m].sort((o,i)=>o.sortOrder-i.sortOrder)),onOautentiserad:s}),e.jsx(va,{bilder:n,onAndrad:t,onOautentiserad:s})]})}function wa({produkt:a,onSparad:t,onOautentiserad:s}){const n=a.compliance,[m,o]=r.useState(n?.manufacturer??""),[i,d]=r.useState(n?.euResponsiblePerson??""),[b,k]=r.useState(n?.materialComposition??""),[v,g]=r.useState(n?.careInstructions??""),[p,j]=r.useState(n?.warnings??""),[_,c]=r.useState({}),[x,h]=r.useState(null),[T,F]=r.useState(!1),[u,w]=r.useState(!1),l=r.useRef(!1),f=r.useRef({});async function $(C){if(C.preventDefault(),l.current)return;const y={};if(m.trim()===""&&(y.tillverkare="Tillverkaren måste anges. GPSR kräver det."),i.trim()===""&&(y.ansvarig="EU-ansvarig person måste anges. GPSR kräver en kontaktpunkt inom EU."),b.trim()===""&&(y.material="Materialsammansättningen måste anges."),v.trim()===""&&(y.skotsel="Skötselråd måste anges."),c(y),F(!1),h(null),Object.keys(y).length>0){const R=["tillverkare","ansvarig","material","skotsel"].find(z=>y[z]);R&&f.current[R]?.focus();return}l.current=!0,w(!0);const N=await Je(a.id,{manufacturer:m.trim(),euResponsiblePerson:i.trim(),materialComposition:b.trim(),careInstructions:v.trim(),warnings:p.trim()===""?null:p.trim()});if(l.current=!1,w(!1),N.ok){F(!0),t(N.data);return}if(M(N)){s();return}h(N)}return e.jsxs("section",{className:"adm-kort","aria-labelledby":"adm-gpsr-rubrik",children:[e.jsx("h4",{className:"adm-kort__rubrik",id:"adm-gpsr-rubrik",children:"GPSR-uppgifter"}),e.jsxs("form",{className:"adm-red__form",onSubmit:$,noValidate:!0,children:[x&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Kunde inte spara."})," ",x.meddelande]}),T&&e.jsx("p",{className:"adm-klart","aria-live":"polite",children:"GPSR-uppgifterna är sparade."}),e.jsxs("div",{className:"adm-red__rutnat",children:[e.jsx(P,{id:"adm-gpsr-tillverkare",namn:"tillverkare",faltRef:f,etikett:"Tillverkare",varde:m,onChange:o,fel:_.tillverkare,hjalp:"Namn och adress."}),e.jsx(P,{id:"adm-gpsr-ansvarig",namn:"ansvarig",faltRef:f,etikett:"EU-ansvarig person",varde:i,onChange:d,fel:_.ansvarig,hjalp:"Kontaktpunkt inom EU, med adress."})]}),e.jsx(P,{id:"adm-gpsr-material",namn:"material",faltRef:f,etikett:"Materialsammansättning",varde:b,onChange:k,fel:_.material,rader:2}),e.jsx(P,{id:"adm-gpsr-skotsel",namn:"skotsel",faltRef:f,etikett:"Skötselråd",varde:v,onChange:g,fel:_.skotsel,rader:2}),e.jsx(P,{id:"adm-gpsr-varningar",etikett:"Varningar",varde:p,onChange:j,rader:2,hjalp:"Lämna tomt om produkten inte har några varningstexter."}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp",disabled:u,"aria-busy":u||void 0,children:u?"Sparar …":"Spara GPSR-uppgifter"})})]})]})}function Ta({produkt:a,onBorttagen:t,onOautentiserad:s}){const[n,m]=r.useState(!1),[o,i]=r.useState(null),[d,b]=r.useState(!1),k=r.useRef(!1);async function v(){if(k.current)return;k.current=!0,b(!0);const g=await Me(a.id);if(k.current=!1,b(!1),g.ok){t();return}if(M(g)){s();return}m(!1),i(g)}return e.jsxs("section",{className:"adm-kort","aria-labelledby":"adm-farligt-rubrik",children:[e.jsx("h4",{className:"adm-kort__rubrik",id:"adm-farligt-rubrik",children:"Ta bort produkten"}),o&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Produkten togs inte bort."})," ",o.meddelande]}),e.jsxs("p",{className:"adm-hjalp",children:["Överväg att arkivera i stället. En arkiverad produkt försvinner ur butiken men finns kvar i ordrar och kvitton. Baspriset i den här produkten är ",ae(a.priceMinor),"."]}),e.jsx("div",{className:"adm-knappar",children:n?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"adm-red__varning",children:["Ta bort ",a.title," permanent?"]}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--ingrepp adm-knapp--liten",disabled:d,"aria-busy":d||void 0,onClick:()=>void v(),children:d?"Tar bort …":"Ja, ta bort produkten"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>m(!1),children:"Avbryt"})]}):e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>m(!0),children:"Ta bort produkten"})})]})}const te=`
/* Släpptid: fältet och bortknappen på en rad, som wrappar på smal skärm.
 * align-items: end håller knappen i linje med fältets underkant när
 * webbläsaren ritar ett datetime-local högre än en vanlig input. */
.adm-slapp {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 0.5rem;
}

.adm-slapp > .adm-input {
  flex: 1 1 14rem;
  min-inline-size: 0;
}

/* Lägesbeskedet bär information och får därför inte formges som brödtext i
 * mängden. Kantlinjen i stället för färg — samma skäl som .adm-faltfel: en
 * skillnad som bara är färg är ingen skillnad för alla (WCAG 1.4.1). */
.adm-slapp__lage {
  border-inline-start: var(--border-thick) solid var(--color-black);
  padding-inline-start: 0.5rem;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-ink);
}

.adm-red {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.adm-red__topp {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.adm-red__rubrik {
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  color: var(--color-ink-inverse);
}

.adm-red__rubrik:focus-visible {
  outline: var(--border-thick) solid var(--color-focus-inverse);
  outline-offset: 0.25rem;
}

.adm-red__form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.adm-red__rutnat {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 0.85rem;
}

.adm-red__lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Varje rad är en inramad grupp. Ramen är green-700 mot vitt (8.38:1) och bär
 * betydelse — den visar var en variant slutar och nästa börjar — så den måste
 * klara 3:1 enligt 1.4.11. Signalgrönt hade legat på 3.35:1 mot vitt men på
 * 2.99:1 mot bone, och radbotten växlar mellan de två. */
/* --- storleksmått ------------------------------------------------------
 * Fieldset nollställs: webbläsarens standardram hör inte hemma i
 * formgivningen, och min-inline-size: 0 behövs för att ett fieldset inte ska
 * vägra krympa under sitt innehåll i ett flexlayout. */
.adm-matt {
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.adm-matt__lista {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Benämning, centimeter och bortknappen på en rad som staplar på smal skärm.
 * align-items: end håller knappen i linje med fältens underkant, eftersom
 * fälten är högre än knappen när etiketten ligger ovanför. */
.adm-matt__rad {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 0.5rem;
}

.adm-matt__benamning {
  flex: 1 1 14rem;
  min-inline-size: 0;
}

/* Centimeterfältet behöver inte vara brett — det rymmer tre tecken. */
.adm-matt__cm {
  flex: 0 1 7rem;
  min-inline-size: 0;
}

/* Felet tar hela bredden och hamnar därmed under raden det gäller, i stället
 * för att tränga ihop fälten. */
.adm-matt__fel {
  flex: 1 1 100%;
}

.adm-red__rad {
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* Fieldset nollställs: webbläsarens standardram hör inte hemma i formgivningen,
 * och min-inline-size behövs för att den ska kunna krympa i ett rutnät. */
.adm-red__falt {
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.adm-red__falt legend {
  padding: 0;
}

.adm-red__lager {
  border-block-start: var(--border-hairline) solid var(--color-line-soft);
  padding-block-start: 0.85rem;
}

.adm-red__saldo {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  color: var(--color-ink);
}

/* Varningstexten vid en bekräftelse. Fet svart text på kortets vita botten
 * (19.44:1). Ingen färg bär betydelsen — orden gör det. */
.adm-red__varning {
  font-weight: 700;
  color: var(--color-ink);
  font-size: var(--text-sm);
}
`,Fa={draft:"Utkast",active:"Publicerad",archived:"Arkiverad"},de=25;function Ca({onOautentiserad:a}){const[t,s]=r.useState(""),[n,m]=r.useState(""),[o,i]=r.useState(""),[d,b]=r.useState(0),[k,v]=r.useState([]),[g,p]=r.useState(0),[j,_]=r.useState(!0),[c,x]=r.useState(null),[h,T]=r.useState(null),[F,u]=r.useState(!1),w=r.useRef(null),l=r.useCallback(async()=>{_(!0);const y=await ze({q:n,status:o,limit:de,offset:d});if(_(!1),y.ok){x(null),v(y.data.items??[]),p(y.data.total??0);return}if(M(y)){a();return}x(y)},[n,o,d,a]);r.useEffect(()=>{l()},[l]);function f(y){y.preventDefault(),b(0),m(t.trim())}function $(y){T(null),u(!1),y&&l(),window.requestAnimationFrame(()=>w.current?.focus())}if(F)return e.jsx(ge,{produktId:null,onStang:$,onOautentiserad:a});if(h)return e.jsx(ge,{produktId:h,onStang:$,onOautentiserad:a});const C=d+k.length;return e.jsxs("div",{className:"adm-kort adm-prod",children:[e.jsx("style",{children:Aa}),e.jsxs("form",{className:"adm-prod__filter",onSubmit:f,role:"search",children:[e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-prod-sok",children:"Sök produkt"}),e.jsx("input",{className:"adm-input",id:"adm-prod-sok",type:"search",value:t,onChange:y=>s(y.target.value)}),e.jsx("p",{className:"adm-hjalp",children:"Titel, slug eller artikelnummer."})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-prod-status",children:"Status"}),e.jsxs("select",{className:"adm-select",id:"adm-prod-status",value:o,onChange:y=>{b(0),i(y.target.value)},children:[e.jsx("option",{value:"",children:"Alla"}),e.jsx("option",{value:"draft",children:"Utkast"}),e.jsx("option",{value:"active",children:"Publicerad"}),e.jsx("option",{value:"archived",children:"Arkiverad"})]})]}),e.jsx("div",{className:"adm-falt adm-prod__knappfalt",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--sekundar",children:"Sök"})}),e.jsx("div",{className:"adm-falt adm-prod__knappfalt",children:e.jsx("button",{type:"button",className:"adm-knapp",onClick:()=>u(!0),children:"Ny produkt"})})]}),c&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Listan kunde inte hämtas."})," ",c.meddelande]}),e.jsx("p",{className:"adm-tom","aria-live":"polite",children:j?"Hämtar produkter …":g===0?"Inga produkter matchar filtret.":`Visar ${d+1}–${C} av ${g} produkter.`}),k.length>0&&e.jsx("div",{className:"adm-tabellyta",children:e.jsxs("table",{className:"adm-tabell",children:[e.jsx("caption",{children:"Produkter. Öppna en produkt för att redigera fält, varianter, bilder och GPSR-uppgifter."}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Titel"}),e.jsx("th",{scope:"col",children:"Artikelnummer"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col",children:"Baspris"}),e.jsx("th",{scope:"col",children:"Varianter"}),e.jsx("th",{scope:"col",children:"Uppdaterad"})]})}),e.jsx("tbody",{children:k.map(y=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsxs("button",{type:"button",className:"adm-prod__oppna",onClick:N=>{w.current=N.currentTarget,T(y.id)},children:[y.title,e.jsx("span",{className:"sr-only",children:" – öppna för redigering"})]}),e.jsxs("span",{className:"adm-prod__slug",children:["/",y.slug]})]}),e.jsx("td",{children:y.sku}),e.jsx("td",{children:Fa[y.status]??y.status}),e.jsx("td",{className:"adm-tabell__siffra",children:ae(y.priceMinor)}),e.jsx("td",{className:"adm-tabell__siffra",children:y.variants?y.variants.length:"—"}),e.jsx("td",{children:ca(y.updatedAt)})]},y.id))})]})}),e.jsx("div",{className:"adm-sidfot",children:e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:d===0||j,onClick:()=>b(Math.max(0,d-de)),children:"Föregående"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:C>=g||j,onClick:()=>b(d+de),children:"Nästa"})]})})]})}const Aa=`
.adm-prod__filter {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 0.75rem;
  align-items: end;
}

/* Knapparna ligger i .adm-falt för att linjera med fältens underkant. */
.adm-prod__knappfalt {
  justify-content: flex-end;
}

/* Titelknappen ser ut som en länk men är en knapp: den navigerar inte, den
 * byter vy i samma dokument. Understruken från början — färg ensam får inte
 * bära att något är klickbart (WCAG 1.4.1). */
.adm-prod__oppna {
  display: block;
  inline-size: 100%;
  text-align: start;
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-ink-link);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  text-decoration: underline;
  text-underline-offset: 0.18em;
  cursor: pointer;
}

.adm-prod__oppna:hover {
  color: var(--color-ink);
}

.adm-prod__slug {
  display: block;
  font-size: var(--text-2xs);
  color: var(--color-ink-muted);
}
`,oe=25;function Ia({onOautentiserad:a}){const[t,s]=r.useState({status:"",epost:"",fran:"",till:"",q:""}),[n,m]=r.useState({}),[o,i]=r.useState(0),[d,b]=r.useState([]),[k,v]=r.useState(0),[g,p]=r.useState(!0),[j,_]=r.useState(null),[c,x]=r.useState(null),h=r.useCallback(async()=>{p(!0);const u=await Xe({...n,limit:oe,offset:o});if(p(!1),u.ok){_(null),b(u.data.items??[]),v(u.data.total??0);return}if(M(u)){a();return}_(u)},[n,o,a]);r.useEffect(()=>{h()},[h]);function T(u){u.preventDefault(),i(0),x(null),m({...t})}const F=o+d.length;return e.jsxs("div",{className:"adm-kort adm-order",children:[e.jsx("style",{children:La}),e.jsxs("form",{className:"adm-verktyg",onSubmit:T,children:[e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-order-status",children:"Status"}),e.jsxs("select",{className:"adm-select",id:"adm-order-status",value:t.status??"",onChange:u=>s({...t,status:u.target.value}),children:[e.jsx("option",{value:"",children:"Alla"}),ye.map(u=>e.jsx("option",{value:u,children:Z(u)},u))]})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-order-epost",children:"E-post"}),e.jsx("input",{className:"adm-input",id:"adm-order-epost",type:"email",autoComplete:"off",value:t.epost??"",onChange:u=>s({...t,epost:u.target.value})})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-order-fran",children:"Från och med"}),e.jsx("input",{className:"adm-input",id:"adm-order-fran",type:"date",value:t.fran??"",onChange:u=>s({...t,fran:u.target.value})})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-order-till",children:"Till och med"}),e.jsx("input",{className:"adm-input",id:"adm-order-till",type:"date",value:t.till??"",onChange:u=>s({...t,till:u.target.value})})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-order-q",children:"Fritext"}),e.jsx("input",{className:"adm-input",id:"adm-order-q",type:"search",value:t.q??"",onChange:u=>s({...t,q:u.target.value})}),e.jsx("p",{className:"adm-hjalp",children:"Ordernummer, namn eller artikelnummer."})]}),e.jsx("div",{className:"adm-falt adm-order__knappfalt",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--sekundar",children:"Filtrera"})})]}),e.jsxs("p",{className:"adm-order__export",children:[e.jsx("a",{href:Ye(n),children:"Exportera urvalet som CSV"}),e.jsxs("span",{className:"adm-hjalp",children:[" ","Filen innehåller samma ordrar som listan nedan, med samma filter."]})]}),j&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Ordrarna kunde inte hämtas."})," ",j.meddelande]}),e.jsx("p",{className:"adm-tom","aria-live":"polite",children:g?"Hämtar ordrar …":k===0?"Inga ordrar matchar filtret.":`Visar ${o+1}–${F} av ${k} ordrar.`}),d.length>0&&e.jsx("div",{className:"adm-tabellyta",children:e.jsxs("table",{className:"adm-tabell",children:[e.jsx("caption",{children:"Ordrar i urvalet. Varje rad kan öppnas för att ändra status; en orsak krävs och sparas i audit-loggen."}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Ordernummer"}),e.jsx("th",{scope:"col",children:"Datum"}),e.jsx("th",{scope:"col",children:"E-post"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col",children:"Rader"}),e.jsx("th",{scope:"col",children:"Total"}),e.jsx("th",{scope:"col",children:"Kvitto"}),e.jsx("th",{scope:"col",children:"Öppna returer"}),e.jsx("th",{scope:"col",children:"Åtgärd"})]})}),e.jsx("tbody",{children:d.map(u=>{const w=c===u.id;return e.jsxs(r.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"adm-order__nummer",children:u.orderNumber}),e.jsx("td",{children:Y(u.placedAt??u.createdAt)}),e.jsx("td",{children:u.email??"—"}),e.jsx("td",{children:Z(u.status)}),e.jsx("td",{className:"adm-tabell__siffra",children:u.itemCount}),e.jsx("td",{className:"adm-tabell__siffra",children:ae(u.totalMinor,u.currency)}),e.jsx("td",{children:u.hasReceipt?"Ja":"Nej"}),e.jsx("td",{className:"adm-tabell__siffra",children:u.openReturns}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten","aria-expanded":w,"aria-controls":`adm-order-form-${u.id}`,onClick:()=>x(w?null:u.id),children:w?"Stäng":"Ändra status"})})]}),w&&e.jsx("tr",{id:`adm-order-form-${u.id}`,children:e.jsx("td",{colSpan:9,children:e.jsx(za,{order:u,onKlart:()=>{x(null),h()},onOautentiserad:a})})})]},u.id)})})]})}),e.jsx("div",{className:"adm-sidfot",children:e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:o===0||g,onClick:()=>{x(null),i(Math.max(0,o-oe))},children:"Föregående"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:F>=k||g,onClick:()=>{x(null),i(o+oe)},children:"Nästa"})]})})]})}function za({order:a,onKlart:t,onOautentiserad:s}){const[n,m]=r.useState(""),[o,i]=r.useState(""),[d,b]=r.useState({}),[k,v]=r.useState(null),[g,p]=r.useState(null),[j,_]=r.useState(!1),c=r.useRef(!1),x=r.useRef(null),h=r.useRef(null),T=`adm-status-${a.id}`,F=g??ye.filter(l=>l!==a.status);async function u(l){if(l.preventDefault(),c.current)return;const f={};if(n===""&&(f.till="Välj vilken status ordern ska få."),o.trim()===""&&(f.orsak="Ange varför statusen ändras. Orsaken sparas i audit-loggen."),b(f),v(null),Object.keys(f).length>0){f.till?x.current?.focus():h.current?.focus();return}c.current=!0,_(!0);const $=await We(a.id,n,o.trim());if(c.current=!1,_(!1),$.ok){t();return}if(M($)){s();return}$.tillatnaOvergangar&&$.tillatnaOvergangar.length>0&&(p($.tillatnaOvergangar),m("")),v($),x.current?.focus()}const w=[k?`${T}-fel`:null,d.till?`${T}-till-fel`:null].filter(Boolean).join(" ");return e.jsx("form",{className:"adm-order__form",onSubmit:u,noValidate:!0,children:e.jsxs("fieldset",{className:"adm-order__falt",children:[e.jsxs("legend",{className:"adm-etikett",children:["Ändra status",e.jsxs("span",{className:"sr-only",children:[" för order ",a.orderNumber]})]}),e.jsxs("p",{className:"adm-hjalp",children:["Nuvarande status: ",e.jsx("strong",{children:Z(a.status)})]}),k&&e.jsxs("div",{className:"adm-fel",id:`${T}-fel`,role:"alert",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Statusen ändrades inte."})," ",k.meddelande]}),k.tillatnaOvergangar&&k.tillatnaOvergangar.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"adm-order__tillatna",children:["Från ",Z(a.status)," går ordern att sätta till:"]}),e.jsx("ul",{className:"adm-order__lista",children:k.tillatnaOvergangar.map(l=>e.jsx("li",{children:Z(l)},l))})]}),k.status===409&&(!k.tillatnaOvergangar||k.tillatnaOvergangar.length===0)&&e.jsx("p",{children:"Servern angav inga tillåtna övergångar. Läs in listan på nytt — ordern kan ha ändrats av någon annan."})]}),e.jsxs("div",{className:"adm-red__rutnat adm-order__rutnat",children:[e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`${T}-till`,children:"Ny status"}),e.jsxs("select",{className:"adm-select",id:`${T}-till`,ref:x,value:n,"aria-invalid":d.till?!0:void 0,"aria-describedby":w||void 0,onChange:l=>m(l.target.value),children:[e.jsx("option",{value:"",children:"Välj status …"}),F.map(l=>e.jsx("option",{value:l,children:Z(l)},l))]}),d.till&&e.jsx("p",{className:"adm-faltfel",id:`${T}-till-fel`,role:"alert",children:d.till}),g&&e.jsx("p",{className:"adm-hjalp",children:"Listan är avsmalnad till det servern svarade att den tillåter."})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`${T}-orsak`,children:"Orsak (obligatorisk)"}),e.jsx("input",{className:"adm-input",id:`${T}-orsak`,ref:h,type:"text",value:o,"aria-invalid":d.orsak?!0:void 0,"aria-describedby":d.orsak?`${T}-orsak-fel`:void 0,onChange:l=>i(l.target.value)}),d.orsak&&e.jsx("p",{className:"adm-faltfel",id:`${T}-orsak-fel`,role:"alert",children:d.orsak})]})]}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--liten",disabled:j,"aria-busy":j||void 0,children:j?"Ändrar …":"Ändra status"})})]})})}const La=`
.adm-order__knappfalt {
  justify-content: flex-end;
}

.adm-order__export {
  font-size: var(--text-sm);
}

.adm-order__nummer {
  font-family: var(--font-display);
  letter-spacing: var(--tracking-caps);
  white-space: nowrap;
}

/* Raden med statusformuläret ska läsas som en utfälld panel, inte som ännu en
 * datarad. Bone-botten och den tjocka överkanten skiljer den från tabellen. */
.adm-order__form {
  background-color: var(--color-surface);
  border-block-start: var(--border-thick) solid var(--color-line);
  padding: 0.85rem;
}

.adm-order__falt {
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.adm-order__falt legend {
  padding: 0;
}

.adm-order__rutnat {
  align-items: start;
}

.adm-order__tillatna {
  margin-block-start: 0.5rem;
  font-weight: 700;
}

.adm-order__lista {
  margin: 0.25rem 0 0;
  padding-inline-start: 1.25rem;
  list-style: square;
}
`;function Ea({onOautentiserad:a}){const[t,s]=r.useState("requested"),[n,m]=r.useState([]),[o,i]=r.useState(!0),[d,b]=r.useState(null),[k,v]=r.useState(null),g=r.useCallback(async()=>{i(!0);const p=await Qe(t);if(i(!1),p.ok){b(null),m(p.data);return}if(M(p)){a();return}b(p)},[t,a]);return r.useEffect(()=>{g()},[g]),e.jsxs("div",{className:"adm-kort adm-retur",children:[e.jsx("style",{children:Ma}),e.jsx("div",{className:"adm-verktyg",children:e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-retur-status",children:"Visa"}),e.jsxs("select",{className:"adm-select",id:"adm-retur-status",value:t,onChange:p=>{v(null),s(p.target.value)},children:[e.jsx("option",{value:"requested",children:"Anmälda (obehandlade)"}),e.jsx("option",{value:"handled",children:"Hanterade"}),e.jsx("option",{value:"rejected",children:"Avvisade"}),e.jsx("option",{value:"",children:"Alla"})]})]})}),d&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Returerna kunde inte hämtas."})," ",d.meddelande]}),e.jsx("p",{className:"adm-tom","aria-live":"polite",children:o?"Hämtar ångeranmälningar …":n.length===0?"Inga ångeranmälningar i det här urvalet.":`${n.length} ångeranmälningar i urvalet.`}),n.length>0&&e.jsx("div",{className:"adm-tabellyta",children:e.jsxs("table",{className:"adm-tabell",children:[e.jsx("caption",{children:"Inkomna ångeranmälningar. Varje rad kan markeras som hanterad eller avvisas; en avvisning kräver motivering."}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Ordernummer"}),e.jsx("th",{scope:"col",children:"Rad"}),e.jsx("th",{scope:"col",children:"Antal"}),e.jsx("th",{scope:"col",children:"Belopp"}),e.jsx("th",{scope:"col",children:"Kundens orsak"}),e.jsx("th",{scope:"col",children:"Anmäld"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col",children:"Åtgärd"})]})}),e.jsx("tbody",{children:n.map(p=>{const j=k===p.id;return e.jsxs(r.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"adm-retur__nummer",children:p.orderNumber}),e.jsxs("td",{children:[p.titleSnapshot,e.jsx("span",{className:"adm-retur__variant",children:p.variantSnapshot})]}),e.jsx("td",{className:"adm-tabell__siffra",children:p.qty}),e.jsx("td",{className:"adm-tabell__siffra",children:ae(p.amountMinor)}),e.jsx("td",{className:"adm-retur__orsak",children:p.reason||"—"}),e.jsx("td",{children:Y(p.requestedAt)}),e.jsxs("td",{children:[oa(p.status),p.handledAt&&e.jsx("span",{className:"adm-retur__tid",children:Y(p.handledAt)})]}),e.jsx("td",{children:p.status==="requested"?e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten","aria-expanded":j,"aria-controls":`adm-retur-form-${p.id}`,onClick:()=>v(j?null:p.id),children:j?"Stäng":"Behandla"}):e.jsx("span",{className:"adm-hjalp",children:"Färdigbehandlad"})})]}),j&&e.jsx("tr",{id:`adm-retur-form-${p.id}`,children:e.jsx("td",{colSpan:8,children:e.jsx(Da,{retur:p,onKlart:()=>{v(null),g()},onOautentiserad:a})})})]},p.id)})})]})})]})}function Da({retur:a,onKlart:t,onOautentiserad:s}){const[n,m]=r.useState("handled"),[o,i]=r.useState(""),[d,b]=r.useState(null),[k,v]=r.useState(null),[g,p]=r.useState(!1),j=r.useRef(!1),_=r.useRef(null),c=`adm-behandla-${a.id}`,x=n==="rejected";async function h(T){if(T.preventDefault(),j.current)return;if(x&&o.trim()===""){b("En avvisning måste motiveras. Motiveringen sparas i audit-loggen och är det enda underlaget om kunden bestrider beslutet."),v(null),_.current?.focus();return}b(null),v(null),j.current=!0,p(!0);const F=await Ze(a.id,n,o.trim());if(j.current=!1,p(!1),F.ok){t();return}if(M(F)){s();return}v(F)}return e.jsxs("form",{className:"adm-retur__form",onSubmit:h,noValidate:!0,children:[k&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Beslutet sparades inte."})," ",k.meddelande]}),e.jsxs("fieldset",{className:"adm-retur__falt",children:[e.jsxs("legend",{className:"adm-etikett",children:["Beslut",e.jsxs("span",{className:"sr-only",children:[" ","för ångeranmälan på order ",a.orderNumber,", ",a.titleSnapshot]})]}),e.jsxs("div",{className:"adm-retur__val",children:[e.jsxs("div",{className:"adm-retur__alternativ",children:[e.jsx("input",{type:"radio",id:`${c}-handled`,name:`${c}-beslut`,value:"handled",checked:n==="handled",onChange:()=>m("handled")}),e.jsx("label",{htmlFor:`${c}-handled`,children:"Markera som hanterad"})]}),e.jsxs("div",{className:"adm-retur__alternativ",children:[e.jsx("input",{type:"radio",id:`${c}-rejected`,name:`${c}-beslut`,value:"rejected",checked:n==="rejected",onChange:()=>m("rejected")}),e.jsx("label",{htmlFor:`${c}-rejected`,children:"Avvisa anmälan"})]})]})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:`${c}-motivering`,children:x?"Motivering (obligatorisk)":"Anteckning (frivillig)"}),e.jsx("textarea",{className:"adm-textarea",id:`${c}-motivering`,ref:_,rows:3,value:o,required:x,"aria-invalid":d?!0:void 0,"aria-describedby":[`${c}-hjalp`,d?`${c}-fel`:null].filter(Boolean).join(" ")||void 0,onChange:T=>i(T.target.value)}),e.jsx("p",{className:"adm-hjalp",id:`${c}-hjalp`,children:x?"Skriv så att kunden förstår beslutet. Texten sparas i audit-loggen.":"Frivillig. Skriv något om det finns en avvikelse att minnas."}),d&&e.jsx("p",{className:"adm-faltfel",id:`${c}-fel`,role:"alert",children:d})]}),e.jsx("div",{className:"adm-knappar",children:e.jsx("button",{type:"submit",className:x?"adm-knapp adm-knapp--ingrepp adm-knapp--liten":"adm-knapp adm-knapp--liten",disabled:g,"aria-busy":g||void 0,children:g?"Sparar …":x?"Avvisa anmälan":"Markera som hanterad"})})]})}const Ma=`
.adm-retur__nummer {
  font-family: var(--font-display);
  letter-spacing: var(--tracking-caps);
  white-space: nowrap;
}

.adm-retur__variant {
  display: block;
  font-size: var(--text-2xs);
  color: var(--color-ink-muted);
}

.adm-retur__orsak {
  max-inline-size: 24rem;
}

.adm-retur__tid {
  display: block;
  font-size: var(--text-2xs);
  color: var(--color-ink-muted);
}

.adm-retur__form {
  background-color: var(--color-surface);
  border-block-start: var(--border-thick) solid var(--color-line);
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.adm-retur__falt {
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
}

.adm-retur__falt legend {
  padding: 0;
  margin-block-end: 0.4rem;
}

.adm-retur__val {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}

/* Träffytan är minst 2.75rem hög. WCAG 2.2 2.5.8 sätter golvet vid 24 CSS-
 * pixlar; ett beslut med pengar i ska ligga en bra bit över det. */
.adm-retur__alternativ {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-block-size: 2.75rem;
}

.adm-retur__alternativ label {
  font-size: var(--text-sm);
  cursor: pointer;
}

.adm-retur__alternativ input {
  inline-size: 1.1rem;
  block-size: 1.1rem;
  accent-color: var(--color-green-700);
  cursor: pointer;
}
`;function Ba({onOautentiserad:a}){const[t,s]=r.useState([]),[n,m]=r.useState(!0),[o,i]=r.useState(null),[d,b]=r.useState(""),[k,v]=r.useState(null),[g,p]=r.useState([]),[j,_]=r.useState(!1),[c,x]=r.useState(null),h=r.useCallback(async()=>{m(!0);const l=await ea();if(m(!1),l.ok){i(null),s(l.data);return}if(M(l)){a();return}i(l)},[a]);r.useEffect(()=>{h()},[h]);async function T(l){if(k===l){v(null),p([]);return}v(l),_(!0);const f=await aa(l);if(_(!1),f.ok){p(f.data);return}if(M(f)){a();return}i(f),v(null)}async function F(l){if(c!==null)return;x(l.variantId),b("");const f=await ta(l.variantId);if(x(null),f.ok){b(`${f.data.meddelade} anmälning(ar) för ${l.productTitle} · ${l.variantName} är markerade som meddelade. Texten som skulle ha skickats står i serverloggen.`),v(null),p([]),await h();return}if(M(f)){a();return}i(f)}async function u(){if(c!==null)return;x("stada"),b("");const l=await ra();if(x(null),l.ok){b(`Raderade ${l.data.totalt} rad(er): ${l.data.meddelade} meddelade och ${l.data.gamla} äldre än sex månader.`),v(null),p([]),await h();return}if(M(l)){a();return}i(l)}const w=t.reduce((l,f)=>l+f.waiting,0);return e.jsxs("section",{className:"adm-int","aria-labelledby":"adm-int-rubrik",children:[e.jsx("style",{children:Pa}),e.jsxs("div",{className:"adm-int__topp",children:[e.jsx("h2",{className:"adm-int__rubrik",id:"adm-int-rubrik",children:"Intresseanmälningar"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar",onClick:()=>void u(),"aria-disabled":c!==null||void 0,children:c==="stada"?"Städar …":"Städa gamla och meddelade"})]}),e.jsxs("p",{className:"adm-int__ingress",children:["Så här många väntar på besked när en slutsåld storlek kommer tillbaka. Totalt ",w," väntande just nu. Ingen e-postleverantör är inkopplad — att markera som meddelad skriver ut beskedet i serverloggen i stället för att skicka det."]}),e.jsx("p",{className:"adm-int__besked","aria-live":"polite",children:d}),o&&e.jsx("p",{className:"adm-int__fel",role:"alert",children:o.meddelande}),n?e.jsx("p",{className:"adm-int__tomt",children:"Hämtar …"}):t.length===0?e.jsx("p",{className:"adm-int__tomt",children:"Ingen har anmält intresse på någon slutsåld variant ännu."}):e.jsx("div",{className:"adm-int__tabellyta",children:e.jsxs("table",{className:"adm-int__tabell",children:[e.jsx("caption",{className:"sr-only",children:"Antal intresseanmälningar per variant, flest väntande först"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Väntar"}),e.jsx("th",{scope:"col",children:"Produkt"}),e.jsx("th",{scope:"col",children:"Storlek"}),e.jsx("th",{scope:"col",children:"Lager"}),e.jsx("th",{scope:"col",children:"Äldsta"}),e.jsx("th",{scope:"col",children:"Meddelade"}),e.jsx("th",{scope:"col",children:e.jsx("span",{className:"sr-only",children:"Åtgärder"})})]})}),e.jsx("tbody",{children:t.map(l=>e.jsxs(r.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"adm-int__antal",children:l.waiting}),e.jsx("td",{children:l.productTitle}),e.jsxs("td",{children:[l.variantName,e.jsxs("span",{className:"adm-int__sku",children:[" · ",l.variantSku]})]}),e.jsxs("td",{children:[l.stock,l.stock>0&&e.jsx("span",{className:"adm-int__pafylld",children:" — påfylld"})]}),e.jsx("td",{children:Y(l.oldestWaitingAt)}),e.jsx("td",{children:l.notified}),e.jsxs("td",{className:"adm-int__atgarder",children:[e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",onClick:()=>void T(l.variantId),"aria-expanded":k===l.variantId,children:k===l.variantId?"Dölj adresser":"Visa adresser"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--liten",onClick:()=>void F(l),"aria-disabled":c!==null||l.waiting===0||void 0,children:c===l.variantId?"Markerar …":"Markera meddelade"})]})]}),k===l.variantId&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"adm-int__adresser",children:j?e.jsx("p",{children:"Hämtar adresser …"}):g.length===0?e.jsx("p",{children:"Inga anmälningar kvar på den här varianten."}):e.jsx("ul",{className:"adm-int__lista",children:g.map(f=>e.jsxs("li",{children:[e.jsx("span",{className:"adm-int__epost",children:f.email}),e.jsxs("span",{className:"adm-int__meta",children:[" ","· ",f.status==="waiting"?"väntar":"meddelad"," · anmäld ",Y(f.createdAt),f.notifiedAt!==null&&` · meddelad ${Y(f.notifiedAt)}`]}),e.jsx("span",{className:"adm-int__samtycke",children:f.consentText})]},f.id))})})})]},l.variantId))})]})})]})}const Pa=`
.adm-int {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.adm-int__topp {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.adm-int__rubrik {
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  color: var(--color-ink-inverse);
}

.adm-int__ingress,
.adm-int__tomt {
  font-size: var(--text-sm);
  color: var(--color-ink-inverse);
}

.adm-int__besked:empty {
  display: none;
}

.adm-int__besked,
.adm-int__fel {
  border-inline-start: var(--border-thick) solid var(--color-gold);
  padding-inline-start: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-ink-inverse);
}

/* Tabellen får scrolla i sidled på smal skärm i stället för att tvinga hela
 * sidan att göra det. Samma grepp som orderlistan. */
.adm-int__tabellyta {
  overflow-x: auto;
}

.adm-int__tabell {
  inline-size: 100%;
  border-collapse: collapse;
  color: var(--color-ink-inverse);
  font-size: var(--text-sm);
}

.adm-int__tabell th,
.adm-int__tabell td {
  text-align: start;
  padding: 0.45rem 0.5rem;
  border-block-end: var(--border-hairline) solid var(--color-decor);
  vertical-align: top;
}

.adm-int__tabell th {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-xs);
  color: var(--color-gold);
}

/* Antalet är vyns hela syfte och formges därefter: störst på raden,
 * tabulära siffror så att kolumnen linjerar. */
.adm-int__antal {
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-d4);
  line-height: 1;
  color: var(--color-gold);
}

.adm-int__sku,
.adm-int__meta {
  color: var(--color-bone);
  font-size: var(--text-xs);
}

.adm-int__pafylld {
  font-weight: 700;
}

.adm-int__atgarder {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.adm-int__adresser {
  background: var(--color-green-900);
}

.adm-int__lista {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.adm-int__epost {
  font-weight: 700;
}

.adm-int__samtycke {
  display: block;
  font-size: var(--text-xs);
  color: var(--color-bone);
  max-inline-size: 60ch;
}
`;function Ua({onOautentiserad:a}){const[t,s]=r.useState(""),[n,m]=r.useState(""),[o,i]=r.useState(0),[d,b]=r.useState(!0),[k,v]=r.useState(!1),[g,p]=r.useState(""),[j,_]=r.useState(null),c=r.useCallback(async()=>{b(!0);const u=await na();if(b(!1),u.ok){_(null),s(u.data.text),m(u.data.text),i(u.data.antalRater);return}if(M(u)){a();return}_(u)},[a]);r.useEffect(()=>{c()},[c]);async function x(u){if(u.preventDefault(),k)return;v(!0),p("");const w=await sa(t);if(v(!1),w.ok){_(null),m(w.data.text),s(w.data.text),p(w.data.text.trim()===""?"Texten är tömd. Lokal upphämtning går inte längre att välja i kassan.":"Sparat. Texten visas nu i kassan, på orderbekräftelsen och på kvittot.");return}if(M(w)){a();return}_(w)}const h=ie-t.length,T=t!==n,F=h<0;return e.jsxs("section",{className:"adm-upp","aria-labelledby":"adm-upp-rubrik",children:[e.jsx("style",{children:Oa}),e.jsx("h2",{className:"adm-upp__rubrik",id:"adm-upp-rubrik",children:"Lokal upphämtning"}),d?e.jsx("p",{className:"adm-upp__text",children:"Hämtar …"}):e.jsxs("form",{className:"adm-upp__form",onSubmit:u=>void x(u),children:[e.jsx("p",{className:"adm-upp__text",children:n.trim()===""?"Fältet är tomt, och därför går lokal upphämtning inte att välja i kassan. Skriv en text för att öppna alternativet.":"Alternativet går att välja i kassan. Töm fältet för att stänga av det."}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-upp-text",children:"Text till kunden"}),e.jsx("textarea",{className:"adm-input adm-upp__falt",id:"adm-upp-text",rows:6,value:t,onChange:u=>{s(u.target.value),g!==""&&p("")},"aria-describedby":"adm-upp-hjalp adm-upp-rakning","aria-invalid":F||void 0}),e.jsx("p",{className:"adm-upp__rakning",id:"adm-upp-rakning","aria-live":"polite",children:F?`${-h} tecken för mycket. Högst ${ie} tecken ryms på kvittot.`:`${h} tecken kvar av ${ie}.`}),e.jsxs("p",{className:"adm-hjalp",id:"adm-upp-hjalp",children:["Skriv var, när och hur upphämtningen går till, med egna ord. Radbrytningar bevaras. Texten visas som text — skriver du HTML-taggar syns taggarna, de tolkas inte. Den fryses på varje order som läggs, så gamla ordrar och kvitton påverkas inte när du ändrar här.",o>1&&` Texten gäller alla ${o} fraktzoner.`]})]}),t.trim()!==""&&e.jsxs("div",{className:"adm-upp__forhands",children:[e.jsx("p",{className:"adm-upp__forhands-rubrik",children:"Så här ser kunden den"}),e.jsx("p",{className:"adm-upp__forhands-text",children:t})]}),e.jsx("p",{className:"adm-upp__besked","aria-live":"polite",children:g}),j&&e.jsx("p",{className:"adm-upp__fel",role:"alert",children:j.meddelande}),e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"submit",className:"adm-knapp",disabled:k,"aria-busy":k||void 0,"aria-disabled":!T||F||void 0,children:k?"Sparar …":"Spara texten"}),T&&e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar",onClick:()=>{s(n),p("")},children:"Ångra ändringen"})]})]})]})}const Oa=`
.adm-upp {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-inline-size: 48rem;
}

.adm-upp__rubrik {
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  color: var(--color-ink-inverse);
}

.adm-upp__form {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.adm-upp__text {
  font-size: var(--text-sm);
  color: var(--color-ink-inverse);
}

.adm-upp__falt {
  font: inherit;
  line-height: 1.5;
  resize: vertical;
}

.adm-upp__rakning {
  font-size: var(--text-xs);
  color: var(--color-ink-inverse-muted);
}

/* Förhandsvisningen ska likna kundens vy, inte panelens: ljus botten, svart
 * text, och pre-line så att radbrytningarna syns precis som de kommer att
 * visas i kassan och på kvittot. */
.adm-upp__forhands {
  background: var(--color-surface);
  border: var(--border-thick) solid var(--color-black);
  padding: 0.75rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.adm-upp__forhands-rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-xs);
  color: var(--color-ink);
}

.adm-upp__forhands-text {
  white-space: pre-line;
  overflow-wrap: anywhere;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.adm-upp__besked:empty {
  display: none;
}

.adm-upp__besked,
.adm-upp__fel {
  border-inline-start: var(--border-thick) solid var(--color-gold);
  padding-inline-start: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-ink-inverse);
}
`,re=50;function Va(a){const t=a.toLowerCase();return t.includes("minor")||t.includes("amount")||t.includes("belopp")||t.includes("pris")||t.includes("price")||t.includes("total")}function Ka(a){return/^-?\d+$/.test(a.trim())}function he({falt:a,varde:t}){return t===null||t===""?e.jsx("span",{className:"adm-audit__tomt",children:"—"}):Va(a)&&Ka(t)?e.jsxs("span",{className:"adm-audit__belopp",children:[e.jsx("span",{className:"adm-audit__ratt",children:t}),e.jsx("span",{className:"adm-audit__formaterat",children:ae(Number(t.trim()))})]}):e.jsx("span",{className:"adm-audit__ratt",children:t})}function Ga({onOautentiserad:a}){const[t,s]=r.useState({action:"",entityType:"",entityId:""}),[n,m]=r.useState({}),[o,i]=r.useState(0),[d,b]=r.useState([]),[k,v]=r.useState(!0),[g,p]=r.useState(null),j=r.useCallback(async()=>{v(!0);const c=await la({...n,limit:re,offset:o});if(v(!1),c.ok){p(null),b(c.data);return}if(M(c)){a();return}p(c)},[n,o,a]);r.useEffect(()=>{j()},[j]);function _(c){c.preventDefault(),i(0),m({...t})}return e.jsxs("div",{className:"adm-kort adm-audit",children:[e.jsx("style",{children:Ha}),e.jsxs("form",{className:"adm-verktyg",onSubmit:_,children:[e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-audit-action",children:"Åtgärd"}),e.jsx("input",{className:"adm-input",id:"adm-audit-action",type:"search",value:t.action??"",onChange:c=>s({...t,action:c.target.value})}),e.jsx("p",{className:"adm-hjalp",children:"T.ex. stock.adjust eller order.status."})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-audit-typ",children:"Objektstyp"}),e.jsx("input",{className:"adm-input",id:"adm-audit-typ",type:"search",value:t.entityType??"",onChange:c=>s({...t,entityType:c.target.value})}),e.jsx("p",{className:"adm-hjalp",children:"T.ex. product, variant, order."})]}),e.jsxs("div",{className:"adm-falt",children:[e.jsx("label",{className:"adm-etikett",htmlFor:"adm-audit-id",children:"Objektets id"}),e.jsx("input",{className:"adm-input",id:"adm-audit-id",type:"search",value:t.entityId??"",onChange:c=>s({...t,entityId:c.target.value})})]}),e.jsx("div",{className:"adm-falt adm-audit__knappfalt",children:e.jsx("button",{type:"submit",className:"adm-knapp adm-knapp--sekundar",children:"Filtrera"})})]}),g&&e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Loggen kunde inte hämtas."})," ",g.meddelande]}),e.jsx("p",{className:"adm-tom","aria-live":"polite",children:k?"Hämtar loggposter …":d.length===0?"Inga loggposter matchar filtret.":`${d.length} loggposter visas.`}),d.length>0&&e.jsx("div",{className:"adm-tabellyta",children:e.jsxs("table",{className:"adm-tabell adm-audit__tabell",children:[e.jsx("caption",{children:"Audit-logg: varje ändring med tidpunkt, vem som gjorde den, vilket fält som ändrades, värdet före och efter, och den angivna orsaken. Belopp visas både som rått heltal i ören och formaterade."}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"När"}),e.jsx("th",{scope:"col",children:"Vem"}),e.jsx("th",{scope:"col",children:"Åtgärd"}),e.jsx("th",{scope:"col",children:"Objekt"}),e.jsx("th",{scope:"col",children:"Fält"}),e.jsx("th",{scope:"col",children:"Gammalt värde"}),e.jsx("th",{scope:"col",children:"Nytt värde"}),e.jsx("th",{scope:"col",children:"Orsak"})]})}),e.jsx("tbody",{children:d.map(c=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"adm-audit__tid",children:Y(c.createdAt)}),e.jsxs("td",{children:[c.actorEmail||"—",e.jsx("span",{className:"adm-audit__aktor",children:c.actorType})]}),e.jsx("td",{className:"adm-audit__kod",children:c.action}),e.jsxs("td",{children:[c.entityLabel||c.entityType,e.jsxs("span",{className:"adm-audit__aktor",children:[c.entityType,c.entityId?` · ${c.entityId}`:""]})]}),e.jsx("td",{className:"adm-audit__kod",children:c.field}),e.jsx("td",{children:e.jsx(he,{falt:c.field,varde:c.oldValue})}),e.jsx("td",{children:e.jsx(he,{falt:c.field,varde:c.newValue})}),e.jsx("td",{className:"adm-audit__orsak",children:c.reason||"—"})]},c.id))})]})}),e.jsxs("div",{className:"adm-sidfot",children:[e.jsxs("div",{className:"adm-knappar",children:[e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:o===0||k,onClick:()=>i(Math.max(0,o-re)),children:"Föregående"}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--sekundar adm-knapp--liten",disabled:d.length<re||k,onClick:()=>i(o+re),children:"Nästa"})]}),e.jsxs("p",{children:["Poster ",o+1,"–",o+d.length]})]})]})}const Ha=`
.adm-audit__knappfalt {
  justify-content: flex-end;
}

.adm-audit__tabell {
  font-size: var(--text-xs);
}

.adm-audit__tid {
  white-space: nowrap;
  font-family: var(--font-body);
  font-weight: 700;
  text-transform: none;
  letter-spacing: var(--tracking-normal);
  font-variant-numeric: tabular-nums;
}

/* Maskinläsbara strängar i fast bredd: åtgärdsnamn och fältnamn jämförs
 * kolumnvis när man letar i loggen, och proportionell text gör det svårt. */
.adm-audit__kod {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: var(--text-2xs);
  word-break: break-word;
}

.adm-audit__aktor {
  display: block;
  font-size: var(--text-2xs);
  color: var(--color-ink-muted);
}

.adm-audit__belopp {
  display: flex;
  flex-direction: column;
}

/* Det råa heltalet i ören. Fast bredd och tabellsiffror, så att två rader går
 * att jämföra siffra för siffra. */
.adm-audit__ratt {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: var(--text-2xs);
  font-variant-numeric: tabular-nums;
  word-break: break-word;
}

/* Det formaterade beloppet. Grön text på vitt, 8.38:1 — den skiljer sig från
 * det råa värdet i både typsnitt och färg, så att ingen råkar läsa av fel
 * kolumn. */
.adm-audit__formaterat {
  color: var(--color-ink-link);
  font-size: var(--text-2xs);
  white-space: nowrap;
}

.adm-audit__tomt {
  color: var(--color-ink-muted);
}

.adm-audit__orsak {
  max-inline-size: 22rem;
}
`,ce=[{id:"produkter",text:"Produkter"},{id:"ordrar",text:"Ordrar"},{id:"returer",text:"Returer"},{id:"intresse",text:"Intresseanmälningar"},{id:"upphamtning",text:"Upphämtning"},{id:"audit",text:"Audit-logg"}];function Ya(){const[a,t]=r.useState({sort:"laddar"}),[s,n]=r.useState("produkter"),[m,o]=r.useState(!1),[i,d]=r.useState(null),b=r.useRef(null),k=r.useRef(!0),v=r.useCallback(async()=>{t({sort:"laddar"});const _=await Ie();if(_.ok){t({sort:"inloggad",user:_.data.user});return}if(M(_)){t({sort:"utloggad"});return}t({sort:"fel",fel:_})},[]);r.useEffect(()=>{v()},[v]),r.useEffect(()=>{d(document.getElementById("adm-kontofack"))},[]),r.useEffect(()=>{if(k.current){k.current=!1;return}b.current?.focus()},[s]);async function g(){m||(o(!0),await Ae(),o(!1),t({sort:"utloggad"}))}if(a.sort==="laddar")return e.jsxs("div",{className:"adm-skal",children:[e.jsx("style",{children:ne}),e.jsx("p",{className:"adm-laddar","aria-live":"polite",children:"Läser in panelen …"})]});if(a.sort==="fel")return e.jsxs("div",{className:"adm-skal",children:[e.jsx("style",{children:ne}),e.jsxs("div",{className:"adm-kort",children:[e.jsxs("p",{className:"adm-fel",role:"alert",children:[e.jsx("strong",{className:"adm-fel__rubrik",children:"Kunde inte läsa in panelen."})," ",a.fel.meddelande]}),e.jsx("button",{type:"button",className:"adm-knapp",onClick:()=>void v(),children:"Försök igen"})]})]});if(a.sort==="utloggad")return e.jsxs("div",{className:"adm-skal",children:[e.jsx("style",{children:ne}),e.jsx(ma,{onInloggad:_=>t({sort:"inloggad",user:_})})]});const{user:p}=a,j=ce.find(_=>_.id===s)??ce[0];return e.jsxs("div",{className:"adm-skal",children:[e.jsx("style",{children:ne}),i?we.createPortal(e.jsx(xe,{user:p,loggarUt:m,onLoggaUt:g}),i):e.jsx(xe,{user:p,loggarUt:m,onLoggaUt:g}),e.jsx("nav",{className:"adm-nav","aria-label":"Adminvyer",children:e.jsx("ul",{className:"adm-nav__lista",children:ce.map(_=>{const c=_.id===s;return e.jsx("li",{children:e.jsx("button",{type:"button",className:"adm-nav__knapp","aria-current":c?"true":void 0,onClick:()=>n(_.id),children:_.text})},_.id)})})}),e.jsxs("section",{className:"adm-vy","aria-labelledby":"adm-vy-rubrik",children:[e.jsx("h2",{className:"adm-vy__rubrik",id:"adm-vy-rubrik",tabIndex:-1,ref:b,children:j.text}),s==="produkter"&&e.jsx(Ca,{onOautentiserad:()=>t({sort:"utloggad"})}),s==="ordrar"&&e.jsx(Ia,{onOautentiserad:()=>t({sort:"utloggad"})}),s==="returer"&&e.jsx(Ea,{onOautentiserad:()=>t({sort:"utloggad"})}),s==="intresse"&&e.jsx(Ba,{onOautentiserad:()=>t({sort:"utloggad"})}),s==="upphamtning"&&e.jsx(Ua,{onOautentiserad:()=>t({sort:"utloggad"})}),s==="audit"&&e.jsx(Ga,{onOautentiserad:()=>t({sort:"utloggad"})})]})]})}function xe({user:a,loggarUt:t,onLoggaUt:s}){return e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"adm-konto__epost",children:[e.jsx("span",{className:"sr-only",children:"Inloggad som "}),a.email,e.jsx("span",{className:"adm-konto__roll",children:a.role==="admin"?"Administratör":"Personal"})]}),e.jsx("button",{type:"button",className:"adm-knapp adm-knapp--ljus",onClick:s,disabled:t,"aria-busy":t||void 0,children:t?"Loggar ut …":"Logga ut"})]})}const ne=`
.adm-skal {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* --- Kort: den ljusa läsytan ------------------------------------------------
 * Panelens innehåll är tabeller och formulär, alltså text man läser länge.
 * Svart på vitt mäter 19.44:1. Den mörka grundtonen bär ramen runt omkring,
 * inte brödtexten. */
.adm-kort {
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* FOKUSRINGEN INUTI KORTET.
 * Hela panelen står i [data-surface='dark'], och global.css ger då guld som
 * fokusfärg. Guld mot vitt mäter 1.30:1 — ringen hade varit osynlig på just
 * de ytor där man faktiskt fyller i formulär. Inuti ett ljust kort gäller
 * därför den gröna ringen igen (8.38:1 mot vitt).
 * Regeln ligger utanför @layer och vinner därför över global.css. */
.adm-kort :focus-visible {
  outline-color: var(--color-focus);
}

/* Länkar inuti ljusa kort: guld på vitt är oläsligt, grönt är 8.38:1. */
.adm-kort a {
  color: var(--color-ink-link);
}

.adm-kort a:hover {
  color: var(--color-ink);
}

.adm-kort__rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink-muted);
}

.adm-laddar {
  color: var(--color-ink-inverse-muted);
  font-size: var(--text-sm);
}

/* --- Kontorad i sidhuvudet ------------------------------------------------ */
.adm-konto__epost {
  color: var(--color-ink-inverse-muted);
  font-size: var(--text-sm);
}

/* Rollen som guldyta med svart text, 14.96:1. Guld bär aldrig text på ljust —
 * här är guldet BOTTEN och texten svart, vilket är den tillåtna riktningen. */
.adm-konto__roll {
  display: inline-block;
  margin-inline-start: 0.5rem;
  padding: 0.05rem 0.4rem;
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  border-radius: var(--radius-xs);
  font-family: var(--font-display);
  font-size: var(--text-2xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

/* --- Vynavigering --------------------------------------------------------- */
.adm-nav__lista {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Oaktiv flik: genomskinlig yta med guldram på green-900. Bone-texten ligger
 * på 11.98:1. */
.adm-nav__knapp {
  min-block-size: 2.75rem;
  padding: 0.5rem 1rem;
  border: var(--border-thick) solid var(--color-decor-gold);
  border-radius: var(--radius-sm);
  background-color: transparent;
  color: var(--color-ink-inverse-muted);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  cursor: pointer;
  transition:
    background-color var(--motion-fast) var(--ease-out),
    color var(--motion-fast) var(--ease-out);
}

.adm-nav__knapp:hover {
  background-color: var(--color-surface-inverse);
  color: var(--color-ink-inverse);
}

/* VALD VY: guldyta med svart text (14.96:1). Markeringen är inte bara färg —
 * ytan fylls helt, alltså ändras ljusheten kraftigt, och aria-current bär
 * samma information för den som inte ser någon av dem. */
.adm-nav__knapp[aria-current='true'] {
  background-color: var(--color-surface-accent);
  color: var(--color-black);
}

/* --- Vy ------------------------------------------------------------------- */
.adm-vy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.adm-vy__rubrik {
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  color: var(--color-ink-inverse);
}

/* Fokusringen på rubriken syns bara när skript flyttat fokus dit. Utan den
 * hade vybytet varit osynligt för den som ser men inte hör. */
.adm-vy__rubrik:focus-visible {
  outline: var(--border-thick) solid var(--color-focus-inverse);
  outline-offset: 0.25rem;
}

/* --- Formulärprimitiver --------------------------------------------------- */
.adm-falt {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-inline-size: 0;
}

.adm-etikett {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink-muted);
}

.adm-input,
.adm-textarea,
.adm-select {
  min-block-size: 2.75rem;
  padding: 0.5rem 0.65rem;
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  font-size: var(--text-sm);
  inline-size: 100%;
}

.adm-textarea {
  min-block-size: 5rem;
  line-height: var(--text-sm--line-height);
  resize: vertical;
}

/* OGILTIGT FÄLT: ramen blir tjock, inte färgad. Paletten har ingen röd färg,
 * och en färgad ram hade dessutom brutit 1.4.1 på egen hand. Tjockleken är en
 * FORM-skillnad som syns i gråskala och i tvingat högkontrastläge, och
 * felmeddelandet under fältet bär den egentliga informationen. */
.adm-input[aria-invalid='true'],
.adm-textarea[aria-invalid='true'],
.adm-select[aria-invalid='true'] {
  border-width: var(--border-thick);
  border-color: var(--color-black);
}

.adm-hjalp {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* Fältfel. Svart text, fet, med en tjock svart kantlinje till vänster.
 * Inget färgspel — texten bär allt. */
.adm-faltfel {
  border-inline-start: var(--border-thick) solid var(--color-black);
  padding-inline-start: 0.5rem;
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-ink);
}

/* Fel- och varningsruta: guldyta, svart text (14.96:1), tjock svart ram.
 * Se WCAG 1.4.1 — texten säger vad som hänt, guldet är bara eftertryck. */
.adm-fel {
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  padding: 0.65rem 0.8rem;
  font-size: var(--text-sm);
}

.adm-fel__rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

/* Kvittensruta efter en lyckad åtgärd. Grön yta med vit text (8.38:1) —
 * INTE signalgrönt, som varken får bära text eller ligga under text. */
.adm-klart {
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  padding: 0.65rem 0.8rem;
  font-size: var(--text-sm);
}

/* --- Knappar -------------------------------------------------------------- */
.adm-knapp {
  min-block-size: 2.75rem;
  padding: 0.55rem 1.1rem;
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  cursor: pointer;
  transition: background-color var(--motion-fast) var(--ease-out);
}

/* Hover går MÖRKARE: 8.38:1 blir 13.41:1. Kontrasten stiger när man pekar. */
.adm-knapp:not(:disabled):hover {
  background-color: var(--color-surface-hero);
}

.adm-knapp:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-ink);
  cursor: not-allowed;
}

/* Sekundär: samma mått, ihålig. Grön text på vitt, 8.38:1. */
.adm-knapp--sekundar {
  background-color: var(--color-surface-raised);
  color: var(--color-ink-link);
  border-color: var(--color-line);
}

.adm-knapp--sekundar:not(:disabled):hover {
  background-color: var(--color-surface);
  color: var(--color-ink);
}

/* Ljus variant för mörk botten (sidhuvudet). Bone-yta, svart text, 17.36:1. */
.adm-knapp--ljus {
  background-color: var(--color-surface);
  color: var(--color-ink);
  border-color: var(--color-black);
}

.adm-knapp--ljus:not(:disabled):hover {
  background-color: var(--color-surface-raised);
}

/* Ingripande åtgärd (ta bort, avvisa). Paletten har ingen röd färg, så
 * allvaret bärs av guldytan med svart text och av ordet på knappen. Att låna
 * signalgrönt hit hade varit fel på två sätt: fel betydelse, och 2.99:1. */
.adm-knapp--ingrepp {
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  border-color: var(--color-black);
}

.adm-knapp--ingrepp:not(:disabled):hover {
  background-color: var(--color-surface-raised);
}

.adm-knapp--liten {
  min-block-size: 2.25rem;
  padding: 0.35rem 0.7rem;
  font-size: var(--text-xs);
}

.adm-knappar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

/* --- Verktygsrad (filter) ------------------------------------------------- */
.adm-verktyg {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 0.75rem;
  align-items: end;
}

/* --- Tabeller -------------------------------------------------------------
 * Riktiga tabeller, inte div:ar. En tabellcell utan kolumnrubrik går inte att
 * placera för den som läser med skärmläsare: "2026-01-14, Anna, 4" säger
 * ingenting, "Datum 2026-01-14, Handläggare Anna, Antal 4" säger allt.
 * Därför caption, thead och th med scope="col" överallt. (Taggnamnen skrivs
 * utan vinkelparenteser här: strängen får inte innehålla dem, se ovan.) */
.adm-tabellyta {
  overflow-x: auto;
}

.adm-tabell {
  inline-size: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.adm-tabell caption {
  text-align: start;
  padding-block-end: 0.5rem;
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

.adm-tabell th,
.adm-tabell td {
  text-align: start;
  padding: 0.5rem 0.6rem;
  border-block-end: var(--border-hairline) solid var(--color-line-soft);
  vertical-align: top;
}

.adm-tabell thead th {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink-muted);
  border-block-end: var(--border-thick) solid var(--color-line);
  white-space: nowrap;
}

.adm-tabell tbody tr:nth-child(even) {
  background-color: var(--color-surface);
}

.adm-tabell__siffra {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.adm-tom {
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

/* --- Sidbrytning ---------------------------------------------------------- */
.adm-sidfot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}
`;export{Ya as default};
