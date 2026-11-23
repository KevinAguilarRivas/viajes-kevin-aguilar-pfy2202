"use strict";(Array.isArray(globalThis.webpackChunkviajes_kevin_aguilar_pfy2202)?globalThis.webpackChunkviajes_kevin_aguilar_pfy2202:globalThis.webpackChunkviajes_kevin_aguilar_pfy2202=[]).push([[947],{9145(e,s,a){a.d(s,{A:()=>o});var i=a(5346),l=a(579);const n={primary:"btn-primary",secondary:"btn-secondary",light:"btn-light",danger:"btn-danger"},d={sm:"btn-sm",lg:"btn-lg"};function o({variant:e="primary",size:s,to:a,className:o="",children:r,...t}){var c;const x=`btn ${n[e]} ${null!==(c=d[s])&&void 0!==c?c:""} ${o}`;return a?(0,l.jsx)(i.N_,{to:a,className:x,...t,children:r}):(0,l.jsx)("button",{type:"button",className:x,...t,children:r})}},5444(e,s,a){a.d(s,{A:()=>r});var i=a(5346),l=a(9145),n=a(2730),d=a(3482),o=a(579);function r({loading:e,error:s,encontrado:a,onReintentar:r,textoCarga:t,noEncontrado:c,children:x}){const p=(0,i.Zp)();let m=x;return e?m=(0,o.jsx)(n.A,{texto:t}):s?m=(0,o.jsx)(d.A,{error:s,onReintentar:r}):a||(m=(0,o.jsxs)("div",{className:"panel mx-auto max-w-md text-center",children:[(0,o.jsx)("h1",{className:"text-xl",children:c}),(0,o.jsx)(l.A,{to:"/destinos",className:"mt-6",children:"Ver destinos"})]})),(0,o.jsx)("section",{className:"section",children:(0,o.jsxs)("div",{className:"container-app max-w-5xl",children:[(0,o.jsx)("button",{type:"button",onClick:()=>p(-1),className:"nav-link -ml-3 mb-4",children:"\u2190 Volver"}),m]})})}},3482(e,s,a){a.d(s,{A:()=>n});var i=a(9145),l=a(579);function n({titulo:e="No pudimos cargar la informaci\xf3n",error:s,onReintentar:a,children:n}){var d;return(0,l.jsxs)("div",{className:"flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-np border border-red-500/40 bg-red-500/10 p-8 text-center",role:"alert",children:[(0,l.jsx)("span",{className:"text-4xl","aria-hidden":"true",children:"\u26a0\ufe0f"}),(0,l.jsx)("p",{className:"font-display text-lg text-np-white",children:e}),s&&(0,l.jsx)("p",{className:"text-red-300",children:null!==(d=s.message)&&void 0!==d?d:String(s)}),(0,l.jsxs)("div",{className:"mt-2 flex flex-wrap justify-center gap-2",children:[a&&(0,l.jsx)(i.A,{onClick:a,children:"Reintentar"}),n]})]})}},4232(e,s,a){a.d(s,{A:()=>l});var i=a(579);function l({stock:e,unidad:s="disp."}){let a="border-np-cyan/40 bg-np-cyan/10 text-np-cyan",l=`${e} ${s}`;return 0===e?(a="border-red-500/40 bg-red-500/10 text-red-300",l="Agotado"):e<=3&&(a="border-amber-400/40 bg-amber-400/10 text-amber-300",l=`\xa1Quedan ${e}!`),(0,i.jsx)("span",{className:`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm font-semibold ${a}`,children:l})}},7769(e,s,a){a.d(s,["_",0,e=>new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(e)])},3646(e,s,a){var i=a(3016);const l=i.J1`
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
`,n=i.J1`
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
`,d=i.J1`
  query OpcionesViaje($destinoId: ID!, $soloDisponibles: Boolean) {
    vuelos(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposVuelo
    }
    hoteles(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      ...CamposHotel
    }
  }
  ${l}
  ${n}
`,o=i.J1`
  query DetalleVuelo($id: ID!) {
    vuelo(id: $id) {
      ...CamposVuelo
      origen
      llegada
      equipaje
    }
  }
  ${l}
`,r=i.J1`
  query DetalleHotel($id: ID!) {
    hotel(id: $id) {
      ...CamposHotel
      regimen
      servicios
      descripcion
    }
  }
  ${n}
`,t=i.J1`
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
`;a.d(s,["PB",0,d,"Wj",0,o,"b7",0,r,"n0",0,t])},4947(e,s,a){a.r(s),a.d(s,{default:()=>m});var i=a(5346),l=a(8250),n=a(9145),d=a(4232),o=a(5444),r=a(7769),t=a(7255),c=a(7606),x=a(3646),p=a(579);function m(){var e;const{vueloId:s}=(0,i.g)(),{viaje:a,elegirVuelo:m}=(0,c.$)(),{data:h,loading:u,error:j,refetch:b}=(0,l.IT)(x.Wj,{variables:{id:s}}),v=null===h||void 0===h?void 0:h.vuelo,g=(null===(e=a.vuelo)||void 0===e?void 0:e.id)===s;return(0,p.jsx)(o.A,{loading:u,error:j,encontrado:Boolean(v),onReintentar:()=>b(),textoCarga:"Cargando vuelo\u2026",noEncontrado:"Vuelo no encontrado",children:v&&(0,p.jsxs)("article",{className:"overflow-hidden rounded-np border border-np-border bg-np-surface",children:[(0,p.jsxs)("div",{className:"bg-np-hero p-6 sm:p-8",children:[(0,p.jsxs)("p",{className:"mb-1 font-semibold text-lime-300",children:[v.aerolinea," \xb7 Vuelo ",v.codigo]}),(0,p.jsxs)("div",{className:"grid grid-cols-[1fr_auto_1fr] items-center gap-4",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"text-sm uppercase tracking-[0.1em] text-emerald-50/80",children:"Origen"}),(0,p.jsx)("p",{className:"font-display text-lg font-bold sm:text-2xl",children:v.origen})]}),(0,p.jsx)("span",{className:"text-3xl","aria-hidden":"true",children:"\u2708\ufe0f"}),(0,p.jsxs)("div",{className:"text-right",children:[(0,p.jsx)("p",{className:"text-sm uppercase tracking-[0.1em] text-emerald-50/80",children:"Destino"}),(0,p.jsx)("p",{className:"font-display text-lg font-bold sm:text-2xl",children:v.llegada})]})]})]}),(0,p.jsxs)("div",{className:"grid gap-8 p-6 sm:p-8 md:grid-cols-[1.3fr_1fr]",children:[(0,p.jsxs)("dl",{className:"grid grid-cols-2 gap-x-6",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Salida"}),(0,p.jsxs)("dd",{className:"dato-valor",children:[(0,t.M$)(v.fechaSalida)," \xb7 ",v.horaSalida," h"]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Regreso"}),(0,p.jsx)("dd",{className:"dato-valor",children:(0,t.M$)(v.fechaRegreso)})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Duraci\xf3n"}),(0,p.jsx)("dd",{className:"dato-valor",children:v.duracion})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Escalas"}),(0,p.jsx)("dd",{className:"dato-valor",children:0===v.escalas?"Directo":v.escalas})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Clase"}),(0,p.jsx)("dd",{className:"dato-valor",children:v.clase})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Equipaje"}),(0,p.jsx)("dd",{className:"dato-valor",children:v.equipaje})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Estad\xeda"}),(0,p.jsxs)("dd",{className:"dato-valor !mb-0",children:[(0,t.yz)(v.fechaSalida,v.fechaRegreso)," noches"]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("dt",{className:"dato-titulo",children:"Disponibilidad"}),(0,p.jsx)("dd",{children:(0,p.jsx)(d.A,{stock:v.asientosDisponibles,unidad:"asientos"})})]})]}),(0,p.jsxs)("div",{className:"panel flex flex-col justify-between !bg-np-bg-alt",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"text-np-muted",children:"Precio por pasajero (ida y vuelta)"}),(0,p.jsx)("p",{className:"font-display text-3xl font-bold",children:(0,r._)(v.precio)})]}),(0,p.jsxs)("div",{className:"mt-6 flex flex-col gap-2",children:[(0,p.jsx)(n.A,{size:"lg",onClick:()=>m(v),disabled:!v.disponible||g,children:v.disponible?g?"\u2714 En tu viaje":"Agregar a mi viaje":"Sin asientos"}),(0,p.jsx)(n.A,{to:`/destinos/${v.destinoId}`,variant:"secondary",children:"Ver hoteles del destino"}),g&&(0,p.jsx)(n.A,{to:"/mi-viaje",variant:"secondary",children:"Ir a Mi viaje"})]})]})]})]})})}}}]);
//# sourceMappingURL=947.e6e08fff.chunk.js.map