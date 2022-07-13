import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FrontpageComponent } from './frontpage/frontpage.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontpageComponent,ProfileComponent,
    
    RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,AlertModule.forRoot(),HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
