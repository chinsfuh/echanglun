import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MS from '../api/MerchantService';

class Info extends Component {
  render() {
    const ms = this.props.ms.map(
      s => this.makeMService(s)
    );

    return (
      <div>
        <ul>{ ms }</ul>
      </div>
    );
  }

  makeMService(s) {
    return (
      <li key={s._id}>
       <h2>{s.Address}</h2> {/* <a href={business.url} target="_blank">{business.name}</a> */}
      </li>



    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    ms: MS.find().fetch(),
  };
})(Info);
