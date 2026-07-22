import axios from "axios";
import { NextResponse } from "next/server";

export class ApiError extends Error {
  constructor(public readonly code: string, message: string, public readonly status = 500) { super(message); }
}

export function apiErrorResponse(error: unknown, requestId: string) {
  if (error instanceof ApiError) return NextResponse.json({ error: { code: error.code, message: error.message, requestId } }, { status: error.status });
  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? 502;
    const upstream = error.response?.data as { error?: { message?: string }; Message?: string } | undefined;
    return NextResponse.json({ error: { code: "COMMERCE_REQUEST_FAILED", message: upstream?.error?.message || upstream?.Message || error.message, requestId } }, { status });
  }
  return NextResponse.json({ error: { code: "INTERNAL_ERROR", message: "The request could not be completed.", requestId } }, { status: 500 });
}
