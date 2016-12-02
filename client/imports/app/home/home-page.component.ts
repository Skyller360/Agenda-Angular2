
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import template from './views/home-page.component.html';
import style from './styles/home-page.component.css';

import { Addresses } from '../../../../both/collections/addresses.collection';
import { Address } from '../../../../both/models/address.model';

@Component({
    selector: 'home',
    styles: [ './styles/home-page.component.css' ],
    template
})

export class HomePageComponent {
    
    addresses: Observable<Address[]>;

    constructor() {
        console.log(style)
        this.addresses = Addresses.find({}).zone();
    }
}