import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getProducts } from "../../Redux/Actions";
import { v4 as randomId } from "uuid";
import { useAuth } from "../Context/authContext";

import Loading from "../Loading/Loading";

import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();

  const [movieLocalStorage, setMovieLocalStorage] = useState({});
  const [amount, setAmount] = useState(0)
  const [localStorage, setLocalStorage] = useState({});
  const { authUser } = useAuth()
  const allMovies = useSelector((state) => state.allMovies);
  const products = useSelector((state) => state.products);

  const [productAddedId, setProductAddedId] = useState({
    product_id: [{ name: "" }, { quantity: 0 }],
  });

  useEffect(() => {
    const local = window.localStorage.getItem("movieCart");
    setMovieLocalStorage(JSON.parse(local));
    dispatch(getAllMovies());
    dispatch(getProducts());
    const local2 = window.localStorage.getItem("productsCart");
    const local3 = window.localStorage.getItem("amount")
    setLocalStorage(local2?JSON.parse(local2):{})
    setAmount(JSON.parse(local3))
  }, [dispatch]);

  function handleReset() {
    window.localStorage.setItem("productsCart", JSON.stringify({}));
    setLocalStorage({});
    setAmount(0)
    window.localStorage.setItem("amount",JSON.stringify(0))
  }

  function handlePay() {

  }

  function handleAddToCart(id, name, price) {
    if (localStorage) {
      if (localStorage[id]) {
        localStorage[id][1].quantity += 1;
        setLocalStorage({ ...localStorage });
        setAmount(amount+localStorage[id][2].price)
        window.localStorage.setItem("amount",JSON.stringify(amount))
        window.localStorage.setItem(
          "productsCart",
         JSON.stringify(localStorage)
        );
      } else {
        localStorage[id] = [{ name: name }, { quantity: 1 }, {price: price}];
        setLocalStorage({ ...localStorage });
        setAmount(amount+localStorage[id][2].price)
        window.localStorage.setItem("amount",JSON.stringify(amount))
        window.localStorage.setItem(
          "productsCart",
          JSON.stringify(localStorage)
        );
      }
    } else {
      localStorage[id] = [{ name: name }, { quantity: 1 }];
      setLocalStorage({ ...localStorage });
      setAmount(localStorage[id][2].price);
      window.localStorage.setItem("amount",JSON.stringify(amount))
      window.localStorage.setItem("productsCart", JSON.stringify(localStorage));
    }
  }

  function handleRemoveFromCart(id) {
    if (localStorage[id][1].quantity > 1) {
      localStorage[id][1].quantity -= 1;
      setLocalStorage({ ...localStorage });
      setAmount(amount-localStorage[id][2].price)
      window.localStorage.setItem("amount",JSON.stringify(amount))
      window.localStorage.setItem("productsCart", JSON.stringify(localStorage));
    } else {
      setAmount(amount-localStorage[id][2].price)
      window.localStorage.setItem("amount",JSON.stringify(amount))
      delete localStorage[id];
      setLocalStorage({ ...localStorage });
      window.localStorage.setItem("productsCart", JSON.stringify(localStorage));
    }
  }

  return (
    <div className="cart-main-container">
      <h1>Hi, I'm your Cart</h1>
      <div className="cart-sub-container">
        {movieLocalStorage ? (
          <div key={randomId()} className="items-movies-in-cart-container">
            <h2>Items in your cart:</h2>

            <hr />
            <div key={randomId()} className="movie-in-cart-container">
              <div key={randomId()} className="movie-in-cart-card">
                <h3>Movie :{movieLocalStorage.movie}</h3>
                <h3>Schedule ID: {movieLocalStorage.schedule_id}</h3>
                <h3>Day :{movieLocalStorage.day}</h3>
                <h3>Time :{movieLocalStorage.time}</h3>
                <h3>Quantity of Seats :{movieLocalStorage.selected?.length}</h3>
                <h3>
                  Seats Selected :{movieLocalStorage.selected?.join(", ")}
                </h3>
              </div>
            </div>
            <hr />
            <h3>Total Price For The Seats:  ${movieLocalStorage.selected?(movieLocalStorage.selected.length*5).toFixed(2):"0.00"}</h3>
            <hr />
            <div key={randomId()} className="cart-products-in-cart-container">
              <div
                key={randomId()}
                className="cart-products-in-cart-sub-container"
              >
                {Object.keys(localStorage).map((product) => {
                  return (
                    <div className="cart-products-in-cart" key={randomId()}>
                      <div
                        key={randomId()}
                        className="cart-products-in-cart-name"
                      >
                        {localStorage[product][0].name}
                      </div>
                      <div
                        key={randomId()}
                        className="cart-quantity-buttons-container"
                      >
                        <button
                          className="cart-quantity-buttons"
                          onClick={() => handleRemoveFromCart(product)}
                        >
                          -
                        </button>

                        {localStorage[product][1].quantity}

                        <button
                          className="cart-quantity-buttons"
                          onClick={() => handleAddToCart(product, product)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
                <hr />
                <h3>Total Price For The Mighty Morphy: $ {amount?amount.toFixed(2):"0:00"}</h3>
                <hr />
              </div>
            </div>
            <button className="admin-buttons" onClick={() => handleReset()}>
              Reset Items
            </button>
            <button className="admin-buttons">
              Amount ${(parseFloat(amount?amount.toFixed(2):0)+parseFloat(movieLocalStorage.selected?(movieLocalStorage.selected.length*5).toFixed(2):0)).toFixed(2)}
            </button>
            {authUser?.uid ?
            <button className="admin-buttons">
              To Pay 
            </button>

              : 
              <button className="admin-buttons">
          Login to continue
            </button>
            }


            {products ? (
              <div key={randomId()} className="admin-products-container">
                {products?.map((product, index) => (
                  <div key={randomId()} className="admin-product">
                    <h2>{product.name}</h2>
                    <img
                      className="admin-product-image"
                      key={randomId()}
                      src={product.image}
                      alt="product"
                      onClick={() =>
                        handleAddToCart(product.product_id, product.name, product.price)
                      }
                    />
                    <div key={randomId()} className="product-info">
                      <p>Price : ${product.price}</p>
                    </div>
                    <h3>Add to cart</h3>
                  </div>
                ))}
              </div>
            ) : (
              <Loading />
            )}
            <hr />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Cart;
