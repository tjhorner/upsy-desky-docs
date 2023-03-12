# Decoders

:::info
Since firmware 1.0.0, it is no longer required to manually configure the decoder. It will automatically determine the correct one to use during startup. See [Auto-Detection](#auto-detection) for more information.
:::

## What is a decoder?

In order to determine the desk height, the firmware uses what we call a decoder in order to interpret the desk's serial protocol. This is the component that handles the bytes coming from the desk's control box and decodes it into a usable height value.

These decoders currently exist:

- `uplift`
- `jarvis`
- `omnidesk`

Despite their names, it is possible for a decoder to work on a different brand of desk. For example, the `uplift` decoder works on Jarvis desks with control box model number FULLYCB3-A.

## Auto-Detection

During startup, the firmware will automatically attempt to determine the correct decoder to use. It sends a packet to the control box to wake it up, and cycles through each possible decoder to see which one produces a valid height value. If you are having trouble with this (i.e., the desk height is reported as "Unknown"), please see [this section](../../troubleshooting.mdx#the-desk-height-is-not-being-reported-properly) of the troubleshooting guide for further instructions.

## Decoders by Model Number

Here is a list of known control box model numbers and the decoders that work with them.

### Fully Jarvis

- FULLYCB2C-A: `jarvis`
- FULLYCB3-A: `uplift`
- JCB36N2CA-230: `jarvis`
- JCB35N-110: `uplift`

### Uplift v2

- FRM053-2: `uplift`