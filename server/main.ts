import { Meteor } from 'meteor/meteor';

import { loadAddresses } from './imports/fixtures/addresses';

Meteor.startup(() => {
  loadAddresses();
});
