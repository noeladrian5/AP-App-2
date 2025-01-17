import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CreateAccountComponent } from './create_account';
import { AccountCreatedComponent } from './account_created';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAccountComponent,
    AccountCreatedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
