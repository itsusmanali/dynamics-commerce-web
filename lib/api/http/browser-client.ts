/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import axios from "axios";

export const browserApi = axios.create({ baseURL: "/api", timeout: 10_000, headers: { Accept: "application/json", "Content-Type": "application/json" } });
