import{d,u as _,a as p,c as m,b as u,r as h,o,e as n,f as t,t as a,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-e7b5e306.js";import{N as w}from"./NoteDisplay-dd9c4986.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},j={class:"font-bold flex gap-2"},B={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(o(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",D,[t("h1",L,a(l(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(o(!0),n(f,null,g(i.value,(e,c)=>(o(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",j,[t("div",B,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(o(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/darian/Darian1996Projects/testslidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
