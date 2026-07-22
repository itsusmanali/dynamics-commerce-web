/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const header = `/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

`;
const roots = ["app", "components", "lib", "modules", "scripts", "styles", "templates", "types", "wordpress-plugin/dynamics-headless-connector"];
const extensions = new Set([".js", ".mjs", ".ts", ".tsx", ".scss", ".php"]);

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await visit(file);
    else if (extensions.has(path.extname(entry.name)) && entry.name !== "next-env.d.ts") {
      const source = await readFile(file, "utf8");
      if (!source.includes("Copyright (c) Lumovy Technology Solutions")) {
        const next = path.extname(file) === ".php" && source.startsWith("<?php") ? `<?php\n${header}${source.slice(5).replace(/^\s*/, "")}` : header + source;
        await writeFile(file, next);
      }
    }
  }
}

for (const root of roots) await visit(path.join(process.cwd(), root));
for (const file of ["eslint.config.mjs", "next.config.ts", "postcss.config.mjs"]) {
  const source = await readFile(path.join(process.cwd(), file), "utf8");
  if (!source.includes("Copyright (c) Lumovy Technology Solutions")) await writeFile(path.join(process.cwd(), file), header + source);
}
console.log("Lumovy copyright headers are present.");
