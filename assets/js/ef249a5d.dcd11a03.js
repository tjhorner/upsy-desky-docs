"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[626],{9613:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var r=i(9496);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(i),y=o,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||n;return i?r.createElement(d,a(a({ref:t},p),{},{components:i})):r.createElement(d,a({ref:t},p))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}y.displayName="MDXCreateElement"},1635:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(4778),o=(i(9496),i(9613));const n=i.p+"assets/images/rj45-diagram-3b4cf083c22e9f350bddfc434cfd7f33.png",a={},s="Assessing Compatibility",l={unversionedId:"reference/compatibility/assessing-compatibility",id:"reference/compatibility/assessing-compatibility",title:"Assessing Compatibility",description:"If your desk's control box model number is not in the compatibility list, this doesn't necessarily mean it's unsupported, just that nobody has tested it yet. You can assess whether your desk may be compatible using the steps below. If all the conditions are satisfied, you may be eligible to receive a unit for testing, free of charge.",source:"@site/docs/reference/compatibility/assessing-compatibility.mdx",sourceDirName:"reference/compatibility",slug:"/reference/compatibility/assessing-compatibility",permalink:"/docs/reference/compatibility/assessing-compatibility",draft:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/reference/compatibility/assessing-compatibility.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Desk Compatibility",permalink:"/docs/reference/compatibility/"},next:{title:"Entities",permalink:"/docs/reference/entities"}},c={},p=[{value:"Compatibility Checks",id:"compatibility-checks",level:2},{value:"Physical Compatibility",id:"physical-compatibility",level:3},{value:"Electrical Compatibility",id:"electrical-compatibility",level:3},{value:"Protocol Compatibility",id:"protocol-compatibility",level:3},{value:"Request Form",id:"request-form",level:2}],m={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assessing-compatibility"},"Assessing Compatibility"),(0,o.kt)("p",null,"If your desk's control box model number is not in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/compatibility/"},"compatibility list"),", this doesn't necessarily mean it's ",(0,o.kt)("em",{parentName:"p"},"unsupported"),", just that nobody has tested it yet. You can assess whether your desk may be compatible using the steps below. If all the conditions are satisfied, you may be eligible to receive a unit for testing, free of charge."),(0,o.kt)("h2",{id:"compatibility-checks"},"Compatibility Checks"),(0,o.kt)("h3",{id:"physical-compatibility"},"Physical Compatibility"),(0,o.kt)("p",null,"The Upsy Desky is compatible with control boxes that use an RJ45 port to communicate with the keypad. To ensure physical compatibility, check to see if the port used to connect the keypad is RJ45 ","\u2014"," it should have 8 pins and look pretty much identical to an Ethernet jack."),(0,o.kt)("h3",{id:"electrical-compatibility"},"Electrical Compatibility"),(0,o.kt)("p",null,"Once you have verified the physical compatibility, we need to verify whether the pins on the RJ45 port are connected properly."),(0,o.kt)("p",null,"Using a multimeter or other method, verify the following pins:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pin 3: GND"),(0,o.kt)("li",{parentName:"ul"},"Pin 5: +5V")),(0,o.kt)("p",null,"A diagram of the pin order on an RJ45 connector is provided below."),(0,o.kt)("img",{src:n,alt:"Diagram of RJ45 port and jack displaying the number order of the pins",style:{maxWidth:"500px",background:"white"}}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Diagram source: ",(0,o.kt)("a",{parentName:"em",href:"https://commons.wikimedia.org/wiki/File:RJ-45_plug_and_jack.svg"},"Sylvain Leroux on Wikimedia Commons"))),(0,o.kt)("p",null,"A helpful tool for measuring the voltage on each pin is an RJ45 breakout board, like ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/Poyiccot-Compatible-Terminal-Connector-Ethernet/dp/B07WKKVZRF"},"this one")," ","\u2014"," it will make the process much easier."),(0,o.kt)("h3",{id:"protocol-compatibility"},"Protocol Compatibility"),(0,o.kt)("p",null,"This one is difficult to test before you receive an Upsy Desky unit and is discussed in further detail in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/reverse-engineering/"},"reverse engineering guide"),". It is not required to test this in order to receive a test unit."),(0,o.kt)("h2",{id:"request-form"},"Request Form"),(0,o.kt)("p",null,"If you have tested both physical and electrical compatibility and believe your desk may be compatible, please fill out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSeFshQGAnTfLTRiJi8ZqbKaDPycQOh8KrQJ7H5pcFAA4S_UOw/viewform"},"this form"),". I'll review your submission and let you know once a test unit is available."))}u.isMDXComponent=!0}}]);