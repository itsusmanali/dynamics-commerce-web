# Dynamics Commerce Web

Next.js storefront driven by WordPress, WPGraphQL, Yoast SEO, and Dynamics 365 Commerce.

## Everyday module work

Create a module, edit its definition and component, then validate it:

```bash
npm run module:create
npm run modules:generate
npm run lint
```

Module authors normally edit only `modules/<name>/`. Generated prop files and the registry must not be edited by hand. Prefer Tailwind utility classes; add module SCSS only when Tailwind cannot express the requirement cleanly.

## Slots and nested modules

A slot means that a module can contain other modules. Declare slots in the parent module's `*.definition.json`:

```json
{
  "slots": {
    "navigation": {
      "friendlyName": "Navigation",
      "description": "Add the navigation module here.",
      "allowedModules": ["navigation"],
      "required": false
    }
  }
}
```

- Use `["navigation"]` to show only that module in the WordPress inserter.
- Use `["*"]` to allow every generated module.
- Render a slot with `slots.navigation`; kebab-case names use `slots["sub-header"]`.
- Every child remains a normal module with its own config and localized resources.

The `container` module is the general-purpose nested group. Its Content slot accepts any module, while its own settings control stacked/flow layout, boxed/full width, background, image fit, and CSS classes.

New WordPress pages start with a `page-layout` module containing fixed Header, Sub header, Main, Sub footer, and Footer slots. Existing pages are not overwritten; insert Page layout manually where needed.

## Category and product templates

Create and publish these WordPress pages:

- `category` — reusable category/PLP composition
- `product` — reusable product/PDP composition

They are authoring templates. Storefront resolution uses clean URLs:

- `/category-name`
- `/category-name/product-name`

A real WordPress page at a requested path always wins. Otherwise the catch-all route resolves Commerce data and renders the appropriate WordPress template. The rendered wrapper exposes `data-catalog-kind`, `data-category-id`, and `data-product-id` for modules that need route context.

## WordPress synchronization

After deploying Next.js, Lumovy Commerce Studio automatically downloads the generated module manifest every five minutes and when an editor opens with stale definitions. Settings > Commerce Studio also has a manual Sync Modules button.

When PHP/plugin code changes, rebuild and upload `lumovy-commerce-studio.zip`, then activate/update it in WordPress. Manifest-only module definition changes do not require another ZIP.

## Validation

```bash
npm run copyright
npm run lint
npm run build
```
