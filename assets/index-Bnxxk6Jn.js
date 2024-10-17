
/**
 * 由 One-step-admin 提供技术支持
 * Powered by One-step-admin
 * https://one-step-admin.hurui.me
 */
    
import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-B0fMp58O.js";import{e as u,p as c,r as f,o as p,h as g,w as r,d as a,a as t,C as w,u as _,_ as v,c as x}from"./index-D93ItO3A.js";import{_ as l}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-CWaWQFRD.js";const I={class:"image-slot"},y=u({name:"ImagePreview",__name:"index",props:{src:{},width:{default:200},height:{default:200}},setup(i){const e=i,s=c(()=>typeof e.width=="string"?e.width:`${e.width}px`),o=c(()=>typeof e.height=="string"?e.height:`${e.height}px`);return(n,b)=>{const m=v,d=f("ElImage");return p(),g(d,{src:n.src,fit:"cover",style:w(`width:${_(s)};height:${_(o)};`),"preview-src-list":[n.src],"preview-teleported":""},{error:r(()=>[a("div",I,[t(m,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}}),P=l(y,[["__scopeId","data-v-bb23448d"]]),B={};function C(i,e){const s=$,o=P,n=h;return p(),x("div",null,[t(s,{title:"图片预览",content:"ImagePreview"}),t(n,null,{default:r(()=>[a("div",null,[t(o,{src:"https://one-step-admin.hurui.me/logo.png",width:200})])]),_:1}),t(n,{title:"图片加载失败时"},{default:r(()=>[a("div",null,[t(o,{src:"http://www.baidu.com",width:"100px",height:"100px"})])]),_:1})])}const S=l(B,[["render",C]]);export{S as default};
