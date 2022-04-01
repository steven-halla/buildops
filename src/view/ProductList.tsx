import styled from "styled-components";

import React, {ChangeEvent, FC, useState} from "react";

import _ from 'lodash';
import {Product} from "../model/Product";
import {ProductGroup} from "./ProductGroup";
import {SearchBar} from "./SearchBar";
import Collapsible from 'react-collapsible';

import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledProductList = styled.div`
  .product-list {
    display: flex;
    flex-flow: column;
    margin: auto;
    padding: 2px;
    min-width: 55em;
    max-width: 56em;
    border-style: solid;
    //color: red;
    border-color: black;
    //background-color: skyblue;

    .product-list-select-all-checkbox {
      width: 100%;
      //background-color: pink;
    }

    .product-group-list {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      //color: blue;

      .product-group {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        margin: 5px;
        //background-color: lightgreen;

        .product-type {
          width: 150px;
          background-color: lightgray;

          .class-checkbox {
            background-color: lightgray;
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
              //background-color: purple;

              .product-checkbox-input {
              }
            }

            .product-name {
              //background-color: lightgray;
              width: 35%;
            }

            .product-description {
              padding-left: 15em;
              //background-color: lightgray;
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
      // console.log("---");
      // console.log(products);
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


      <SearchBar
        products={props.products} // important, if i pass in allProductsState, the product list never resets, must always filter from the FULL (original list of products)
        setProducts={setAllProductsState}
      />
      <div className="product-list">

                <Collapsible trigger="Click text to show/hide products" type="button">

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


                </Collapsible>
      </div>

      {/*<button onClick={addProductHandler}>Add new product</button> lets build this later*/}
    </StyledProductList>
  );
}

