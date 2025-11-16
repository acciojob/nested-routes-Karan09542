import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Category from "./Category";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/women" element={<Category />}>
          <Route index path="Grooming" element={<p>Grooming Items</p>} />
          <Route path="Shirt" element={<p>Shirt Items</p>} />
          <Route path="Trouser" element={<p>Trouser Items</p>} />
          <Route path="Jewellery" element={<p>Jewellery Items</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
