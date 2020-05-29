import React, { Component } from "react";
import { render } from "react-dom";
import MerchantForm from "./MerchantForm";
import NavBarLogin from "./NavBarLogin";
import Header from "./Header";
import BusinessInfo from "./BusinessInfo";
import Business from "./Business";

const NotAuthenticated = () => {
    return (
      <div className="col-md-6">
        {/* <h3> Merchant Form </h3> */}
        {/* <MerchantForm /> */}
        
        {/* <Header/> */}
        <BusinessInfo />
        {/* <Business /> */}
        Please Login
        <NavBarLogin />
      </div>
    );
  
}

export default NotAuthenticated;
