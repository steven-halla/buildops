export interface  Product {
  // Selected: boolean;
  productType: string;
  productName: string;
  productDescription: string;
  checkboxValue: boolean;
}

export interface ProductGroupProps {
  productType: string,
  products: Product[],
}
