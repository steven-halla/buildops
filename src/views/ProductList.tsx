import styled from "styled-components";

import React, {FC} from "react";

import _ from 'lodash';
import {Product, ProductGroupProps} from "../interfaces/Product";

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
              .product-checkbox-input {}
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
  products: Product[]
}

export const ProductList: FC<ProductListProps> = (props) => {
  const {products} = props;

  const groupedProducts: _.Dictionary<Product[]> = _.groupBy(products, p => p.productType)
  const groupedProductJsx = Object
    .entries(groupedProducts)
    .map((productGroupEntry: [string, Product[]]) => {
      const productType: string = productGroupEntry[0];
      const products: Product[] = productGroupEntry[1];
      // console.log("grouped products" + groupedProducts);
      // console.log("product group entry 0" + productGroupEntry[0]);
      // console.log("product group entry 1" + productGroupEntry[1]);
      return <ProductGroup
        productType={productType}
        products={products}
      />;
    });

  return (
    <StyledProductList>
      <div className="product-list">
        <div className="product-list-select-all-checkbox">
          <input type="checkbox"/>Select all assets
        </div>
        <div className="product-group-list">
          {groupedProductJsx}
        </div>
      </div>

      {/*<button onClick={addProductHandler}>Add new product</button> lets build this later*/}
    </StyledProductList>
  );
}

// interface ProductGroupProps {
//   productType: string,
//   products: Product[],
// }

//maybe have a checkbox for each type, in the model

const ProductGroup: FC<ProductGroupProps> = (props) => {
  const {productType, products} = props;

  console.log("products" + products);

  return (
    <div className="product-group">
      <div className="product-type">
        {productType}
      </div>
      <div className="product-group-product-list">
        {
          products.map((product: Product) => (
              <div className="product">
                <div className="product-checkbox">
                  <input className="product-checkbox-input" type="checkbox"/>
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

