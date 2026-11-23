"use strict";(Array.isArray(globalThis.webpackChunkviajes_kevin_aguilar_pfy2202)?globalThis.webpackChunkviajes_kevin_aguilar_pfy2202:globalThis.webpackChunkviajes_kevin_aguilar_pfy2202=[]).push([[510],{9145(e,s,a){a.d(s,{A:()=>o});var i=a(5346),n=a(579);const r={primary:"btn-primary",secondary:"btn-secondary",light:"btn-light",danger:"btn-danger"},l={sm:"btn-sm",lg:"btn-lg"};function o({variant:e="primary",size:s,to:a,className:o="",children:t,...d}){var c;const p=`btn ${r[e]} ${null!==(c=l[s])&&void 0!==c?c:""} ${o}`;return a?(0,n.jsx)(i.N_,{to:a,className:p,...d,children:t}):(0,n.jsx)("button",{type:"button",className:p,...d,children:t})}},5444(e,s,a){a.d(s,{A:()=>t});var i=a(5346),n=a(9145),r=a(2730),l=a(3482),o=a(579);function t({loading:e,error:s,encontrado:a,onReintentar:t,textoCarga:d,noEncontrado:c,children:p}){const m=(0,i.Zp)();let x=p;return e?x=(0,o.jsx)(r.A,{texto:d}):s?x=(0,o.jsx)(l.A,{error:s,onReintentar:t}):a||(x=(0,o.jsxs)("div",{className:"panel mx-auto max-w-md text-center",children:[(0,o.jsx)("h1",{className:"text-xl",children:c}),(0,o.jsx)(n.A,{to:"/destinos",className:"mt-6",children:"Ver destinos"})]})),(0,o.jsx)("section",{className:"section",children:(0,o.jsxs)("div",{className:"container-app max-w-5xl",children:[(0,o.jsx)("button",{type:"button",onClick:()=>m(-1),className:"nav-link -ml-3 mb-4",children:"\u2190 Volver"}),x]})})}},3482(e,s,a){a.d(s,{A:()=>r});var i=a(9145),n=a(579);function r({titulo:e="No pudimos cargar la informaci\xf3n",error:s,onReintentar:a,children:r}){var l;return(0,n.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-np border border-red-500/40 bg-red-500/10 p-8 text-center",role:"alert",children:[(0,n.jsx)("span",{className:"text-4xl","aria-hidden":"true",children:"\u26a0\ufe0f"}),(0,n.jsx)("p",{className:"font-display text-lg text-np-white",children:e}),s&&(0,n.jsx)("p",{className:"text-red-300",children:null!==(l=s.message)&&void 0!==l?l:String(s)}),(0,n.jsxs)("div",{className:"mt-2 flex flex-wrap justify-center gap-2",children:[a&&(0,n.jsx)(i.A,{onClick:a,children:"Reintentar"}),r]})]})}},7484(e,s,a){a.d(s,{A:()=>n});var i=a(579);function n({cantidad:e,max:s=5}){return(0,i.jsxs)("span",{className:"tracking-[0.1em] text-np-accent",role:"img","aria-label":`${e} de ${s} estrellas`,children:["\u2605".repeat(e),(0,i.jsx)("span",{className:"text-np-muted/40",children:"\u2605".repeat(s-e)})]})}},4232(e,s,a){a.d(s,{A:()=>n});var i=a(579);function n({stock:e,unidad:s="disp."}){let a="border-np-cyan/40 bg-np-cyan/10 text-np-cyan",n=`${e} ${s}`;return 0===e?(a="border-red-500/40 bg-red-500/10 text-red-300",n="Agotado"):e<=3&&(a="border-amber-400/40 bg-amber-400/10 text-amber-300",n=`\xa1Quedan ${e}!`),(0,i.jsx)("span",{className:`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold ${a}`,children:n})}},7769(e,s,a){a.d(s,["_",0,e=>new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(e)])},3646(e,s,a){var i=a(3016);const n=i.J1`
  fragment CamposVuelo on Vuelo {
    id
    destinoId
    aerolinea
    codigo
    fechaSalida
    horaSalida
    fechaRegreso
    duracion
    escalas
    clase
    precio
    asientosDisponibles
    disponible
  }
`,r=i.J1`
  fragment CamposHotel on Hotel {
    id
    destinoId
    nombre
    estrellas
    ubicacion
    precioNoche
    disponibleDesde
    disponibleHasta
    habitacionesDisponibles
    disponible
    calificacion
  }
`,l=i.J1`
  query OpcionesViaje($destinoId: ID!, $soloDisponibles: Boolean) {
    vuelos(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposVuelo
    }
    hoteles(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposHotel
    }
  }
  ${n}
  ${r}
`,o=i.J1`
  query DetalleVuelo($id: ID!) {
    vuelo(id: $id) {
      ...CamposVuelo
      origen
      llegada
      equipaje
    }
  }
  ${n}
`,t=i.J1`
  query DetalleHotel($id: ID!) {
    hotel(id: $id) {
      ...CamposHotel
      regimen
      servicios
      descripcion
    }
  }
  ${r}
`,d=i.J1`
  mutation CrearReserva($input: ReservaInput!) {
    crearReserva(input: $input) {
      codigo
      destinoId
      pasajeros
      noches
      total
      vuelo {
        id
        asientosDisponibles
        disponible
      }
      hotel {
        id
        habitacionesDisponibles
        disponible
      }
    }
  }
`;a.d(s,["PB",0,l,"Wj",0,o,"b7",0,t,"n0",0,d])},5510(e,s,a){a.r(s),a.d(s,{default:()=>b});var i=a(5346),n=a(8250),r=a(9145),l=a(7484),o=a(4232),t=a(5444),d=a(7769),c=a(7255),p=a(7606),m=a(3646),x=a(579);function b(){var e;const{hotelId:s}=(0,i.g)(),{viaje:a,elegirHotel:b}=(0,p.$)(),{data:h,loading:u,error:j,refetch:g}=(0,n.IT)(m.b7,{variables:{id:s}}),v=null===h||void 0===h?void 0:h.hotel,f=(null===(e=a.hotel)||void 0===e?void 0:e.id)===s;return(0,x.jsx)(t.A,{loading:u,error:j,encontrado:Boolean(v),onReintentar:()=>g(),textoCarga:"Cargando hotel\u2026",noEncontrado:"Hotel no encontrado",children:v&&(0,x.jsxs)("article",{className:"grid overflow-hidden rounded-np border border-np-border bg-np-surface md:grid-cols-[1fr_1.3fr]",children:[(0,x.jsxs)("div",{className:"relative grid min-h-[220px] place-items-center bg-[radial-gradient(circle_at_30%_20%,#065f46_0%,#143023_55%,#0a1a13_100%)]",role:"img","aria-label":`Imagen de ${v.nombre}`,children:[(0,x.jsx)("span",{className:"text-7xl drop-shadow-[0_8px_24px_rgba(163,230,53,0.45)]",children:"\ud83c\udfe8"}),(0,x.jsx)("span",{className:"badge-accent absolute right-3 top-3",children:v.regimen})]}),(0,x.jsxs)("div",{className:"flex flex-col p-6 sm:p-8",children:[(0,x.jsx)("p",{className:"mb-1 font-semibold text-np-cyan",children:v.ubicacion}),(0,x.jsx)("h1",{className:"text-2xl sm:text-3xl",children:v.nombre}),(0,x.jsxs)("p",{className:"mt-1",children:[(0,x.jsx)(l.A,{cantidad:v.estrellas})," \xb7 Nota ",(0,x.jsx)("strong",{children:v.calificacion.toFixed(1)})]}),(0,x.jsx)("p",{className:"mt-3 text-np-muted",children:v.descripcion}),(0,x.jsx)("ul",{className:"mt-4 flex flex-wrap gap-1.5","aria-label":"Servicios",children:v.servicios.map(e=>(0,x.jsx)("li",{className:"rounded-full border border-np-border px-2.5 py-0.5 text-sm text-np-muted",children:e},e))}),(0,x.jsxs)("dl",{className:"mt-6 grid grid-cols-2 gap-x-6",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("dt",{className:"dato-titulo",children:"Disponible desde"}),(0,x.jsx)("dd",{className:"dato-valor",children:(0,c.M$)(v.disponibleDesde)})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("dt",{className:"dato-titulo",children:"Hasta"}),(0,x.jsx)("dd",{className:"dato-valor",children:(0,c.M$)(v.disponibleHasta)})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("dt",{className:"dato-titulo",children:"Habitaciones"}),(0,x.jsx)("dd",{children:(0,x.jsx)(o.A,{stock:v.habitacionesDisponibles,unidad:"disponibles"})})]})]}),(0,x.jsxs)("div",{className:"mt-6 flex flex-wrap items-center gap-3 border-t border-np-border pt-6",children:[(0,x.jsxs)("div",{className:"mr-auto",children:[(0,x.jsx)("p",{className:"font-display text-3xl font-bold",children:(0,d._)(v.precioNoche)}),(0,x.jsx)("p",{className:"text-sm text-np-muted",children:"por noche, habitaci\xf3n doble"})]}),(0,x.jsx)(r.A,{size:"lg",onClick:()=>b(v),disabled:!v.disponible||f,children:v.disponible?f?"\u2714 En tu viaje":"Agregar a mi viaje":"Sin habitaciones"})]}),(0,x.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[(0,x.jsx)(r.A,{to:`/destinos/${v.destinoId}`,variant:"secondary",size:"sm",children:"Ver vuelos del destino"}),f&&(0,x.jsx)(r.A,{to:"/mi-viaje",variant:"secondary",size:"sm",children:"Ir a Mi viaje"})]})]})]})})}}}]);
//# sourceMappingURL=510.62adebeb.chunk.js.map