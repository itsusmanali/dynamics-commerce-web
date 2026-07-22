/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { commerceRequest } from "@/lib/api/commerce/request";

// EDIT HERE: replace this with the generated Commerce channel response type.
interface GetChannelsResponse { value?: unknown[] }

// EDIT ONLY THIS FUNCTION: path, method, payload, query params and returned data.
export async function GetChannels() {
  const response = await commerceRequest<GetChannelsResponse>({
    path: "/GetChannels", // 1. Commerce API path
    method: "POST", // 2. GET, POST, PUT, PATCH or DELETE
    payload: (config) => ({ channelId: config.channelId }), // 3. Static or dynamic payload
    params: {}, // 4. Commerce query parameters
  });
  return response.value ?? response; // 5. Data returned to the module
}
