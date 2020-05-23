import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MS from '../api/MerchantService';
import Business from './Business.jsx';


class BusinessInfo extends Component {

    render() { 
        const ms = this.props.ms.map(
            s => this.makeBusiness(s)
        );

        return (
         <div>
             <ul>{ ms }</ul>
        </div>
         );
    };


    makeBusiness(s) {
        return ( 
            <li key={s._id}>
                {/* <h1>ID:{s.ID}</h1> */}
            <Business service={s} />
        </li>


    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    ms: MS.find().fetch(),
  };
})(BusinessInfo);







