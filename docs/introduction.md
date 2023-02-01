---
sidebar_position: 0
---

# Introduction

## What is this thing?

The Upsy Desky is a device that allows you to control your standing desk from your home automation system. It acts as a man in the middle between your desk's control box and its handset, intercepting and issuing commands to the desk. It can be [installed](./getting-started.mdx) in a few minutes and retains your handset's existing functionality.

The firmware is based on ESPHome, so it supports a wide range of protocols like MQTT, but works best with Home Assistant. This lets you create automations that integrate with your desk, for example:

- If you're sitting for too long, raise desk to standing height
- When you leave home, raise desk to max height so the cat can't knock things over
- Have an infinite number of presets for everyone in your household
- Send desk height data to InfluxDB to analyze how often you're sitting vs. standing
- [Control your standing desk from a Stream Deck](https://github.com/zeel01/upsy-sd-plugin)
- [Publish your desk's height on the internet](https://tjhorner.dev/sitting-or-standing/)

Or whatever else you'd like. The possibilities are endless! As long as the possibilities involve a standing desk.

The entire project is open source, from schematics to firmware. You can find the source code on [GitHub](https://github.com/tjhorner/upsy-desky). If you'd like to get one, you can either build one yourself from the source files provided, or you can purchase a pre-built one from my [Tindie shop](https://www.tindie.com/products/tjhorner/upsy-desky/).

<a href="https://www.tindie.com/products/tjhorner/upsy-desky/?ref=offsite_badges&utm_source=sellers_tjhorner&utm_medium=badges&utm_campaign=badge_large"><img src="https://d2ss6ovg47m0r5.cloudfront.net/badges/tindie-larges.png" alt="I sell on Tindie" width="200" height="104"/></a>

## What people are saying

Check out these reviews from fellow nerds who decided to connect their standing desk to Home Assistant.

<hr/>

> Do I *need* to be able to control my standing desk with a RESTful API call? No, absolutely not. Do I *love* being able to control my standing desk with a RESTful API call? Yes, absolutely yes!

_- Tindie review from Chris_

<hr/>

> The instructions were very clear, and I had this integrated into Home Assistant within 5 minutes. For me, no additional configuration was necessary, as the device recognized my desk configuration. Thank you for such a great product!

_- Tindie review from Larry_

<hr/>

> Very well written documentation for a painless setup with existing esphome systems. Customizing the default configuration and re-flashing was also easy with the latest esphome dashboard.

_- Tindie review from Patrick_