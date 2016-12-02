import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var require: any
let countries = require('country-list')();
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

import { Subscription } from 'rxjs/Subscription'; 
import { Location } from '@angular/common';

import 'rxjs/add/operator/map';

import { Addresses } from '../../../../both/collections/addresses.collection';
import { Address } from '../../../../both/models/address.model';

import template from './views/address-details.component.html';

@Component({
  selector: 'address-details',
  styleUrls: [ './styles/address-details.component.css' ],
  template
})

export class AddressDetailsComponent implements OnInit, OnDestroy {
  
  addressId: string;
  paramsSub: Subscription;
  address: Address;
  countries = countries.getNames();

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['addressId'])
      .subscribe(addressId => {
        this.addressId = addressId
        this.address = Addresses.findOne(this.addressId);
      });
  }

  saveAddress() {
    if(this.checkAddress(this.address)){
      Addresses.update(this.address._id, {
        $set: {
          firstName: this.address.firstName,
          lastName: this.address.lastName,
          mail: this.address.mail,
          country: this.address.country
        }
      });
      this.location.back();
    }
  }

  removeAddress(address: Address): void {
    Addresses.remove(this.address._id);
  
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  checkAddress(array){
    
    for(let elem in array){      
      if(!array[elem]){
          return false
      }
      if(elem == 'mail' && !EMAIL_REGEXP.test(array[elem])){
          return false;
      }
    }

    return true;
  }
}