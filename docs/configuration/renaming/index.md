# Renaming the Device

By default, the name of your Upsy Desky in Home Assistant is `upsy-desky-XXXXXX`, where `XXXXXX` is derived from the MAC address of the device. This is not very descriptive, so you can change it to something more meaningful.

In the Home Assistant UI, navigate to your Upsy Desky by going to Settings > Devices & Services > ESPHome, then select your Upsy Desky. You can also click the handy badge below to go directly to your Home Assistant device search:

[![Open your Home Assistant instance and show your devices.](https://my.home-assistant.io/badges/devices.svg)](https://my.home-assistant.io/redirect/devices/)

On the device's page, press the pencil icon in the top-right to edit the name.

![](home-assistant-device.png)

Then change it to something more descriptive and to your liking.

:::info
Home Assistant may ask if you want to rename the entity IDs as well. If you don't already have automations, dashboards, etc. using the entity IDs, it's probably a good idea to do that now so the entity IDs are more readable.

But if you already are using the entity IDs in other places, you can opt not to rename them, and just change the name of the device.
:::