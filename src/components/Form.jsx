import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* we can write the condition as {!props.isRegistered} it will gives the same result */}
      {props.isRegistered === false &&  <input type="password" placeholder="Confirm Password" />}  
       
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;

