import React from "react";
import { BrowserRouter as Outlet } from "react-router-dom";

function ProductPage() {
  return (
    <div>
      <h1>this product page</h1>

      <Outlet/>
    </div>
  );
}

export default ProductPage;
