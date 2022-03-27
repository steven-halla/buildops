import React from 'react';
import './App.css';
import { SearchBar } from './views/SearchBar';
import {ProductList} from "./views/ProductList";
import {Product} from "./interfaces/Product";

const App = () => {
  const products : Product[] = [
    {productType: "cats" , productName: "siamese", productDescription: "very chatty cat"},
    {productType: "cats", productName: "tabby", productDescription: "its favorite soda is tab"},
    {productType: "birds", productName: "humming", productDescription: "loves to hum"},

    {productType: "dogs", productName: "doberman pincher", productDescription: "Favorite holiday is st patricks day"},
    {productType: "dogs", productName: "husky", productDescription: "super fluffy"},
    {productType: "dogs", productName: "golden retriever", productDescription: "it retrieves gold"},
    {productType: "birds", productName: "blue jay", productDescription: "why is it named jay?"},
    {productType: "birds", productName: "robin", productDescription: "wheres batman?"},
    {productType: "cats", productName: "persian", productDescription: "its hails from persia "},
  ];

  return (
    <div className="App">
      <SearchBar/>
      <ProductList products={products} />
    </div>
  );
}

export default App;
