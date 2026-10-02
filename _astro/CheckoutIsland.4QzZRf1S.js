import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.-iFofLld.js";import{f as Q}from"./money.DJkdqdQI.js";import{h as X,c as Y,v,d as Z,l as ee}from"./cart-api.DoqydmQU.js";const re=[{kod:"SE",namn:"Sverige"},{kod:"NO",namn:"Norge"},{kod:"DK",namn:"Danmark"},{kod:"FI",namn:"Finland"}],se={email:"",name:"",line1:"",line2:"",postalCode:"",city:"",country:"SE"};function G(){if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const n=crypto.getRandomValues(new Uint8Array(16));return Array.from(n,_=>_.toString(16).padStart(2,"0")).join("")}return`ss-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`}function ie(){const[n,_]=o.useState(null),[z,R]=o.useState(!0),[m,x]=o.useState(null),[t,I]=o.useState(se),[i,b]=o.useState({}),[j,N]=o.useState(!1),[u,w]=o.useState([]),[S,O]=o.useState(!1),[M,U]=o.useState(null),[g,V]=o.useState(""),[A,$]=o.useState(!1),[k,P]=o.useState(null),C=o.useRef(null);C.current===null&&(C.current=G());const T=o.useRef(!1),d=o.useRef({}),L=o.useRef(null);o.useEffect(()=>{let r=!1;return X().then(a=>{r||(R(!1),a.ok?_(a.data):x(a))}),()=>{r=!0}},[]);const D=n?.totals.subtotalMinor??null;o.useEffect(()=>{if(D===null)return;let r=!1;return O(!0),U(null),Y(t.country,D).then(a=>{if(r)return;if(O(!1),!a.ok){w([]),V(""),U(a.meddelande);return}const s=Array.isArray(a.data)?a.data:[];w(s),V(l=>l&&s.some(c=>c.id===l)?l:s[0]?.id??"")}),()=>{r=!0}},[t.country,D]);const B=o.useMemo(()=>u.find(r=>r.id===g)??null,[u,g]);function E(r,a){const s={},l=r.email.trim();l===""?s.email="Fyll i din e-postadress. Orderbekräftelsen skickas dit.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)||(s.email="E-postadressen ser inte komplett ut. Kontrollera stavningen."),r.name.trim()===""&&(s.name="Fyll i namnet som paketet ska skickas till."),r.line1.trim()===""&&(s.line1="Fyll i gatuadress eller box."),r.city.trim()===""&&(s.city="Fyll i ort.");const c=r.postalCode.trim();return c===""?s.postalCode="Fyll i postnummer.":r.country==="SE"&&!/^\d{3}\s?\d{2}$/.test(c)&&(s.postalCode="Svenskt postnummer skrivs med fem siffror, till exempel 123 45."),r.country===""&&(s.country="Välj land."),a===""&&(s.frakt="Välj ett leveranssätt."),s}function p(r,a){I(s=>({...s,[r]:a})),j&&b(E({...t,[r]:a},g))}async function J(){if(T.current)return;N(!0);const r=E(t,g);if(b(r),Object.keys(r).length>0){const F=["email","name","line1","postalCode","city","country","frakt"].find(W=>r[W]);F&&d.current[F]?.focus();return}T.current=!0,$(!0),P(null);const a={name:t.name.trim(),line1:t.line1.trim(),...t.line2.trim()!==""?{line2:t.line2.trim()}:{},postalCode:t.postalCode.trim(),city:t.city.trim(),country:t.country},s=await ee({email:t.email.trim(),shippingRateId:g,shippingAddress:a},C.current);if(T.current=!1,$(!1),!s.ok){P(s),window.requestAnimationFrame(()=>L.current?.focus());return}C.current=G();const l=s.data.order.orderNumber,c=s.data.orderToken;window.location.assign(c?`/order/${encodeURIComponent(l)}?token=${encodeURIComponent(c)}`:"/orderstatus")}if(z)return e.jsxs("div",{className:"ss-co",children:[e.jsx("style",{children:y}),e.jsx("p",{className:"ss-co__laddar",role:"status",children:"Hämtar varukorgen…"})]});if(!n)return e.jsxs("div",{className:"ss-co",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"ss-co__fel",role:"alert",children:[e.jsx("p",{children:m?.meddelande??"Varukorgen gick inte att hämta."}),e.jsx("p",{children:e.jsx("a",{href:"/varukorg",children:"Tillbaka till varukorgen"})})]})]});if(n.lines.length===0)return e.jsxs("div",{className:"ss-co",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"ss-co__tomt",children:[e.jsx("p",{className:"ss-co__tomt-rubrik",children:"Varukorgen är tom"}),e.jsx("p",{children:"Det finns inget att gå till kassan med ännu."}),e.jsx("p",{children:e.jsx("a",{href:"/",children:"Se hela sortimentet"})})]})]});if(n.hasStockProblem)return e.jsxs("div",{className:"ss-co",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"ss-co__sparr",role:"status",children:[e.jsx("p",{children:"En eller flera varor i varukorgen finns inte i det antal du valt. Gå tillbaka och justera varukorgen, så öppnas kassan igen."}),e.jsx("p",{children:e.jsx("a",{href:"/varukorg",children:"Tillbaka till varukorgen"})})]})]});const f=n.totals.currency,K=k?.brister??[],H=Object.keys(n.totals.vatBreakdown).length>0;return e.jsxs("div",{className:"ss-co",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"ss-co__rutnat",children:[e.jsxs("form",{className:"ss-co__formular",onSubmit:r=>{r.preventDefault(),J()},noValidate:!0,children:[e.jsxs("fieldset",{className:"ss-co__falt",children:[e.jsx("legend",{className:"ss-co__legend",children:"Kontakt"}),e.jsx(h,{id:"ss-co-email",etikett:"E-post",varde:t.email,onChange:r=>p("email",r),fel:i.email,typ:"email",autoComplete:"email",inputMode:"email",hjalp:"Hit skickas orderbekräftelsen. Den är också nyckeln till att öppna ordern igen.",registrera:r=>{d.current.email=r}})]}),e.jsxs("fieldset",{className:"ss-co__falt",children:[e.jsx("legend",{className:"ss-co__legend",children:"Leveransadress"}),e.jsx(h,{id:"ss-co-name",etikett:"Namn",varde:t.name,onChange:r=>p("name",r),fel:i.name,autoComplete:"name",registrera:r=>{d.current.name=r}}),e.jsx(h,{id:"ss-co-line1",etikett:"Adress",varde:t.line1,onChange:r=>p("line1",r),fel:i.line1,autoComplete:"address-line1",registrera:r=>{d.current.line1=r}}),e.jsx(h,{id:"ss-co-line2",etikett:"Adressrad 2",valfri:!0,varde:t.line2,onChange:r=>p("line2",r),autoComplete:"address-line2",hjalp:"Till exempel c/o, lägenhetsnummer eller portkod."}),e.jsxs("div",{className:"ss-co__par",children:[e.jsx(h,{id:"ss-co-postalCode",etikett:"Postnummer",varde:t.postalCode,onChange:r=>p("postalCode",r),fel:i.postalCode,autoComplete:"postal-code",inputMode:"numeric",registrera:r=>{d.current.postalCode=r}}),e.jsx(h,{id:"ss-co-city",etikett:"Ort",varde:t.city,onChange:r=>p("city",r),fel:i.city,autoComplete:"address-level2",registrera:r=>{d.current.city=r}})]}),e.jsxs("div",{className:"ss-co__grupp",children:[e.jsx("label",{className:"ss-co__etikett",htmlFor:"ss-co-country",children:"Land"}),e.jsx("select",{id:"ss-co-country",className:"ss-co__valj",name:"country",autoComplete:"country",value:t.country,onChange:r=>p("country",r.target.value),"aria-invalid":i.country?!0:void 0,"aria-describedby":i.country?"ss-co-country-fel":void 0,ref:r=>{d.current.country=r},children:re.map(r=>e.jsx("option",{value:r.kod,children:r.namn},r.kod))}),i.country&&e.jsx("p",{className:"ss-co__faltfel",id:"ss-co-country-fel",children:i.country})]})]}),e.jsxs("fieldset",{className:"ss-co__falt",children:[e.jsx("legend",{className:"ss-co__legend",children:"Leveranssätt"}),S&&e.jsx("p",{className:"ss-co__hjalp",role:"status",children:"Hämtar leveranssätt…"}),M&&e.jsx("p",{className:"ss-co__faltfel",role:"alert",children:M}),!S&&!M&&u.length===0&&e.jsx("p",{className:"ss-co__faltfel",children:"Det finns inga leveranssätt till valt land. Välj ett annat land eller hör av dig till oss."}),e.jsx("div",{className:"ss-co__frakter",children:u.map((r,a)=>{const s=`ss-co-frakt-${r.id}`,l=r.isPlaceholder?`${s}-platshallare`:void 0,c=r.isPickup&&r.pickupText.trim()!==""?`${s}-upphamtning`:void 0,q=[l,c].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:"ss-co__frakt",children:[e.jsx("input",{className:"ss-co__radio",type:"radio",id:s,name:"shippingRateId",value:r.id,checked:g===r.id,onChange:()=>{V(r.id),j&&b(E(t,r.id))},"aria-describedby":q,ref:F=>{a===0&&(d.current.frakt=F)}}),e.jsxs("label",{className:"ss-co__fraktetikett",htmlFor:s,children:[e.jsx("span",{className:"ss-co__frakttitel",children:r.title}),e.jsx("span",{className:"ss-co__fraktpris",children:v(r.effectivePriceMinor,f)})]}),r.isPlaceholder&&e.jsx("p",{className:"ss-co__platshallare",id:l,children:"Platshållarpris. Fraktavtalet är inte klart, så beloppet är påhittat och kan ändras innan butiken öppnar."}),c!==void 0&&e.jsx("p",{className:"ss-co__upphamtning",id:c,children:r.pickupText})]},r.id)})}),i.frakt&&e.jsx("p",{className:"ss-co__faltfel",id:"ss-co-frakt-fel",children:i.frakt})]}),e.jsxs("div",{className:"ss-co__submit",ref:L,tabIndex:-1,children:[k&&e.jsxs("div",{className:"ss-co__serverfel",role:"alert",children:[e.jsx("p",{className:"ss-co__serverfel-rubrik",children:"Köpet gick inte igenom"}),e.jsx("p",{children:k.meddelande}),k.kod==="out_of_stock"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Det här hann ta slut medan du fyllde i uppgifterna:"}),K.length>0?e.jsx("ul",{className:"ss-co__brister",children:K.map((r,a)=>e.jsx("li",{children:Z(r)},r.variantId??a))}):e.jsx("p",{children:"Servern angav inte vilka varor det gällde. Gå tillbaka till varukorgen och se över raderna."}),e.jsx("p",{children:e.jsx("a",{href:"/varukorg",children:"Tillbaka till varukorgen"})})]}),k.kod==="empty_cart"&&e.jsx("p",{children:e.jsx("a",{href:"/",children:"Se hela sortimentet"})}),k.kod==="momsstatus_okand"&&e.jsx("p",{children:"Varukorgen ligger kvar. Ingen beställning har lagts och ingenting har reserverats."})]}),e.jsx("button",{type:"submit",className:"ss-co__primar",disabled:A,"aria-busy":A||void 0,children:A?"Skickar…":"Slutför köp"}),e.jsx("p",{className:"ss-co__hjalp",children:"Butiken är under uppbyggnad. Ingen riktig betalning genomförs och inga kortuppgifter samlas in."})]})]}),e.jsxs("aside",{className:"ss-co__sammanfattning","aria-labelledby":"ss-co-summering",children:[e.jsx("h2",{className:"ss-co__rubrik",id:"ss-co-summering",children:"Din beställning"}),e.jsx("ul",{className:"ss-co__rader",children:n.lines.map(r=>e.jsxs("li",{className:"ss-co__rad",children:[e.jsxs("span",{className:"ss-co__radnamn",children:[r.quantity," × ",r.productTitle,e.jsxs("span",{className:"ss-co__radvariant",children:[" · ",r.variantName]})]}),e.jsx("span",{className:"ss-co__radbelopp",children:v(r.lineTotalMinor,f)})]},r.variantId))}),e.jsxs("dl",{className:"ss-co__summor",children:[e.jsx("dt",{children:"Varor"}),e.jsx("dd",{children:v(n.totals.subtotalMinor,f)}),e.jsx("dt",{children:"Frakt"}),e.jsx("dd",{children:B?v(B.effectivePriceMinor,f):"Välj leveranssätt"}),n.totals.discountMinor!==0&&e.jsxs(e.Fragment,{children:[e.jsx("dt",{children:"Rabatt"}),e.jsx("dd",{children:v(n.totals.discountMinor,f)})]}),H&&Object.entries(n.totals.vatBreakdown).sort((r,a)=>Number(r[0])-Number(a[0])).map(([r,a])=>e.jsxs(o.Fragment,{children:[e.jsxs("dt",{children:["Varav moms ",Q(Number(r))]}),e.jsx("dd",{children:v(a,f)})]},r)),e.jsx("dt",{className:"ss-co__total-term",children:"Att betala"}),e.jsx("dd",{className:"ss-co__total-varde",children:v(n.totals.totalMinor,f)})]}),e.jsxs("p",{className:"ss-co__notis",children:["Fraktkostnaden läggs till av servern när ordern skapas och står på bekräftelsen.",H?" Alla priser visas inklusive moms.":""]}),e.jsx("p",{className:"ss-co__notis",children:e.jsx("a",{href:"/varukorg",children:"Ändra i varukorgen"})})]})]})]})}function h({id:n,etikett:_,varde:z,onChange:R,fel:m,hjalp:x,typ:t="text",autoComplete:I,inputMode:i,valfri:b=!1,registrera:j}){const N=`${n}-fel`,u=`${n}-hjalp`,w=[m?N:null,x?u:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"ss-co__grupp",children:[e.jsxs("label",{className:"ss-co__etikett",htmlFor:n,children:[_,b&&e.jsx("span",{className:"ss-co__valfri",children:" (valfritt)"})]}),e.jsx("input",{className:m?"ss-co__input ss-co__input--fel":"ss-co__input",id:n,type:t,value:z,onChange:S=>R(S.target.value),autoComplete:I,inputMode:i,"aria-invalid":m?!0:void 0,"aria-describedby":w||void 0,ref:j}),x&&e.jsx("p",{className:"ss-co__hjalp",id:u,children:x}),m&&e.jsx("p",{className:"ss-co__faltfel",id:N,children:m})]})}const y=`
.ss-co {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ss-co__laddar {
  display: flex;
  align-items: center;
  min-block-size: 12rem;
  color: var(--color-ink-muted);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

.ss-co__fel,
.ss-co__tomt {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
  padding: 1.5rem 1.25rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
}

.ss-co__tomt-rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink-muted);
}

/* Spärr: guldyta med SVART text, 8.18:1. */
.ss-co__sparr {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
}

.ss-co__rutnat {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

/* Mobilförst: formuläret först, sammanfattningen under. DOM-ordningen är
 * läsordningen och ändras aldrig med CSS-egenskapen order (WCAG 1.3.2). */
@media (min-width: 60rem) {
  .ss-co__rutnat {
    grid-template-columns: minmax(0, 1.3fr) minmax(19rem, 1fr);
    gap: 2.5rem;
  }
}

.ss-co__formular {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* Fieldset måste nollställas: webbläsarens ram och padding hör inte hemma i
 * formgivningen, och min-inline-size: 0 hindrar att den vägrar krympa. */
.ss-co__falt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
  border: 0;
  min-inline-size: 0;
}

.ss-co__legend {
  padding: 0;
  margin-block-end: 0.25rem;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  color: var(--color-ink-muted);
}

.ss-co__grupp {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.ss-co__par {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 30rem) {
  .ss-co__par {
    grid-template-columns: minmax(0, 9rem) minmax(0, 1fr);
  }
}

.ss-co__etikett {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
}

.ss-co__valfri {
  font-weight: 400;
  color: var(--color-ink-muted);
}

/* Fälten: vit yta, svart text (19.44:1), ram i green-700 (6.63:1 mot vitt,
 * långt över de 3:1 som 1.4.11 kräver av en gränssnittskontur).
 * min-block-size 2.75rem för träffytan (2.5.8). */
.ss-co__input,
.ss-co__valj {
  min-block-size: 2.75rem;
  inline-size: 100%;
  padding: 0.5rem 0.7rem;
  border: var(--border-thick) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  font-size: var(--text-base);
}

/* Fel markeras med en TJOCKARE, SVART ram — en form- och tjockleksskillnad,
 * inte bara en färgskillnad. Meddelandet under fältet bär informationen. */
.ss-co__input--fel {
  border-color: var(--color-black);
  border-width: var(--border-sticker);
}

.ss-co__hjalp {
  max-inline-size: 60ch;
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* Felmeddelande: svart text på bone/vitt (17-19:1), fet, med en svart
 * indragen kant som visuell ankarpunkt. Ingen röd hexkod — paletten har
 * ingen röd, och en påhittad sådan hade stått utanför tokens. */
.ss-co__faltfel {
  max-inline-size: 60ch;
  padding-inline-start: 0.6rem;
  border-inline-start: var(--border-sticker) solid var(--color-black);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
}

/* Upphämtningstexten. pre-line bevarar radbrytningarna men slår ihop
 * överflödiga mellanslag — det som skrevs på tre rader visas på tre rader.
 * overflow-wrap: anywhere så att en lång adress eller URL inte spränger
 * layouten på en telefon. */
.ss-co__upphamtning {
  white-space: pre-line;
  overflow-wrap: anywhere;
  border-inline-start: var(--border-thick) solid var(--color-black);
  padding-inline-start: 0.5rem;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-co__frakter {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ss-co__frakt {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

/* Radioknappen döljs för ögat men INTE för tangentbordet — samma teknik som
 * i VariantPicker. display: none hade tagit bort den ur tabbordningen och
 * slagit ut hela mönstret. */
.ss-co__radio {
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

.ss-co__fraktetikett {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-block-size: 3rem;
  padding: 0.7rem 0.9rem;
  border: var(--border-thick) solid var(--color-line);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  cursor: pointer;
  transition: background-color var(--motion-fast) var(--ease-out);
}

.ss-co__fraktetikett:hover {
  background-color: var(--color-surface);
}

/* Valt alternativ: grön yta med vit text (6.63:1). Markeringen ändrar både
 * ytfyllnad och ramfärg — alltså inte enbart en färgnyans. */
.ss-co__radio:checked + .ss-co__fraktetikett {
  background-color: var(--color-surface-primary);
  border-color: var(--color-green-900);
  color: var(--color-ink-inverse);
}

/* Fokusringen flyttas från den dolda inputen till etiketten. Utan den här
 * regeln ritas ringen runt en 1x1-ruta och är osynlig. */
.ss-co__radio:focus-visible + .ss-co__fraktetikett {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 0.125rem;
}

.ss-co__frakttitel {
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

.ss-co__fraktpris {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

/* Platshållarvarning: guldyta med SVART text (8.18:1) och svart ram. */
.ss-co__platshallare {
  padding: 0.5rem 0.7rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-size: var(--text-sm);
  font-weight: 600;
}

.ss-co__submit {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
}

.ss-co__submit:focus-visible {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 0.25rem;
}

.ss-co__serverfel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  inline-size: 100%;
  padding: 1rem;
  border: var(--border-sticker) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
}

.ss-co__serverfel-rubrik {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
}

.ss-co__brister {
  margin: 0;
  padding-inline-start: 1.25rem;
  list-style: square;
  font-size: var(--text-sm);
}

.ss-co__brister li + li {
  margin-block-start: 0.35rem;
}

.ss-co__primar {
  min-block-size: 3.25rem;
  padding: 0.85rem 2rem;
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

.ss-co__primar:not(:disabled):hover {
  background-color: var(--color-surface-inverse);
}

.ss-co__primar:disabled {
  background-color: var(--color-surface);
  border-color: var(--color-line-soft);
  color: var(--color-ink);
  box-shadow: none;
  cursor: not-allowed;
}

.ss-co__sammanfattning {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border: var(--border-sticker) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-sticker);
}

.ss-co__rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink-muted);
}

.ss-co__rader {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.ss-co__rad {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: var(--text-sm);
}

.ss-co__radvariant {
  color: var(--color-ink-muted);
}

.ss-co__radbelopp {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.ss-co__summor {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.4rem 1rem;
  margin: 0;
  padding-block-start: 0.75rem;
  border-block-start: var(--border-hairline) solid var(--color-line-soft);
}

.ss-co__summor dt {
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

.ss-co__summor dd {
  margin: 0;
  text-align: end;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-co__total-term {
  padding-block-start: 0.5rem;
  border-block-start: var(--border-thick) solid var(--color-line-soft);
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

.ss-co__total-varde {
  padding-block-start: 0.5rem;
  border-block-start: var(--border-thick) solid var(--color-line-soft);
  font-family: var(--font-display);
  font-size: var(--text-d4);
  letter-spacing: var(--tracking-display);
}

.ss-co__notis {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}
`;export{ie as default};
