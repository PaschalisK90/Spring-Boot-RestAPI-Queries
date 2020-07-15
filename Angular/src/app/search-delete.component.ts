import { Component, OnInit } from '@angular/core';

import {StudentRegisterService} from './studentRegister.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: 'student.component.html',
  styleUrls: ['student.component.css']
})
export class SearchDeleteComponent implements OnInit {
students: any = [] ;

teachersName: string;

   constructor(private service: StudentRegisterService){ }


  public findByTeachersName(){
    let resp= this.service.findByTeachersName(this.teachersName);
    resp.subscribe((data) => this.students = data);
  }
public deleteStudentBySurname(surname: string){
  let resp = this.service.deleteStudentBySurname(surname);
  resp.subscribe((data) => this.students = data);

}

  public deleteByNameStudent(nameStudent: string){
    let resp = this.service.deleteByNameStudent(nameStudent);
    resp.subscribe((data) => this.students = data);

  }


  ngOnInit() {
    let resp= this.service.getUsers();
    resp.subscribe((data) => this.students = data);
  }

}
