# Desk Compatibility

## Verified Desks

:::note
If your control box isn't listed here, this doesn't necessarily mean it's incompatible; it just means that nobody has tested it yet. See the page on [assessing compatibility](./assessing-compatibility.mdx) to see if it may be compatible.
:::

These desk control boxes are verified to be compatible with the Upsy Desky:

- **Uplift v2**
  - FRM053-2
  - FRM053-3
  - FRM053-4
- **Fully Jarvis**
  - FULLYCB2C-A
  - FULLYCB2C-B
  - FULLYCB3-A
  - JCB36N2CA-230
  - JCB35N-110
  - JCB36N2A-110 (see [caveats](#jcb36n2a-110))
- **VariDesk**
  - VARI2CA-120
  - VARINS1 (Vari Essential Electric)
- **Miscellaneous**
  - JCB36N4CA (Deskhaus Apex Pro)
  - X-AP2-WFC.F\[1-3\] (V4.2) / 1308870001 rev A (AMQ Activ)
  - DSK20-2 2nd Generation (Desky.com.au)
  - IKEA UPPSPEL

Support outside of these models is not guaranteed, but contributions are welcome if you wish to add support for your own! See the [Reverse Engineering Guide](../../advanced/reverse-engineering/index.md) for more detailed instructions on how to do so.

## Caveats

### JCB36N2A-110

If you are having issues with this model control box, you may need to [adopt the device](../../advanced/customization/index.md) and add this to your ESPHome config:

```yaml
substitutions:
  standing_desk_variant: uplift
```

The auto-detection may not work properly, so forcing it to use the correct decoder will fix this.