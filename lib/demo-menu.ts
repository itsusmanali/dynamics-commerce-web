export type MenuAudience = "retail" | "authored";
export interface MenuItem {
  id: string;
  label: string;
  href: string;
  audience: MenuAudience;
  description?: string;
  image?: string;
  featured?: boolean;
  children?: MenuItem[];
}

const item = (value: MenuItem) => value;

export const demoMenu: MenuItem[] = [
  item({ id: "commerce", label: "Commerce", href: "/commerce", audience: "retail", children: [
    item({ id: "industries", label: "Industries", href: "/commerce/industries", audience: "retail", children: [
      item({ id: "fashion", label: "Fashion", href: "/commerce/industries/fashion", audience: "retail", description: "Connected journeys for modern fashion brands.", image: "/demo-menu/fashion.svg", featured: true }),
      item({ id: "grocery", label: "Grocery", href: "/commerce/industries/grocery", audience: "retail", description: "Fast, dependable omnichannel grocery experiences.", image: "/demo-menu/grocery.svg", featured: true }),
      item({ id: "specialty", label: "Specialty retail", href: "/commerce/industries/specialty", audience: "retail", description: "Flexible experiences for distinctive assortments.", image: "/demo-menu/specialty.svg", featured: true }),
    ] }),
    item({ id: "capabilities", label: "Capabilities", href: "/commerce/capabilities", audience: "retail", children: [
      item({ id: "unified", label: "Unified commerce", href: "/commerce/capabilities/unified", audience: "retail", children: [
        item({ id: "pos", label: "Point of sale", href: "/commerce/capabilities/unified/pos", audience: "retail" }),
        item({ id: "orders", label: "Order management", href: "/commerce/capabilities/unified/orders", audience: "retail" }),
      ] }),
      item({ id: "personalization", label: "Personalization", href: "/commerce/capabilities/personalization", audience: "retail" }),
    ] }),
  ] }),
  item({ id: "company", label: "Company", href: "/company", audience: "authored", children: [
    item({ id: "about", label: "About us", href: "/about", audience: "authored" }),
    item({ id: "careers", label: "Careers", href: "/careers", audience: "authored" }),
    item({ id: "contact", label: "Contact", href: "/contact", audience: "authored" }),
  ] }),
  item({ id: "insights", label: "Insights", href: "/blog", audience: "authored" }),
];

export function filterMenu(items: MenuItem[], mode: "all" | MenuAudience): MenuItem[] {
  if (mode === "all") return items;
  return items.filter((entry) => entry.audience === mode).map((entry) => ({ ...entry, children: entry.children ? filterMenu(entry.children, mode) : undefined }));
}
