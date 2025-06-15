
export interface TypeProduct {
  _id?: string;
  name: string;
  price: number;
  clients: PriceName[];
  routes: PriceName[];
}
export interface PriceName {
  _id: string;
  name: string;
  price: number;
}
export interface MediaProduct{
  _id?: string;
  filename: string;
  url: string;
}
export interface Product {
  _id?: string;
  name: string;
  price: number;
  medias: MediaProduct[];
  files?:any[];
  type: TypeProduct[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}