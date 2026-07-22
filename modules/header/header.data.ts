import { demoMenu, filterMenu, type MenuItem } from "@/lib/demo-menu";
import { getWordPressMenu } from "@/lib/wordpress/queries";

export interface HeaderData { items: MenuItem[]; source: string; }

export const headerDataActions = {
  menu: async (mode: "all" | "retail" | "authored", menuSlug = "primary"): Promise<HeaderData> => {
    const authored = await getWordPressMenu(menuSlug);
    const authoredItems = authored.length ? authored : filterMenu(demoMenu, "authored");
    if (mode === "retail") return { items: filterMenu(demoMenu, "retail"), source: "dummy-api" };
    if (mode === "authored") return { items: authoredItems, source: authored.length ? "wordpress-graphql" : "dummy-api-fallback" };
    return { items: [...filterMenu(demoMenu, "retail"), ...authoredItems], source: authored.length ? "wordpress-graphql+dummy-api" : "dummy-api" };
  },
};

export async function getHeaderData(mode: "all" | "retail" | "authored", menuSlug?: string) { return headerDataActions.menu(mode, menuSlug); }
