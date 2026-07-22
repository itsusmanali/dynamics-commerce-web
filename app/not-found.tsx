/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import Link from "next/link";
export default function NotFound() { return <main className="site-shell py-24"><h1 className="text-4xl font-semibold">Page not found</h1><p className="mt-4">The requested content could not be found.</p><Link className="mt-6 inline-block underline" href="/">Return home</Link></main>; }
