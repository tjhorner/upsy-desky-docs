# Decoders

In order to determine the desk height, the firmware uses what we call a decoder in order to interpret the desk's serial protocol. This is the component that handles the bytes coming from the desk's control box and decodes it into a usable height value.

These decoders currently exist:

- `uplift`
- `jarvis`
- `omnidesk`

Despite their names, it is possible for a decoder to work on a different brand of desk. For example, the `uplift` decoder works on Jarvis desks with control box model number FULLYCB3-A. Thus, if you are having issues with a certain decoder, it's a good idea to try the rest in the list to see if your desk works with one of them.

If none of the decoders work, you may wish to try [reverse engineering](../../advanced/reverse-engineering/index.md) your desk's protocol to create a new decoder and contributing it.

:::info
In a future version of the firmware, I would like to add some kind of auto-detection feature so that the decoder does not need to be specified in the configuration.
:::

## Decoders by Model Number

Here is a list of known control box model numbers and the decoders that work with them.

### Fully Jarvis

- FULLYCB2C-A: `jarvis`
- FULLYCB3-A: `uplift`
- JCB36N2CA-230: `jarvis`

### Uplift v2

- FRM053-2: `uplift`