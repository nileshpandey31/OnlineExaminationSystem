import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http'  

import {QusnInfoModule} from '../Modules/qusn-info/qusn-info.module';
import { Observable } from 'rxjs';  
import {AddSubModule} from '../Modules/add-sub/add-sub.module';
import {ReportCardModule} from '../Modules/report-card/report-card.module';
import {LevelModule} from '../Modules/level/level.module';
  
import { SelectStudentModule} from '../Modules/select-student/select-student.module';

@Injectable({
  providedIn: 'root'
})
export class QusnInfoService {

  constructor(private http: HttpClient) { }
  url:string='http://localhost:62603/api/StudentAPI';
  url1 :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
  
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

ShowQst():Observable<QusnInfoModule[]>
{
  return this.http.get<QusnInfoModule[]>(this.url + "/"+"ShowQst");
}

InsertReport(report:ReportCardModule):Observable<boolean>
{
  return this.http.post<boolean>(this.url+'/'+'InsertReport',report,this.httpOptions);
}

InsertLevel(level:LevelModule):Observable<boolean>
{
  return this.http.post<boolean>(this.url+'/'+'InsertLevel',level,this.httpOptions);
}

UpdateLevel(lid:number,l:number):Observable<boolean>
{
  return this.http.post<boolean>(this.url+'/'+'UpdateLevel'+'/'+ l ,lid,this.httpOptions);
}

ShowLevel():Observable<LevelModule[]>
{
  return this.http.get<LevelModule[]>(this.url + "/"+"ShowLevel");
}

PresentLevel(sid:number,subid:number):Observable<number>
{
  return this.http.get<number>(this.url+'/'+'PresentLevel'+'/'+ sid + '/' + subid);
}

DeleteQuestion(id:number):Observable<boolean>
{
  return this.http.delete<boolean>(this.url+'/'+'DeleteQuestion'+'/'+id);
}
ShowUQst():Observable<QusnInfoModule[]>
{
  return this.http.get<QusnInfoModule[]>(this.url + "/"+"ShowUQst");
}

DeleteSubject(id: number): Observable<boolean>{
  return this.http.delete<boolean>(this.url + '/' + 'DeleteSubject' + '/' + id);
}

UpdateSubject(SubjectId:number,subinfo:AddSubModule):Observable<boolean>{
  return this.http.put<boolean>(this.url+'/UpdateSubject/'+SubjectId,subinfo,this.httpOptions);
}

SearchStudent(stud:SelectStudentModule) : Observable<SelectStudentModule[]>
{
  return this.http.post<SelectStudentModule[]>(this.url+'/SelectStudent',stud,this.httpOptions);
}

allCountries(): Observable<any>{
  return this.http.get(this.url1);
}



}

