import { Meteor } from 'meteor/meteor';
import Businesses from '/imports/api/businesses';

Meteor.startup(() => {
  if (Businesses.find().count() === 0) {
    console.log("Nothing")
  }
  else
    console.log("Something")
});
