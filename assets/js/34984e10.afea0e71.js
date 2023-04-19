"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[523],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var s=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?s.createElement(y,i(i({ref:t},c),{},{components:r})):s.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=r(4778),n=(r(9496),r(9613));const o={},i="Presets",a={unversionedId:"configuration/presets/index",id:"configuration/presets/index",title:"Presets",description:"Most standing desk control boxes have the ability to store presets \u2014 usually up to 4. The Upsy Desky exposes the ability to set and recall these presets through virtual buttons.",source:"@site/docs/configuration/presets/index.md",sourceDirName:"configuration/presets",slug:"/configuration/presets/",permalink:"/docs/configuration/presets/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/configuration/presets/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decoders",permalink:"/docs/configuration/decoders/"},next:{title:"Renaming the Device",permalink:"/docs/configuration/renaming/"}},l={},p=[{value:"Recalling Presets",id:"recalling-presets",level:2},{value:"Setting Presets",id:"setting-presets",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"presets"},"Presets"),(0,n.kt)("p",null,"Most standing desk control boxes have the ability to store presets \u2014 usually up to 4. The Upsy Desky exposes the ability to set and recall these presets through virtual buttons."),(0,n.kt)("p",null,"Presets are the recommended way to control your desk through the Upsy Desky (as opposed to the Target Desk Height control) since the desk will soft-stop when it nears the preset height, which is not possible through other means."),(0,n.kt)("h2",{id:"recalling-presets"},"Recalling Presets"),(0,n.kt)("p",null,'To recall a previously stored preset (either through the keypad or via the Upsy Desky), just press one of the "Desk Preset X" buttons:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Preset recall buttons in Home Assistant",src:r(7450).Z,width:"600",height:"390"})),(0,n.kt)("h2",{id:"setting-presets"},"Setting Presets"),(0,n.kt)("p",null,'You can set a preset through the virtual "Set Preset X" buttons. First, set your desk to the desired height with the keypad or Upsy Desky. Then just press one of the buttons to set the preset:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Preset set buttons in Home Assistant",src:r(4528).Z,width:"616",height:"390"})),(0,n.kt)("p",null,"If you do not see these controls, you will probably need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/firmware-updates"},"update your firmware"),"."))}u.isMDXComponent=!0},7450:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/preset-recall-a0bad3f0590b258bba1187473e5b5f8d.png"},4528:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/preset-set-9ceb3d958ef241d7c903c06c9db6a26b.png"}}]);