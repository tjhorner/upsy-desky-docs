# HTTP API

The stock firmware enables ESPHome's [Web Server](https://esphome.io/components/web_server.html) component, which in turn enables an [HTTP API](https://esphome.io/web-api/index.html) (on port 80). Since the stock firmware exposes a sensor for reporting the current desk height, and a number to set the target height, you can use these simple HTTP endpoints to write your integrations.

See ESPHome's documentation on the [sensor](https://esphome.io/web-api/index.html#sensor) and [number](https://esphome.io/web-api/index.html#number) endpoints for more information about what responses you will receive.

NB: From firmware release 0.3.0 onwards, every entity name is now prefixed with the desired friendly_name (eg. `upsy_desky`)

## Get Actual Desk Height

See [Sensor](https://esphome.io/web-api/index.html#sensor)

```
GET /sensor/upsy_desky_desk_height
```

## Get Target Desk Height

See [Number](https://esphome.io/web-api/index.html#number)

```
GET /number/upsy_desky_target_desk_height
```

## Set Target Desk Height

See [Number](https://esphome.io/web-api/index.html#number)

```
POST /number/upsy_desky_target_desk_height/set?value=the_value_to_set
```

## Set Desk Preset

See [Button](https://esphome.io/web-api/index.html#button)

Replace `{n}` with a preset number 1-4.

```
POST /button/upsy_desky_desk_preset_{n}/press
```
