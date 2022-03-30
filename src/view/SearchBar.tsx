import styled from "styled-components";

import React, {FC} from "react";

const SearchBarDiv = styled.div`
  
  .search-bar-container {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 2px;
    min-width:55em;
    max-width: 56em;
    height: 10em;
    border-style: solid;
    color: red;
    border-color: red;
    background-color: skyblue;
  }
  
  input {
    min-width:67.5em;
    height: 2em;
    min-width:55em;

    border-style: solid;
    color: red;
    border-color: red;
    background-color: skyblue;

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

export const SearchBar: FC  = () => {

  return (
    <SearchBarDiv>
      <div className="search-bar-container">
       <div className="task-header">
        <p>hi</p>
       </div>
        <div className="dropdown">
          <input type="text" placeholder="Search Assets" />
        </div>
      </div>

    </SearchBarDiv>
  )
};



