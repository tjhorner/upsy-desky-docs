---
sidebar_position: 2
---

# Troubleshooting & Support

## I don't see the Wi-Fi network during setup

If you don't see a Wi-Fi network starting with `upsy-desky` while the unit is powered, the best thing to try is re-flashing the firmware. If you have a Chromium-based browser, you can do it directly from the web without any downloads. [Flash it here](https://shop.horner.tj/things/upsy-desky/setup/stock), and see if the issue persists. If it does, please join the [Discord server](https://discord.gg/ZHfXKQrSxF) for support.

## I can't connect to my hidden Wi-Fi network

This is unfortunately a limitation of ESPHome — the [Wi-Fi configuration](https://esphome.io/components/wifi.html#configuration-variables) requires that `fast_connect` is enabled for hidden networks, but this cannot be enabled without setting a network in the configuration itself, so I cannot enable this for the stock firmware.

Essentially, you will need to adopt your Upsy Desky in the ESPHome dashboard then modify the Wi-Fi configuration to have the `fast_connect` option.

## The desk height is not being reported properly

You may need to specify the correct decoder variant to use in the [Configuration](./configuration/index.md). First, select the one that matches your desk brand, but if that doesn't work, you should try the others. Basically, repeat these steps until it works:

1. Select a different decoder variant
2. Move your desk up/down with the keypad
3. Check if it's working

If none of the decoders work, then your desk may use a protocol that is thus-far undiscovered. Please email support@tjhorner.dev and I will work with you to add support for your desk.

## Other Issues

If you are experiencing other issues, here are some things to try:

- Restart your desk's control box. Sometimes it can get in a weird state which the Upsy Desky cannot recover from.
- Disconnect and re-connect the Upsy Desky to the control box.
- Reflash the firmware [here](https://shop.horner.tj/things/upsy-desky/setup/stock).

If all else fails, please join the [Discord server](https://discord.gg/ZHfXKQrSxF) for support. If necessary, we will work to triage an issue on the GitHub repository.