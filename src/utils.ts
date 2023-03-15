/**
 * Used to prevent typescript from turning dynamic imports into requires when using esm dependencies.
 * See [See this GitHub discussion for more info](https://github.com/TypeStrong/ts-node/discussions/1290).
 */
export const dynamicImport = new Function(
  "specifier",
  "return import(specifier)"
);
