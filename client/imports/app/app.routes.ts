import { Route } from '@angular/router';

import { AddressesListComponent } from './addresses/addresses-list.component';
import { AddressDetailsComponent } from './addresses/address-details.component';
import { HomePageComponent } from './home/home-page.component';

export const routes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'addresses', component: AddressesListComponent },
  { path: 'address/:addressId', component: AddressDetailsComponent }
];
