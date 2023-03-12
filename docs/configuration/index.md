---
sidebar_position: 1.5
---

# Configuration

Once you have connected your Upsy Desky to your network, you can configure it by going to its IP address (port 80), or by visiting the device page in Home Assistant.

## Initial Setup

### Set Min & Max Height

It is recommended that you set the [Min Target Height](../reference/entities.md#min-target-height) and [Max Target Height](../reference/entities.md#max-target-height) to the lowest and highest heights that your desk can be set to. This will prevent you from accidentally setting the desk to a height that it cannot reach.

### Restart

After you have set the min/max height, you will need to restart the Upsy Desky unit. You can do this by pressing the [Restart](../reference/entities.md#restart) button, or by unplugging it and plugging it back in.

## Further Customization

If you are familiar with ESPHome and wish to make advanced changes, please check out the guide on [customizing the firmware](../advanced/customization/index.md).