import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Businesses from '../api/businesses';

class Info extends Component {
  render() {
    const businesses = this.props.businesses.map(
      business => this.makeBusiness(business)
    );

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{ businesses }</ul>
      </div>
    );
  }

  

  makeBusiness(business) {
    return (
      <li key={business._id}>
       <h2>{business.name}</h2> {/* <a href={business.url} target="_blank">{business.name}</a> */}
      </li>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    businesses: Businesses.find().fetch(),
  };
})(Info);
