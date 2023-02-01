---
sidebar_position: 1
---

# Getting Started

This page will guide you through setting up your new Upsy Desky with your home automation system and your standing desk. It should take 5-10 minutes, but probably less.

**Do you have a kit?** You will need to solder the RJ45 jacks in place. They come snapped in for your convenience.

## Step 1: Connect to Wi-Fi

Use one of the two below methods to connect your Upsy Desky to Wi-Fi.

<details>
<summary>Via Captive Portal (Hotspot)</summary>

:::note TL;DR
Connect to the `upsy-desky-XXXXXX` network (password: `hunter2hunter2`), enter Wi-Fi credentials in captive portal prompt.
:::

Plug your Upsy Desky into power, and you should see a Wi-Fi network starting with `upsy-desky` nearby. Connect to it with your phone or laptop (the password is `hunter2hunter2`); the captive portal page should automatically appear but if it doesn't, you can go to `http://192.168.4.1` in your browser. If it still doesn't appear, make sure you are connected to the Upsy Desky's network.

Follow the instructions on this page to connect it to your Wi-Fi network.

</details>

<details>
<summary>Via USB</summary>

:::note TL;DR
Connect to computer, use [ESPHome Web](https://web.esphome.io/) to provision.
:::

You can also connect your Upsy Desky to Wi-Fi by plugging it in to your computer via USB. First, plug it in to your computer with a USB-C cable, then head to the [ESPHome Web](https://web.esphome.io/) tool. Connect your Upsy Desky, press the kebab menu (three dots), and Configure Wi-Fi. Select your Wi-Fi network from there, enter credentials, and it should connect.

</details>

## Step 2: Connect to Home Assistant

:::note TL;DR
Home Assistant will ask to add the device. Do that.
:::

Once connected to your network, Home Assistant should automatically pick the device up and offer to add it. If it doesn't, make sure it's properly connected to Wi-Fi. Check your router's settings to get its IP and add an ESPHome integration to Home Assistant manually, if you need to.

If you don't use Home Assistant, you can still control your desk from the built-in web UI by navigating to its IP address or hostname in your browser. ESPHome also offers support for several common protocols such as [MQTT](https://esphome.io/components/mqtt.html), so you can use it with any system that supports those. Check [the ESPHome documentation](https://esphome.io/#core-components) for more information on what it supports. (TIL it supports CAN bus? lol)

## Step 3: Configure

:::note TL;DR
See [Configuration](./configuration/index.md).
:::

Once connected to Home Assistant, you can see the configuration options in the Home Assistant frontend and tailor them to your needs. See [Configuration](./configuration/index.md) for details on what each option does. You will likely need to change them for your specific desk.

## Step 4: Connect to Desk

:::note TL;DR
Plug one RJ45 jack into the control box, and the other into the keypad. Doesn't matter which one is which. Test to see if it works in Home Assistant.
:::

Once your Upsy Desky has been integrated with Home Assistant, you can unplug the USB-C cable — the desk itself will provide power. Connect your Upsy Desky to your desk's control box using an RJ45 cable (it doesn't matter which jack you use), then after a minute or so check Home Assistant to see if you are able to control it properly. At this point you can also optionally connect the stock keypad to the open RJ45 jack on the Upsy Desky so you can use that as well.

If you are having trouble with any of these steps, see [Troubleshooting](./troubleshooting.md).

## Step 5: Print Enclosure (if you need to)

If you didn't order a 3D-printed enclosure with your Upsy Desky, you can print your own. If you ordered from my Tindie shop, I have included the necessary mounting hardware for the PCB, but if you didn't, you will need:

- 2 M3x4mm machine screws
- 1 M2x4mm machine screw

The necessary STL files are available from this GitHub repo, under [the enclosure directory](https://github.com/tjhorner/upsy-desky/tree/master/enclosure). Once printed, place the PCB in the case (it's a tight fit), screw it in, then snap the top on.

At this point you can finalize the installation by sticking the Upsy Desky on the underside of your desk using the provided mounting adhesive (if you purchased an enclosure).