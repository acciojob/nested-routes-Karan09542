
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Layout/>
    </div>
  )
}

export default App
