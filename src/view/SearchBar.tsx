import styled from "styled-components";
import React, {FC, useEffect, useState} from "react";
import {Product} from "../model/Product";
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ProductList} from "./ProductList";

const SearchBarDiv = styled.div`

  .search-bar-container {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 15px;
    padding: 2px;
    min-width: 33em;
    max-width: 56.2em;
    height: 3em;
  }

  input {
    min-width: 67em;
    max-width: 72em;
    height: 2em;
    border-style: solid;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown::before {
    position: absolute;
    content: " \\02228";
    top: 0px;
    right: 0px;
    height: 15px;
    width: 20px;
  }
`;


interface SearchBarProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
  // setProducts: the type is a function that takes Product[] as a parameter and returns nothing
}

export const SearchBar: FC<SearchBarProps> = (props) => {

  const {products, setProducts} = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const filteredProducts = products.filter((product: Product): boolean => {
      if (!searchQuery) {
        return true;
      }
      return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setProducts(filteredProducts);

    console.log(filteredProducts);

    // every time searchQuery changes, it activates our effect (calls this function)
  }, [searchQuery]);

  return (
    <SearchBarDiv>
        <div className="search-bar-container">
          <div className="dropdown">
                <input
                  type="text"
                  placeholder="Search Assets"
                  onChange={event => {
                    setSearchQuery(event.target.value);
                  }}
                  value={searchQuery}
                /><br/>
          </div>
        </div>
    </SearchBarDiv>
  )
};



