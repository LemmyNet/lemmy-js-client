<div align="center">

![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/LemmyNet/lemmy-js-client.svg)
[![GitHub issues](https://img.shields.io/github/issues-raw/LemmyNet/lemmy-js-client.svg)](https://github.com/LemmyNet/lemmy-js-client/issues)
[![License](https://img.shields.io/github/license/LemmyNet/lemmy-js-client.svg)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/LemmyNet/lemmy-js-client?style=social)

</div>

# lemmy-js-client

A javascript / typescript http and websocket client and type system for [Lemmy](https://github.com/LemmyNet/lemmy).

## Installation

`yarn add lemmy-js-client`

## Usage

### Websocket Client

[LemmyWebsocket docs](https://join-lemmy.org/api/classes/LemmyWebsocket.html)

```ts
import { Login, LemmyWebsocket } from "lemmy-js-client";

let client: LemmyWebsocket = new LemmyWebsocket();

let form: Login = {
  username_or_email: "my_email@email.tld",
  password: "my_pass",
};

this.ws.send(client.login(form));
```

### HTTP Client

[LemmyHttp docs](https://join-lemmy.org/api/classes/LemmyHttp.html)

```ts
import { LemmyHttp } from 'lemmy-js-client';

let baseUrl = 'https://lemmy.ml';
let client: LemmyHttp = new LemmyHttp(baseUrl, headers?);
let jwt = await client.login(loginForm).jwt;
```

## Development

You can use [yalc](https://github.com/wclr/yalc) to develop and test changes locally:

```
yarn global add yalc

# Go to lemmy-js-client dir
yalc publish --push

# Go to your client dir
yalc add lemmy-js-client

# To do updates, go back to the lemmy-js-client dir
# This also updates it, in every dir you've added it.
yalc publish --push
```
