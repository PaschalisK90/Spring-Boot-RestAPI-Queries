import {Component, OnInit } from '@angular/core';

import {Student} from './student';
import {StudentRegisterService} from './studentRegister.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls : ['login.component.css']


})
export class LoginComponent {
  students: any=[];
 message: any = [] ;



  constructor(private service: StudentRegisterService, private router: Router) { }





  public findByLogin(email: string, password: number){
    let resp = this.service.findByLogin (email, password);
    resp.subscribe((data) => this.students = data);

    this.router.navigate(['/main'], { queryParams: { students: Student} } );


  }


}
