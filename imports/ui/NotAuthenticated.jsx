import React, { Component } from "react";
import { render } from "react-dom";
import MerchantForm from "./MerchantForm";
import NavBarLogin from "./NavBarLogin";
import Header from "./Header";
import BusinessInfo from "./BusinessInfo";

const NotAuthenticated = () => {
    return (
      <div className="col-md-6">
        {/* <h3> Merchant Form </h3> */}
        {/* <MerchantForm /> */}
        
        {/* <Header/> */}
        <BusinessInfo />
        Please Login
        <NavBarLogin />
      </div>
    );
  
}

export default NotAuthenticated;
