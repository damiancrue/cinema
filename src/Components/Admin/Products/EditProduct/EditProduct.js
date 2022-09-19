import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editProduct, getProducts } from "../../../../Redux/Actions";
import Loading from "../../../Loading/Loading";
import "./EditProduct.css";
import { v4 as randomId } from "uuid";

function EditProduct() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    stock: "",
    price: "",
    active: "",
    image: "",
  });

  const [index, setIndex] = useState(0);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleFill(index) {
    setInput({
      name: products[index].name,
      stock: products[index].stock,
      price: products[index].price,
      active: products[index].active,
      image: products[index].image,
    });
    setIndex(index);
  }

  function handleSubmit(e, _index) {
    e.preventDefault();
    dispatch(editProduct(products[index].product_id, input));
    setInput({
      name: "",
      stock: "",
      price: "",
      active: "",
      image: "",
    });
    e.target.reset();
  }

  return (
    <div className="edit-product-main-container">
      <div className="edit-product-sub-container">
        <h1>Edit Product</h1>
        <div className="edit-product">
          <form className="admin-form" onSubmit={(e) => handleSubmit(e)}>
            <>
              <label htmlFor="name" className="admin-form-titles">
                Name
              </label>
              <input
                className="admin-input"
                key="name"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Name"
              />
            </>
            <>
              <label htmlFor="price" className="admin-form-titles">
                Price
              </label>
              <input
                className="admin-input"
                key="price"
                name="price"
                value={input.price}
                type="text"
                placeholder="Price"
                onChange={(e) => handleChange(e)}
              />
            </>
            <>
              <label htmlFor="stock" className="admin-form-titles">
                Stock
              </label>
              <input
                className="admin-input"
                key="stock"
                name="stock"
                value={input.stock}
                type="text"
                placeholder="Stock"
                onChange={(e) => handleChange(e)}
              />
            </>
            <>
              <label htmlFor="image" className="admin-form-titles">
                Image
              </label>
              <input
                className="admin-input"
                key="image"
                name="image"
                value={input.image}
                type="text"
                placeholder="Image"
                onChange={(e) => handleChange(e)}
              />
            </>
            <div className="admin-buttons-container">
              <div className="another-container">
                <button type="submit" className="admin-buttons">
                  Submit Changes
                </button>
              </div>
            </div>
          </form>
          {products ? (
            <div className="admin-products-container">
              {products?.map((product, index) => (
                <div
                  key={randomId()}
                  className="admin-product"
                  onClick={(_index) => handleFill(index)}
                >
                  <h2>Click me to edit</h2>
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
                </div>
              ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <Link to="/adminmenu" className="edit-product-buttons-container">
          <button className="admin-buttons">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default EditProduct;
