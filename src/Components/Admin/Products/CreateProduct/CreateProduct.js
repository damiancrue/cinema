import React, { useState } from "react";
import "./CreateProduct.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createProduct } from "../../../../Redux/Actions";

function CreateProduct() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    stock: "",
    price: "",
    active: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProduct(input));
    setInput({
      name: "",
      stock: "",
      price: "",
      active: "",
      description: "",
      image: "",
    });
    e.target.reset();
  }

  return (
    <div className="ban-user-main-container">
      <div className="ban-user-sub-container">
        <h1>Create Product</h1>
        <div className="ban-user">
          <form className="admin-form" onSubmit={(e) => handleSubmit(e)}>
            <>
              <label htmlFor="name" className="admin-form-titles">
                Name:
              </label>
              <input
                key="name"
                className="admin-input"
                name="name"
                type="text"
                placeholder="Name"
                value={input.value}
                onChange={(e) => handleChange(e)}
              />
            </>
            <>
              <label htmlFor="price" className="admin-form-titles">
                Price:{" "}
              </label>
              <input
                key="price"
                name="price"
                type="text"
                className="admin-input"
                placeholder="Price"
                value={input.value}
                onChange={(e) => handleChange(e)}
              />
            </>
            <>
              <label htmlFor="stock" className="admin-form-titles">
                Stock:{" "}
              </label>
              <input
                key="stock"
                name="stock"
                type="text"
                placeholder="Stock"
                className="admin-input"
                value={input.value}
                onChange={(e) => handleChange(e)}
              />
            </>
            <>
              <label htmlFor="image" className="admin-form-titles">
                Image:{" "}
              </label>
              <input
                key="image"
                name="image"
                type="text"
                className="admin-input"
                placeholder="Image"
                value={input.value}
                onChange={(e) => handleChange(e)}
              />
            </>

            <div className="admin-buttons-container">
              <div className="another-container">
                <button type="submit" className="admin-buttons">
                  Create Product
                </button>
              </div>
            </div>
          </form>
        </div>
        <Link to="/adminmenu">
          <button className="admin-buttons">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateProduct;
