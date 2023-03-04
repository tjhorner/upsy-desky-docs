# Entities

The Upsy Desky firmware exposes many entities by default. This page describes the purpose of each.

## Sensors

### Desk Height

This sensor reports the current _actual_ height of the desk, as reported by the control box. It is gathered by the currently-set decoder variant.

## Buttons

### Preset 1/2/3/4

These buttons are used to recall a preset height from your desk's control box. It is the same as pressing the corresponding button on the physical keypad.

### Set Preset 1/2/3/4

These buttons are used to set a preset height on your desk's control box. It is the same as pressing "M", then the corresponding preset on the physical keypad.

### Restart

This button is used to restart the Upsy Desky unit, for example if you have changed a configuration that requires a restart.

## Select

### Height Decoder Variant

This input selects the decoder variant that will be used to decode the height from the control box. You can read more about decoders [here](../configuration/decoders/index.md).

**Default:** `uplift`

**Possible Values:**

- `uplift`
- `jarvis`
- `omnidesk`

### Height Units

This input selects the units that will be used to display the height of the desk and the target height of the desk.

**Default:** `in`

**Possible Values:**

- `in`
- `cm`

## Numbers

### Max Target Height

This input sets the maximum height that the target height slider will be able to be set to.

### Min Target Height

This input sets the minimum height that the target height slider will be able to be set to.

### Target Desk Height

:::info
It is recommended to use the preset functionality instead of this input, since the presets have soft-stopping, which is not possible with the input.
:::

When changed, this input will start moving the desk in the direction of the target height. It will attempt to emulate a soft stop by stopping short of the target height. You can see the source for that [here](https://github.com/tjhorner/esphome-standing-desk/blob/6e92c19aebe25f8ea05d3c5d3498b42bc75271fe/configs/template.yaml#L44-L62).

## Lights

### Status LED

There is a small LED on the Upsy Desky's PCB that is controlled by the ESPHome [Status LED](https://esphome.io/components/light/status_led.html) component. (It might not be visible if you have a darker-colored enclosure.)

By default the LED is on when everything is OK, but you can turn it off if it annoys you. If you turn it off, it will still retain the Status LED functionality, i.e., it will blink if something is wrong.