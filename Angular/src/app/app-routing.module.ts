import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';
import {SearchDeleteComponent} from './search-delete.component';
import {LoginComponent} from './login.component';
import {main} from '@angular/compiler-cli/src/main';
import {MainComponent} from './main.component';

const routes: Routes = [

  {path: ' ', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: ' ', redirectTo: 'search', pathMatch: 'full'},
{path: 'search', component: SearchDeleteComponent},
{path: ' ', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: ' ', redirectTo: 'main', pathMatch: 'full'},
{path: 'main', component: MainComponent}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
