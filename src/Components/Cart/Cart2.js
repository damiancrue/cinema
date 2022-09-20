import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getProducts } from "../../Redux/Actions";
import { v4 as randomId } from "uuid";
import { useAuth } from "../Context/authContext";
import axios from "axios"

import Loading from "../Loading/Loading";

import "./Cart.css";
import { MarkChatUnreadSharp } from "@mui/icons-material";

function Cart() {
  const dispatch = useDispatch();

  const [movieLocalStorage, setMovieLocalStorage] = useState({});
  const [amount, setAmount] = useState(0)
  const [localStorage, setLocalStorage] = useState([]);
  const [paymentData,setPaymentData ] =useState({})
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
   setLocalStorage(local2?[local2]:[])
    setAmount(JSON.parse(local3))
  }, [dispatch]);

  function handleReset() {
    window.localStorage.setItem("productsCart", JSON.stringify([]));
    setLocalStorage([]);
    setAmount(0)
    window.localStorage.setItem("amount",JSON.stringify(0))
  }

  async function startPaymentProcess() {
    const user_schedule = window.localStorage.getItem("movieCart");
    const user_products = window.localStorage.getItem("productsCart");
    const userItems = {
      producto: user_products,
      funcion: user_schedule,
    };
    const data = await axios.get(`https://api-pf-cine.herokuapp.com/payment/`);
    console.log(data);
    const script = document.createElement("script");
    const attr_data_preference = document.createAttribute("data-preference-id");
    attr_data_preference.value = data.data.id;
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference);
    document.getElementById("pay").appendChild(script);
  }

  // function handleAddToCart(id, name, price) {
  //   if (localStorage) {
  //     if (localStorage[id]) {
  //       localStorage[id][1].quantity += 1;
  //       setLocalStorage({ ...localStorage });
  //       setAmount(amount+localStorage[id][2].price)
  //       window.localStorage.setItem("amount",JSON.stringify(amount))
  //       window.localStorage.setItem(
  //         "productsCart",
  //        JSON.stringify(localStorage)
  //       );
  //     } else {
  //       localStorage[id] = [{ name: name }, { quantity: 1 }, {price: price}];
  //       setLocalStorage({ ...localStorage });
  //       setAmount(amount+localStorage[id][2].price)
  //       window.localStorage.setItem("amount",JSON.stringify(amount))
  //       window.localStorage.setItem(
  //         "productsCart",
  //         JSON.stringify(localStorage)
  //       );
  //     }
  //   } else {
  //     localStorage[id] = [{ name: name }, { quantity: 1 }];
  //     setLocalStorage({ ...localStorage });
  //     setAmount(localStorage[id][2].price);
  //     window.localStorage.setItem("amount",JSON.stringify(amount))
  //     window.localStorage.setItem("productsCart", JSON.stringify(localStorage));
  //   }
  // }


  function handleAddToCart(id, name, price) {

console.log(typeof localStorage)
    if (localStorage) {
 
      let globo = localStorage.map(e=>e.id).indexOf(id)
      if (globo<0) {
        let machu = [...localStorage]
        machu.push({ id:id ,name: name , quantity: 1 , price: price});
        setLocalStorage([ ...machu]);
        setAmount(amount+price)
        window.localStorage.setItem("amount",JSON.stringify(amount))
        window.localStorage.setItem(
          "productsCart",
         JSON.stringify(localStorage)
        );
        console.log(machu)
      } else {
        let machu = [...localStorage]
        console.log(machu[globo])
        machu[globo].quantity += 1
        setLocalStorage([...machu]);
        setAmount(amount+price)
        window.localStorage.setItem("amount",JSON.stringify(amount))
        window.localStorage.setItem(
          "productsCart",
          JSON.stringify(localStorage)
        );
      }
    } else {
      localStorage.push({ id:id ,name: name , quantity: 1 , price: price});
      setLocalStorage({ ...localStorage });
      setAmount(localStorage[id].price);
      window.localStorage.setItem("amount",JSON.stringify(amount))
      window.localStorage.setItem("productsCart", JSON.stringify(localStorage));
    }
  }

  function sendPayment() {
    let papa = [{name:"papa2", quantity:2, price:2},{name:"papa1", quantity:2, price:2} ]
    let globo = papa.map(e=>e.name).indexOf("papa2")
    const userEmail = authUser.accessToken
    const scheduleId = movieLocalStorage
    console.log(globo)
    const productsBuy = localStorage
   setPaymentData({email:userEmail, products: productsBuy,schedule: scheduleId })

    //console.log(paymentData)
  } 


  function handleRemoveFromCart(id) {
    let globo = localStorage.map(e=>e.id).indexOf(id)
    let machu = [...localStorage]
    let price = machu[globo].price
    if (machu[globo].quantity > 1) {
      machu[globo].quantity -= 1;
      setLocalStorage([ ...machu ]);
      setAmount(amount-price)
      window.localStorage.setItem("amount",JSON.stringify(amount))
      window.localStorage.setItem("productsCart", JSON.stringify(machu));
    } else {
      setAmount(amount-price)
      window.localStorage.setItem("amount",JSON.stringify(amount))
      let machu2= machu.filter(e=>e.id!==id)
      setLocalStorage([ ...machu2]);
      window.localStorage.setItem("productsCart", JSON.stringify(machu2));
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
                {localStorage.map((product) => {
                  return (
                    <div className="cart-products-in-cart" key={randomId()}>
                      <div
                        key={randomId()}
                        className="cart-products-in-cart-name"
                      >
                        {product.name}
                      </div>
                      <div
                        key={randomId()}
                        className="cart-quantity-buttons-container"
                      >
                        <button
                          className="cart-quantity-buttons"
                          onClick={() => handleRemoveFromCart(product.product_id, product.name, product.price)}
                        >
                          -
                        </button>

                        {product.quantity}

                        <button
                          className="cart-quantity-buttons"
                          onClick={() => handleAddToCart(product.product_id, product.name, product.price)}
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
            <button className="admin-buttons" onClick={()=>sendPayment()}>
              Amount ${(parseFloat(amount?amount.toFixed(2):0)+parseFloat(movieLocalStorage.selected?(movieLocalStorage.selected.length*5).toFixed(2):0)).toFixed(2)}
            </button>
            {authUser?.uid ?
            <div id='pay'>
            <button className="admin-buttons" onClick={startPaymentProcess}>
              Pay 
            </button>
            </div>
              : 
              <button className="admin-buttons" >
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
