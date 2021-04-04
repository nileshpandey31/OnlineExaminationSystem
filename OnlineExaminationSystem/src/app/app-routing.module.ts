import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import {LoginComponent} from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ReportCardComponent } from './Components/report-card/report-card.component';
import { ExamPageComponent } from './Components/exam-page/exam-page.component';
import { SearchStudentsComponent } from './Components/search-students/search-students.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';
import { AddQuestionsComponent } from './Components/add-questions/add-questions.component';
import { RemoveQuestionsComponent } from './Components/remove-questions/remove-questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Register', component: RegisterPageComponent  },
  { path: 'Login', component: LoginComponent  },
  { path: 'PassReset', component: ResetPasswordComponent },
  { path: 'ReportCard', component: ReportCardComponent },
  { path: 'Exam', component: ExamPageComponent },
  { path: 'Search', component: SearchStudentsComponent },
  { path: 'AdminHome', component: AdminProfileComponent },
  { path: 'AddQues', component: AddQuestionsComponent },
  { path: 'RemoveQues', component: RemoveQuestionsComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
