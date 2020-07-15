import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';






@Injectable({

  providedIn: 'root'
})


export class StudentRegisterService {

  constructor(private http: HttpClient) {
  }

  public doRegistration(student){
    return this.http.post('http://localhost:9090/register', student, { responseType: 'text' as 'json'});
  }
  public getUsers(){
    return this.http.get('http://localhost:9090/allstudent');
  }

  public findByTeachersName(teachersName){
    return this.http.get('http://localhost:9090//allstudentteacher/' + teachersName);
  }

  public deleteByNameStudent(nameStudent){
    return this.http.delete('http://localhost:9090/deletestudentbyname/' + nameStudent);
  }


public deleteStudentBySurname(surname){
  return this.http.delete('http://localhost:9090/deletestudentbysurname/' + surname);
}
  public findByLogin(email, password){


    return this.http.get( 'http://localhost:9090/login/' + email + '/' + password  );
  }
}
