import { Component, OnInit, ViewChild } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { QusnInfoService } from 'src/app/Services/qusn-info.service';
import {QusnInfoModule} from 'src/app/Modules/qusn-info/qusn-info.module';
import {AddSubModule} from 'src/app/Modules/add-sub/add-sub.module';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  @ViewChild('fileInput') fileInput;  
  message: string; 
  model: any = [];

 
  addsub:boolean=false;
  fileupload:boolean=false;
  slist:AddSubModule[];
  ts: AddSubModule =
  {
    SubjectId: 1,
    Subject: 'string',
    TotalMark: 'string',
    PassingMark: 'string',
    ExamDuration: 'string',
    TStatus: 'string',

  };
  Qinfo=new QusnInfoModule();


  constructor(private http: HttpClient, private service: QusnInfoService) { }

  ngOnInit(): void {
    this.service.ShowSubject().subscribe((data:AddSubModule[])=>
    {
  
      this.slist=data;
    });
  }

  uploadFile(fileform:NgForm):void {  
    console.log(fileform.value);
    this.Qinfo.SubjectId=fileform.value.subject;
    let formData = new FormData();  
    formData.append('upload', this.fileInput.nativeElement.files[0])  

    this.service.AddSubId(this.Qinfo.SubjectId).subscribe(data =>
      {
        if(data)
        {
          this.service.UploadExcel(formData,this.Qinfo.SubjectId).subscribe(result => {  
            this.message = result.toString();  
            console.log(this.Qinfo.SubjectId);
      
          });  
        }
        else{
          alert("file upload failed" + data)
        }
      }

    );
   
  
    
    
   
    
  
  }  

  // function for adding subject
  AddSub(Add: NgForm): void
  {
    console.log('Inside add ques');
    console.log(Add.value);

    this.ts.Subject=Add.value.sname;
    this.ts.TotalMark=Add.value.tmks;
    this.ts.PassingMark=Add.value.pmks;
    this.ts.ExamDuration=Add.value.dur;
    this.ts.TStatus=Add.value.tstatus;
    this.service.TestSubject(this.ts).subscribe((data:boolean)=>{alert(data);
      if(data==true)
      {
        alert('new subject added');
        location.reload();

      }
    });


  }

 

}
