import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Product} from "../model/Product";

interface ProductGroupProps {
  productType: string,
  products: Product[],
}

export const ProductGroup: FC<ProductGroupProps> = (props) => {
  const {productType} = props;

  const [groupProductsState, setGroupProductsState] = useState<Product[]>(props.products);

  // super important, when props.products changes (because text was filtered) the useState(initialData) is NOT recalled.
  // it seems that I have to add another effect to call the setGroupProductsState for updates after the initial creation of the state variable.
  // I saw that props.products was changing, but that groupProductsState was NOT changing.
  useEffect(() => {
    setGroupProductsState(props.products);
  }, [props.products]);

  // console.log(props.products);

  const isAllChecked = groupProductsState
    .map(product => product.isChecked) // first get all the isChecked booleans
    .reduce((previous: boolean, current: boolean) => previous && current); // then reduce (merge results) TODO stack overflowed this, don't fully understand

  const handleSingleProductClicked = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const isChecked = event.target.checked;
    setGroupProductsState(
      groupProductsState.map((product: Product): Product => {
        console.log(event.target.id);
        if (product.productName == event.target.id) { // Is there a better way than id? It works.
          product.isChecked = isChecked;
        }
        return product;
      })
    )
  }

  const handleClickAllGroups = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const isChecked = event.target.checked;
    setGroupProductsState(
      groupProductsState.map((product: Product): Product => {
        product.isChecked = isChecked;
        return product;
      })
    )
  }

  return (
    <div className="product-group">
      <div className="product-type">
        <div className="class-checkbox">
          <label htmlFor="checkgroup">
            <input
              type="checkbox"
              id="checkgroup"
              onChange={handleClickAllGroups}
              checked={isAllChecked}
            />
            Select all assets
          </label>
        </div>
        {productType}
      </div>
      <div className="product-group-product-list">
        {
          groupProductsState.map((product: Product) => (
              <div className="product" key={product.productName}>
                <div className="product-checkbox">
                  <input
                    id={product.productName}
                    className="product-checkbox-input"
                    type="checkbox"
                    onChange={handleSingleProductClicked}
                    checked={product.isChecked}
                  />
                </div>
                <div className="product-name">
                  {product.productName}
                </div>
                <div className="product-description">
                  {product.productDescription}
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}
