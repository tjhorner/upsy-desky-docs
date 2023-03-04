"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[21],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(4778),i=(n(9496),n(9613));const o={sidebar_position:1.6},a="Integrations",s={unversionedId:"integrations/index",id:"integrations/index",title:"Integrations",description:"Native Integrations",source:"@site/docs/integrations/index.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/docs/integrations/",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/integrations/index.md",tags:[],version:"current",sidebarPosition:1.6,frontMatter:{sidebar_position:1.6},sidebar:"tutorialSidebar",previous:{title:"Renaming the Device",permalink:"/docs/configuration/renaming/"},next:{title:"Home Assistant",permalink:"/docs/integrations/home-assistant"}},c={},l=[{value:"Native Integrations",id:"native-integrations",level:2},{value:"Community Integrations",id:"community-integrations",level:2},{value:"Create Your Own",id:"create-your-own",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrations"},"Integrations"),(0,i.kt)("h2",{id:"native-integrations"},"Native Integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/home-assistant"},"Home Assistant"))),(0,i.kt)("h2",{id:"community-integrations"},"Community Integrations"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This list only contains integrations specifically designed for the Upsy Desky HTTP API. This means that if an integration is not listed here, you can check the ",(0,i.kt)("a",{parentName:"p",href:"https://esphome.io/"},"ESPHome docs")," to see if there is a component for it."),(0,i.kt)("p",{parentName:"admonition"},"And if you connect it to Home Assistant, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/"},"wide breadth of integrations")," available for that platform.")),(0,i.kt)("p",null,"Since there is a standard HTTP API, anyone can create an integration which is designed to work with the Upsy Desky. Here are the integrations that have been created so far:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/stream-deck"},"Stream Deck"))),(0,i.kt)("h2",{id:"create-your-own"},"Create Your Own"),(0,i.kt)("p",null,"If you would like to create your own integration, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/api"},"HTTP API")," reference page for more information. Then, once you are done, let me know in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/ZHfXKQrSxF"},"Discord server")," and I'll add it to the list!"))}u.isMDXComponent=!0}}]);