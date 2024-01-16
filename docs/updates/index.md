---
sidebar_position: 1.2
---

# Updates

Before you update your Upsy Desky, there is a bit of background you should know. There are two different software versions involved in a compiled Upsy Desky firmware: the **ESPHome version** and the **package version**.

## Terminology

### ESPHome Version

Upsy Desky firmware is created using a piece of software called [ESPHome](https://esphome.io/). Essentially, it comes with a vast library of components that can be pieced together using YAML config. The version of ESPHome used to compile the firmware will be referred to as the **ESPHome version** throughout the documentation.

In Home Assistant, this shows up as the "Firmware" version.

### Package Version

The components and configuration required for the Upsy Desky to work are provided as an ESPHome package. It's basically a YAML file which gets combined with the rest of your configuration. For example, you can [view the stock YAML config here](https://github.com/tjhorner/upsy-desky/blob/master/firmware/stock.yaml). The version of the package used in the compiled firmware will be referred to as the **package version** throughout the documentation.

In Home Assistant, this shows up as the "Hardware" version.

### OTA

Pre-compiled binaries are available for those who do not wish to manage their own firmware via ESPHome. These binaries are referred to as OTAs and can be obtained at the [GitHub releases](https://github.com/tjhorner/upsy-desky/releases). Generally, the OTA version will match the package version.

If you using OTAs to update, you do not need to worry about the ESPHome version.
