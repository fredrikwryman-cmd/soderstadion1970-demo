import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.-iFofLld.js";import{a as re,f as ae}from"./money.DJkdqdQI.js";const te="http://localhost:4000".replace(/\/+$/,"");function z(a,...o){for(const f of o){const m=a[f];if(typeof m=="string"&&m.trim()!=="")return m}}function ne(a){return a===400?"Något i anmälan gick inte att godta. Se över uppgifterna och försök igen.":a===404?"Vi hittar ingen order med de uppgifterna.":a===409?"Anmälan går inte att göra just nu. Läs förklaringen och hör av dig om något är oklart.":a===413?"Anmälan är för stor. Korta ner texten och försök igen.":a===429?"För många försök på kort tid. Vänta en stund och försök igen.":a>=500?"Något gick fel hos oss. Din anmälan skickades inte — försök gärna igen om en stund.":"Något gick fel. Försök igen."}async function G(a,o={}){const{metod:f="GET",kropp:m}=o;let u;try{u=await fetch(`${te}${a}`,{method:f,credentials:"include",headers:{accept:"application/json",...m!==void 0?{"content-type":"application/json"}:{}},body:m!==void 0?JSON.stringify(m):void 0})}catch{return{ok:!1,kod:"natverksfel",meddelande:"Vi når inte butiken just nu. Kontrollera uppkopplingen och försök igen. Kom inget svar vet vi inte om anmälan hann fram — gör om den, dubbletter nekas automatiskt."}}const b=await u.text().catch(()=>"");let v;if(b.trim()!=="")try{v=JSON.parse(b)}catch{if(u.ok)return{ok:!1,kod:"ogiltigt_svar",meddelande:"Vi fick ett svar vi inte kunde tolka. Försök igen.",status:u.status};v=void 0}if(!u.ok){const p=v&&typeof v=="object"?v:{},N=p.error&&typeof p.error=="object"?p.error:{};return{ok:!1,kod:z(N,"code","kod")??z(p,"kod","code")??`http_${u.status}`,meddelande:z(N,"message","meddelande")??z(p,"meddelande","message")??ne(u.status),status:u.status}}return{ok:!0,data:v,status:u.status}}function se(a){const o=new URLSearchParams("token"in a?{token:a.token}:{ordernummer:a.ordernummer,epost:a.epost});return G(`/api/returns?${o.toString()}`)}function ie(a,o,f){return G("/api/returns",{metod:"POST",kropp:{...a,lines:o,reason:f}})}function A(a,o="SEK"){try{return re(a,o)}catch{return"—"}}function Q(a){try{return ae(a)}catch{return"—"}}function D(a){const o=new Date(a);if(Number.isNaN(o.getTime()))return a;try{return new Intl.DateTimeFormat("sv-SE",{dateStyle:"long",timeStyle:"short",timeZone:"Europe/Stockholm"}).format(o)}catch{return a}}function oe(a){const o=new Date(a);if(Number.isNaN(o.getTime()))return a;try{return new Intl.DateTimeFormat("sv-SE",{dateStyle:"long",timeZone:"Europe/Stockholm"}).format(o)}catch{return a}}const le=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function ge(){const a=s.useId(),[o,f]=s.useState("identifiering"),[m,u]=s.useState(""),[b,v]=s.useState(""),[p,N]=s.useState(""),[d,H]=s.useState(null),[C,P]=s.useState(null),[E,T]=s.useState({}),[V,M]=s.useState({}),[K,B]=s.useState(""),[k,L]=s.useState(null),[l,x]=s.useState({}),[y,I]=s.useState(!1),[U,h]=s.useState(""),_=s.useRef(!1),R=s.useRef({}),q=s.useRef(null);function c(e){return`${a}-fel-${e}`}function j(e){return t=>{R.current[e]=t}}function $(e,t){for(const n of t)if(e[n]){R.current[n]?.focus();return}}s.useEffect(()=>{if(typeof window>"u")return;const e=new URLSearchParams(window.location.search).get("token")?.trim()??"";e!==""&&(N(e),O({token:e}))},[]);async function O(e){if(_.current)return;_.current=!0,I(!0),x({}),h("Hämtar din order …");const t=await se(e);if(_.current=!1,I(!1),!t.ok){const n="token"in e?"token":"ordernummer",i={[n]:t.meddelande};x(i),h(t.meddelande),window.requestAnimationFrame(()=>$(i,[n]));return}H(t.data),P(e),T({}),M(Object.fromEntries(t.data.lines.filter(n=>n.returnableQuantity>0).map(n=>[n.orderItemId,"1"]))),f("val"),h(t.data.withdrawable?`Ordern ${t.data.orderNumber} hämtad. Välj vad du vill ångra.`:`Ordern ${t.data.orderNumber} hämtad. ${t.data.notWithdrawableReason??""}`)}function W(){if(_.current)return;const e={},t=p.trim();if(t!==""){O({token:t});return}if(m.trim()===""&&(e.ordernummer="Fyll i ditt ordernummer. Det står i din orderbekräftelse och börjar med SS-."),b.trim()===""?e.epost="Fyll i den e-postadress du använde när du beställde.":le.test(b.trim())||(e.epost="E-postadressen ser inte ut att vara komplett. Kontrollera stavningen."),Object.keys(e).length>0){x(e),h("Formuläret kunde inte skickas. Se felen vid fälten."),window.requestAnimationFrame(()=>$(e,["ordernummer","epost","token"]));return}O({ordernummer:m.trim(),epost:b.trim()})}function J(e,t){t&&(T(n=>({...n,[e]:!n[e]})),x(n=>{const i={...n};return delete i.urval,i}))}function Z(e,t){M(n=>({...n,[e]:t}))}function X(){if(_.current||d===null||C===null)return;const e={},t=["urval"],n=[];for(const i of d.lines){if(i.returnableQuantity===0||(t.push(`antal-${i.orderItemId}`),!E[i.orderItemId]))continue;const S=(V[i.orderItemId]??"").trim(),g=Number.parseInt(S,10);if(S===""||!Number.isInteger(g)||g<1){e[`antal-${i.orderItemId}`]="Ange ett antal på minst 1. Skriv siffror, till exempel 1.";continue}if(g>i.returnableQuantity){e[`antal-${i.orderItemId}`]=`Du kan ångra högst ${i.returnableQuantity} st av den här raden.`;continue}n.push({orderItemId:i.orderItemId,qty:g})}if(n.length===0&&Object.keys(e).length===0&&(e.urval="Kryssa i minst en vara som du vill ångra."),Object.keys(e).length>0){x(e),h("Anmälan kunde inte skickas. Se felen vid fälten."),window.requestAnimationFrame(()=>$(e,t));return}Y(C,n)}async function Y(e,t){if(_.current)return;_.current=!0,I(!0),x({}),h("Skickar din anmälan …");const n=await ie(e,t,K.trim());if(_.current=!1,I(!1),!n.ok){const i={server:n.meddelande};x(i),h(n.meddelande),window.requestAnimationFrame(()=>$(i,["server"]));return}L(n.data.kvitto),f("kvittens"),h(`Din anmälan är registrerad ${D(n.data.kvitto.confirmationSentAt)}.`),window.requestAnimationFrame(()=>q.current?.focus())}return r.jsxs("div",{className:"ss-ang",children:[r.jsx("style",{children:de}),r.jsx("p",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:U}),o==="identifiering"&&r.jsxs("form",{className:"ss-ang__form",onSubmit:e=>{e.preventDefault(),W()},noValidate:!0,children:[r.jsxs("fieldset",{className:"ss-ang__falt",children:[r.jsx("legend",{className:"ss-ang__legend",children:"Hämta din order"}),r.jsx("p",{className:"ss-ang__hjalp",children:"Ange ordernummer och e-postadress, eller använd koden från länken i din bekräftelse."}),r.jsxs("div",{className:"ss-ang__rutt",children:[r.jsx("label",{className:"ss-ang__etikett",htmlFor:`${a}-ordernummer`,children:"Ordernummer"}),r.jsx("input",{className:"ss-ang__input",id:`${a}-ordernummer`,name:"ordernummer",type:"text",inputMode:"text",autoComplete:"off",autoCapitalize:"characters",spellCheck:!1,value:m,onChange:e=>u(e.target.value),"aria-invalid":l.ordernummer?!0:void 0,"aria-describedby":l.ordernummer?`${c("ordernummer")} ${a}-hjalp-ordernummer`:`${a}-hjalp-ordernummer`,ref:j("ordernummer")}),r.jsx("p",{className:"ss-ang__hjalp",id:`${a}-hjalp-ordernummer`,children:"Till exempel SS-100042. Numret står överst i din orderbekräftelse."}),l.ordernummer&&r.jsx("p",{className:"ss-ang__fel",id:c("ordernummer"),children:l.ordernummer})]}),r.jsxs("div",{className:"ss-ang__rutt",children:[r.jsx("label",{className:"ss-ang__etikett",htmlFor:`${a}-epost`,children:"E-postadress"}),r.jsx("input",{className:"ss-ang__input",id:`${a}-epost`,name:"epost",type:"email",inputMode:"email",autoComplete:"email",spellCheck:!1,value:b,onChange:e=>v(e.target.value),"aria-invalid":l.epost?!0:void 0,"aria-describedby":l.epost?`${c("epost")} ${a}-hjalp-epost`:`${a}-hjalp-epost`,ref:j("epost")}),r.jsx("p",{className:"ss-ang__hjalp",id:`${a}-hjalp-epost`,children:"Samma adress som du uppgav i kassan."}),l.epost&&r.jsx("p",{className:"ss-ang__fel",id:c("epost"),children:l.epost})]}),r.jsxs("div",{className:"ss-ang__rutt",children:[r.jsx("label",{className:"ss-ang__etikett",htmlFor:`${a}-token`,children:"Kod från länken i din bekräftelse"}),r.jsx("input",{className:"ss-ang__input",id:`${a}-token`,name:"token",type:"text",inputMode:"text",autoComplete:"off",spellCheck:!1,value:p,onChange:e=>N(e.target.value),"aria-invalid":l.token?!0:void 0,"aria-describedby":l.token?`${c("token")} ${a}-hjalp-token`:`${a}-hjalp-token`,ref:j("token")}),r.jsx("p",{className:"ss-ang__hjalp",id:`${a}-hjalp-token`,children:"Fylls i automatiskt om du kom hit via länken i din bekräftelse. Har du en kod behöver du inte fylla i ordernummer och e-post."}),l.token&&r.jsx("p",{className:"ss-ang__fel",id:c("token"),children:l.token})]})]}),r.jsx("button",{className:"ss-ang__knapp",type:"submit",disabled:y,"aria-busy":y||void 0,children:y?"Hämtar …":"Hämta min order"})]}),o==="val"&&d!==null&&r.jsxs("form",{className:"ss-ang__form",onSubmit:e=>{e.preventDefault(),X()},noValidate:!0,children:[r.jsxs("dl",{className:"ss-ang__huvud",children:[r.jsx("dt",{children:"Ordernummer"}),r.jsx("dd",{className:"ss-ang__huvudvarde",children:d.orderNumber}),r.jsx("dt",{children:"Ångerfristen gäller till och med"}),r.jsx("dd",{children:d.withdrawalDeadline?oe(d.withdrawalDeadline):"Kunde inte fastställas"})]}),!d.withdrawable&&r.jsx("p",{className:"ss-ang__notis",children:d.notWithdrawableReason??"Den här ordern går inte att ångra digitalt just nu."}),r.jsxs("fieldset",{className:"ss-ang__falt",children:[r.jsx("legend",{className:"ss-ang__legend",children:"Vad vill du ångra?"}),l.urval&&r.jsx("p",{className:"ss-ang__fel",id:c("urval"),children:l.urval}),r.jsx("ul",{className:"ss-ang__rader",role:"list",children:d.lines.map((e,t)=>{const n=e.returnableQuantity>0&&d.withdrawable,i=`${a}-kryss-${e.orderItemId}`,S=`${a}-antal-${e.orderItemId}`,g=`${a}-info-${e.orderItemId}`,F=l[`antal-${e.orderItemId}`],ee=d.lines.findIndex(w=>w.returnableQuantity>0)===t;return r.jsxs("li",{className:"ss-ang__rad",children:[r.jsxs("div",{className:"ss-ang__kryssyta",children:[r.jsx("input",{className:"ss-ang__kryss",type:"checkbox",id:i,checked:E[e.orderItemId]===!0,"aria-disabled":n?void 0:!0,"aria-describedby":l.urval&&n?`${g} ${c("urval")}`:g,onChange:()=>J(e.orderItemId,n),ref:w=>{ee&&(R.current.urval=w)}}),r.jsxs("label",{className:"ss-ang__kryssetikett",htmlFor:i,children:[e.titleSnapshot,e.variantSnapshot!==""&&r.jsxs("span",{className:"ss-ang__variant",children:[" · ",e.variantSnapshot]})]})]}),r.jsx("p",{className:"ss-ang__radinfo",id:g,children:e.returnableQuantity===0?r.jsxs(s.Fragment,{children:["Redan anmäld som ångrad (",e.alreadyReturned," av ",e.quantity," st). Går inte att välja igen."]}):r.jsxs(s.Fragment,{children:[e.returnableQuantity," av ",e.quantity," st kvar att ångra. Styckpris ",A(e.unitPriceMinor,d.currency),d.vatRegistered===!1?".":r.jsxs(s.Fragment,{children:[", varav moms ",Q(e.vatRate),"."]})]})}),e.returnableQuantity>0&&r.jsxs("div",{className:"ss-ang__antalyta",children:[r.jsxs("label",{className:"ss-ang__etikett",htmlFor:S,children:["Antal att ångra",r.jsxs("span",{className:"sr-only",children:[" ","av ",e.titleSnapshot,e.variantSnapshot!==""?` ${e.variantSnapshot}`:""]})]}),r.jsx("input",{className:"ss-ang__antal",type:"number",id:S,name:`antal-${e.orderItemId}`,min:1,max:e.returnableQuantity,step:1,inputMode:"numeric",value:V[e.orderItemId]??"1",onChange:w=>Z(e.orderItemId,w.target.value),"aria-invalid":F?!0:void 0,"aria-describedby":F?`${c(`antal-${e.orderItemId}`)} ${g}`:g,ref:j(`antal-${e.orderItemId}`)}),F&&r.jsx("p",{className:"ss-ang__fel",id:c(`antal-${e.orderItemId}`),children:F})]})]},e.orderItemId)})})]}),r.jsxs("div",{className:"ss-ang__rutt",children:[r.jsx("label",{className:"ss-ang__etikett",htmlFor:`${a}-reason`,children:"Anledning (valfritt)"}),r.jsx("textarea",{className:"ss-ang__textarea",id:`${a}-reason`,name:"reason",rows:3,maxLength:2e3,value:K,onChange:e=>B(e.target.value),"aria-describedby":`${a}-hjalp-reason`,ref:j("reason")}),r.jsx("p",{className:"ss-ang__hjalp",id:`${a}-hjalp-reason`,children:"Du behöver inte motivera varför du ångrar dig. Skriv gärna ändå — det hjälper oss att bli bättre."})]}),l.server&&r.jsx("p",{className:"ss-ang__fel ss-ang__fel--server",id:c("server"),tabIndex:-1,ref:j("server"),children:l.server}),r.jsx("button",{className:"ss-ang__knapp",type:"submit",disabled:y||!d.withdrawable,"aria-busy":y||void 0,"aria-describedby":l.server?c("server"):void 0,children:y?"Skickar …":"Anmäl ångrat köp"}),!d.withdrawable&&r.jsx("p",{className:"ss-ang__hjalp",children:"Knappen går inte att använda eftersom ordern inte kan ångras digitalt. Förklaringen står ovanför."})]}),o==="kvittens"&&k!==null&&r.jsxs("div",{className:"ss-ang__kvittens",children:[r.jsx("h2",{className:"ss-ang__kvittensrubrik",tabIndex:-1,ref:q,children:"Din anmälan är registrerad"}),r.jsxs("dl",{className:"ss-ang__huvud",children:[r.jsx("dt",{children:"Ordernummer"}),r.jsx("dd",{className:"ss-ang__huvudvarde",children:k.orderNumber}),r.jsx("dt",{children:"Anmälan mottagen"}),r.jsx("dd",{className:"ss-ang__huvudvarde",children:D(k.requestedAt)}),r.jsx("dt",{children:"Bekräftelse registrerad"}),r.jsx("dd",{children:D(k.confirmationSentAt)}),r.jsx("dt",{children:"Omfattning"}),r.jsx("dd",{children:k.full?"Hela ordern":"Delar av ordern"})]}),r.jsx("h3",{className:"ss-ang__underrubrik",children:"Detta har du ångrat"}),r.jsx("ul",{className:"ss-ang__kvittorader",role:"list",children:k.lines.map(e=>r.jsxs("li",{className:"ss-ang__kvittorad",children:[r.jsxs("span",{className:"ss-ang__kvittovara",children:[e.titleSnapshot,e.variantSnapshot!==""&&r.jsxs("span",{className:"ss-ang__variant",children:[" · ",e.variantSnapshot]})]}),r.jsxs("span",{className:"ss-ang__kvittoantal",children:[r.jsx("span",{className:"sr-only",children:"Antal: "}),e.qty," st"]}),r.jsxs("span",{className:"ss-ang__kvittobelopp",children:[r.jsx("span",{className:"sr-only",children:"Belopp: "}),A(e.amountMinor)]})]},e.id))}),r.jsxs("dl",{className:"ss-ang__summor",children:[d?.vatRegistered!==!1&&Object.entries(k.vatBreakdown).sort((e,t)=>Number(e[0])-Number(t[0])).map(([e,t])=>r.jsxs(s.Fragment,{children:[r.jsxs("dt",{children:["Varav moms ",Q(Number(e))]}),r.jsx("dd",{children:A(t)})]},e)),r.jsx("dt",{className:"ss-ang__totalterm",children:"Belopp"}),r.jsx("dd",{className:"ss-ang__totalvarde",children:A(k.totalAmountMinor)})]}),r.jsxs("p",{className:"ss-ang__notis",children:["Din anmälan är registrerad hos oss med tidsstämpeln ovan. Återbetalning sker enligt villkoren på"," ",r.jsx("a",{href:"/angerratt",children:"sidan om ångerrätt"}),"."]}),r.jsx("p",{className:"ss-ang__hjalp",children:"Spara gärna den här sidan eller skriv ner tidsstämpeln. Det är den som visar när din anmälan kom in."})]})]})}const de=`
.ss-ang {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ss-ang__form,
.ss-ang__kvittens {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-inline-size: 52rem;
}

/* Fieldset måste nollställas: webbläsarens standardram och -padding hör inte
 * hemma i formgivningen, och min-inline-size: 0 behövs för att ett fieldset
 * inte ska vägra krympa under sitt innehåll i ett flexlayout. */
.ss-ang__falt {
  margin: 0;
  padding: 1.25rem;
  border: var(--border-thick) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  min-inline-size: 0;
}

.ss-ang__legend {
  padding: 0 0.4rem;
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

.ss-ang__rutt {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-block-start: 1.25rem;
  max-inline-size: 30rem;
}

.ss-ang__etikett {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

/* Minst 2.75rem hög träffyta. WCAG 2.2 2.5.8 sätter golvet vid 24 CSS-pixlar;
 * ett fält som ska träffas med tummen ligger en bra bit över det. */
.ss-ang__input,
.ss-ang__textarea,
.ss-ang__antal {
  min-block-size: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: var(--border-thick) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-base);
}

.ss-ang__textarea {
  resize: vertical;
  line-height: 1.6;
}

.ss-ang__antal {
  inline-size: 6rem;
  font-variant-numeric: tabular-nums;
}

/* Ogiltigt fält: TJOCKARE ram, alltså en formskillnad. Ingen färgändring —
 * det finns ingen felfärg i paletten, och färg ensam duger ändå inte. */
.ss-ang__input[aria-invalid='true'],
.ss-ang__antal[aria-invalid='true'] {
  border-width: var(--border-sticker);
  border-color: var(--color-black);
}

.ss-ang__hjalp {
  max-inline-size: var(--container-prose);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

/* Felet är text, i full kontrast (svart på bone, 17.36:1), med en tjock
 * vänsterkant som formmarkör. */
.ss-ang__fel {
  max-inline-size: var(--container-prose);
  padding-inline-start: 0.75rem;
  border-inline-start: var(--border-sticker) solid var(--color-black);
  color: var(--color-ink);
  font-size: var(--text-sm);
  font-weight: 600;
}

.ss-ang__fel--server {
  padding: 0.75rem 1rem;
  border: var(--border-thick) solid var(--color-black);
  border-inline-start-width: var(--border-sticker);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-size: var(--text-base);
}

/* Guldyta med SVART text: 8.18:1. Guld duger som botten under svart, aldrig
 * som textfärg på ljus botten. */
.ss-ang__notis {
  max-inline-size: var(--container-prose);
  padding: 0.9rem 1rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-size: var(--text-sm);
  font-weight: 600;
}

.ss-ang__huvud {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.15rem 1.5rem;
  margin: 0;
  padding: 1.25rem;
  border: var(--border-sticker) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-sticker);
}

@media (min-width: 40rem) {
  .ss-ang__huvud {
    grid-template-columns: minmax(10rem, 16rem) minmax(0, 1fr);
    align-items: baseline;
    gap: 0.5rem 1.5rem;
  }
}

.ss-ang__huvud dt {
  font-family: var(--font-display);
  font-size: var(--text-2xs);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  color: var(--color-ink-muted);
}

.ss-ang__huvud dd {
  margin: 0;
  margin-block-end: 0.6rem;
  color: var(--color-ink);
}

@media (min-width: 40rem) {
  .ss-ang__huvud dd {
    margin-block-end: 0;
  }
}

.ss-ang__huvudvarde {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-caps);
  font-variant-numeric: tabular-nums;
}

.ss-ang__rader {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ss-ang__rad {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-block-end: 1.25rem;
  border-block-end: var(--border-hairline) solid var(--color-line-soft);
}

.ss-ang__rad:last-child {
  padding-block-end: 0;
  border-block-end: 0;
}

.ss-ang__kryssyta {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

/* Riktig kryssruta, uppförstorad. Inte dold och ersatt av en ritad ruta —
 * webbläsarens egen kontroll fungerar i tvingat högkontrastläge, med
 * piltangenter, med rösthjälpmedel och utan en rad extra kod. */
.ss-ang__kryss {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  margin-block-start: 0.35rem;
  accent-color: var(--color-surface-primary);
  flex: none;
}

.ss-ang__kryss[aria-disabled='true'] {
  cursor: not-allowed;
}

.ss-ang__kryssetikett {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  line-height: var(--text-lg--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
  cursor: pointer;
  /* Etiketten är träffytan för kryssrutan; minsta höjd enligt WCAG 2.5.8. */
  min-block-size: 2.75rem;
  display: flex;
  align-items: center;
}

/* Redan ångrad rad: genomstruken etikett. Genomstrykning är en FORM-skillnad,
 * och förklaringen står dessutom i klartext under raden. */
.ss-ang__kryss[aria-disabled='true'] + .ss-ang__kryssetikett {
  color: var(--color-out-of-stock);
  text-decoration: line-through;
  text-decoration-thickness: from-font;
  cursor: not-allowed;
}

.ss-ang__variant {
  color: var(--color-ink-muted);
}

.ss-ang__radinfo {
  max-inline-size: var(--container-prose);
  padding-inline-start: 2.25rem;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.ss-ang__antalyta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-inline-start: 2.25rem;
}

/* Primärknapp: green-700 med vit text (6.63:1). Hover går NEDÅT till
 * green-900 (10.39:1) — kontrasten stiger när man interagerar, aldrig
 * tvärtom. */
.ss-ang__knapp {
  align-self: flex-start;
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

.ss-ang__knapp:not(:disabled):hover {
  background-color: var(--color-surface-inverse);
}

/* Inaktiv knapp. Avaktiverade kontroller är undantagna från kontrastkravet,
 * men svart på bone (17.36:1) kostar ingenting och håller texten läsbar. */
.ss-ang__knapp:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-ink);
  box-shadow: none;
  cursor: not-allowed;
}

.ss-ang__kvittensrubrik {
  font-family: var(--font-display);
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
}

.ss-ang__underrubrik {
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

.ss-ang__kvittorader {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ss-ang__kvittorad {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  padding-block-end: 0.75rem;
  border-block-end: var(--border-hairline) solid var(--color-line-soft);
}

@media (min-width: 40rem) {
  .ss-ang__kvittorad {
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: baseline;
    column-gap: 1.5rem;
  }
}

.ss-ang__kvittovara {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
}

.ss-ang__kvittoantal {
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-ang__kvittobelopp {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-display);
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-ang__summor {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.4rem 1rem;
  margin: 0;
  max-inline-size: 30rem;
}

.ss-ang__summor dt {
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

.ss-ang__summor dd {
  margin: 0;
  text-align: end;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-ang__totalterm {
  padding-block-start: 0.5rem;
  border-block-start: var(--border-thick) solid var(--color-line-soft);
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

.ss-ang__totalvarde {
  padding-block-start: 0.5rem;
  border-block-start: var(--border-thick) solid var(--color-line-soft);
  font-family: var(--font-display);
  font-size: var(--text-d4);
  letter-spacing: var(--tracking-display);
}
`;export{ge as default};
