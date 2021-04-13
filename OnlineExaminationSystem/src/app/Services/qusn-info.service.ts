import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http'  

import {QusnInfoModule} from '../Modules/qusn-info/qusn-info.module';
import { Observable } from 'rxjs';  
import {AddSubModule} from '../Modules/add-sub/add-sub.module';
  

@Injectable({
  providedIn: 'root'
})
export class QusnInfoService {

  constructor(private http: HttpClient) { }
  url:string='http://localhost:62603/api/StudentAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  UploadExcel(formData: FormData,subjectid:number) {  
    let headers = new HttpHeaders();  
  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
  
    const httpOptions = { headers: headers };  
  
    return this.http.post(this.url + '/UploadExcel', formData,httpOptions)  
  }  

  TestSubject(ts: AddSubModule): Observable<boolean>
{
  return this.http.post<boolean>(this.url + '/' + 'TestSubject', ts, this.httpOptions);
}

ShowSubject():Observable<AddSubModule[]>
{
  return this.http.get<AddSubModule[]>(this.url + "/"+"ShowSubject");
}

AddSubId(Sid:number):Observable<boolean>
{
  return this.http.post<boolean>(this.url + '/' + 'AddSubId',Sid, this.httpOptions);
}

}
