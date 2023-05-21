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

### Re-Detect Decoder

This button is used to re-detect the decoder variant that will be used to decode the height from the control box. If you are having trouble with the desk height entity, you may want to try this button.

You can read more about decoders [here](../configuration/decoders/index.md).

### Restart

This button is used to restart the Upsy Desky unit, for example if you have changed a configuration that requires a restart.

## Select

### Height Decoder Variant

:::caution
This entity was removed in firmware 1.0.0 in lieu of auto-detection. See [this page](../configuration/decoders/index.md) for more information.
:::

This input selects the decoder variant that will be used to decode the height from the control box. You can read more about decoders [here](../configuration/decoders/index.md).

**Default:** `uplift`

**Possible Values:**

- `uplift`
- `jarvis`
- `omnidesk`

### Height Units

:::info
This entity was temporarily removed in firmware 1.0.2 due to a compatibility issue with ESPHome 2023.5. You may still change the height units by [customizing the firmware](../advanced/customization/index.md) and adding this to your `substitutions`:

```yaml
standing_desk_height_units: "cm"
```

This entity will eventually come back once a fix has been made.
:::

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