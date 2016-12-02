import { MongoObservable } from 'meteor-rxjs';

import { Address } from '../models/address.model';

export const Addresses = new MongoObservable.Collection<Address>('address');