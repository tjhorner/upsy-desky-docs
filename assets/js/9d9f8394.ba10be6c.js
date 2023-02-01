"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[9360],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(r),h=n,f=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(4778),n=(r(9496),r(9613));const i={sidebar_position:2},s="Troubleshooting & Support",a={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting & Support",description:"I don't see the Wi-Fi network during setup",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/tree/main/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Stream Deck",permalink:"/docs/integrations/stream-deck"},next:{title:"HTTP API",permalink:"/docs/reference/api"}},p={},l=[{value:"I don&#39;t see the Wi-Fi network during setup",id:"i-dont-see-the-wi-fi-network-during-setup",level:2},{value:"I can&#39;t connect to my hidden Wi-Fi network",id:"i-cant-connect-to-my-hidden-wi-fi-network",level:2},{value:"The desk height is not being reported properly",id:"the-desk-height-is-not-being-reported-properly",level:2},{value:"Other Issues",id:"other-issues",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting--support"},"Troubleshooting & Support"),(0,n.kt)("h2",{id:"i-dont-see-the-wi-fi-network-during-setup"},"I don't see the Wi-Fi network during setup"),(0,n.kt)("p",null,"If you don't see a Wi-Fi network starting with ",(0,n.kt)("inlineCode",{parentName:"p"},"upsy-desky")," while the unit is powered, the best thing to try is re-flashing the firmware. If you have a Chromium-based browser, you can do it directly from the web without any downloads. ",(0,n.kt)("a",{parentName:"p",href:"https://shop.horner.tj/things/upsy-desky/setup/stock"},"Flash it here"),", and see if the issue persists. If it does, please join the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/ZHfXKQrSxF"},"Discord server")," for support."),(0,n.kt)("h2",{id:"i-cant-connect-to-my-hidden-wi-fi-network"},"I can't connect to my hidden Wi-Fi network"),(0,n.kt)("p",null,"This is unfortunately a limitation of ESPHome \u2014 the ",(0,n.kt)("a",{parentName:"p",href:"https://esphome.io/components/wifi.html#configuration-variables"},"Wi-Fi configuration")," requires that ",(0,n.kt)("inlineCode",{parentName:"p"},"fast_connect")," is enabled for hidden networks, but this cannot be enabled without setting a network in the configuration itself, so I cannot enable this for the stock firmware."),(0,n.kt)("p",null,"Essentially, you will need to adopt your Upsy Desky in the ESPHome dashboard then modify the Wi-Fi configuration to have the ",(0,n.kt)("inlineCode",{parentName:"p"},"fast_connect")," option."),(0,n.kt)("h2",{id:"the-desk-height-is-not-being-reported-properly"},"The desk height is not being reported properly"),(0,n.kt)("p",null,"You may need to specify the correct decoder variant to use in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/"},"Configuration"),". First, select the one that matches your desk brand, but if that doesn't work, you should try the others. Basically, repeat these steps until it works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select a different decoder variant"),(0,n.kt)("li",{parentName:"ol"},"Move your desk up/down with the keypad"),(0,n.kt)("li",{parentName:"ol"},"Check if it's working")),(0,n.kt)("p",null,"If none of the decoders work, then your desk may use a protocol that is thus-far undiscovered. Please email ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@tjhorner.dev"},"support@tjhorner.dev")," and I will work with you to add support for your desk."),(0,n.kt)("h2",{id:"other-issues"},"Other Issues"),(0,n.kt)("p",null,"If you are experiencing other issues, here are some things to try:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Restart your desk's control box. Sometimes it can get in a weird state which the Upsy Desky cannot recover from."),(0,n.kt)("li",{parentName:"ul"},"Disconnect and re-connect the Upsy Desky to the control box."),(0,n.kt)("li",{parentName:"ul"},"Reflash the firmware ",(0,n.kt)("a",{parentName:"li",href:"https://shop.horner.tj/things/upsy-desky/setup/stock"},"here"),".")),(0,n.kt)("p",null,"If all else fails, please join the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/ZHfXKQrSxF"},"Discord server")," for support. If necessary, we will work to triage an issue on the GitHub repository."))}c.isMDXComponent=!0}}]);