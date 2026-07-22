/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

export interface ApiSuccess<T> { data: T; meta?: { source?: string; requestId?: string } }
export interface ApiFailure { error: { code: string; message: string; requestId?: string } }
