"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[292],{2358:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>h,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(1527),n=i(6120);const r={},h="Entities",o={id:"reference/entities",title:"Entities",description:"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each.",source:"@site/docs/reference/entities.md",sourceDirName:"reference",slug:"/reference/entities",permalink:"/docs/reference/entities",draft:!1,unlisted:!1,editUrl:"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/reference/entities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assessing Compatibility",permalink:"/docs/reference/compatibility/assessing-compatibility"},next:{title:"GPIO Pinout",permalink:"/docs/reference/gpio"}},d={},l=[{value:"Sensors",id:"sensors",level:2},{value:"Desk Height",id:"desk-height",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Preset 1/2/3/4",id:"preset-1234",level:3},{value:"Set Preset 1/2/3/4",id:"set-preset-1234",level:3},{value:"Re-Detect Decoder",id:"re-detect-decoder",level:3},{value:"Restart",id:"restart",level:3},{value:"Select",id:"select",level:2},{value:"Height Decoder Variant",id:"height-decoder-variant",level:3},{value:"Height Units",id:"height-units",level:3},{value:"Numbers",id:"numbers",level:2},{value:"Max Target Height",id:"max-target-height",level:3},{value:"Min Target Height",id:"min-target-height",level:3},{value:"Target Desk Height",id:"target-desk-height",level:3},{value:"Lights",id:"lights",level:2},{value:"Status LED",id:"status-led",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"entities",children:"Entities"}),"\n",(0,s.jsx)(t.p,{children:"The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each."}),"\n",(0,s.jsx)(t.h2,{id:"sensors",children:"Sensors"}),"\n",(0,s.jsx)(t.h3,{id:"desk-height",children:"Desk Height"}),"\n",(0,s.jsxs)(t.p,{children:["This sensor reports the current ",(0,s.jsx)(t.em,{children:"actual"})," height of the desk, as reported by the control box. It is gathered by the currently-set decoder variant."]}),"\n",(0,s.jsx)(t.h2,{id:"buttons",children:"Buttons"}),"\n",(0,s.jsx)(t.h3,{id:"preset-1234",children:"Preset 1/2/3/4"}),"\n",(0,s.jsx)(t.p,{children:"These buttons are used to recall a preset height from your desk's control box. It is the same as pressing the corresponding button on the physical keypad."}),"\n",(0,s.jsx)(t.h3,{id:"set-preset-1234",children:"Set Preset 1/2/3/4"}),"\n",(0,s.jsx)(t.p,{children:'These buttons are used to set a preset height on your desk\'s control box. It is the same as pressing "M", then the corresponding preset on the physical keypad.'}),"\n",(0,s.jsx)(t.h3,{id:"re-detect-decoder",children:"Re-Detect Decoder"}),"\n",(0,s.jsx)(t.p,{children:"This button is used to re-detect the decoder variant that will be used to decode the height from the control box. If you are having trouble with the desk height entity, you may want to try this button."}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about decoders ",(0,s.jsx)(t.a,{href:"/docs/configuration/decoders/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"restart",children:"Restart"}),"\n",(0,s.jsx)(t.p,{children:"This button is used to restart the Upsy Desky unit, for example if you have changed a configuration that requires a restart."}),"\n",(0,s.jsx)(t.h2,{id:"select",children:"Select"}),"\n",(0,s.jsx)(t.h3,{id:"height-decoder-variant",children:"Height Decoder Variant"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["This entity was removed in firmware 1.0.0 in lieu of auto-detection. See ",(0,s.jsx)(t.a,{href:"/docs/configuration/decoders/",children:"this page"})," for more information."]})}),"\n",(0,s.jsxs)(t.p,{children:["This input selects the decoder variant that will be used to decode the height from the control box. You can read more about decoders ",(0,s.jsx)(t.a,{href:"/docs/configuration/decoders/",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Default:"})," ",(0,s.jsx)(t.code,{children:"uplift"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Possible Values:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"uplift"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"jarvis"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"omnidesk"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"height-units",children:"Height Units"}),"\n",(0,s.jsx)(t.p,{children:"This input selects the units that will be used to display the height of the desk and the target height of the desk."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Default:"})," ",(0,s.jsx)(t.code,{children:"in"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Possible Values:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"in"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"cm"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"numbers",children:"Numbers"}),"\n",(0,s.jsx)(t.h3,{id:"max-target-height",children:"Max Target Height"}),"\n",(0,s.jsx)(t.p,{children:"This input sets the maximum height that the target height slider will be able to be set to."}),"\n",(0,s.jsx)(t.h3,{id:"min-target-height",children:"Min Target Height"}),"\n",(0,s.jsx)(t.p,{children:"This input sets the minimum height that the target height slider will be able to be set to."}),"\n",(0,s.jsx)(t.h3,{id:"target-desk-height",children:"Target Desk Height"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"It is recommended to use the preset functionality instead of this input, since the presets have soft-stopping, which is not possible with the input."})}),"\n",(0,s.jsxs)(t.p,{children:["When changed, this input will start moving the desk in the direction of the target height. It will attempt to emulate a soft stop by stopping short of the target height. You can see the source for that ",(0,s.jsx)(t.a,{href:"https://github.com/tjhorner/esphome-standing-desk/blob/6e92c19aebe25f8ea05d3c5d3498b42bc75271fe/configs/template.yaml#L44-L62",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"lights",children:"Lights"}),"\n",(0,s.jsx)(t.h3,{id:"status-led",children:"Status LED"}),"\n",(0,s.jsxs)(t.p,{children:["There is a small LED on the Upsy Desky's PCB that is controlled by the ESPHome ",(0,s.jsx)(t.a,{href:"https://esphome.io/components/light/status_led.html",children:"Status LED"})," component. (It might not be visible if you have a darker-colored enclosure.)"]}),"\n",(0,s.jsx)(t.p,{children:"By default the LED is on when everything is OK, but you can turn it off if it annoys you. If you turn it off, it will still retain the Status LED functionality, i.e., it will blink if something is wrong."})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6120:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>h});var s=i(959);const n={},r=s.createContext(n);function h(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);