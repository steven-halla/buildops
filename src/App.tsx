import React from 'react';
import {ProductList} from "./view/ProductList";
import {Product} from "./model/Product";
import styled from "styled-components";
import useCollapse from 'react-collapsed';
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const App = () => {

  const products : Product[] = [
    {isChecked: false,  productType: "Cats" , productName: "Siamese", productDescription: "Very chatty cat."},
    {isChecked: false, productType: "Cats", productName: "Tabby", productDescription: "It's favorite soda is tab."},
    {isChecked: false, productType: "Birds", productName: "Humming", productDescription: "Loves to hum."},
    {isChecked: false,  productType: "Dogs", productName: "Doberman Pincher", productDescription: "Favorite holiday is St. Patricks Day."},
    {isChecked: false, productType: "Dogs", productName: "Husky", productDescription: "Super fluffy."},
    {isChecked: false, productType: "Dogs", productName: "Golden Retriever", productDescription: "It retrieves gold."},
    {isChecked: false, productType: "Birds", productName: "Blue Jay", productDescription: "Why is it named jay?"},
    {isChecked: false, productType: "Birds", productName: "Robin", productDescription: "Where's batman?"},
    {isChecked: false, productType: "Cats", productName: "Persian", productDescription: "They fought in the Persian Wars. "},
  ];

  return (
    <StyledApp>
      <div className="App">
          <ProductList products={products} />
      </div>
    </StyledApp>
  );
}

export default App;
