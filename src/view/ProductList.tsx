import styled from "styled-components";

import React, {ChangeEvent, FC, useState} from "react";

import _ from 'lodash';
import {Product} from "../model/Product";
import {ProductGroup} from "./ProductGroup";

const StyledProductList = styled.div`
  .product-list {
    display: flex;
    flex-flow: column;
    margin: auto;
    padding: 2px;
    min-width: 55em;
    max-width: 56em;
    border-style: solid;
    color: red;
    border-color: red;
    background-color: skyblue;

    .product-list-select-all-checkbox {
      width: 100%;
      background-color: pink;
    }

    .product-group-list {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      color: blue;

      .product-group {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        margin: 5px;
        background-color: lightgreen;

        .product-type {
          background-color: lightgray;

          .class-checkbox {
            background-color: chocolate;
          }
        }

        .product-group-product-list {
          display: flex;
          flex-flow: column nowrap;
          width: 100%;

          .product {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            text-align: left;
            margin: 5px;

            .product-checkbox {
              background-color: purple;

              .product-checkbox-input {
              }
            }

            .product-name {
              background-color: yellow;
              width: 30%;
            }

            .product-description {
              padding-left: 15em;
              background-color: indianred;
              width: 60%
            }
          }
        }
      }
    }
  }
`;

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = (props) => {

  const [allProductsState, setAllProductsState] = useState<Product[]>(props.products);

  // i tried making this work like in ProductGroup, but it seems that even if all the items
  // in the product group are checked, this parent checkbox doesn't update.
  // is that because the productsState state variables in ProductGroup do not trigger change of productsState in this component?
  // const isAllChecked = productsState
  //   .map(product => product.isChecked) // first get all the isChecked booleans
  //   .reduce((previous: boolean, current: boolean) => previous && current); // then reduce (merge results) TODO stack overflowed this, don't fully understand

  const groupedProducts: _.Dictionary<Product[]> = _.groupBy(allProductsState, p => p.productType)
  const groupedProductJsx = Object
    .entries(groupedProducts)
    .map((productGroupEntry: [string, Product[]]) => {
      const productType: string = productGroupEntry[0];
      const products: Product[] = productGroupEntry[1];
      // console.log("grouped products" + groupedProducts);
      // console.log("product group entry 0" + productGroupEntry[0]);
      // console.log("product group entry 1" + productGroupEntry[1]);
      return <ProductGroup
        key={productType} // TODO why is this required?
        productType={productType}
        products={products}
      />;
    });

  const handleClickAllProducts = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const isChecked = event.target.checked;
    setAllProductsState(
      allProductsState.map((product: Product): Product => {
        product.isChecked = isChecked;
        return product;
      })
    )
  };

  return (
    <StyledProductList>
      <div className="product-list">
        <div className="product-list-select-all-checkbox">
          <label htmlFor="checkboxall">
            <input
              id="checkboxall"
              type="checkbox"
              onChange={handleClickAllProducts}
          //    checked={isAllChecked}
            />
            Select all assets
          </label>
        </div>
        <div className="product-group-list">
          {groupedProductJsx}
        </div>
      </div>

      {/*<button onClick={addProductHandler}>Add new product</button> lets build this later*/}
    </StyledProductList>
  );
}

