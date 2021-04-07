import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {StudentInfoModule} from '../Modules/student-info/student-info.module';
import{Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
  stud:StudentInfoModule;
  http:HttpClient;
  url:string='http://localhost:51419/api/OnlineExam/';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) {this.http=http }
  RegisterStudent(stud:StudentInfoModule):Observable<boolean>
{
  return this.http.post<boolean>(this.url+'/'+'RegisterStudent',stud,this.httpOptions);
}

Login(Email:string,pwd:string):Observable<string>
{
  return this.http.get<string>(this.url+'/'+'login'+'/'+ Email + '/' + pwd);
}
}
