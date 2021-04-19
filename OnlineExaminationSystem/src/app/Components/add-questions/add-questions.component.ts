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

  buttondiv:boolean=true;
  AboutUs:boolean=false;
  addsub:boolean=false;
  fileupload:boolean=false;
  viewsubj:boolean=false;
  tablevisible:boolean = true;
  updateformvisible:boolean = false;
  slist:AddSubModule[];
  update: any = [];
  subjinfo = new AddSubModule();
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

  //function for updating subject
  Update(subj,index){
    console.log(subj,index);
    this.tablevisible = false;
    this.updateformvisible = true;
    this.update.SubjectId = subj.SubjectId;
    this.update.sname = subj.Subject;
    this.update.tmks = subj.TotalMark;
    this.update.pmks = subj.PassingMark;
    this.update.dur = subj.ExamDuration;
    this.update.tstatus = subj.TStatus;
    console.log(this.update);
  }

  UpdateSubmit(UpdateForm: NgForm) : void {
    console.log(UpdateForm.value);
    this.tablevisible = true;
    this.updateformvisible = false;
    this.subjinfo.SubjectId = this.update.SubjectId;
    this.subjinfo.Subject = this.update.sname;
    this.subjinfo.TotalMark = this.update.tmks;
    this.subjinfo.PassingMark = this.update.pmks;
    this.subjinfo.ExamDuration = this.update.dur;
    this.subjinfo.TStatus = this.update.tstatus;
    this.service.UpdateSubject(this.update.SubjectId, this.subjinfo).subscribe((data: boolean) => {
      if (data == true) {
        alert('Update successful');
        location.reload();
      }
      else
        alert('Update successful');
    })
  };



}
