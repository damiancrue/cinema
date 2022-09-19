import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as randomId } from "uuid";

import {
  deleteProduct,
  activateProduct,
  getProducts,
} from "../../../../Redux/Actions";

import "./DeleteProduct.css";
import Loading from "../../../Loading/Loading";

function DeleteProduct() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function handleDeactivate(e) {
    dispatch(deleteProduct(e));
  }

  function handleActivate(e) {
    dispatch(activateProduct(e));
  }

  return (
    <div className="edit-product-main-container">
      <h1>Activate or deactivate Products</h1>
      <div className="edit-product-sub-container">
        <div className="edit-product">
          {products ? (
            <div key={randomId()} className="admin-products-container">
              {products?.map((product) => (
                <div key={randomId()} className="admin-product">
                  <img
                    className="admin-product-image"
                    key={randomId()}
                    src={product.image}
                    alt="product"
                  />
                  <div key={randomId()} className="product-info">
                    <h3>Product : {product.name}</h3>
                    <p>Price : ${product.price}</p>
                    <p>Stock : {product.stock}</p>
                  </div>
                  <div key={randomId()} className="admin-buttons-container">
                    <div key={randomId()} className="another-container">
                      <button
                        className="delete-product-button"
                        onClick={() => handleActivate(product.product_id)}
                      >
                        Activate
                      </button>
                      <button
                        className="delete-product-button"
                        onClick={() => handleDeactivate(product.product_id)}
                      >
                        Deactivate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <Link to="/adminmenu">
          <button className="admin-buttons">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default DeleteProduct;
