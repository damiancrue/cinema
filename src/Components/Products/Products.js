import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../Redux/Actions";
import "./EditProduct.css";

function Products() {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products);
   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);


   return (
      <div className="edit-product-main-container">
         <div className="edit-product-sub-container">
            <div className="edit-product-products-container">
               {products?.map((product, index) => (
                  <div key={index} className="product-container">
                     <div key={product.name} className="product-image">
                        <img
                           key={product.image}
                           src={product.image}
                           height="200px"
                           width="200px"
                           alt="product"
                        />
                     </div>
                     <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>$ {product.price.toFixed(2)}</p>
                     </div>
                  </div>
               ))}
            </div>
            <br />
            <Link to="/" className="edit-product-buttons-container">
               <button className="admin-buttons">Go Back</button>
            </Link>
         </div>
      </div>
   );
}

export default Products;
