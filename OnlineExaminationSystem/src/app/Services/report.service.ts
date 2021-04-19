import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http'  
import { Observable } from 'rxjs'; 
import {MyreportModule} from '../Modules/myreport/myreport.module';
import {MylevelModule} from '../Modules/mylevel/mylevel.module';
import {AllevelModule} from '../Modules/allevel/allevel.module';
import {AllreportModule} from '../Modules/allreport/allreport.module';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  url:string='http://localhost:62603/api/StudentAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

MyReport(sid:number):Observable<MyreportModule[]>
{
  return this.http.get<MyreportModule[]>(this.url+'/'+'MyReport'+'/'+ sid);
}

MyLevel(sid:number):Observable<MylevelModule[]>
{
  return this.http.get<MylevelModule[]>(this.url+'/'+'Mylevel'+'/'+ sid);
}

AllReport():Observable<AllreportModule[]>
{
  return this.http.get<AllreportModule[]>(this.url+'/'+'AllReport');
}

Allevel():Observable<AllevelModule[]>
{
  return this.http.get<AllevelModule[]>(this.url+'/'+'Allevel');
}

}
