"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[292],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),h=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=h(r),c=n,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||s;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,a[1]=o;for(var h=2;h<s;h++)a[h]=r[h];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=r(4778),n=(r(9496),r(9613));const s={},a="Entities",o={unversionedId:"reference/entities",id:"reference/entities",title:"Entities",description:"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each.",source:"@site/docs/reference/entities.md",sourceDirName:"reference",slug:"/reference/entities",permalink:"/docs/reference/entities",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/reference/entities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Desk Compatibility",permalink:"/docs/reference/compatibility"},next:{title:"GPIO Pinout",permalink:"/docs/reference/gpio"}},l={},h=[{value:"Sensors",id:"sensors",level:2},{value:"Desk Height",id:"desk-height",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Preset 1/2/3/4",id:"preset-1234",level:3},{value:"Set Preset 1/2/3/4",id:"set-preset-1234",level:3},{value:"Restart",id:"restart",level:3},{value:"Select",id:"select",level:2},{value:"Height Decoder Variant",id:"height-decoder-variant",level:3},{value:"Height Units",id:"height-units",level:3},{value:"Numbers",id:"numbers",level:2},{value:"Max Target Height",id:"max-target-height",level:3},{value:"Min Target Height",id:"min-target-height",level:3},{value:"Target Desk Height",id:"target-desk-height",level:3},{value:"Lights",id:"lights",level:2},{value:"Status LED",id:"status-led",level:3}],u={toc:h};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"entities"},"Entities"),(0,n.kt)("p",null,"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each."),(0,n.kt)("h2",{id:"sensors"},"Sensors"),(0,n.kt)("h3",{id:"desk-height"},"Desk Height"),(0,n.kt)("p",null,"This sensor reports the current ",(0,n.kt)("em",{parentName:"p"},"actual")," height of the desk, as reported by the control box. It is gathered by the currently-set decoder variant."),(0,n.kt)("h2",{id:"buttons"},"Buttons"),(0,n.kt)("h3",{id:"preset-1234"},"Preset 1/2/3/4"),(0,n.kt)("p",null,"These buttons are used to recall a preset height from your desk's control box. It is the same as pressing the corresponding button on the physical keypad."),(0,n.kt)("h3",{id:"set-preset-1234"},"Set Preset 1/2/3/4"),(0,n.kt)("p",null,'These buttons are used to set a preset height on your desk\'s control box. It is the same as pressing "M", then the corresponding preset on the physical keypad.'),(0,n.kt)("h3",{id:"restart"},"Restart"),(0,n.kt)("p",null,"This button is used to restart the Upsy Desky unit, for example if you have changed a configuration that requires a restart."),(0,n.kt)("h2",{id:"select"},"Select"),(0,n.kt)("h3",{id:"height-decoder-variant"},"Height Decoder Variant"),(0,n.kt)("p",null,"This input selects the decoder variant that will be used to decode the height from the control box. You can read more about decoders ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/decoders/"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"uplift")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible Values:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uplift")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"jarvis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"omnidesk"))),(0,n.kt)("h3",{id:"height-units"},"Height Units"),(0,n.kt)("p",null,"This input selects the units that will be used to display the height of the desk and the target height of the desk."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Default:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"in")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible Values:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cm"))),(0,n.kt)("h2",{id:"numbers"},"Numbers"),(0,n.kt)("h3",{id:"max-target-height"},"Max Target Height"),(0,n.kt)("p",null,"This input sets the maximum height that the target height slider will be able to be set to."),(0,n.kt)("h3",{id:"min-target-height"},"Min Target Height"),(0,n.kt)("p",null,"This input sets the minimum height that the target height slider will be able to be set to."),(0,n.kt)("h3",{id:"target-desk-height"},"Target Desk Height"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to use the preset functionality instead of this input, since the presets have soft-stopping, which is not possible with the input.")),(0,n.kt)("p",null,"When changed, this input will start moving the desk in the direction of the target height. It will attempt to emulate a soft stop by stopping short of the target height. You can see the source for that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tjhorner/esphome-standing-desk/blob/6e92c19aebe25f8ea05d3c5d3498b42bc75271fe/configs/template.yaml#L44-L62"},"here"),"."),(0,n.kt)("h2",{id:"lights"},"Lights"),(0,n.kt)("h3",{id:"status-led"},"Status LED"),(0,n.kt)("p",null,"There is a small LED on the Upsy Desky's PCB that is controlled by the ESPHome ",(0,n.kt)("a",{parentName:"p",href:"https://esphome.io/components/light/status_led.html"},"Status LED")," component. (It might not be visible if you have a darker-colored enclosure.)"),(0,n.kt)("p",null,"By default the LED is on when everything is OK, but you can turn it off if it annoys you. If you turn it off, it will still retain the Status LED functionality, i.e., it will blink if something is wrong."))}p.isMDXComponent=!0}}]);