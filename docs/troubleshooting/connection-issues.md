# Connection Issues

This guide will assist in troubleshooting connection issues with your Upsy Desky, such as it appearing "unknown" or "unavailable" in Home Assistant.

## Determine Cause

If you are seeing the "unknown" or "unavailable" state in Home Assistant, there could be several reasons for this. First we need to determine if this is truly a connection issue or some other kind of issue.

### `unknown` State

If your Upsy Desky appears to be online and connected to Home Assistant (e.g., the "Status LED" and other entities are available and working), but the "Desk Height" sensor appears as `unknown`, it's unlikely to be a connection issue. As a quick fix, try pressing the up or down arrow on your desk's physical keypad to see if the desk height becomes available again. If that doesn't work, try pressing the "Re-Detect Decoder" button in Home Assistant.

If this is the case, it's likely a different issue out of the scope of this guide.

### `unavailable` State

If you find that the Upsy Desky entities repeatedly become `unavailable` for some amount of time, this is more likely to be a connection or reset issue. As an example, here's what a disconnect looks like in the Logbook:

![Status LED entity becoming unavailable intermittently in Home Assistant logbook](logbook-unavailable.png)

Your Upsy Desky can disconnect from Home Assistant for many reasons, including network issues, power issues, or firmware issues. Now that we have verified that this is a connection issue, let's move on to troubleshooting.

## Troubleshooting

### Collect Device Logs

The first step in troubleshooting connection issues is to check the logs on your Upsy Desky. First, let's increase the verbosity of the logs and include some extra device info that will aid in troubleshooting. You will need to adopt your device in the ESPHome Dashboard so you can edit the config, as described in the [firmware customization guide](../advanced/customization/index.md).

Add these lines to your device's configuration:

```yaml
logger:
  level: DEBUG

debug:
  update_interval: 5s

text_sensor:
  - platform: debug
    device:
      name: "Device Info"

sensor:
  - platform: debug
    free:
      name: "Heap Free"
    block:
      name: "Heap Max Block"
    loop_time:
      name: "Loop Time"
```

Once you've flashed the new firmware, you can start collecting logs. Importantly, you must do this **before** a disconnection occurs in order to capture the logs from when that happens, since the logs are not stored persistently. I would also recommend connecting directly to the device via USB.

From ESPHome Dashboard, press "LOGS" on the card for the device, then use the "Plug into this computer" option to collect logs via USB. Keep this open in the background until you notice a disconnection happen in Home Assistant, then press the "Download Logs" button to save the logs to a file.

### Inspect Logs

Once you've collected the logs you can look for the culprit of your disconnections. Some things to look for:

- Wi-Fi connection issues (lines may contain `Event: Disconnected` and provide a reason)
- Device resets or crashes (indicated by a bunch of hex addresses and a stack trace)
- Anything else related at the time of the disconnection

### Check Device Info

Once the Upsy Desky reconnects to Home Assistant, you should take a look at the "Device Info" sensor to see if there is any useful information. The "Reset:" information is particularly prescient here, because if a reset was incurred by the watchdog, for example, this could indicate the device is crashing and resetting. Each of the reset reasons is described [in Espressif's docs](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-reference/system/misc_system_api.html#_CPPv418esp_reset_reason_t).

## Share Logs

Once you have collected and inspected the logs, it would be very helpful if you could share any relevant logs or findings at the [open GitHub issue for this problem](https://github.com/tjhorner/upsy-desky/issues/28), along with the following details:

- Desk control box model number
- Desk keypad model number
- When you purchased/built your Upsy Desky
- What ESPHome & package versions you are running
- Output of the "Device Info" sensor
- ESPHome config YAML
- Any recent environmental changes (e.g., new AP/router, new desk location, ESPHome/Home Assistant updates etc.)

Thank you!