/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { ScriptProps } from "next/script";

// Add reviewed scripts here. WordPress stores IDs only and cannot inject raw JavaScript.
export const templateScriptRegistry: Record<string, ScriptProps> = {};
