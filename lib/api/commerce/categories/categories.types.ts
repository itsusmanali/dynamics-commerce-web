export interface CommerceCategory {
  RecordId: number;
  ParentCategory: number;
  Name?: string;
  Description?: string;
  Slug?: string;
  [key: string]: unknown;
}
export interface CommerceCategoryNode extends CommerceCategory { children: CommerceCategoryNode[] }
export interface CategoriesRequest { presentation: "list" | "tree" }
