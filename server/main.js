import { Meteor } from 'meteor/meteor';
import MerchantService from '/imports/api/MerchantService';

Meteor.startup(() => {
  if (MerchantService.find().count() === 0) {
    console.log("Nothing")
  }
  else
    console.log("Something")
});
