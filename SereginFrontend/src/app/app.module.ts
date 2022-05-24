import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { BuildingService } from './building/building.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BuildingService,
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
