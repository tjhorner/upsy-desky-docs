"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[538],{2454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>U,default:()=>H,frontMatter:()=>C,metadata:()=>T,toc:()=>A});var o=n(1527),s=n(6120),i=n(959),r=n(5924),a=n(3631),l=n(8903),c=n(4035),u=n(2459),d=n(5322),h=n(2998);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function y(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=y(e),[r,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[l,u]=f({queryString:n,groupId:o}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,h.Nk)(n);return[o,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),g=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var b=n(2610);const x={tabList:"tabList_w6zP",tabItem:"tabItem_gvDx"};function j(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=l[n].value;o!==s&&(u(t),i(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=g(e);return(0,o.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,o.jsx)(j,{...e,...t}),(0,o.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,o.jsx)(v,{...e,children:p(e.children)},String(t))}const S={tabItem:"tabItem_Ui_Q"};function D(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(S.tabItem,s),hidden:n,children:t})}var I=n(6758);const C={sidebar_position:1},U="Getting Started",T={id:"getting-started",title:"Getting Started",description:"This page will guide you through setting up your new Upsy Desky with your home automation system and your standing desk. It should take 5-10 minutes, but probably less.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration",permalink:"/docs/configuration/"}},P={},A=[{value:"Step 1: Connect to Wi-Fi",id:"step-1-connect-to-wi-fi",level:2},{value:"Step 2: Connect to Home Assistant",id:"step-2-connect-to-home-assistant",level:2},{value:"Step 3: Configure",id:"step-3-configure",level:2},{value:"Step 4: Connect to Desk",id:"step-4-connect-to-desk",level:2},{value:"Step 5: Print Enclosure (if you need to)",id:"step-5-print-enclosure-if-you-need-to",level:2}];function E(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",icon:"icon",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(t.p,{children:"This page will guide you through setting up your new Upsy Desky with your home automation system and your standing desk. It should take 5-10 minutes, but probably less."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Do you have a kit?"})," You will need to solder the RJ45 jacks in place. They come snapped in for your convenience."]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-connect-to-wi-fi",children:"Step 1: Connect to Wi-Fi"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["If you have a hidden SSID, you will either need to unhide it, or ",(0,o.jsx)(t.a,{href:"/docs/advanced/customization/",children:"adopt your Upsy Desky in the ESPHome dashboard"})," then add the ",(0,o.jsx)(t.code,{children:"fast_connect"})," option to the ",(0,o.jsx)(t.code,{children:"wifi"})," section of the config YAML. This is unfortunately a limitation with ESPHome."]})}),"\n",(0,o.jsx)(t.p,{children:"Use one of the below methods to connect your Upsy Desky to Wi-Fi."}),"\n","\n","\n",(0,o.jsxs)(k,{children:[(0,o.jsxs)(D,{value:"ble",label:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.icon,{icon:"fa-brands fa-bluetooth",size:"lg"})," Bluetooth"]}),default:!0,children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"This method is supported for firmware version 1.1.2 and newer. Units shipped starting October 31, 2023 will have this version."})}),(0,o.jsxs)(t.p,{children:["If you are using Home Assistant 2023.11 or newer and have a ",(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/bluetooth/",children:"suitable Bluetooth adapter/proxy set up"}),", you can set up your Upsy Desky via Bluetooth."]}),(0,o.jsx)(t.p,{children:"It's incredibly easy:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Plug the Upsy Desky into your desk's control box or USB-C power."}),"\n",(0,o.jsx)(t.li,{children:"Once powered on, Home Assistant will detect your Upsy Desky and prompt you to connect it to your Wi-Fi network."}),"\n"]}),(0,o.jsx)(t.p,{children:"If you are having trouble with this method, ensure the following are true:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You are running Home Assistant 2023.11 or newer."}),"\n",(0,o.jsx)(t.li,{children:"Your Upsy Desky is running firmware 1.1.2 or newer, or was shipped after October 31, 2023."}),"\n",(0,o.jsx)(t.li,{children:"Your Home Assistant instance has a Bluetooth adapter or proxy set up."}),"\n",(0,o.jsx)(t.li,{children:"The control box is providing power to the Upsy Desky, or you are using the USB-C port for power. A red LED inside the enclosure should be lit."}),"\n"]}),(0,o.jsx)(t.p,{children:"You can also try setting it up manually with this button if it's not auto-detected:"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://my.home-assistant.io/redirect/config_flow_start/?domain=improv_ble",children:(0,o.jsx)(t.img,{src:"https://my.home-assistant.io/badges/config_flow_start.svg",alt:""})})}),(0,o.jsx)(t.p,{children:"If all else fails, you can try one of the other setup methods."})]}),(0,o.jsxs)(D,{value:"usb",label:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.icon,{icon:"fa-brands fa-usb",size:"lg"})," USB"]}),children:[(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Connect the Upsy Desky to your computer via USB"}),"\n",(0,o.jsx)(t.li,{children:"Press the blue connect button below"}),"\n",(0,o.jsx)(t.li,{children:'Press "Connect to Wi-Fi"'}),"\n",(0,o.jsx)(t.li,{children:"Select your Wi-Fi network and enter your password"}),"\n"]}),(0,o.jsxs)(t.p,{children:['The Upsy Desky will be listed as either "CP2102 USB to UART Bridge Controller" or "Upsy Desky" in the connection list. If you don\'t see it, make sure you are using a USB data cable (i.e., not power-only), and try installing the ',(0,o.jsx)(t.a,{href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads",children:"driver"})," for the serial chip."]}),(0,o.jsx)(I.Z,{unsupportedMessage:"Provisioning via USB only works in browsers which support Web Serial, such as Chrome or Edge. Please provision your Upsy Desky via Bluetooth or Wi-Fi instead."})]}),(0,o.jsxs)(D,{value:"captive-portal",label:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.icon,{icon:"fa-solid fa-wifi",size:"md"})," Captive Portal (Wi-Fi)"]}),children:[(0,o.jsx)(t.admonition,{title:"TL;DR",type:"note",children:(0,o.jsxs)(t.p,{children:["Connect to the ",(0,o.jsx)(t.code,{children:"upsy-desky-XXXXXX"})," network (password: ",(0,o.jsx)(t.code,{children:"hunter2hunter2"}),"), enter Wi-Fi credentials in captive portal prompt."]})}),(0,o.jsxs)(t.p,{children:["Plug your Upsy Desky into power, and you should see a Wi-Fi network starting with ",(0,o.jsx)(t.code,{children:"upsy-desky"})," nearby. Connect to it with your phone or laptop (the password is ",(0,o.jsx)(t.code,{children:"hunter2hunter2"}),"); the captive portal page should automatically appear but if it doesn't, you can go to ",(0,o.jsx)(t.code,{children:"http://192.168.4.1"})," in your browser. If it still doesn't appear, make sure you are connected to the Upsy Desky's network."]}),(0,o.jsx)(t.p,{children:"Follow the instructions on this page to connect it to your Wi-Fi network."})]})]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-connect-to-home-assistant",children:"Step 2: Connect to Home Assistant"}),"\n",(0,o.jsx)(t.admonition,{title:"TL;DR",type:"note",children:(0,o.jsxs)(t.p,{children:["Home Assistant will ask to add the device. Do that. You can also ",(0,o.jsx)(t.a,{href:"/docs/configuration/renaming/",children:"rename it"})," if you want."]})}),"\n",(0,o.jsx)(t.p,{children:"Once connected to your network, Home Assistant should automatically pick the device up and offer to add it. If it doesn't, make sure it's properly connected to Wi-Fi. Check your router's settings to get its IP and add an ESPHome integration to Home Assistant manually, if you need to."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["It's recommended you ",(0,o.jsx)(t.a,{href:"/docs/configuration/renaming/",children:"rename it now"})," to something more descriptive so that creating automations is easier, and so that you don't need to go through the hassle of changing entity IDs later."]})}),"\n",(0,o.jsxs)(t.p,{children:["If you don't use Home Assistant, you can still control your desk from the built-in web UI by navigating to its IP address or hostname in your browser. ESPHome also offers support for several common protocols such as ",(0,o.jsx)(t.a,{href:"https://esphome.io/components/mqtt.html",children:"MQTT"}),", so you can use it with any system that supports those. Check ",(0,o.jsx)(t.a,{href:"https://esphome.io/#core-components",children:"the ESPHome documentation"})," for more information on what it supports. (TIL it supports CAN bus? lol)"]}),"\n",(0,o.jsx)(t.h2,{id:"step-3-configure",children:"Step 3: Configure"}),"\n",(0,o.jsx)(t.admonition,{title:"TL;DR",type:"note",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/configuration/",children:"Configuration"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Once connected to Home Assistant, you can see the configuration options in the Home Assistant frontend and tailor them to your needs. See ",(0,o.jsx)(t.a,{href:"/docs/configuration/",children:"Configuration"})," for details on what each option does. You will likely need to change them for your specific desk."]}),"\n",(0,o.jsxs)(t.p,{children:["More advanced users (or those familiar with ESPHome) can also check out the ",(0,o.jsx)(t.a,{href:"/docs/advanced/customization/",children:"advanced guide"})," on customizing the actual ESPHome config yaml to your liking."]}),"\n",(0,o.jsx)(t.h2,{id:"step-4-connect-to-desk",children:"Step 4: Connect to Desk"}),"\n",(0,o.jsx)(t.admonition,{title:"TL;DR",type:"note",children:(0,o.jsx)(t.p,{children:"Plug one RJ45 jack into the control box, and the other into the keypad. Doesn't matter which one is which. Test to see if it works in Home Assistant."})}),"\n",(0,o.jsx)(t.p,{children:"Once your Upsy Desky has been integrated with Home Assistant, you can unplug the USB-C cable \u2014 the desk itself will provide power. Connect your Upsy Desky to your desk's control box using an RJ45 cable (it doesn't matter which jack you use), then after a minute or so check Home Assistant to see if you are able to control it properly. At this point you can also optionally connect the stock keypad to the open RJ45 jack on the Upsy Desky so you can use that as well."}),"\n",(0,o.jsxs)(t.p,{children:["If you are having trouble with any of these steps, see ",(0,o.jsx)(t.a,{href:"/docs/troubleshooting",children:"Troubleshooting"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"step-5-print-enclosure-if-you-need-to",children:"Step 5: Print Enclosure (if you need to)"}),"\n",(0,o.jsx)(t.p,{children:"If you didn't order a 3D-printed enclosure with your Upsy Desky, you can print your own. If you ordered from my Tindie shop, I have included the necessary mounting hardware for the PCB, but if you didn't, you will need:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"2 M3x4mm machine screws"}),"\n",(0,o.jsx)(t.li,{children:"1 M2x4mm machine screw"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The necessary STL files are available from this GitHub repo, under ",(0,o.jsx)(t.a,{href:"https://github.com/tjhorner/upsy-desky/tree/master/enclosure",children:"the enclosure directory"}),". Once printed, place the PCB in the case (it's a tight fit), screw it in, then snap the top on."]}),"\n",(0,o.jsx)(t.p,{children:"At this point you can finalize the installation by sticking the Upsy Desky on the underside of your desk using the provided mounting adhesive (if you purchased an enclosure)."})]})}function H(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(E,{...e})}):E(e)}},6758:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(6406),s=(n(959),n(1527));function i(e){let{unsupportedMessage:t="Provisioning via USB only works in browsers which support Web Serial, such as Chrome or Edge."}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)("script",{type:"module",src:"https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"})}),(0,s.jsx)("esp-web-install-button",{manifest:"https://shop.horner.tj/api/upsy-desky-firmware/manifest",children:(0,s.jsx)("span",{slot:"unsupported",children:t})})]})}},6120:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(959);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);