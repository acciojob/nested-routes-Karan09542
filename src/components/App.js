
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Layout from "./Layout";

const App = () => {
  return (
    <main>
        {/* Do not remove the main div */}
        <Layout/>
    </main>
  )
}

export default App
