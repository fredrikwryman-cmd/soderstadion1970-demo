import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.-iFofLld.js";import{g as X}from"./cart-api.DoqydmQU.js";import{p as q,a as L,f as Q,v as Z}from"./money.DJkdqdQI.js";function ee({variantId:a,productTitle:t,disabled:o=!1}){const[s,c]=l.useState(!1),[d,n]=l.useState(""),[u,v]=l.useState(!1),f=l.useRef(!1);async function b(){if(f.current||o)return;f.current=!0,c(!0),v(!1),n("");const x=await X(a,1);if(f.current=!1,c(!1),!x.ok){v(!0),n(x.meddelande);return}n(`Tillagd i varukorgen: ${t}.`)}return e.jsxs("div",{className:"ss-atc",children:[e.jsx("style",{children:re}),e.jsxs("button",{type:"button",className:"ss-atc__knapp",onClick:()=>void b(),disabled:o||s,"aria-busy":s||void 0,children:[s?"Lägger till…":"Lägg i varukorgen",e.jsxs("span",{className:"sr-only",children:[" – ",t]})]}),e.jsx("p",{className:u?"ss-atc__besked ss-atc__besked--fel":"ss-atc__besked","aria-live":"polite","aria-atomic":"true",children:d})]})}const re=`
.ss-atc {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
}

.ss-atc__knapp {
  min-block-size: 3rem;
  padding: 0.75rem 2rem;
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  cursor: pointer;
  box-shadow: var(--shadow-sticker-sm);
  transition: background-color var(--motion-fast) var(--ease-out);
}

.ss-atc__knapp:not(:disabled):hover {
  background-color: var(--color-surface-inverse);
}

/* Avaktiverad knapp. Svart på bone (17.36:1) — avaktiverade kontroller är
 * undantagna från kontrastkravet, men läsbarhet kostar ingenting här. Den
 * mjuka ramen och den borttagna skuggan säger att knappen inte ligger
 * "ovanpå" och alltså inte går att trycka på. */
.ss-atc__knapp:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-ink);
  box-shadow: none;
  cursor: not-allowed;
}

.ss-atc__besked {
  max-inline-size: 42ch;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

/* Fel: svart text på guldyta (8.18:1) med svart ram. Guld är en utmärkt
 * BOTTEN under svart text men aldrig en textfärg på ljus botten (2.38:1).
 * Tom sträng ger ingen ruta — :empty ser till att en tom live-region inte
 * ritar ut en färgad kant utan innehåll. */
.ss-atc__besked--fel:not(:empty) {
  padding: 0.5rem 0.7rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-weight: 600;
}
`,te="http://localhost:4000".replace(/\/+$/,"");function E(a,...t){for(const o of t){const s=a[o];if(typeof s=="string"&&s.trim()!=="")return s}}async function ae(a,t,o){let s;try{s=await fetch(`${te}/api/intresseanmalan`,{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({variantId:a,email:t,consentText:o})})}catch{return{ok:!1,kod:"natverksfel",meddelande:"Vi når inte butiken just nu. Kontrollera uppkopplingen och försök igen."}}const c=await s.text().catch(()=>"");let d;try{d=c.trim()===""?void 0:JSON.parse(c)}catch{d=void 0}const n=d&&typeof d=="object"?d:{},u=n.error&&typeof n.error=="object"?n.error:{};return s.ok?{ok:!0,meddelande:E(n,"meddelande","message")??"Tack. Vi hör av oss till den adressen när varan finns igen."}:{ok:!1,kod:E(u,"code","kod")??`http_${s.status}`,meddelande:E(u,"message","meddelande")??"Anmälan gick inte igenom. Försök gärna igen om en stund."}}const G="Din e-postadress sparas enbart för att meddela dig när just den här varan finns i lager igen. Den används inte till något annat, lämnas inte vidare, och raderas när beskedet gått ut eller senast efter sex månader.";function se({variantId:a,variantName:t,productTitle:o}){const s=l.useId(),c=`${s}-epost`,d=`${s}-samtycke`,n=`${s}-fel`,[u,v]=l.useState(""),[f,b]=l.useState(!1),[x,I]=l.useState(!1),[g,m]=l.useState(""),y=l.useRef(!1);async function w(h){if(h.preventDefault(),y.current)return;const S=u.trim();if(S===""){m("Skriv in din e-postadress.");return}y.current=!0,b(!0),m("");const _=await ae(a,S,G);if(y.current=!1,b(!1),!_.ok){m(_.meddelande);return}v(""),I(!0)}return x?e.jsxs("div",{className:"ss-ia ss-ia--klar",role:"status",children:[e.jsx("p",{className:"ss-ia__rubrik",children:"Tack — vi hör av oss."}),e.jsxs("p",{className:"ss-ia__text",children:["Du får ett meddelande när ",o," · ",t," finns i lager igen. Därefter raderas din adress."]}),e.jsx("style",{children:O})]}):e.jsxs("form",{className:"ss-ia",onSubmit:h=>void w(h),noValidate:!0,children:[e.jsx("style",{children:O}),e.jsx("p",{className:"ss-ia__rubrik",children:"Meddela mig när den finns"}),e.jsxs("p",{className:"ss-ia__text",children:[t," är slutsåld. Vill du ha besked när den kommer tillbaka?"]}),e.jsxs("div",{className:"ss-ia__rad",children:[e.jsx("label",{className:"ss-ia__etikett",htmlFor:c,children:"E-postadress"}),e.jsx("input",{className:"ss-ia__falt",id:c,name:"epost",type:"email",inputMode:"email",autoComplete:"email",value:u,onChange:h=>{v(h.target.value),g!==""&&m("")},"aria-describedby":`${d}${g!==""?` ${n}`:""}`,"aria-invalid":g!==""||void 0,disabled:f}),e.jsxs("button",{type:"submit",className:"ss-ia__knapp",disabled:f,"aria-busy":f||void 0,children:[f?"Skickar…":"Meddela mig",e.jsxs("span",{className:"sr-only",children:[" ","– ",o," · ",t]})]})]}),g!==""&&e.jsx("p",{className:"ss-ia__fel",id:n,role:"alert",children:g}),e.jsx("p",{className:"ss-ia__samtycke",id:d,children:G})]})}const O=`
.ss-ia {
  inline-size: 100%;
  border: var(--border-thick) solid var(--color-black);
  padding: 0.85rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ss-ia__rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-ia__text {
  font-size: var(--text-sm);
  color: var(--color-ink);
}

/* Fält och knapp på en rad, som staplar på smal skärm. Etiketten ligger över
 * fältet och tar hela bredden via flex-basis: 100%. */
.ss-ia__rad {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 0.5rem;
}

.ss-ia__etikett {
  flex: 1 1 100%;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-xs);
  color: var(--color-ink);
}

.ss-ia__falt {
  flex: 1 1 12rem;
  min-inline-size: 0;
  font: inherit;
  color: var(--color-ink);
  background: var(--color-surface-raised);
  border: var(--border-hairline) solid var(--color-black);
  padding: 0.45rem 0.55rem;
}

.ss-ia__falt:focus-visible {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 2px;
}

.ss-ia__falt[aria-invalid='true'] {
  border-width: var(--border-thick);
}

.ss-ia__knapp {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-sm);
  color: var(--color-ink-inverse);
  background: var(--color-green-700);
  border: var(--border-hairline) solid var(--color-black);
  padding: 0.45rem 0.9rem;
  cursor: pointer;
  transition: background var(--motion-fast) var(--motion-ease);
}

/* Kontrasten stiger när man interagerar, aldrig tvärtom — samma kedja som
 * köpknappen i VariantPicker. */
.ss-ia__knapp:not(:disabled):hover {
  background: var(--color-green-900);
}

.ss-ia__knapp:focus-visible {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 2px;
}

.ss-ia__knapp:disabled {
  cursor: default;
  opacity: 0.7;
}

/* Fel och samtycke bär båda text, ingen färgkodning. Felet skiljs ut av den
 * tjocka linjen och av fetstilen, inte av rött (WCAG 1.4.1). */
.ss-ia__fel {
  border-inline-start: var(--border-thick) solid var(--color-black);
  padding-inline-start: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-ink);
}

.ss-ia__samtycke {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

.ss-ia--klar {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
`,ne="http://localhost:4000".replace(/\/+$/,"");async function P(a){try{const t=await fetch(`${ne}/api/products/${encodeURIComponent(a)}/status`,{headers:{accept:"application/json"},cache:"no-store"});if(!t.ok)return null;const o=await t.json();if(!o||typeof o!="object")return null;const s=o;return typeof s.serverNow!="string"||typeof s.purchasable!="boolean"?null:o}catch{return null}}function ve({variants:a,basePriceMinor:t,vatRate:o,currency:s="SEK",productTitle:c,momsregistrerad:d=!0,productSlug:n,releaseAt:u=null}){const v=l.useId(),f=`${v}-variant`,b=`${v}-kop-forklaring`,x=`${v}-moms`,[I,g]=l.useState(()=>a.length===0?null:(a.find(p=>p.stock>0)??a[0]).id),[m,y]=l.useState(null),w=l.useRef(0),[h,S]=l.useState(()=>Date.now());l.useEffect(()=>{if(n===void 0)return;let r=!1;async function p(){const k=await P(n);r||k===null||(w.current=new Date(k.serverNow).getTime()-Date.now(),y(k),S(Date.now()))}return p(),()=>{r=!0}},[n]);const _=m!==null?m.releaseAt:u,z=_===null?null:new Date(_).getTime(),K=h+w.current,$=z===null?0:Math.max(0,z-K),j=z!==null&&$>0;l.useEffect(()=>{if(!j)return;const r=window.setInterval(()=>S(Date.now()),1e3);return()=>window.clearInterval(r)},[j]);const M=l.useRef(!1);l.useEffect(()=>{n!==void 0&&(z===null||$>0||m!==null&&m.purchasable||M.current||(M.current=!0,P(n).then(r=>{if(r===null){M.current=!1;return}w.current=new Date(r.serverNow).getTime()-Date.now(),y(r)})))},[n,z,$,m]);const R=m===null?null:new Map(m.variants.map(r=>[r.id,r.stock])),N=R===null?a:a.map(r=>{const p=R.get(r.id);return p===void 0?r:{...r,stock:p}}),i=N.find(r=>r.id===I)??null,V=i?q(t,i.priceDiffMinor):t,F=i?i.stock>0:!1,W=i?F?"I lager":"Slutsåld":"Välj storlek";function J(r){g(r.id)}const T=N.filter(r=>r.measurements.length>0),D=[];for(const r of T)for(const p of r.measurements)D.includes(p.etikett)||D.push(p.etikett);const Y=m!==null?m.soldOut:N.length>0&&N.every(r=>r.stock<=0);return e.jsxs("div",{className:"ss-vp",children:[e.jsx("style",{children:ce}),e.jsxs("fieldset",{className:"ss-vp__falt",children:[e.jsxs("legend",{className:"ss-vp__legend",children:["Välj storlek",e.jsxs("span",{className:"sr-only",children:[" för ",c]})]}),N.length===0?e.jsx("p",{className:"ss-vp__tomt",children:"Inga storlekar är upplagda för den här produkten ännu."}):e.jsx("div",{className:"ss-vp__lista",children:N.map(r=>{const p=r.stock<=0,k=`${v}-${r.id}`;return e.jsxs("div",{className:"ss-vp__alternativ",children:[e.jsx("input",{className:"ss-vp__ikryssare",type:"radio",id:k,name:f,value:r.id,checked:I===r.id,"aria-disabled":p||void 0,onChange:()=>J(r)}),e.jsxs("label",{className:"ss-vp__etikett",htmlFor:k,children:[r.name,p&&e.jsx("span",{className:"sr-only",children:" – slutsåld"})]})]},r.id)})})]}),e.jsxs("p",{className:"ss-vp__status","aria-live":"polite","aria-atomic":"true",children:[e.jsx("span",{className:"sr-only",children:"Pris för valt alternativ: "}),e.jsx("span",{className:"ss-vp__pris",children:L(V,s)}),e.jsx("span",{className:i&&F?"ss-vp__lager ss-vp__lager--i-lager":"ss-vp__lager ss-vp__lager--slut",children:W})]}),i&&i.measurements.length>0&&e.jsxs("div",{className:"ss-vp__matt","aria-live":"polite",children:[e.jsxs("p",{className:"ss-vp__matt-rubrik",children:["Mått för ",i.name]}),e.jsx("ul",{className:"ss-vp__matt-lista",children:i.measurements.map(r=>e.jsxs("li",{className:"ss-vp__matt-post",children:[e.jsx("span",{className:"ss-vp__matt-etikett",children:r.etikett}),e.jsxs("span",{className:"ss-vp__matt-varde",children:[U(r.cm)," cm"]})]},r.etikett))}),T.length>1&&e.jsxs("details",{className:"ss-vp__matt-alla",children:[e.jsx("summary",{className:"ss-vp__matt-oppna",children:"Alla storlekar"}),e.jsx("div",{className:"ss-vp__matt-tabellyta",children:e.jsxs("table",{className:"ss-vp__matt-tabell",children:[e.jsxs("caption",{className:"sr-only",children:["Mått i centimeter för varje storlek av ",c]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Storlek"}),D.map(r=>e.jsx("th",{scope:"col",children:r},r))]})}),e.jsx("tbody",{children:T.map(r=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:r.name}),D.map(p=>{const k=r.measurements.find(H=>H.etikett===p);return e.jsx("td",{children:k?`${U(k.cm)}`:""},p)})]},r.id))})]})}),e.jsx("p",{className:"ss-vp__matt-hjalp",children:"Alla mått i centimeter, mätta på plagget."})]})]}),d&&e.jsxs("p",{className:"ss-vp__moms",id:x,children:["Varav moms ",Q(o),":"," ",L(Z(V,o),s)]}),e.jsxs("div",{className:"ss-vp__kopyta",children:[j&&e.jsxs("div",{className:"ss-vp__slapp",children:[e.jsx("p",{className:"ss-vp__slapp-rubrik",children:"Släpps om"}),e.jsx("p",{className:"ss-vp__slapp-tid","aria-hidden":"true",children:oe($)}),e.jsx("p",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:ie($)}),e.jsx("p",{className:"ss-vp__slapp-tidpunkt",children:_!==null&&le(_)}),e.jsx("p",{className:"ss-vp__slapp-hjalp",children:"Varan går inte att lägga i varukorgen förrän dess. Sidan låser upp sig själv när tiden är inne — du behöver inte ladda om."})]}),!j&&Y&&e.jsx("p",{className:"ss-vp__slutsald",children:"Slutsåld i alla storlekar."}),e.jsx(ee,{variantId:i?.id??"",productTitle:`${c}${i?` · ${i.name}`:""}`,disabled:!i||i.stock<=0||j}),!j&&i&&i.stock<=0&&e.jsx(se,{variantId:i.id,variantName:i.name,productTitle:c},i.id),e.jsx("p",{className:"ss-vp__forklaring",id:b,children:"Butiken är under uppbyggnad. Du kan lägga varor i varukorgen och gå igenom kassan, men ingen riktig betalning sker och ingenting skickas."})]})]})}function U(a){return a.toLocaleString("sv-SE",{maximumFractionDigits:1})}const C=6e4,A=60*C,B=24*A;function oe(a){const t=Math.max(0,Math.floor(a/1e3)),o=Math.floor(t/86400),s=Math.floor(t%86400/3600),c=Math.floor(t%3600/60),d=t%60,n=u=>String(u).padStart(2,"0");return o>0?`${o} d ${n(s)}:${n(c)}:${n(d)}`:`${n(s)}:${n(c)}:${n(d)}`}function ie(a){if(a<=0)return"Släppt.";if(a>=B){const t=Math.round(a/B);return`Släpps om ${t} dygn.`}if(a>=A){const t=Math.round(a/A);return`Släpps om ${t} ${t===1?"timme":"timmar"}.`}if(a>=C){const t=Math.round(a/C);return`Släpps om ${t} ${t===1?"minut":"minuter"}.`}return"Släpps om mindre än en minut."}function le(a){const t=new Date(a);return Number.isNaN(t.getTime())?"":t.toLocaleString("sv-SE",{dateStyle:"full",timeStyle:"short"})}const ce=`
.ss-vp {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Fieldset måste nollställas: webbläsarens standardram och -padding hör inte
 * hemma i formgivningen, och min-inline-size: 0 behövs för att ett fieldset
 * inte ska vägra krympa under sitt innehåll i ett flexlayout. */
.ss-vp__falt {
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
}

.ss-vp__legend {
  padding: 0;
  margin-block-end: 0.6rem;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  color: var(--color-ink-muted);
}

.ss-vp__lista {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.ss-vp__alternativ {
  display: contents;
}

/* Dold för ögat, kvar för tangentbord och hjälpmedel. Samma teknik som
 * .sr-only i global.css. display: none eller visibility: hidden hade tagit
 * bort inputen ur tabbordningen och därmed slagit ut hela mönstret. */
.ss-vp__ikryssare {
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

/* Träffytan. Minst 2.75rem hög — WCAG 2.2 2.5.8 kräver 24x24 CSS-pixlar som
 * golv, och en storleksknapp som ska träffas med tummen på en telefon ska
 * ligga en bra bit över det. */
.ss-vp__etikett {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 3.25rem;
  min-block-size: 2.75rem;
  padding: 0.5rem 0.9rem;
  border: var(--border-thick) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--motion-fast) var(--ease-out),
    color var(--motion-fast) var(--ease-out);
}

.ss-vp__etikett:hover {
  background-color: var(--color-surface);
}

/* Valt alternativ: grön yta med vit text, 6.63:1. Markeringen är inte bara
 * färg — ytan fylls och ramen mörknar, alltså ändras både ljushet och form. */
.ss-vp__ikryssare:checked + .ss-vp__etikett {
  background-color: var(--color-surface-primary);
  border-color: var(--color-green-900);
  color: var(--color-ink-inverse);
}

/* Fokusringen flyttas från den dolda inputen till etiketten. Utan den här
 * regeln skulle ringen ritas runt en 1x1-ruta och vara osynlig. Samma mått
 * och färg som globalregeln i global.css. */
.ss-vp__ikryssare:focus-visible + .ss-vp__etikett {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 0.125rem;
}

/* Slutsålt. Genomstrykning = en FORM-skillnad, inte en färgskillnad, och
 * etiketten bär dessutom en dold " – slutsåld" för uppläsning.
 * Ingen opacity: den hade sänkt kontrasten på text som fortfarande måste
 * gå att läsa. Texten står kvar på svart mot bone, 17.36:1. */
.ss-vp__ikryssare[aria-disabled='true'] + .ss-vp__etikett {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-out-of-stock);
  text-decoration: line-through;
  text-decoration-thickness: from-font;
  cursor: not-allowed;
}

.ss-vp__tomt {
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

.ss-vp__status {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
}

.ss-vp__pris {
  font-family: var(--font-display);
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
}

.ss-vp__lager {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

/* in-stock = green-700, 5.92:1 mot bone. out-of-stock = black, 17.36:1. */
.ss-vp__lager--i-lager {
  color: var(--color-in-stock);
}

.ss-vp__lager--slut {
  color: var(--color-out-of-stock);
}

.ss-vp__moms {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.ss-vp__kopyta {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
}

/* --- storleksmått -------------------------------------------------------
 * Måtten står direkt vid väljaren, utan ram: de är en upplysning om det man
 * just valt, inte en varning. Den tjocka ramen är reserverad för sådant som
 * hindrar ett köp (nedräkning, slutsåld, bevakning). */
.ss-vp__matt {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.ss-vp__matt-rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-xs);
  color: var(--color-ink);
}

.ss-vp__matt-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Etikett och värde på samma rad, med värdet i fetstil. Måtten är få och
 * korta; en definitionslista i två kolumner hade tagit dubbla höjden på en
 * telefon utan att bli tydligare. */
.ss-vp__matt-post {
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-vp__matt-varde {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  margin-inline-start: 0.35rem;
}

.ss-vp__matt-oppna {
  display: inline-block;
  font-size: var(--text-sm);
  color: var(--color-ink-link);
  text-decoration: underline;
  text-underline-offset: 0.15em;
  cursor: pointer;
}

.ss-vp__matt-oppna:focus-visible {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 2px;
}

/* Tabellen scrollar i sidled i stället för att tvinga hela sidan att göra
 * det — en produkt med fem mått blir bred på en telefon. */
.ss-vp__matt-tabellyta {
  overflow-x: auto;
  margin-block-start: 0.5rem;
}

.ss-vp__matt-tabell {
  border-collapse: collapse;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-vp__matt-tabell th,
.ss-vp__matt-tabell td {
  text-align: start;
  padding: 0.3rem 0.75rem 0.3rem 0;
  border-block-end: var(--border-hairline) solid var(--color-line-soft);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.ss-vp__matt-tabell thead th {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: var(--text-xs);
}

.ss-vp__matt-hjalp {
  margin-block-start: 0.35rem;
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* --- drop: nedräkning ---------------------------------------------------
 * Rutan är svart ram på papper, samma språk som resten av butiken. Ingen
 * färg bär information här: texten säger "Släpps om", och tidpunkten står
 * utskriven under. En besökare som inte uppfattar rutan som "spärrad" ska
 * ändå få veta det av orden (WCAG 1.4.1).
 *
 * inline-size: 100% så att rutan blir lika bred som köpytan i stället för att
 * krympa runt siffrorna — align-items: flex-start ovanför gör annars att den
 * hamnar som en smal etikett bredvid knappen. */
.ss-vp__slapp {
  inline-size: 100%;
  border: var(--border-thick) solid var(--color-black);
  padding: 0.75rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ss-vp__slapp-rubrik {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: var(--text-xs);
  color: var(--color-ink);
}

/* Siffrorna byts varje sekund. font-variant-numeric: tabular-nums ger alla
 * siffror samma bredd, så att raden inte hoppar i sidled när en tvåa blir en
 * etta. Utan den vandrar hela rutan medan det räknas ned. */
.ss-vp__slapp-tid {
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-d3);
  line-height: 1.1;
  color: var(--color-ink);
}

.ss-vp__slapp-tidpunkt {
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-vp__slapp-hjalp {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* Slutsåld i sin helhet. Samma kantlinjegrepp som fältfelen i panelen:
 * en tjock linje i läsriktningens början, ingen färgkodning. */
.ss-vp__slutsald {
  border-inline-start: var(--border-thick) solid var(--color-black);
  padding-inline-start: 0.6rem;
  font-weight: 700;
  color: var(--color-ink);
}

/* Primärknapp: green-700 med vit text (6.63:1). Hover går NEDÅT till
 * green-900 (10.39:1) — kontrasten stiger när man interagerar, den sjunker
 * aldrig. green-500 är medvetet inte med i den här kedjan. */
.ss-vp__kop {
  min-block-size: 3rem;
  padding: 0.75rem 2rem;
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  cursor: pointer;
  box-shadow: var(--shadow-sticker-sm);
  transition: background-color var(--motion-fast) var(--ease-out);
}

.ss-vp__kop:not(:disabled):hover {
  background-color: var(--color-surface-inverse);
}

/* Inaktiv knapp. Avaktiverade kontroller är undantagna från kontrastkravet,
 * men svart på bone (17.36:1) kostar ingenting och håller texten läsbar.
 * Den tunna, mjuka ramen och den borttagna skuggan säger att knappen inte
 * ligger "ovanpå" och alltså inte går att trycka på. */
.ss-vp__kop:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-ink);
  box-shadow: none;
  cursor: not-allowed;
}

.ss-vp__forklaring {
  max-inline-size: 42ch;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}
`;export{ve as default};
