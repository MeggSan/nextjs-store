export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: Vendor;
  product_type: string;
  created_at: Date;
  handle: string;
  updated_at: Date;
  published_at: Date;
  template_suffix: null;
  published_scope: PublishedScope;
  tags: string;
  status: Status;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
}

export interface Image {
  id: number;
  alt: null;
  position: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: any[];
}

export interface Option {
  id: number;
  product_id: number;
  name: Name;
  position: number;
  values: Option1[];
}

export enum Name {
  Title = "Title",
}

export enum Option1 {
  DefaultTitle = "Default Title",
}

export enum PublishedScope {
  Global = "global",
}

export enum Status {
  Active = "active",
}

export interface Variant {
  id: number;
  product_id: number;
  title: Option1;
  price: string;
  position: number;
  inventory_policy: InventoryPolicy;
  compare_at_price: null | string;
  option1: Option1;
  option2: null;
  option3: null;
  created_at: Date;
  updated_at: Date;
  taxable: boolean;
  barcode: null;
  fulfillment_service: FulfillmentService;
  grams: number;
  inventory_management: null;
  requires_shipping: boolean;
  sku: null;
  weight: number;
  weight_unit: WeightUnit;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  admin_graphql_api_id: string;
  image_id: null;
}

export enum FulfillmentService {
  Manual = "manual",
}

export enum InventoryPolicy {
  Deny = "deny",
}

export enum WeightUnit {
  Kg = "kg",
}

export enum Vendor {
  FutureWorld = "Future World",
}

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

export interface CategoriesProps {
  params: {
    categories: string[];
    searchParams: Record<string, string | string[] | undefined>; // OR { [key: string]: string | string[] | undefined }
  };
}

export interface Collection {
  id: number;
  handle: string;
  title: string;
  updated_at: Date;
  body_html: string;
  published_at: Date;
  sort_order: string;
  template_suffix: string;
  disjunctive: boolean;
  rules: any[];
  published_scope: string;
  admin_graphql_api_id: string;
}
