export const commerceQueryKeys = {
  all: ["commerce"] as const,
  categories: (presentation: "list" | "tree") => [...commerceQueryKeys.all, "categories", presentation] as const,
};
