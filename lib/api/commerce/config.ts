export const API_BASE_URL = "https://scunu608glj43499030-rs.su.retail.dynamics.com";
export const BASE_IMAGE_URL = "https://images-us-prod.cms.commerce.dynamics.com/cms/api/fgnsbnhhtw/imageFileData/search?fileName=/";
export const API_VERSION = 7.3;
export const CHANNEL_ID = 5637144607;
export const OUN = "067";
export interface CommerceConfig { apiBaseUrl: string; baseImageUrl: string; apiVersion: number; channelId: number; oun: string }
export const defaultCommerceConfig: CommerceConfig = { apiBaseUrl: API_BASE_URL, baseImageUrl: BASE_IMAGE_URL, apiVersion: API_VERSION, channelId: CHANNEL_ID, oun: OUN };
