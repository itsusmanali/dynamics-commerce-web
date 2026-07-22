/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const [moduleName, actionName, endpoint, execution = "client"] = process.argv.slice(2);
if (!moduleName || !actionName || !endpoint?.startsWith("/api/") || !["client", "server"].includes(execution)) {
  console.error("Usage: npm run action:create -- <module> <action> </api/path> [client|server]");
  process.exit(1);
}

const file = path.join(process.cwd(), "modules", moduleName, `${moduleName}.definition.json`);
const definition = JSON.parse(await readFile(file, "utf8"));
definition.dataActions ??= {};
definition.dataActions[actionName] = { endpoint, method: "GET", execution };
await writeFile(file, JSON.stringify(definition, null, 2) + "\n");
console.log(`Added ${actionName} to ${file}. Run npm run modules:generate.`);
