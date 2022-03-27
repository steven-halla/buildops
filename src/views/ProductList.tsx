import styled from "styled-components";

import React, {FC, ReactNode} from "react";

import _ from 'lodash';
import {Product} from "../interfaces/Product";

const DisplayMyDataDiv = styled.div`

  .data-container {
    display: flex;
    //justify-content: center;

    margin: auto;
    padding: 2px;
    min-width: 55em;
    max-width: 56em;
    border-style: solid;
    color: red;
    border-color: red;
    background-color: skyblue;
  }

  //bullets might be in way of this
  ul {
    list-style: none;
  }

  li {
    display: flex;
    margin-left: auto;
    padding: 1em 0 0 1em;
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
      return <ProductGroup
        productType={productType}
        products={products}
      />;
    });


  // console.log(groupedProducts);

  // build this later one step at a time . focus on check boxes next
  // const addProductHandler = () => {
  //   let newProduct = {ProductName:"test",ProductDescription:"testing this"};
  //   let ProductArray = products.concat(newProduct);
  //     setProducts(products)
  // }


  const groupedItemsJsx = _.forOwn(groupedProducts, (products: Product[], productType: string) => {
    return <>{productType}</>;
  });

  return (
    <DisplayMyDataDiv>
      <p>I am displaying data</p>

      <div className="data-container">
        <div>
          <input type="checkbox"/>Select all assets
        </div>
        <div className="grouped-products-list">
          {groupedProductJsx}
        </div>
      </div>

      {/*<button onClick={addProductHandler}>Add new product</button> lets build this later*/}
    </DisplayMyDataDiv>
  );
}

interface ProductGroupProps {
  productType: string,
  products: Product[],
}

const ProductGroup: FC<ProductGroupProps> = (props) => {
  const { productType, products } = props; // prefer this
  // const products = props.products;
  // const productType = props.productType;

  console.log(products);
  console.log(productType)

  return <>{productType}<br/>{JSON.stringify(products)}</>;
}
