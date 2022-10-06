# Text Style Bot (Linter)

It will give you some suggestions on how to improve your text style. _Based on Pure Cat framework._

> [![invite the bot](invite-this-bot.svg)](https://discord.com/oauth2/authorize?client_id=1026910413067137054&permissions=274877910016&scope=bot)

![https://i.imgur.com/K8Ec91k.png](https://i.imgur.com/K8Ec91k.png)

## Features

- [x] Insert a space between Chinese and English characters.
- [x] Make proper nouns case correct. (e.g. `macos` -> `macOS`)
- [x] Change Simplified Chinese to Traditional Chinese.
- [x] Custom suggestion rules. (Up to 100 rules per channel)
- [x] Support i18n commands. (English, Traditional Chinese)

## Module and Commands

- `!linter lang help`: I18n Module Controller
- `!linter help`: Suggestion Module Controller

## Setup

1. `.env` file
2. `docker compose up -d`

## Screenshots

![https://i.imgur.com/ZUu0CPl.png](https://i.imgur.com/ZUu0CPl.png)

![https://i.imgur.com/srVjaaf.png](https://i.imgur.com/srVjaaf.png)

![https://i.imgur.com/88J8uM1.png](https://i.imgur.com/88J8uM1.png)

## Credits

This bot will not be possible without the following projects:

- [`pangu`](https://github.com/vinta/pangu.js)
- [`opencc`](https://github.com/BYVoid/OpenCC)
- [`case-police`](https://github.com/antfu/case-police)
- [`discord.js`](https://github.com/discordjs/discord.js)
