import React from 'react';

const Listing = (props) => (
  <div>
      <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>{props.Firstname}</td>
            <td>{props.Lastname}</td>
            <td>{props.Age}</td>
        </tr>
        <tr>
            <td>{props.Firstname}</td>
            <td>{props.Lastname}</td>
            <td>{props.Age}</td>
        </tr>
    </table>
  </div>
);

export default Listing;