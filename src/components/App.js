
import React from "react";
import './../styles/App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Women from "./Women";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/women">Women</NavLink></li>
        </ul>

        <Routes>
          <Route path="/women" element={<Women />}>
            <Route path="grooming" element={<p>Grooming Items</p>} />
            <Route path="shirt" element={<p>Shirt Items</p>} />
            <Route path="trouser" element={<p>Trouser Items</p>} />
            <Route path="jewellery" element={<p>Jewellery Items</p>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
