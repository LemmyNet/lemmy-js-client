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

[LemmyWebsocket docs](classes/LemmyWebsocket.html)

```ts
import { Login, LemmyWebsocket } from 'lemmy-js-client';

let client: LemmyWebsocket = new LemmyWebsocket();

let form: Login {
  username_or_email: "my_email@email.tld",
  password: "my_pass",
};

this.ws.send(client.login(form));
```

### HTTP Client

[LemmyHttp docs](classes/LemmyHttp.html)

```ts
import { LemmyHttp } from 'lemmy-js-client';

let baseUrl = 'https://lemmy.ml';
let client: LemmyHttp = new LemmyHttp(baseUrl, headers?);
let jwt = await client.httpLogin(loginForm).jwt;
```

## Support / Donate

Lemmy is free, open-source software, meaning no advertising, monetizing, or venture capital, ever. Your donations directly support full-time development of the project.

- [Support on Liberapay](https://liberapay.com/Lemmy).
- [Support on Patreon](https://www.patreon.com/dessalines).
- [Support on OpenCollective](https://opencollective.com/lemmy).
- [List of Sponsors](https://dev.lemmy.ml/sponsors).

### Crypto

- bitcoin: `1Hefs7miXS5ff5Ck5xvmjKjXf5242KzRtK`
- ethereum: `0x400c96c96acbC6E7B3B43B1dc1BB446540a88A01`
- monero: `41taVyY6e1xApqKyMVDRVxJ76sPkfZhALLTjRvVKpaAh2pBd4wv9RgYj1tSPrx8wc6iE1uWUfjtQdTmTy2FGMeChGVKPQuV`

