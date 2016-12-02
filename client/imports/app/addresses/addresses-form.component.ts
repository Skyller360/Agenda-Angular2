
declare var require: any;
let countries = require('country-list')();
const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Addresses } from '../../../../both/collections/addresses.collection';

import template from './views/addresses-form.component.html';

@Component({
  selector: 'addresses-form',
  styleUrls: [ './styles/addresses-form.component.css' ],
  template
})

export class AddressesFormComponent implements OnInit {

  addForm: FormGroup;
  countries = countries.getNames();
  
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  addAddress(): void {
    if (this.addForm.valid && EMAIL_REGEXP.test(this.addForm.value.mail)) {
      Addresses.insert(this.addForm.value);
      this.addForm.reset();
    }
  }

  createForm(){
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

}