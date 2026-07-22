import axios, { AxiosError, AxiosHeaders, type InternalAxiosRequestConfig } from "axios";
import { defaultCommerceConfig, type CommerceConfig } from "./config";

interface AuthHooks { getIdToken?: () => Promise<string | null>; refreshIdToken?: () => Promise<string>; onSessionExpired?: () => Promise<void> | void; }
type RetryConfig = InternalAxiosRequestConfig & { _retry?: boolean };

export function createCommerceApi(config: CommerceConfig = defaultCommerceConfig, auth: AuthHooks = {}) {
  const baseURL = `${config.apiBaseUrl.replace(/\/$/, "")}${config.apiBaseUrl.endsWith("Commerce") ? "" : "/Commerce"}`;
  const api = axios.create({ baseURL, timeout: 10_000, params: { "api-version": config.apiVersion }, headers: { Accept: "application/json", "Content-Type": "application/json", prefer: "return=representation", "odata-version": "4.0", "odata-maxversion": "4.0", OUN: config.oun } });
  let refreshPromise: Promise<string> | null = null;

  api.interceptors.request.use(async (request) => {
    request.headers = request.headers ?? new AxiosHeaders();
    request.headers.set("OUN", config.oun);
    request.params = { ...request.params, "api-version": config.apiVersion };
    const token = await auth.getIdToken?.();
    if (token) request.headers.set("Authorization", `id_token ${token}`);
    return request;
  });

  api.interceptors.response.use((response) => response, async (error: AxiosError) => {
    const request = error.config as RetryConfig | undefined;
    if (error.response?.status !== 401 || !request || request._retry || !auth.refreshIdToken) return Promise.reject(error);
    request._retry = true;
    try {
      refreshPromise ??= auth.refreshIdToken().finally(() => { refreshPromise = null; });
      const token = await refreshPromise;
      request.headers = request.headers ?? new AxiosHeaders();
      request.headers.set("Authorization", `id_token ${token}`);
      return api(request);
    } catch (refreshError) {
      const status = axios.isAxiosError(refreshError) ? refreshError.response?.status : undefined;
      if (status === 400 || status === 401) await auth.onSessionExpired?.();
      return Promise.reject(refreshError);
    }
  });
  return api;
}

export const commerceApi = createCommerceApi();
