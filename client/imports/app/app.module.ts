import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ADDRESSES_DECLARATIONS } from './addresses';
import { HomePageComponent } from './home/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],

  declarations: [
    AppComponent,
    ...ADDRESSES_DECLARATIONS,
    HomePageComponent
  ],
  
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}