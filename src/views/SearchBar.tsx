import styled from "styled-components";

import React, {FC} from "react";

const SearchBarDiv = styled.div`
  

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
      <p>Assests to work on</p>
      <div className="dropdown">
        <input type="text" placeholder="Search Assets" />
      </div>
    </SearchBarDiv>
  )
};



