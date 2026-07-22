import type { AxiosRequestConfig } from "axios";

export interface ApiSuccess<T> { data: T; meta?: { source?: string; requestId?: string } }
export interface ApiFailure { error: { code: string; message: string; requestId?: string } }
export type ApiResult<T> = ApiSuccess<T> | ApiFailure;
export type ApiRequest<TPayload = unknown> = Omit<AxiosRequestConfig, "url" | "method" | "data" | "params"> & { payload?: TPayload; params?: Record<string, string | number | boolean | undefined> };
