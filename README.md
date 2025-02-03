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
const client: LemmyHttp = new LemmyHttp(baseUrl);

// Build the login form
const loginForm: Login = {
  username_or_email: "my_name",
  password: "my_pass",
};

// Login and set the client headers with your jwt
const { jwt } = await client.login(loginForm);
client.setHeaders({ Authorization: `Bearer ${jwt}` });

// Fetch top posts for the day
const getPostsForm: GetPosts = {
  sort: "TopDay",
  type_: "Local",
};
const posts = await client.getPosts(getPostsForm);
```

## Development

Use `pnpm add` to develop and test changes locally:

```
pnpm add path/to/lemmy-js-client
```
