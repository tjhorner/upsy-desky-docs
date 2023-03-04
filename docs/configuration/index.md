---
sidebar_position: 1.5
---

# Configuration

Once you have connected your Upsy Desky to your network, you can configure it by going to its IP address (port 80), or by visiting the device page in Home Assistant.

## Initial Setup

### Set Decoder

Upon first setup, you will want to set the decoder variant that your desk uses. Change the [Height Decoder Variant](../reference/entities.md#height-decoder-variant) to the correct variant for your desk. Generally, it will be the desk's brand name, but in strange scenarios it can be different.

To find the correct one, cycle through the available options, moving your desk slightly up or down between each change. If the [Desk Height](../reference/entities.md#desk-height) changes, you have found the correct one. Once you've found the correct one, you usually do not need to change it again.

However, it's known that some control boxes may start speaking a different protocol (the reason is unknown), and in that case you will need to repeat the process.

You can learn more about decoders [here](decoders/index.md).

### Set Min & Max Height

It is recommended that you set the [Min Target Height](../reference/entities.md#min-target-height) and [Max Target Height](../reference/entities.md#max-target-height) to the lowest and highest heights that your desk can be set to. This will prevent you from accidentally setting the desk to a height that it cannot reach.

### Restart

After you have set the decoder variant and the min/max height, you will need to restart the Upsy Desky unit. You can do this by pressing the [Restart](../reference/entities.md#restart) button, or by unplugging it and plugging it back in.

## Further Customization

If you are familiar with ESPHome and wish to make advanced changes, please check out the guide on [customizing the firmware](../advanced/customization/index.md).