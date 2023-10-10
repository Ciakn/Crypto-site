import react, { Component, useState } from "react";
import PrudoctList from "./Comoponents/PrudoctList/PrudcotList";
import NavBar from "./Comoponents/NavBar/NavBar";
import "./App.css";
import ClassCounter from "./Counters/ClassCounter";
import FunctionalCounter from "./Counters/FunctionalCounter";
import ClassTimer from "./Counters/ClassTimer";
import WithCount from "./Comoponents/Hoc/WithCount";
import Wrapper from "./Comoponents/Hoc/Wrapper";
import ClickCounter from "./Comoponents/HOC Example/ClickCounter";
import HoverCounter from "./Comoponents/HOC Example/HoverCounter";
import ResetExmpl from "./userefExample/UseRefExmple";
import CounterOne from "./CounterOne";
import ProductProvider from "./Providers/ProductsProvider";
import Filter from "./Comoponents/Filter/Filter";
import SearchBar from "./common/search/SearchBar";

const App = () => {
  return (
    <>
      <ProductProvider>
        <NavBar />
      
        <Filter/>
        <PrudoctList />
      </ProductProvider>
    </>
  );
};

export default Wrapper(App, "container");
export const khiar = "mowz";
export const mowz = "mowz";
