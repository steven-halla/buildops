export interface  Product {
  // Selected: boolean;
  productType: string;
  productName: string;
  productDescription: string;
  isChecked?: boolean;
}

export interface ProductGroupProps {
  productType: string,
  products: Product[],
}
