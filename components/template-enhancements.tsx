import Script from "next/script";
import { templateScriptRegistry } from "@/templates/script-registry";
import type { PageTemplateSettings } from "@/templates/template.types";

export function TemplateEnhancements({ settings }: { settings: PageTemplateSettings | null }) {
  if (!settings) return null;
  return <>{settings.scripts.map((id) => templateScriptRegistry[id] ? <Script key={id} id={`template-${id}`} {...templateScriptRegistry[id]} /> : null)}</>;
}
