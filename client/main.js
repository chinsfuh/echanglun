import React from 'react';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import SecureApp from '/imports/ui/SecureApp';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



Meteor.startup(() => {
  render(<SecureApp />, document.getElementById('react-target'));
  
});
