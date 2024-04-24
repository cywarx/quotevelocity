"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{6565:function(e,t,n){n.r(t);var r=n(3178);let l=(0,n(2585).createContext)({translations:new Map,rewrites:new Map,locale:r.jH});t.default=l},688:function(e,t,n){n.r(t),n.d(t,{Button:function(){return _},buttonStyles:function(){return P}});var r,l,a,i,o=n(9447),s=n(2585),u=n(987),c=n(766),f=n(4499);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=e=>f.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 13 10"},e),r||(r=f.createElement("path",{fill:"currentColor",d:"M4.998 7.92 12.145.773l.707.708-7.854 7.853L.645 4.981l.707-.708L4.998 7.92Z"})));function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=e=>f.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:10,height:9,fill:"none",viewBox:"0 0 10 9"},e),l||(l=f.createElement("path",{d:"M9.5 9V0M1 .5h9M.667 8.627 9.382.859"})));function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=e=>f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 101"},e),a||(a=f.createElement("path",{fill:"currentColor",d:"M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919Z",opacity:.3})),i||(i=f.createElement("path",{fill:"currentFill",d:"M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165Z"})));let x=e=>{let{className:t,svgClass:n}=e;return(0,o.jsxs)("div",{role:"status",className:(0,c.cx)(t,"pointer-events-none"),children:[(0,o.jsx)(m,{className:(0,c.cx)("animate-spin","fill-current",n),"aria-hidden":"true"}),(0,o.jsx)("span",{className:"sr-only",children:"Loading..."})]})};var b=n(6565),w=n(2361),y=n(3178),j=n(2445);let k=(e,t)=>{var n;return null===(n=e.map)||void 0===n?void 0:n.call(e,e=>e[t]?(e[t].includes("/:")||e[t].includes("*"))&&[new j.o({pathname:e[t]}),n=>{let{pathname:r}=n;return{pathname:e[t],params:r.groups}}]:null).filter(Boolean)},O=(e,t)=>{let n={};for(let[r,l]of t){let t=r.exec({pathname:e});if(null!==t&&"pathname"in t){n=l(t);break}}return n},C=function(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!e.length)return null;let l=O(t,r?k(e,"destination"):k(e,"source")),a=null===(n=e.filter(e=>{let n=e[r?"destination":"source"];return n===l.pathname||y.jH&&n==="/"+y.jH+l.pathname||n===t})[0])||void 0===n?void 0:n[r?"source":"destination"],i=0;return l.params?null==a?void 0:a.replaceAll(RegExp(`/:(${Object.keys(l.params).join("|")})`,"gi"),(e,t)=>e.replace(":"+t,l.params[t])).replaceAll(/\*/gi,()=>{var e;return null===(e=l.params)||void 0===e?void 0:e[i++]}):a},E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.jH;return`/${t}${"/"===e?"":e}`},N=(e,t)=>{let n=C(e,t,!0)||t;return(null==n?void 0:n.startsWith(`/${y.jH}`))?n.replace(RegExp(`/${y.jH}/?`),"/"):n},D=(e,t,n)=>{if(e){var r,l,a,i;if("string"==typeof e)return -1===e.indexOf("http")&&-1===e.indexOf("mailto:")&&-1===e.indexOf("tel:")?{href:N(n,E(e,t))}:{href:e};if((null===(r=e.selectedTab)||void 0===r?void 0:r.startsWith("external"))||(null===(l=e._type)||void 0===l?void 0:l.startsWith("external"))||e.url)return{href:e.url,label:e.label};if((null===(a=e.selectedTab)||void 0===a?void 0:a.startsWith("internal"))||e.slug||"home"===e._type){let{_type:r,label:l,slug:a,query:o,anchor:s}=e,u=e.parentSlug||(null===(i=e.parentPage)||void 0===i?void 0:i.slug),c=("string"==typeof u?u:null==u?void 0:u.current)||"",f=("string"==typeof a?a:null==a?void 0:a.current)||"",d=w.Ge[r];return d?(d=N(n,E(d=(d=d.replace(":parent",`${c}`)).replace(":slug",`${f}`),t)),o&&(d+=`?${o}`),s&&(d+=`#${s}`),{href:d=d.replaceAll("//","/"),label:l}):{href:d,label:l}}}};var $=n(4494),M=e=>{let{rewrites:t,locale:n}=(0,s.useContext)(b.default),r=(0,$.usePathname)(),l=D(e,n,t);return l&&(l.active=(null==l?void 0:l.href)===r),l};let P=(0,c.tv)({base:["relative appearance-none cursor-pointer font-sans text-center overflow-clip","disabled:pointer-events-none","focus-visible:outline"],variants:{variant:{none:"inline-flex",primary:["text-black text-12 uppercase font-mono leading-none inline-flex items-center justify-center overflow-clip rounded","h-40","after:absolute after:bottom-8 after:left-0","after:w-full after:h-1","after:bg-current","after:scale-x-0 after:hover:scale-x-100 after:focus-visible:scale-x-100 after:origin-left","after:transition-transform after:duration-500 after:ease-quart-out after:transform-gpu"],"fill-green":["bg-black lg:bg-green","h-39 px-15 lg:h-29 lg:px-10","text-white lg:text-black text-12 uppercase font-mono leading-none inline-flex items-center justify-center overflow-clip rounded-lg lg:rounded","hover:text-white hover:bg-black","transition-color duration-500 ease-quart-out"],"fill-black":["h-37 px-14","bg-black border border-black text-white","text-12 uppercase font-mono leading-none inline-flex items-center justify-center overflow-clip rounded-lg","hover:!text-black hover:bg-white","transition-color duration-500 ease-quart-out"],classic:["inline-flex uppercase font-mono text-12","opacity-100 hover:opacity-30","transition-opacity duration-500 ease-quart-out"]},active:{true:""},disabled:{true:"opacity-50 pointer-events-none"},loading:{true:"cursor-wait"},loaded:{true:"cursor-default"}},compoundVariants:[{variant:"underlined",active:!0,class:"after:scale-x-100 after:hover:scale-x-0 after:origin-right"}]}),_=(0,s.forwardRef)((e,t)=>{let n,{as:r="button",target:l,children:a,className:i,onClick:f,linkInput:d,href:v,active:g,disabled:m,enableLoader:b,loading:w,loaded:y,label:j,prefetch:k=!1,shallow:O,anchorOffset:C=0,...E}=e;b="underlined"!==E.variant&&b;let N=(0,s.useRef)(null),D=(0,$.usePathname)();d?(n=M(d),j=j||d.label):v&&(v=(n=M(v)).href),n&&(v=n.href,g=g||n.active);let _=e=>{if(null==f||f(e),null==v?void 0:v.startsWith(D+"#")){let t=v.split("#")[1],n=document.getElementById(t);if(!n){console.warn(`packages/ui/components/button/Button.tsx | link with anchor -> document.getElementById(${t}) is undefined`);return}e.preventDefault();let r=n.getBoundingClientRect().top+window.scrollY;window.scroll({top:r-(C||0),behavior:"smooth"})}};b&&((w||y)&&(m=!0),(0,s.useEffect)(()=>{!y&&N.current&&(N.current.style.transitionDuration="0s",requestAnimationFrame(()=>{N.current&&(N.current.style.transitionDuration="")}))},[y]),a=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:(0,c.cx)("h-full grid place-items-center","transition-transform duration-500 ease-quart-out",(w||y)&&"-translate-y-full"),children:a}),(0,o.jsx)("span",{ref:N,className:(0,c.cx)("absolute inset-0 top-full h-full grid place-items-center","transition-transform duration-500 ease-quart-out",w&&"-translate-y-full",y&&"-translate-y-[200%]"),children:(0,o.jsx)(x,{className:"w-16 h-16",svgClass:"fill-current"})}),(0,o.jsx)("span",{className:(0,c.cx)("absolute inset-0 top-full h-full grid place-items-center","transition-transform duration-500 ease-quart-out",y&&"-translate-y-full"),children:(0,o.jsx)(p,{className:"w-14"})})]}));let B=[P({...E,active:g,disabled:m,loading:w,loaded:y}),i];if(!v)return(0,o.jsx)(r,{ref:t,className:(0,c.cx)(B),disabled:m,"aria-label":j,onClick:_,...E,children:a||j});{let e=l||0===v.indexOf("mailto:")||0===v.indexOf("http")?"_blank":void 0;return(0,o.jsxs)(u.default,{ref:t,href:v,target:e,className:(0,c.cx)(B),"aria-label":j,onClick:_,prefetch:k,shallow:O,...E,children:[a||j," ",!["none","classic"].includes(E.variant)&&(0,o.jsx)(h,{className:"ml-10 mt-2 stroke-current"})," "]})}})},766:function(e,t,n){n.d(t,{cx:function(){return c},tv:function(){return f}});var r=n(4292),l=n(1774),a=n(9977);let i=()=>{let e=(0,r._)();return(0,l.t)(e,{classGroups:{"font-size":[{text:[e=>Number(e)]}]}})},o=i(),s=(0,a.I)(i);var u=n(617);let c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(...t)||void 0},f=(e,t)=>(0,u.tv)(e,{...t,twMergeConfig:o})},3178:function(e,t,n){n.d(t,{jH:function(){return u}});let r=[{id:"en",title:"English",isDefault:!0,defaultCountry:"us"}],l=[{id:"us",title:"United States",languages:[{isoCode:"en"}],isDefault:!0}],a=r.flatMap(e=>l.filter(t=>t.languages.map(e=>e.isoCode).includes(e.id)).map(t=>({id:`${e.id}-${t.id}`,title:`${e.title} (${t.id.toUpperCase()})`,currency:t.currency,isDefault:e.isDefault&&e.defaultCountry===t.id}))),i=r.find(e=>e.isDefault);r.filter(e=>!e.isDefault),i.id,r.map(e=>e.id);let o=l.find(e=>e.isDefault);l.filter(e=>!e.isDefault),o.id,l.map(e=>e.id);let s=a.find(e=>e.isDefault);a.filter(e=>!e.isDefault);let u=(null==s?void 0:s.id)||a[0].id;a.map(e=>e.id)},2361:function(e,t,n){n.d(t,{Ge:function(){return l},vc:function(){return r}});let r={useCdn:!1,perspective:"published",dataset:"production",projectId:"labz492c",apiVersion:"2023-07-01",token:n(5080).env.SANITY_API_TOKEN},l={home:"/",teamPage:"/team",page:"/:slug",legal:"/legal/:slug",contactPage:"/contact",jobDetailsPage:"/job/:slug"}}}]);