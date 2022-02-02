import React from "react";
import { InputValue } from "../Data/InputValue";
import "./Components.css";

export const Input = () => {
 return (
  <div className="form-container">
   <form>
    <input
     className="main-input"
     id="input-value"
     autoComplete="off"
     placeholder="Enter a city"
     type="text"
     name="name"
    />
    <input
     className="submit-button"
     type="submit"
     value="Submit"
     onClick={InputValue}
    />
   </form>
  </div>
 );
};
