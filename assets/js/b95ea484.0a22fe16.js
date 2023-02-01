"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[3488],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(4778),o=(r(9496),r(9613));const a={},i="HTTP API",s={unversionedId:"reference/api",id:"reference/api",title:"HTTP API",description:"The stock firmware enables ESPHome's Web Server component, which in turn enables an HTTP API (on port 80). Since the stock firmware exposes a sensor for reporting the current desk height, and a number to set the target height, you can use these simple HTTP endpoints to write your integrations.",source:"@site/docs/reference/api.md",sourceDirName:"reference",slug:"/reference/api",permalink:"/docs/reference/api",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/docs/reference/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting & Support",permalink:"/docs/troubleshooting"},next:{title:"Desk Compatibility",permalink:"/docs/reference/compatibility"}},p={},l=[{value:"Get Actual Desk Height",id:"get-actual-desk-height",level:2},{value:"Get Target Desk Height",id:"get-target-desk-height",level:2},{value:"Set Target Desk Height",id:"set-target-desk-height",level:2},{value:"Set Desk Preset",id:"set-desk-preset",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-api"},"HTTP API"),(0,o.kt)("p",null,"The stock firmware enables ESPHome's ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/components/web_server.html"},"Web Server")," component, which in turn enables an ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html"},"HTTP API")," (on port 80). Since the stock firmware exposes a sensor for reporting the current desk height, and a number to set the target height, you can use these simple HTTP endpoints to write your integrations."),(0,o.kt)("p",null,"See ESPHome's documentation on the ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#sensor"},"sensor")," and ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#number"},"number")," endpoints for more information about what responses you will receive."),(0,o.kt)("h2",{id:"get-actual-desk-height"},"Get Actual Desk Height"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#sensor"},"Sensor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /sensor/desk_height\n")),(0,o.kt)("h2",{id:"get-target-desk-height"},"Get Target Desk Height"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#number"},"Number")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /number/target_desk_height\n")),(0,o.kt)("h2",{id:"set-target-desk-height"},"Set Target Desk Height"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#number"},"Number")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /number/target_desk_height/set?value=the_value_to_set\n")),(0,o.kt)("h2",{id:"set-desk-preset"},"Set Desk Preset"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://esphome.io/web-api/index.html#button"},"Button")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"{n}")," with a preset number 1-4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /button/desk_preset_{n}/press\n")))}u.isMDXComponent=!0}}]);