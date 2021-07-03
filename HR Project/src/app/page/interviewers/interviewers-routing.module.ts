import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewersPage } from './interviewers.page';

const routes: Routes = [
  {
    path: '',
    component: InterviewersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewersPageRoutingModule {}
