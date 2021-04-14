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
  url:string='http://localhost:62603/api/StudentAPI';
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

ChkEmail(email:string):Observable<string>
{
  return this.http.get<string>(this.url+'/CheckEmail/'+ email +'/');
}

VerifyLinkEmail(stud:StudentInfoModule):Observable<string>
{
  console.log(stud);
  return this.http.post<string>(this.url+'/'+'VerifyLinkEmail',stud,this.httpOptions);
}

SetNewPassword(stud:StudentInfoModule):Observable<boolean>
{
  console.log("Inside SetNewPassword "+stud)
  return this.http.post<boolean>(this.url+'/'+'SetNewPassword',stud,this.httpOptions);
}
}
