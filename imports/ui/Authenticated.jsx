import React, { Component } from "react";
import { render } from "react-dom";
import MerchantForm from "./MerchantForm";
import NavBarLogin from "./NavBarLogin";
import Header from "./Header";

const Authenticated = () => {
    return (
      <div className="col-md-6">
        {/* <h3> Merchant Form </h3> */}
        {/* <MerchantForm /> */}
        
        
        You're now Login.
        <NavBarLogin />
      </div>
    );
  
}

export default Authenticated;
