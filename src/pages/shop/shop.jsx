import React from "react";
import { PRODUCTS } from "../../products";
import { PRODUCTS2 } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Available Products</h1>
      </div>
      <h2 className="catagory">Electronics <i class="fa-solid fa-bolt"></i></h2>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <h2 className="catagory">Clothing <i class="fa-solid fa-shirt"></i></h2>
      <div className="products">
        {PRODUCTS2.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
