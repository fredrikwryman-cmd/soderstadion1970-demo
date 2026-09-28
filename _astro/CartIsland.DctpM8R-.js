import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.-iFofLld.js";import{f as $}from"./money.DJkdqdQI.js";import{h as V,v as n,a as N,t as C,b as B}from"./cart-api.DoqydmQU.js";const D=99;function K(){const[e,_]=s.useState(null),[S,T]=s.useState(!0),[u,p]=s.useState(null),[A,x]=s.useState(""),[z,v]=s.useState(!1),[d,y]=s.useState(null),f=s.useRef(!1),g=s.useRef(null),k=s.useRef(!1);s.useEffect(()=>{let r=!1;return V().then(t=>{r||(T(!1),t.ok?_(t.data):p(t))}),()=>{r=!0}},[]),s.useEffect(()=>{k.current&&g.current&&(k.current=!1,g.current.focus())});const m=s.useCallback(async(r,t,i,c=!1)=>{if(f.current)return;f.current=!0,y(r),p(null);const o=await t();if(f.current=!1,y(null),!o.ok){p(o),x(o.meddelande);return}_(o.data),x(i(o.data)),c&&(k.current=!0)},[]),h=r=>n(r.totals.totalMinor,r.totals.currency);function w(r){const t=r.quantity+1;m(`antal:${r.variantId}`,()=>N(r.variantId,t),i=>`Antalet ändrat till ${t}. Ny summa ${h(i)}.`)}function R(r){const t=r.quantity-1;m(`antal:${r.variantId}`,()=>N(r.variantId,t),i=>`Antalet ändrat till ${t}. Ny summa ${h(i)}.`)}function E(r){m(`bort:${r.variantId}`,()=>C(r.variantId),t=>t.lines.length===0?`${r.productTitle} togs bort. Varukorgen är nu tom.`:`${r.productTitle} togs bort. Ny summa ${h(t)}.`,!0)}function I(){v(!1),m("tom",B,()=>"Varukorgen är tömd.",!0)}const l=d!==null;if(S)return a.jsxs("div",{className:"ss-cart",children:[a.jsx("style",{children:b}),a.jsx("p",{className:"ss-cart__laddar",role:"status",children:"Hämtar varukorgen…"})]});if(!e)return a.jsxs("div",{className:"ss-cart",children:[a.jsx("style",{children:b}),a.jsxs("div",{className:"ss-cart__fel",role:"alert",children:[a.jsx("p",{children:u?.meddelande??"Varukorgen gick inte att hämta."}),a.jsxs("p",{children:[a.jsx("a",{href:"/varukorg",children:"Försök igen"})," eller"," ",a.jsx("a",{href:"/",children:"gå tillbaka till sortimentet"}),"."]})]})]});const M=e.lines.length===0,j=Object.keys(e.totals.vatBreakdown).length>0;return a.jsxs("div",{className:"ss-cart",children:[a.jsx("style",{children:b}),a.jsx("p",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:A}),u&&a.jsx("div",{className:"ss-cart__fel",role:"alert",children:a.jsx("p",{children:u.meddelande})}),M?a.jsxs("div",{className:"ss-cart__tomt",children:[a.jsx("p",{className:"ss-cart__tomt-rubrik",children:"Varukorgen är tom"}),a.jsx("p",{children:"Du har inte lagt till något ännu."}),a.jsx("p",{children:a.jsx("a",{className:"ss-cart__lank",href:"/",children:"Se hela sortimentet"})})]}):a.jsxs("div",{className:"ss-cart__innehall",children:[a.jsx("div",{className:"ss-cart__lista-yta",ref:g,tabIndex:-1,children:a.jsx("ul",{className:"ss-cart__lista",children:e.lines.map(r=>{const t=d===`antal:${r.variantId}`,i=d===`bort:${r.variantId}`,c=`${r.productTitle} · ${r.variantName}`,o=r.quantity<D&&r.quantity<r.availableQuantity;return a.jsxs("li",{className:"ss-cart__rad",children:[a.jsxs("div",{className:"ss-cart__vara",children:[a.jsx("p",{className:"ss-cart__titel",children:a.jsx("a",{href:`/produkt/${r.productSlug}`,children:r.productTitle})}),a.jsx("p",{className:"ss-cart__variant",children:r.variantName}),a.jsxs("p",{className:"ss-cart__sku",children:["Artikelnummer: ",a.jsx("span",{children:r.sku})]}),r.exceedsStock&&a.jsx("p",{className:"ss-cart__brist",children:r.availableQuantity>0?`Bara ${r.availableQuantity} kvar i lager. Minska antalet för att kunna gå vidare.`:"Slutsåld just nu. Ta bort raden för att kunna gå vidare."})]}),a.jsxs("div",{className:"ss-cart__antal",children:[a.jsxs("button",{type:"button",className:"ss-cart__stegknapp",onClick:()=>R(r),disabled:l||r.quantity<=1,"aria-busy":t||void 0,children:[a.jsx("span",{"aria-hidden":"true",children:"−"}),a.jsxs("span",{className:"sr-only",children:["Minska antal av ",c]})]}),a.jsxs("span",{className:"ss-cart__antal-varde",children:[a.jsx("span",{className:"sr-only",children:"Antal: "}),r.quantity]}),a.jsxs("button",{type:"button",className:"ss-cart__stegknapp",onClick:()=>w(r),disabled:l||!o,"aria-busy":t||void 0,children:[a.jsx("span",{"aria-hidden":"true",children:"+"}),a.jsxs("span",{className:"sr-only",children:["Öka antal av ",c]})]})]}),a.jsxs("div",{className:"ss-cart__belopp",children:[a.jsxs("p",{className:"ss-cart__styckpris",children:["Styckpris: ",n(r.unitPriceMinor,e.totals.currency)]}),a.jsxs("p",{className:"ss-cart__radtotal",children:[a.jsx("span",{className:"sr-only",children:"Radsumma: "}),n(r.lineTotalMinor,e.totals.currency)]})]}),a.jsx("div",{className:"ss-cart__radknappar",children:a.jsxs("button",{type:"button",className:"ss-cart__textknapp",onClick:()=>E(r),disabled:l,"aria-busy":i||void 0,children:["Ta bort ",a.jsx("span",{className:"sr-only",children:c})]})})]},r.variantId)})})}),a.jsxs("div",{className:"ss-cart__summering",children:[a.jsx("h2",{className:"ss-cart__summering-rubrik",children:"Summering"}),a.jsxs("dl",{className:"ss-cart__summor",children:[a.jsx("dt",{children:"Varor"}),a.jsx("dd",{children:n(e.totals.subtotalMinor,e.totals.currency)}),e.totals.shippingMinor!==0&&a.jsxs(a.Fragment,{children:[a.jsx("dt",{children:"Frakt"}),a.jsx("dd",{children:n(e.totals.shippingMinor,e.totals.currency)})]}),e.totals.discountMinor!==0&&a.jsxs(a.Fragment,{children:[a.jsx("dt",{children:"Rabatt"}),a.jsx("dd",{children:n(e.totals.discountMinor,e.totals.currency)})]}),j&&Object.entries(e.totals.vatBreakdown).sort((r,t)=>Number(r[0])-Number(t[0])).map(([r,t])=>a.jsxs(s.Fragment,{children:[a.jsxs("dt",{children:["Varav moms ",$(Number(r))]}),a.jsx("dd",{children:n(t,e.totals.currency)})]},r)),a.jsx("dt",{className:"ss-cart__total-term",children:"Att betala"}),a.jsx("dd",{className:"ss-cart__total-varde",children:n(e.totals.totalMinor,e.totals.currency)})]}),a.jsx("p",{className:"ss-cart__notis",children:j?"Alla priser visas inklusive moms. Momsraden är en upplysning om hur mycket av priset som är moms, inte ett påslag.":"Priset som står vid varje vara är det du betalar för den."}),e.hasStockProblem?a.jsx("p",{className:"ss-cart__sparr",role:"status",children:"Det går inte att gå vidare till kassan just nu. En eller flera rader ovan finns inte i det antal du valt. Minska antalet eller ta bort raden, så öppnas kassan igen."}):a.jsx("a",{className:"ss-cart__primar",href:"/kassa",children:"Till kassan"}),a.jsx("p",{className:"ss-cart__fortsatt",children:a.jsx("a",{href:"/",children:"Fortsätt handla"})}),a.jsx("div",{className:"ss-cart__tomning",children:z?a.jsxs("div",{className:"ss-cart__bekrafta",children:[a.jsx("p",{id:"ss-cart-tom-fraga",children:"Ta bort alla varor ur varukorgen? Det går inte att ångra."}),a.jsxs("div",{className:"ss-cart__bekrafta-knappar",children:[a.jsx("button",{type:"button",className:"ss-cart__textknapp",onClick:()=>v(!1),disabled:l,children:"Avbryt"}),a.jsx("button",{type:"button",className:"ss-cart__fara",onClick:I,disabled:l,"aria-busy":d==="tom"||void 0,"aria-describedby":"ss-cart-tom-fraga",children:"Ja, töm varukorgen"})]})]}):a.jsx("button",{type:"button",className:"ss-cart__textknapp",onClick:()=>v(!0),disabled:l,children:"Töm varukorgen"})})]})]})]})}const b=`
.ss-cart {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Samma min-höjd som en kort varukorg. Sidan hoppar alltså inte när
 * innehållet ersätter laddningstexten. */
.ss-cart__laddar {
  display: flex;
  align-items: center;
  min-block-size: 12rem;
  color: var(--color-ink-muted);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}

/* Fel: svart text på bone med tjock svart ram. Ingen röd hexkod — paletten har
 * ingen röd, och en inlagd sådan hade varit en ny färg utanför tokens.
 * 17.36:1, och budskapet bärs av texten, inte av ramen. */
.ss-cart__fel {
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ss-cart__tomt {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
  min-block-size: 12rem;
  /* FRÅN DEKALRAM TILL YTA. Varukorgen låg i samma fempixlarsram med hård
   * förskjuten skugga som produktkorten gjorde. På en sida som ska handla om
   * belopp och antal drar den grafiken blicken till ramen i stället för till
   * siffrorna. Hårlinje och knappt synlig höjd — samma språk som resten av
   * premiumlyftet. */
  border: var(--border-hairline) solid var(--color-line-soft);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-soft-sm);
  padding: var(--space-xl) var(--space-md);
}

.ss-cart__tomt-rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink-muted);
}

.ss-cart__innehall {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  align-items: start;
}

/* Mobilförst. Summeringen hamnar bredvid listan först när det finns plats. */
@media (min-width: 60rem) {
  .ss-cart__innehall {
    grid-template-columns: minmax(0, 1.4fr) minmax(18rem, 1fr);
    gap: 2.5rem;
  }
}

/* Fokusmålet efter en borttagning. Ingen synlig ring behövs runt hela ytan —
 * den ringen skulle rama in halva sidan — men fokus får inte heller vara
 * osynligt. Därför en diskret kontur bara när fokus flyttats hit med skript. */
.ss-cart__lista-yta:focus-visible {
  outline: var(--border-thick) solid var(--color-focus);
  outline-offset: 0.25rem;
}

.ss-cart__lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

/* RADEN. Hårlinje, mjuk höjd, och ett svar på hover och tangentbordsfokus —
 * raden är inte klickbar, men den innehåller kontroller, och den som står i
 * en av dem ska se vilken rad hen står i. */
.ss-cart__rad {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xs);
  padding: var(--space-sm);
  border: var(--border-hairline) solid var(--color-line-soft);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-soft-sm);
  transition:
    border-color var(--motion-base) var(--ease-standard),
    box-shadow var(--motion-base) var(--ease-standard);
}

.ss-cart__rad:hover,
.ss-cart__rad:focus-within {
  border-color: var(--color-line);
  box-shadow: var(--shadow-soft);
}

/* RADEN SOM VÄNTAR PÅ SERVERN. aria-busy sätts redan av komponenten på de
 * knappar som är upptagna; det här är den synliga motsvarigheten, så att
 * svaret inte bara finns för skärmläsare. Ingen spinner: raden dämpas och
 * slutar ta emot pekare, vilket säger "vänta" utan att flytta någonting. */
.ss-cart__rad:has(button[aria-busy='true']) {
  opacity: 0.6;
}

@media (prefers-reduced-motion: reduce) {
  .ss-cart__rad {
    transition: none;
  }
}

@media (min-width: 40rem) {
  .ss-cart__rad {
    grid-template-columns: minmax(0, 1fr) auto auto;
    grid-template-areas:
      'vara antal belopp'
      'vara knappar belopp';
    align-items: center;
    column-gap: 1.25rem;
  }

  .ss-cart__vara {
    grid-area: vara;
  }

  .ss-cart__antal {
    grid-area: antal;
  }

  .ss-cart__radknappar {
    grid-area: knappar;
  }

  .ss-cart__belopp {
    grid-area: belopp;
    text-align: end;
  }
}

.ss-cart__vara {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-inline-size: 0;
}

.ss-cart__titel {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
}

.ss-cart__variant {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.ss-cart__sku {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  font-variant-numeric: tabular-nums;
}

/* Bristmarkering. Tjock svart ram plus guldyta med SVART text (8.18:1).
 * Guld som BOTTEN är tillåtet och tydligt; guld som text hade varit 2.38:1.
 * Texten ensam bär informationen — färgen är bara en förstärkning. */
.ss-cart__brist {
  margin-block-start: 0.4rem;
  padding: 0.5rem 0.7rem;
  border: var(--border-hairline) solid var(--color-black);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-size: var(--text-sm);
  font-weight: 600;
}

/* ANTALET ÄR EN GRUPP, INTE TRE LÖSA SAKER. Knapp, siffra, knapp i en enda
 * ruta med en hårlinje runt om läser som en kontroll — tre fristående rutor
 * läser som tre. Träffytorna är oförändrade. */
.ss-cart__antal {
  display: inline-flex;
  align-items: center;
  border: var(--border-hairline) solid var(--color-line);
  border-radius: var(--radius-pill);
  background-color: var(--color-surface-raised);
  overflow: hidden;
}

/* Träffyta minst 2.75rem. WCAG 2.2 2.5.8 sätter golvet vid 24x24 CSS-pixlar;
 * en knapp som ska träffas med tummen ligger en bra bit över det. */
.ss-cart__stegknapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 2.75rem;
  min-block-size: 2.75rem;
  border: 0;
  background-color: transparent;
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  line-height: 1;
  cursor: pointer;
  transition: background-color var(--motion-fast) var(--ease-out);
}

.ss-cart__stegknapp:not(:disabled):hover {
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
}

/* Avaktiverade kontroller är undantagna från kontrastkravet, men svart på
 * bone (17.36:1) kostar ingenting. Den mjuka ramen och den borttagna
 * pekaren säger att knappen inte går att trycka på. */
.ss-cart__stegknapp:disabled,
.ss-cart__textknapp:disabled,
.ss-cart__fara:disabled {
  border-color: var(--color-line-soft);
  background-color: var(--color-surface);
  color: var(--color-ink);
  cursor: not-allowed;
  opacity: 0.65;
}

/* Siffran mellan knapparna får sina egna hårlinjer, så att gruppen läser som
 * tre fält och inte som en enda yta. */
.ss-cart__antal-varde {
  border-inline: var(--border-hairline) solid var(--color-line-soft);
}

.ss-cart__antal-varde {
  min-inline-size: 2ch;
  text-align: center;
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-cart__belopp {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.ss-cart__styckpris {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

.ss-cart__radtotal {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}

.ss-cart__radknappar {
  display: flex;
  gap: 0.75rem;
}

/* Textknapp: understruken, alltså inte enbart färgkodad (1.4.1), och med en
 * träffyta som håller 2.5.8 trots att den ser ut som text. */
.ss-cart__textknapp {
  display: inline-flex;
  align-items: center;
  min-block-size: 2.75rem;
  padding: 0.25rem 0.25rem;
  border: 0;
  background: none;
  color: var(--color-ink-link);
  font-size: var(--text-sm);
  text-decoration: underline;
  text-underline-offset: 0.18em;
  cursor: pointer;
}

.ss-cart__textknapp:not(:disabled):hover {
  color: var(--color-ink);
}

/* SUMMERINGEN. Hårlinje och mjuk höjd som resten, och KLIBBIG på bred skärm:
 * med många rader i korgen har man annars rullat förbi totalsumman och
 * kassaknappen långt innan man är färdig med listan. Avståndet uppåt är
 * sidhuvudets höjd plus luft, annars hamnar rubriken under det klibbiga
 * huvudet. */
.ss-cart__summering {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: var(--border-hairline) solid var(--color-line-soft);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-soft);
}

@media (min-width: 60rem) {
  .ss-cart__summering {
    position: sticky;
    inset-block-start: calc(var(--header-height-lg) + var(--space-sm));
  }
}

.ss-cart__summering-rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink-muted);
}

/* Definitionslistan som beloppstabell: term till vänster, belopp till höger.
 * En riktig dl och inte en table — det här är namn/värde-par, inte en matris
 * med rad- och kolumnrubriker. */
.ss-cart__summor {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.4rem 1rem;
  margin: 0;
}

.ss-cart__summor dt {
  color: var(--color-ink-muted);
  font-size: var(--text-sm);
}

.ss-cart__summor dd {
  margin: 0;
  text-align: end;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
}

.ss-cart__total-term {
  padding-block-start: var(--space-2xs);
  border-block-start: var(--border-hairline) solid var(--color-line);
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  color: var(--color-ink);
}

/* TOTALEN ÄR SIDANS VIKTIGASTE TAL och ska se ut som det: ett steg större än
 * delsummorna, i display-graden, med tabular-nums från regeln ovan så att
 * siffrorna står i takt med raderna. */
.ss-cart__total-varde {
  padding-block-start: var(--space-2xs);
  border-block-start: var(--border-hairline) solid var(--color-line);
  font-family: var(--font-display);
  font-size: var(--text-d3);
  line-height: var(--text-d3--line-height);
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
}

.ss-cart__notis {
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
}

/* Primärknapp som länk. green-700-yta, vit text, 6.63:1. Hover MÖRKARE. */
.ss-cart__primar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-block-size: 3rem;
  padding: 0.75rem 1.5rem;
  border: var(--border-hairline) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  text-decoration: none;
  box-shadow: var(--shadow-soft-sm);
  transition:
    background-color var(--motion-fast) var(--ease-out),
    box-shadow var(--motion-base) var(--ease-standard),
    transform var(--motion-base) var(--ease-standard);
}

.ss-cart__primar:hover {
  box-shadow: var(--shadow-soft);
  transform: translateY(calc(var(--lift-sm) * -1));
}

@media (prefers-reduced-motion: reduce) {
  .ss-cart__primar {
    transition: none;
  }

  .ss-cart__primar:hover {
    transform: none;
  }
}

.ss-cart__primar:hover {
  background-color: var(--color-surface-inverse);
  color: var(--color-ink-inverse);
}

/* Spärren där knappen skulle ha stått. Guldyta, svart text, 8.18:1. */
.ss-cart__sparr {
  padding: 0.9rem 1rem;
  border: var(--border-hairline) solid var(--color-black);
  border-radius: var(--radius-xs);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-size: var(--text-sm);
  font-weight: 600;
}

.ss-cart__fortsatt {
  font-size: var(--text-sm);
}

.ss-cart__tomning {
  padding-block-start: 0.75rem;
  border-block-start: var(--border-hairline) solid var(--color-line-soft);
}

.ss-cart__bekrafta {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: var(--text-sm);
}

.ss-cart__bekrafta-knappar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

/* Det destruktiva valet: svart yta med vit text (19.44:1). Svart och inte
 * rött — paletten har ingen röd, och allvaret sitter i ordet "töm" och i
 * bekräftelsesteget, inte i en färg som ändå inte alla uppfattar. */
.ss-cart__fara {
  min-block-size: 2.75rem;
  padding: 0.5rem 1.1rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
  cursor: pointer;
}

.ss-cart__lank {
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}
`;export{K as default};
