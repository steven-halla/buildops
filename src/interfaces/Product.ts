export interface  Product {
  // Selected: boolean;
  productType: string;
  productName: string;
  productDescription: string;
}

export interface ProductGroupProps {
  productType: string,
  products: Product[],
}
