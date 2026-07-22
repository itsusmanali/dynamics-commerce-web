/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

(function (wp, settings) {
  const el = wp.element.createElement;
  const { useEffect } = wp.element;
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } = wp.blockEditor;
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

  const definitions = settings.definitions || [];
  const definitionNames = definitions.map((definition) => definition.name);

  const SlotEdit = ({ attributes }) => {
    const wildcard = (attributes.allowedModules || []).includes("*");
    const names = wildcard ? definitionNames : (attributes.allowedModules || []);
    const allowedBlocks = names.map((name) => `dynamics/${name}`);
    return el(
      "section",
      useBlockProps({ className: "dynamics-module-slot", style: { border: "1px dashed #8c8f94", background: "#f8f9fa", padding: "12px", margin: "8px 0", minHeight: "92px" } }),
      el("div", { style: { marginBottom: "10px" } },
        el("strong", { style: { display: "block" } }, attributes.friendlyName || attributes.slotName || "Slot"),
        attributes.description ? el("p", { className: "description" }, attributes.description) : null,
        el("small", { style: { color: "#646970" } }, "Add one or more modules below."),
      ),
      el(InnerBlocks, {
        allowedBlocks,
        templateLock: false,
        renderAppender: () => el(InnerBlocks.ButtonBlockAppender),
      }),
    );
  };
  registerBlockType("dynamics/slot", { apiVersion: 3, title: "Module Slot", description: "A group-style area that accepts nested modules.", icon: "screenoptions", category: "design", parent: definitionNames.map((name) => `dynamics/${name}`), supports: { html: false, reusable: false }, attributes: { slotName: { type: "string" }, friendlyName: { type: "string" }, description: { type: "string" }, allowedModules: { type: "array", default: ["*"] } }, edit: SlotEdit, save: () => el(InnerBlocks.Content) });

  definitions.forEach((definition) => {
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
      const slots = Object.entries(definition.slots || {});
      const template = slots.map(([slotName, slot]) => ["dynamics/slot", { slotName, friendlyName: slot.friendlyName, description: slot.description || "", allowedModules: slot.allowedModules || ["*"] }]);
      return el(wp.element.Fragment, {}, el(InspectorControls, {}, inspector), el("div", useBlockProps({ className: "dynamics-module-placeholder" }), el("strong", {}, definition.friendlyName), el("p", {}, definition.description), el("small", {}, `Module: ${definition.name} · Locale: ${locale}`), slots.length ? el(InnerBlocks, { allowedBlocks: ["dynamics/slot"], template, templateLock: "all" }) : null));
    };
    registerBlockType(`dynamics/${definition.name}`, {
      apiVersion: 3, title: definition.friendlyName, description: definition.description, icon: "screenoptions", category: "design",
      attributes: { moduleId: { type: "string" }, config: { type: "object", default: {} }, resources: { type: "object", default: {} }, locale: { type: "string", default: settings.defaultLocale || "en" } },
      edit: ModuleEdit, save: () => el(InnerBlocks.Content),
    });
  });

  const FragmentEdit = ({ attributes, setAttributes }) => el("div", useBlockProps(), el(SelectControl, { label: "Fragment", value: attributes.fragmentId, options: [{ label: "Select a fragment", value: 0 }, ...(settings.fragments || [])], onChange: (value) => setAttributes({ fragmentId: Number(value) }) }));
  registerBlockType("dynamics/fragment", { apiVersion: 3, title: "Module fragment", icon: "admin-page", category: "design", attributes: { fragmentId: { type: "number", default: 0 } }, edit: FragmentEdit, save: () => null });
})(window.wp, window.DynamicsModuleEditor || { definitions: [], fragments: [], defaultLocale: "en" });
