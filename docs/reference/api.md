# HTTP API

The stock firmware enables ESPHome's [Web Server](https://esphome.io/components/web_server.html) component, which in turn enables an [HTTP API](https://esphome.io/web-api/index.html) (on port 80). Since the stock firmware exposes a sensor for reporting the current desk height, and a number to set the target height, you can use these simple HTTP endpoints to write your integrations.

See ESPHome's documentation on the [sensor](https://esphome.io/web-api/index.html#sensor) and [number](https://esphome.io/web-api/index.html#number) endpoints for more information about what responses you will receive.

## Get Actual Desk Height

See [Sensor](https://esphome.io/web-api/index.html#sensor)

```
GET /sensor/desk_height
```

## Get Target Desk Height

See [Number](https://esphome.io/web-api/index.html#number)

```
GET /number/target_desk_height
```

## Set Target Desk Height

See [Number](https://esphome.io/web-api/index.html#number)

```
POST /number/target_desk_height/set?value=the_value_to_set
```

## Set Desk Preset

See [Button](https://esphome.io/web-api/index.html#button)

Replace `{n}` with a preset number 1-4.

```
POST /button/desk_preset_{n}/press
```