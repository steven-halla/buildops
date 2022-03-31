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

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


  const products : Product[] = [
    {isChecked: false,  productType: "cats" , productName: "siamese", productDescription: "very chatty cat"},
    {isChecked: false, productType: "cats", productName: "tabby", productDescription: "its favorite soda is tab"},
    {isChecked: false, productType: "birds", productName: "humming", productDescription: "loves to hum"},

    {isChecked: false,  productType: "dogs", productName: "doberman pincher", productDescription: "Favorite holiday is st patricks day"},
    {isChecked: false, productType: "dogs", productName: "husky", productDescription: "super fluffy"},
    {isChecked: false, productType: "dogs", productName: "golden retriever", productDescription: "it retrieves gold"},
    {isChecked: false, productType: "birds", productName: "blue jay", productDescription: "why is it named jay?"},
    {isChecked: false, productType: "birds", productName: "robin", productDescription: "wheres batman?"},
    {isChecked: false, productType: "cats", productName: "persian", productDescription: "its hails from persia "},
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
