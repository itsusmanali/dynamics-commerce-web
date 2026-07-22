(function (wp, settings) {
  const el = wp.element.createElement;
  const { useEffect } = wp.element;
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } = wp.blockEditor;
  const { Button, PanelBody, TextControl, TextareaControl, ToggleControl, SelectControl, ColorPalette } = wp.components;

  const defaults = (definition) => Object.fromEntries(Object.entries(definition.config || {}).map(([key, field]) => [key, field.default ?? null]));
  const resourceDefaults = (definition) => Object.fromEntries(Object.entries(definition.resources || {}).map(([key, field]) => [key, field.value ?? ""]));
  const control = (key, field, value, update) => {
    const props = { key, label: field.friendlyName || key, help: field.description || "", value: value ?? "", onChange: update };
    if (field.type === "boolean") return el(ToggleControl, { ...props, checked: Boolean(value) });
    if (field.type === "number") return el(TextControl, { ...props, type: "number", value: Number(value || 0), onChange: (next) => update(Number(next)) });
    if (field.type === "text") return el(TextareaControl, props);
    if (field.type === "select") return el(SelectControl, { ...props, options: field.options || [] });
    if (field.type === "color") return el("div", { key, className: "components-base-control" }, el("label", {}, field.friendlyName || key), el(ColorPalette, { value, onChange: update, clearable: false }), field.description ? el("p", { className: "components-base-control__help" }, field.description) : null);
    if (field.type === "image") return el("div", { key, className: "components-base-control" }, el("p", {}, field.friendlyName || key), value ? el("img", { src: value, alt: "", style: { maxWidth: "100%" } }) : null, el(MediaUploadCheck, {}, el(MediaUpload, { allowedTypes: ["image"], onSelect: (media) => update(media.url), render: ({ open }) => el(Button, { variant: "secondary", onClick: open }, value ? "Replace image" : "Select image") })), field.description ? el("p", { className: "components-base-control__help" }, field.description) : null);
    return el(TextControl, { ...props, type: field.type === "url" ? "url" : "text" });
  };

  (settings.definitions || []).forEach((definition) => {
    const ModuleEdit = ({ attributes, setAttributes, clientId }) => {
      const config = { ...defaults(definition), ...(attributes.config || {}) };
      const locale = attributes.locale || settings.defaultLocale || "en";
      const localized = { ...resourceDefaults(definition), ...((attributes.resources || {})[locale] || {}) };
      useEffect(() => { if (!attributes.moduleId) setAttributes({ moduleId: clientId }); }, [attributes.moduleId, clientId, setAttributes]);
      const groups = [...new Set(Object.values(definition.config || {}).map((field) => field.group || "General"))];
      const inspector = groups.map((group) => el(
        PanelBody,
        { title: group, initialOpen: group === groups[0], key: group },
        Object.entries(definition.config || {})
          .filter(([, field]) => (field.group || "General") === group)
          .map(([key, field]) => control(key, field, config[key], (value) => setAttributes({ config: { ...config, [key]: value } })))
      ));
      inspector.push(el(PanelBody, { title: "Localized resources", initialOpen: true, key: "resources" }, el(TextControl, { label: "Locale", value: locale, onChange: (value) => setAttributes({ locale: value.toLowerCase() }) }), Object.entries(definition.resources || {}).map(([key, resource]) => el(TextControl, { key, label: key, help: resource.comment || "", value: localized[key] || "", onChange: (value) => setAttributes({ resources: { ...(attributes.resources || {}), [locale]: { ...localized, [key]: value } } }) }))));
      return el(wp.element.Fragment, {}, el(InspectorControls, {}, inspector), el("div", useBlockProps({ className: "dynamics-module-placeholder" }), el("strong", {}, definition.friendlyName), el("p", {}, definition.description), el("small", {}, `Module: ${definition.name} · Locale: ${locale}`)));
    };
    registerBlockType(`dynamics/${definition.name}`, {
      apiVersion: 3, title: definition.friendlyName, description: definition.description, icon: "screenoptions", category: "design",
      attributes: { moduleId: { type: "string" }, config: { type: "object", default: {} }, resources: { type: "object", default: {} }, locale: { type: "string", default: settings.defaultLocale || "en" } },
      edit: ModuleEdit, save: () => null,
    });
  });

  const FragmentEdit = ({ attributes, setAttributes }) => el("div", useBlockProps(), el(SelectControl, { label: "Fragment", value: attributes.fragmentId, options: [{ label: "Select a fragment", value: 0 }, ...(settings.fragments || [])], onChange: (value) => setAttributes({ fragmentId: Number(value) }) }));
  registerBlockType("dynamics/fragment", { apiVersion: 3, title: "Module fragment", icon: "admin-page", category: "design", attributes: { fragmentId: { type: "number", default: 0 } }, edit: FragmentEdit, save: () => null });
})(window.wp, window.DynamicsModuleEditor || { definitions: [], fragments: [], defaultLocale: "en" });
