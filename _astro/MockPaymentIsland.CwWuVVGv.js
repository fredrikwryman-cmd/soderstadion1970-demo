import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as n}from"./index.-iFofLld.js";import{v as _,s as x,e as h,f as y}from"./cart-api.DoqydmQU.js";import"./money.DJkdqdQI.js";const j=[{varde:"lyckad",text:"Simulera lyckad betalning"},{varde:"misslyckad",text:"Simulera misslyckad betalning"},{varde:"avbruten",text:"Simulera avbruten betalning"}];function R({orderNumber:u,epost:k}){const[s,p]=n.useState(null),[v,e]=n.useState(""),[f,o]=n.useState(!1),[l,i]=n.useState(null),t=n.useRef(!1);async function g(){if(t.current)return;t.current=!0,i("start"),o(!1),e("");const a=await x(u,k);if(t.current=!1,i(null),!a.ok){o(!0),e(a.meddelande);return}p(a.data),e("Betalningen är påbörjad. Välj ett utfall att simulera.")}async function b(a){if(t.current||!s)return;const d=h(s);if(!d){o(!0),e("Betalningssvaret saknar referens, så utfallet går inte att skicka. Kontrollera serverns svar från /api/payments/start.");return}t.current=!0,i(a),o(!1);const m=await y(d,a);if(t.current=!1,i(null),!m.ok){o(!0),e(m.meddelande);return}e("Utfallet är registrerat. Sidan uppdateras…"),window.location.reload()}const c=l!==null;return r.jsxs("div",{className:"ss-mock",children:[r.jsx("style",{children:w}),r.jsx("p",{className:"ss-mock__flagga",children:"UTVECKLINGSLÄGE — ingen riktig betalning sker"}),r.jsxs("div",{className:"ss-mock__kropp",children:[r.jsx("h2",{className:"ss-mock__rubrik",children:"Betalning (simulerad)"}),r.jsx("p",{className:"ss-mock__text",children:"Butiken är under uppbyggnad och har ingen betalleverantör inkopplad. Knapparna nedan talar om för servern hur en betalning skulle ha gått, så att orderflödet går att prova hela vägen. Inga kortuppgifter samlas in, inga pengar flyttas."}),s?r.jsxs("div",{className:"ss-mock__utfall",children:[r.jsxs("p",{className:"ss-mock__belopp",children:["Belopp: ",_(s.amountMinor,s.currency)]}),r.jsx("div",{className:"ss-mock__knappar",children:j.map(a=>r.jsx("button",{type:"button",className:"ss-mock__knapp",onClick:()=>void b(a.varde),disabled:c,"aria-busy":l===a.varde||void 0,children:a.text},a.varde))})]}):r.jsx("button",{type:"button",className:"ss-mock__primar",onClick:()=>void g(),disabled:c,"aria-busy":l==="start"||void 0,children:l==="start"?"Startar…":"Starta betalning"}),r.jsx("p",{className:f?"ss-mock__besked ss-mock__besked--fel":"ss-mock__besked","aria-live":"polite","aria-atomic":"true",children:v})]})]})}const w=`
.ss-mock {
  border: var(--border-sticker) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  box-shadow: var(--shadow-sticker-black);
  overflow: hidden;
}

/* Guldyta, SVART text: 8.18:1. */
.ss-mock__flagga {
  margin: 0;
  padding: 0.6rem 1rem;
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
}

.ss-mock__kropp {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.25rem 1rem;
}

.ss-mock__rubrik {
  font-family: var(--font-display);
  font-size: var(--text-d4);
  line-height: var(--text-d4--line-height);
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  color: var(--color-ink-muted);
  margin: 0;
}

.ss-mock__text {
  max-inline-size: 60ch;
  font-size: var(--text-sm);
  color: var(--color-ink);
}

.ss-mock__belopp {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-display);
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}

.ss-mock__utfall {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ss-mock__knappar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Primärknapp: green-700 med vit text (6.63:1). Hover MÖRKARE till green-900
 * (10.39:1) — kontrasten stiger vid interaktion. */
.ss-mock__primar {
  min-block-size: 3rem;
  padding: 0.75rem 1.5rem;
  border: var(--border-thick) solid var(--color-green-900);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-primary);
  color: var(--color-ink-inverse);
  font-family: var(--font-display);
  font-size: var(--text-base);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps-wide);
  cursor: pointer;
  box-shadow: var(--shadow-sticker-sm);
  transition: background-color var(--motion-fast) var(--ease-out);
  align-self: flex-start;
}

.ss-mock__primar:not(:disabled):hover {
  background-color: var(--color-surface-inverse);
}

/* Utfallsknapparna är medvetet neutrala: vit yta, svart text (19.44:1), svart
 * ram. Ingen av dem ska se ut som "rätt" väg. */
.ss-mock__knapp {
  min-block-size: 2.75rem;
  padding: 0.6rem 1rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-raised);
  color: var(--color-ink);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--motion-fast) var(--ease-out);
}

.ss-mock__knapp:not(:disabled):hover {
  background-color: var(--color-surface);
}

.ss-mock__primar:disabled,
.ss-mock__knapp:disabled {
  border-color: var(--color-line-soft);
  background-color: var(--color-surface);
  color: var(--color-ink);
  box-shadow: none;
  cursor: not-allowed;
}

.ss-mock__besked {
  max-inline-size: 60ch;
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

/* Fel: svart text på guldyta (8.18:1), svart ram. :empty-skyddet gör att en
 * tom live-region inte ritar ut en färgad kant utan innehåll. */
.ss-mock__besked--fel:not(:empty) {
  padding: 0.5rem 0.7rem;
  border: var(--border-thick) solid var(--color-black);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-accent);
  color: var(--color-black);
  font-weight: 600;
}
`;export{R as default};
