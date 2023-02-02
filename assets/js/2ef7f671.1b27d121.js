"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[649],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(4778),o=(r(9496),r(9613));const i={},a="Decoders",l={unversionedId:"configuration/decoders/index",id:"configuration/decoders/index",title:"Decoders",description:"In order to determine the desk height, the firmware uses what we call a decoder in order to interpret the desk's serial protocol. This is the component that handles the bytes coming from the desk's control box and decodes it into a usable height value.",source:"@site/docs/configuration/decoders/index.md",sourceDirName:"configuration/decoders",slug:"/configuration/decoders/",permalink:"/docs/configuration/decoders/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/docs/configuration/decoders/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"Presets",permalink:"/docs/configuration/presets/"}},d={},s=[{value:"Decoders by Model Number",id:"decoders-by-model-number",level:2},{value:"Fully Jarvis",id:"fully-jarvis",level:3},{value:"Uplift v2",id:"uplift-v2",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decoders"},"Decoders"),(0,o.kt)("p",null,"In order to determine the desk height, the firmware uses what we call a decoder in order to interpret the desk's serial protocol. This is the component that handles the bytes coming from the desk's control box and decodes it into a usable height value."),(0,o.kt)("p",null,"These decoders currently exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uplift")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jarvis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"omnidesk"))),(0,o.kt)("p",null,"Despite their names, it is possible for a decoder to work on a different brand of desk. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"uplift")," decoder works on Jarvis desks with control box model number FULLYCB3-A. Thus, if you are having issues with a certain decoder, it's a good idea to try the rest in the list to see if your desk works with one of them."),(0,o.kt)("p",null,"If none of the decoders work, you may wish to try ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/reverse-engineering/"},"reverse engineering")," your desk's protocol to create a new decoder and contributing it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In a future version of the firmware, I would like to add some kind of auto-detection feature so that the decoder does not need to be specified in the configuration.")),(0,o.kt)("h2",{id:"decoders-by-model-number"},"Decoders by Model Number"),(0,o.kt)("p",null,"Here is a list of known control box model numbers and the decoders that work with them."),(0,o.kt)("h3",{id:"fully-jarvis"},"Fully Jarvis"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FULLYCB2C-A: ",(0,o.kt)("inlineCode",{parentName:"li"},"jarvis")),(0,o.kt)("li",{parentName:"ul"},"FULLYCB3-A: ",(0,o.kt)("inlineCode",{parentName:"li"},"uplift"))),(0,o.kt)("h3",{id:"uplift-v2"},"Uplift v2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FRM053-2: ",(0,o.kt)("inlineCode",{parentName:"li"},"uplift"))))}u.isMDXComponent=!0}}]);