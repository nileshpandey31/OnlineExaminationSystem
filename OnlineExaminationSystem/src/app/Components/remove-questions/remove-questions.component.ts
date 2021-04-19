import { Component, OnInit, QueryList } from '@angular/core';
import{NgForm,Form,FormGroup} from '@angular/forms';
import{QusnInfoModule} from 'src/app/Modules/qusn-info/qusn-info.module';
import{QusnInfoService} from 'src/app/Services/qusn-info.service';
@Component({
  selector: 'app-remove-questions',
  templateUrl: './remove-questions.component.html',
  styleUrls: ['./remove-questions.component.css']
})
export class RemoveQuestionsComponent implements OnInit {
  buttondiv:boolean=true;
  AboutUs:boolean=false;
  model:any=[];
  svc:QusnInfoService;
  qm=new QusnInfoModule;
  qlist:QusnInfoModule[];
  plist:QusnInfoModule[];
  constructor(svc:QusnInfoService) { this.svc=svc}

  ngOnInit(): void {
    this.qm.SubjectId;

    this.svc.ShowQst().subscribe((data:QusnInfoModule[])=>
    {

      this.qlist=data;


    });

    this.svc.ShowUQst().subscribe((data:QusnInfoModule[])=>
    {

      this.plist=data;
      console.log(this.plist)


    });


  }
  DeleteByName(Deleteform: NgForm):void
  {
    console.log(Deleteform.value);



    this.qm.SubjectId=Deleteform.value.fid;

    this.svc.DeleteQuestion(this.qm.SubjectId).subscribe((data:boolean)=>
    {
      if(data==true)
{

      alert( this.qm.SubjectId+"deleted successfully");
      location.reload();
}
      else
      {
      alert( this.qm.SubjectId+"invalid credential ");
      location.reload();location.reload();
      }

    });
  }

}
