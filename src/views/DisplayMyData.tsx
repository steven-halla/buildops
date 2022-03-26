import styled from "styled-components";

import React, {FC, useState} from "react";

const DisplayMyDataDiv = styled.div`
  

 
  
  
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

  return (
    <div>
      <p>I am displaying data</p>
      <ul>
        {
          products.map(productObjects => (
            <li>{productObjects.ProductName}   :    {productObjects.ProductDescription}</li>
            )
         )}
      </ul>
    </div>
  );
}
