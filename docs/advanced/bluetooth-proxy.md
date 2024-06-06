# Bluetooth Proxy

Bluetooth Proxy was originally included starting in version 0.4.1, but since version 3.0.0 it has been removed due to performance issues reported by users. This was compounded by the fact that the stock firmware also included the web server component, which ESPHome explicitly discourages due to the performance impact of both components.

## Re-Enabling Bluetooth Proxy

:::warning
It's recommended to disable other components you are not using if you re-enable Bluetooth Proxy, especially the Web Server component. The Bluetooth Proxy component has a significant performance impact and may result in your Upsy Desky running out of memory if too many other components are added as well.

Refer to the [ESPHome documentation](https://esphome.io/components/bluetooth_proxy) for more information on the Bluetooth Proxy component and its limitations.
:::

You can still use your Upsy Desky as a Bluetooth proxy by [customizing the firmware configuration](./customization/index.md) and adding the following lines to your config:

```yaml
esp32_ble_tracker:

bluetooth_proxy:
  active: true
```