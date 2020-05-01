import React, { Component } from "react";
import { render } from "react-dom";
import MerchantForm from "./MerchantForm";

import React from 'react';



export default Contact;

const NotAuthenticate = () => {
    return (
      <div className="col-md-6">
        <h3> Merchant Form </h3>
        <MerchantForm />
      </div>
    );
  
}

export default NotAuthenticate;
