
import {Component, OnInit} from '@angular/core';
import {Student} from './student';
import {StudentRegisterService} from './studentRegister.service';

@Component({
  selector: 'app-register',
  templateUrl:  'register.component.html',
  styleUrls: ['register.component.css']
})


export class RegisterComponent {
  student: Student = new Student(0, '', '', '', 0, 0,
    '', 0, '', '', 0, 0, 0, '',
    0, 0, '', '', 0,
);

  message: any;

constructor(private service: StudentRegisterService) {
}


  public  registerNow(){

  const resp = this.service.doRegistration(this.student);

  return resp.subscribe((data) => this.message = data);
  }
}
