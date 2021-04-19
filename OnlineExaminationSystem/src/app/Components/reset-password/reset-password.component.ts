import { Component, OnInit } from '@angular/core';

import { FormsModule, NgForm, FormGroup, Validators } from '@angular/forms'
import { StudentInfoModule } from 'src/app/Modules/student-info/student-info.module';
import { StudentInfoService } from 'src/app/Services/student-info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  model: any = [];
  buttondiv:boolean=true;
  AboutUs:boolean=false;
  svc: StudentInfoService;
  stud1 = new StudentInfoModule;
  email: string;
  password: string;
  flag: boolean = false;

  constructor(svc: StudentInfoService,private router:Router) { this.svc = svc; }

  ngOnInit(): void {
  }

  EmailVerify: boolean = true;
  Acknowledgement: boolean = false;
  ResetPwd: boolean = false;

  emailChk(EmailVerify: NgForm): void {
    console.log(EmailVerify.value);
    this.stud1.Email = EmailVerify.value.Email;

    this.svc.ChkEmail(this.stud1.Email).subscribe((data: string) => {
      console.log(data + " Check email");
      if (data == "success") {
        alert('Email is present in system');
        this.flag = true;
        this.svc.VerifyLinkEmail(this.stud1).subscribe((data: string) => {
          if (data == "success") {
            alert('Verification link is sent');
            this.EmailVerify = false;
            this.Acknowledgement = true;
            this.ResetPwd = true;
          }
          else {
            alert('Sending link failed!!');
          }
        });
      }
      else {
        alert('Email ID not found!!');
      }
    });
  }


  ResetPassword(PassReset: NgForm): void {
    this.stud1.OTP = PassReset.value.otp;
    this.stud1.Password = PassReset.value.pass;
    if(this.stud1.Password!=PassReset.value.pass2)
      alert("Password not matching");
    else
    {
      this.svc.SetNewPassword(this.stud1).subscribe((data:boolean)=>{
        if (data == true) {
          alert('Password is Updated');
        }
        else {
          alert('Enter correct OTP. Password Updation failed!!');
        }

      });
    }
  }

}
