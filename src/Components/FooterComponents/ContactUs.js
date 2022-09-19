
import './../Admin/AdminMenu/AdminMenu.css'

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {recievedContact} from "./../../Redux/Actions";
import {sentContact} from "./../../Redux/Actions";
// import {  } from "../../../../Redux/Actions";

function validateForm (input) {
   let errors = {};
 if (!input.name) {
     errors.name = "name is required";
     } else if (input.name.match("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")==null) {
     errors.name ="only can use letters and spaces for name";
     } else if (input.name.match(/(\s{2,})/g)!==null) {
     errors.name ="you can't use two spaces in a row in the name";
     } else if (input.name.length>25 || input.name.length<3) {
     errors.name ="the name must be between 3 and 25 characters";
     } else if (input.name.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]")==null) {
     errors.name ="the name must be begin with a letter";
     }
 if (!input.lastname) {
      errors.lastname = "lastname is required";
      } else if (input.lastname.match("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$")==null) {
      errors.lastname ="only can use letters and spaces for lastname";
      } else if (input.lastname.match(/(\s{2,})/g)!==null) {
      errors.lastname ="you can't use two spaces in a row in the lastname";
      } else if (input.lastname.length>25 || input.name.length<3) {
      errors.lastname ="the lastname must be between 3 and 25 characters";
      } else if (input.lastname.match("^[a-zA-ZñÑáéíóúÁÉÍÓÚ]")==null) {
      errors.lastname ="the lastname must be begin with a letter";
      }
 if (!input.email) {
      errors.email = "email is required";
      } else if (input.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null) {
      errors.email ="it's not a valid email adress"};

return errors;
}


export const ContactUs = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const [input, setInput] = useState({
   name:"",
   lastname:"",
   email:"", 
   subject:"", 
   message:""
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
   let errors = validateForm(input);
   let listErrors = Object.values(errors);
   console.log(listErrors)
   if(listErrors.length===0){
   console.log(input)
   dispatch(recievedContact(input));
   dispatch(sentContact(input));
   alert("Message Sent!");
   setInput({
      name:"",
      lastname:"",
      email:"", 
      subject:"", 
      message:""
   })
   navigate("/");
 } else {
   alert(listErrors.join("\n"));
}
}

   return (
      <div className='admin-menu-sub-container' style={{ paddingTop: "100px" }}>
         {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/SITIO-EN-CONSTRUCCION.jpg/1200px-SITIO-EN-CONSTRUCCION.jpg' style={{ display: "grid", justifyContent: "center", padding: "100px", margin: "auto", width: "40vw" }} /> */}
         <form className='admin-menu-options' name='contact' onSubmit={(e)=>handleSubmit(e)}>
            <div style={{ padding: "10px" }}>
               <label>Name: </label>
               <br />
               <input
                  type="text"
                  name='name'
                  placeholder='Type your name'
                  onChange={(e) => handleChange(e)}
                  value={input.name}
               />
            </div>
            <div style={{ padding: "10px" }}>
               <label>Lastname: </label>
               <br />
               <input
                  type="text"
                  name='lastname'
                  placeholder='Type your lastname'
                  onChange={(e) => handleChange(e)}
                  value={input.lastname}
               />
            </div>
            <div style={{ padding: "10px" }}>
               <label>Email: </label>
               <br />
               <input
                  type="email"
                  name='email'
                  placeholder='Type your email'
                  onChange={(e) => handleChange(e)}
                  value={input.email}
               />
            </div>
            <div style={{ padding: "10px" }}>
               <label>Subject: </label>
               <br />
               <input
                  type="text"
                  name='subject'
                  placeholder='Type a topic'
                  onChange={(e) => handleChange(e)}
                  value={input.subject}
               />
            </div>
            <div style={{ padding: "10px" }}>
               <label>Message: </label>
               <br />
               <textarea
                  name='message'
                  cols="40"
                  rows="10"
                  placeholder='Type your comment'
                  onChange={(e) => handleChange(e)}
                  value={input.message}
                  />
            </div>
            <div style={{ padding: "10px" }}>
            <button
                  className='admin-buttons'
                  type='reset'
                  name='reset'>
                  Clear
               </button>
               <button
                  className='admin-buttons'
                  type='submit'
                  name='submit'>
                  Send
               </button>
            </div>
         </form>
      </div>

   )
}
