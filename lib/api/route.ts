/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { NextResponse } from "next/server";
import { apiErrorResponse } from "./errors";

// Gives every generated endpoint the same response and error handling.
export function createGetRoute<T>(handler: (request: Request) => Promise<T>) {
  return async function GET(request: Request) {
    const requestId = crypto.randomUUID();
    try {
      return NextResponse.json({ data: await handler(request), meta: { requestId } }, { headers: { "Cache-Control": "private, no-store", "X-Request-Id": requestId } });
    } catch (error) {
      return apiErrorResponse(error, requestId);
    }
  };
}

export function createMutationRoute<TVariables, TData>(handler: (variables: TVariables, request: Request) => Promise<TData>) {
  return async function POST(request: Request) {
    const requestId = crypto.randomUUID();
    try {
      const variables = await request.json() as TVariables;
      return NextResponse.json({ data: await handler(variables, request), meta: { requestId } }, { headers: { "Cache-Control": "private, no-store", "X-Request-Id": requestId } });
    } catch (error) {
      return apiErrorResponse(error, requestId);
    }
  };
}
