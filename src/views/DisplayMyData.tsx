import styled from "styled-components";

import React, {FC, useState} from "react";

const DisplayMyDataDiv = styled.div`
  
  .data-container {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 2px;
    max-width:55em;
    border-style: solid;
    color: red;
    border-color: red;
    background-color: skyblue;
  }
  
  ul {
    list-style: none;
  }
  
  
`;

export const DisplayMyData: FC = () => {

  const [products, setProducts] = useState([
    {ProductName: "ants", ProductDescription: "red harvestor ants"},
    {ProductName: "nintendo", ProductDescription: "totally rad gaming system"},
    {ProductName: "weight plates", ProductDescription: "You can feel yourself " +
        "getting stronger just by looking at them"},
    {ProductName: "drawing pad", ProductDescription: "Not as good as an ipad, but it gets " +
        "the job done"},
    {ProductName: "ergonomic keyboard", ProductDescription: "Super comfy keyboard"},
    {ProductName: "mac book pro", ProductDescription: "My favorite laptop"}
  ]);
  // build this later one step at a time . focus on check boxes next
  // const addProductHandler = () => {
  //   let newProduct = {ProductName:"test",ProductDescription:"testing this"};
  //   let ProductArray = products.concat(newProduct);
  //     setProducts(products)
  // }

  return (
    <DisplayMyDataDiv>
      <p>I am displaying data</p>
      <div className="data-container">
        <ul>
          {
            products.map(productObjects => (
                <li>{productObjects.ProductName}   :    {productObjects.ProductDescription}</li>
              )
            )}
        </ul>
      </div>

      {/*<button onClick={addProductHandler}>Add new product</button> lets build this later*/}
    </DisplayMyDataDiv>
  );
}
