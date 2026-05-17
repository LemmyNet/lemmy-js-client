<div align="center">

![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/LemmyNet/lemmy-js-client.svg)
[![GitHub issues](https://img.shields.io/github/issues-raw/LemmyNet/lemmy-js-client.svg)](https://github.com/LemmyNet/lemmy-js-client/issues)
[![License](https://img.shields.io/github/license/LemmyNet/lemmy-js-client.svg)](LICENSE)
![GitHub stars](https://img.shields.io/github/stars/LemmyNet/lemmy-js-client?style=social)

</div>

# lemmy-js-client

A javascript / typescript http client and type system for [Lemmy](https://github.com/LemmyNet/lemmy).

## Installation

`pnpm install lemmy-js-client`

## Usage

### HTTP Client

[LemmyHttp docs](https://join-lemmy.org/docs/contributors/04-api.html)

```ts
import { LemmyHttp, Login } from "lemmy-js-client";

// Build the client
const baseUrl = "https://lemmy.ml";
const headers = {["x-real-ip": ...]};
const client: LemmyHttp = new LemmyHttp(baseUrl, { headers });

// Build the login form
const loginForm: Login = {
  username_or_email: "my_name",
  password: "my_pass",
};

// Login and set the client headers with your jwt
const loginRes = await client.login(loginForm);

// Make sure its successful
if (loginRes.state === "success") {
  const jwt = login.data.jwt;
  client.setHeaders({ Authorization: `Bearer ${jwt}` });
} else if (loginRes.state === "failed") {
  const err = login.err;
}

// Fetch top posts for the day
const getPostsForm: GetPosts = {
  sort: "TopDay",
  type_: "Local",
};
const postsRes = await client.getPosts(getPostsForm);

// Handle the different request states
switch (postsRes.state) {
  case "empty": {
    break;
  }
  case "loading": {
    break;
  }
  case "failed": {
    const err = postsRes.err;
    break;
  }
  case "success": {}
    const data = postsRes.data;
    break;
  }
}
```

## Development

Use `pnpm add` to develop and test changes locally:

`pnpm add path/to/lemmy-js-client`

Alternatively, use `yalc publish` and `yalc add lemmy-js-client`

## Generating typescript types from lemmy structs

Run `./scripts/copy_generated_types_from_lemmy.sh`

## OpenAPI

To generate OpenAPI docs, run `pnpm tsoa`

This creates two files:

- `redoc-static.html` - A static html rendering of the OpenAPI docs.
- `tsoa_build/swagger.json` - An OpenAPI / Swagger json file.

To contribute, check out the [tsoa docs](https://tsoa-community.github.io/docs/).
