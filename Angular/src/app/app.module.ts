import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SemesterComponent} from './Semester/semester.component';
import {SearchDeleteComponent} from './search-delete.component';
import {StudentRegisterService} from './studentRegister.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login.component';
import {MainComponent} from './main.component';


@NgModule({
  declarations: [
    AppComponent,  RegisterComponent, SearchDeleteComponent, LoginComponent , MainComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

