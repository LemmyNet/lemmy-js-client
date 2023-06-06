const fs = require("fs/promises");
const path = require("path");

const exportRegex = /export\s+(?:enum|interface|type)\s+([A-Za-z0-9_]+)/g;

const baseExports = ['export * from "./http";'];

async function putTypesInIndex() {
  const typeFiles = await fs.readdir(path.resolve("./src/types"));
  const exports = [...baseExports];
  for (const filename of typeFiles) {
    const localExports = [];
    const fileText = await fs.readFile(path.resolve(`./src/types/${filename}`));
    for (
      let match = exportRegex.exec(fileText);
      match;
      match = exportRegex.exec(fileText)
    ) {
      localExports.push(match[1]);
    }

    const spacer = localExports.length > 1 ? "\n" : " ";

    exports.push(
      `export {${spacer}${localExports.join(
        ",\n"
      )}${spacer}} from "./types/${filename.replace(/\..+/, "")}";`
    );
  }

  fs.writeFile(path.resolve("./src/index.ts"), exports.join("\n"), {
    flag: "w",
  });
}

putTypesInIndex();
