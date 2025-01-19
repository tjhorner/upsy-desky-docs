"use strict";(self.webpackChunkupsy_desky_docs=self.webpackChunkupsy_desky_docs||[]).push([[629],{6618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"advanced/customization/index","title":"Firmware Customization","description":"Since the Upsy Desky\'s firmware is based on ESPHome, making customizations to the firmware is as easy as editing some YAML. The best way to modify the firmware config is by installing the ESPHome Dashboard (or using it via cli).","source":"@site/docs/advanced/customization/index.md","sourceDirName":"advanced/customization","slug":"/advanced/customization/","permalink":"/docs/advanced/customization/","draft":false,"unlisted":false,"editUrl":"https://github.com/tjhorner/upsy-desky-docs/edit/main/docs/advanced/customization/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bluetooth Proxy","permalink":"/docs/advanced/bluetooth-proxy"},"next":{"title":"Reverse Engineering Guide","permalink":"/docs/advanced/reverse-engineering/"}}');var s=i(3274),o=i(7596);const r={},a="Firmware Customization",c={},d=[{value:"Adopting the Device",id:"adopting-the-device",level:2},{value:"Modifying the Configuration",id:"modifying-the-configuration",level:2},{value:"Trimming the Firmware",id:"trimming-the-firmware",level:3},{value:"Updating Base Config",id:"updating-base-config",level:3},{value:"Understanding the Configuration",id:"understanding-the-configuration",level:2},{value:"Addons",id:"addons",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"firmware-customization",children:"Firmware Customization"})}),"\n",(0,s.jsxs)(n.p,{children:["Since the Upsy Desky's firmware is based on ",(0,s.jsx)(n.a,{href:"https://esphome.io",children:"ESPHome"}),", making customizations to the firmware is as easy as editing some YAML. The best way to modify the firmware config is by installing the ",(0,s.jsx)(n.a,{href:"https://esphome.io/guides/getting_started_hassio.html",children:"ESPHome Dashboard"})," (or using it ",(0,s.jsx)(n.a,{href:"https://esphome.io/guides/getting_started_command_line.html",children:"via cli"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"adopting-the-device",children:"Adopting the Device"}),"\n",(0,s.jsxs)(n.p,{children:["Once ESPHome Dashboard is running, and your Upsy Desky is ",(0,s.jsx)(n.a,{href:"/docs/getting-started",children:"connected to your network"}),", it should prompt you to adopt it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7565).A+"",width:"1292",height:"464"})}),"\n",(0,s.jsx)(n.p,{children:"Go through the adoption flow; it will do these things:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create an ESPHome configuration file"}),"\n",(0,s.jsx)(n.li,{children:"Set an API encryption key (used by Home Assistant or other native API consumers)"}),"\n",(0,s.jsx)(n.li,{children:"Bake the Wi-Fi credentials into the firmware"}),"\n",(0,s.jsx)(n.li,{children:"Install the new firmware to the device"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modifying-the-configuration",children:"Modifying the Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Once ESPHome Dashboard is finished adopting the device, you will see a new node for your Upsy Desky by the name of ",(0,s.jsx)(n.code,{children:"upsy-desky-XXXXXX"}),", where ",(0,s.jsx)(n.code,{children:"XXXXXX"})," is derived from the MAC address of the device. Click on the edit button to see the config file."]}),"\n",(0,s.jsx)(n.p,{children:"It should look something like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"substitutions:\n  name: upsy-desky-cf32ec\npackages:\n  # Change the line below to reference `base.yaml` instead, if you want the\n  # base config (see next section for details)\n  tj_horner.upsy_desky: github://tjhorner/upsy-desky/firmware/stock.yaml@v1.0.3\nesphome:\n  name: ${name}\n  name_add_mac_suffix: false\napi:\n  encryption:\n    key: your-encryption-key\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is pretty barebones, but this is because it references the ",(0,s.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/stock.yaml",children:"stock firmware config"})," as a package, which contains all the components necessary for it to work. You can add other components to the config as you wish; for example, you might want to turn your Upsy Desky into a ",(0,s.jsx)(n.a,{href:"https://esphome.io/components/bluetooth_proxy.html",children:"Bluetooth proxy"})," in order to extend Home Assistant's Bluetooth range."]}),"\n",(0,s.jsxs)(n.p,{children:["There are also some substitutions you can declare which will change the behavior in the firmware, most notably is ",(0,s.jsx)(n.code,{children:"friendly_name"}),', which changes the "friendly name" in each of the sensors. (See also: ',(0,s.jsx)(n.a,{href:"/docs/configuration/renaming/",children:"Renaming the Device"}),")"]}),"\n",(0,s.jsx)(n.h3,{id:"trimming-the-firmware",children:"Trimming the Firmware"}),"\n",(0,s.jsxs)(n.p,{children:["When Upsy Desky units are shipped out, they are flashed with an ESPHome config that contains the ",(0,s.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/base.yaml",children:"base config"})," (with all the components for height decoding, presets, etc.) as well as some components which are helpful for users that do not use ESPHome or Home Assistant, as well as some components to improve the out of box experience (e.g., captive portal, Improv serial, etc.)."]}),"\n",(0,s.jsx)(n.p,{children:"This is also the config that ESPHome Dashboard will adopt the device with, in order to minimize friction when initially adopting the device. However, there are likely components in there that you do not need. Switching to the base config will significantly reduce the firmware size \u2014 by about 66% \u2014 and removes some components that may be insecure."}),"\n",(0,s.jsxs)(n.p,{children:["You can review the stock firmware config ",(0,s.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/blob/master/firmware/stock.yaml",children:"here"})," and determine if you are using any components from that config. If you aren't, you can switch to the base config easily: just change the reference from ",(0,s.jsx)(n.code,{children:"stock.yaml"})," to ",(0,s.jsx)(n.code,{children:"base.yaml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["But if you are using a feature from the stock config and it is not in the base config, you will need to add it to your config manually by copy-pasting the section from ",(0,s.jsx)(n.code,{children:"stock.yaml"}),". For example, if you want to use the base config, but still retain the ",(0,s.jsx)(n.code,{children:"web_server"})," component, your config would look something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"substitutions:\n  name: upsy-desky-cf32ec\npackages:\n  tj_horner.upsy_desky: github://tjhorner/upsy-desky/firmware/base.yaml@v1.0.3\nesphome:\n  name: ${name}\n  name_add_mac_suffix: false\napi:\n  encryption:\n    key: your-encryption-key\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n\n# Copied from stock.yaml: https://github.com/tjhorner/upsy-desky/blob/b238eb40c3203c3af9be2d2b0f8bde571941091e/firmware/stock.yaml#LL19-L20C11\nweb_server:\n  port: 80\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updating-base-config",children:"Updating Base Config"}),"\n",(0,s.jsxs)(n.p,{children:["When you first adopt the device, the package reference is locked to a specific version of the config so as not to cause breaking changes. You can either set this to ",(0,s.jsx)(n.code,{children:"master"})," in order to always get the latest config, or to a specific version tag (see all the releases ",(0,s.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/releases",children:"here"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"understanding-the-configuration",children:"Understanding the Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"addons",children:"Addons"}),"\n",(0,s.jsx)(n.p,{children:'To keep things maintainable, each large part of the configuration is broken up into its own "addon". There are currently three addons, all of which are included in the base config:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"presets.yaml"}),": Configuration necessary for recalling and setting desk presets"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"runtime-config.yaml"}),": Entities related to configuration of the device at runtime"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stable-ids.yaml"}),": Provides stable IDs for the web API"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can see the source for all the addons ",(0,s.jsx)(n.a,{href:"https://github.com/tjhorner/upsy-desky/tree/master/firmware/addons",children:"here"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7565:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/adopt-eadc99057d2358636c119d3420d37388.png"},7596:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(9474);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);