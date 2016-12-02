import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Addresses } from '../../../../both/collections/addresses.collection';
import { Address } from '../../../../both/models/address.model';

import template from './views/addresses-list.component.html';

@Component({
  selector: 'addresses-list',
  styles: [ './styles/addresses-list.component.css' ],
  template
})

export class AddressesListComponent {

  addresses: Observable<Address[]>;

  constructor() {
    this.addresses = Addresses.find({}).zone();
  }

}
