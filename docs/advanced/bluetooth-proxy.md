# Bluetooth Proxy

Starting with version 0.4.1, the stock firmware comes with ESPHome's [Bluetooth Proxy](https://esphome.io/components/bluetooth_proxy.html) component, which allows you to use your Upsy Desky to proxy Bluetooth connections to/from Home Assistant, extending the Bluetooth range of your Home Assistant instance.

## Improve BLE Performance

To improve the performance of the Bluetooth Proxy, you can follow this advice from the ESPHome docs:

> Avoid placing the ESP node in racks, close to routers/switches or other network equipment as EMI interference will degrade Bluetooth signal reception. For best results put as far away as possible, at least 3 meters distance from any other such equipment. Place your ESPHome devices close to the Bluetooth devices that you want to interact with for the best experience.

## Disabling the Bluetooth Proxy

If you are experiencing Wi-Fi performance issues (random disconnects, etc.) and you are not actively using the Bluetooth Proxy, then it may be best to remove it from your configuration to see if the issues get resolved. Please see the documentation on [customizing your configuration](./customization/index.md), and remove the `bluetooth-proxy` addon from `packages`.