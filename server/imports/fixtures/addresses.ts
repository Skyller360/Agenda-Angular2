import { Addresses } from '../../../both/collections/addresses.collection';
import { Address } from '../../../both/models/address.model';

export function loadAddresses() {
  if (Addresses.find().cursor.count() === 0) {
    const addresses: Address[] = [{
      firstName: 'Anthony',
      lastName: 'Tomson',
      mail: 'anthony.tomson1@gmail.com',
      country: 'Belgium'
    }];

    addresses.forEach((address: Address) => Addresses.insert(address));
  }
}