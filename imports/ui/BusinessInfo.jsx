import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Businesses from '../api/businesses';
import Business from './Business.jsx';


class BusinessInfo extends Component {

  render() {
    const businesses = this.props.businesses.map(
      business => this.makeBusiness(business)
    );

    return (
      <div>
        <h1>Welcome to eChanglun Services</h1>
        <ul>{businesses}</ul>
      </div>
    );
  };


  makeBusiness(business) {
    return (
      <li key={props.business._id}>
        <h1>ID:{props.business.ID} Service:{business.Service}</h1>
                ID: {business.ID}
        {/* ID: {props.s.ID}  | Service: {props.s.Service} | Service Name: {props.service.ServiceName} |       
        Address: {props.s.Address} | City: {props.service.City} | ZIP Postal: {props.service.ZIPPostal} | 
        Business Phone: {props.service.BusinessPhone} 
        | Mobile Phone: {props.service.MobilePhone} | 
        Image: {props.service.Image} 
        | Link: {props.service.Link} | Operation Hour: {props.service.OperationHour} */}

        {/* <Business service={s} /> */}
      </li>
    );
  }
}

export default BusinessContainer = withTracker(() => {
  return {
    businesses: Businesses.find().fetch(),
  };
})(BusinessInfo);







