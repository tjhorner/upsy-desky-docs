"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[16],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,p=d["".concat(c,".").concat(h)]||d[h]||f[h]||o;return n?i.createElement(p,a(a({ref:t},u),{},{components:n})):i.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4778),r=(n(9496),n(9613));const o={sidebar_position:1.5},a="Configuration",s={unversionedId:"configuration/index",id:"configuration/index",title:"Configuration",description:"Things like the min/max desk height, units, and decoder variant are now set at runtime instead of being statically configured within the ESPHome config. This simplifies things a lot, and lets you configure these options without having to compile the firmware yourself.",source:"@site/docs/configuration/index.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/docs/configuration/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/docs/configuration/index.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Decoders",permalink:"/docs/configuration/decoders/"}},c={},l=[{value:"Config Options",id:"config-options",level:2},{value:"Height Decoder Variant",id:"height-decoder-variant",level:3},{value:"Height Units",id:"height-units",level:3},{value:"Min/Max Target Height",id:"minmax-target-height",level:3}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Things like the min/max desk height, units, and decoder variant are now set at runtime instead of being statically configured within the ESPHome config. This simplifies things a lot, and lets you configure these options without having to compile the firmware yourself."),(0,r.kt)("p",null,"The stock firmware comes with reasonable defaults for an Uplift v2 desk, but you will need to change them if you have a different desk or wish to change the min/max height. You can find these configuration options in Home Assistant under Settings > Devices & Services > ESPHome > (node name)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8663).Z,width:"694",height:"868"})),(0,r.kt)("p",null,'Most of these require a restart to take effect; just flick the "Restart" switch to restart your Upsy Desky. Once reconnected to Home Assistant, the values will update and persist across reboots.'),(0,r.kt)("h2",{id:"config-options"},"Config Options"),(0,r.kt)("h3",{id:"height-decoder-variant"},"Height Decoder Variant"),(0,r.kt)("p",null,'The firmware has several "decoders" baked in for various protocols \u2014 choose the one that matches your desk brand. If it doesn\'t work, try each of the others to see if they work instead.'),(0,r.kt)("h3",{id:"height-units"},"Height Units"),(0,r.kt)("p",null,"Units to display in Home Assistant for desk height and target desk height."),(0,r.kt)("h3",{id:"minmax-target-height"},"Min/Max Target Height"),(0,r.kt)("p",null,"Sets the min/max value the target height slider will be able to be set to."))}d.isMDXComponent=!0},8663:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/config-30dfc634feb2a80844c27cd1348c39e2.png"}}]);