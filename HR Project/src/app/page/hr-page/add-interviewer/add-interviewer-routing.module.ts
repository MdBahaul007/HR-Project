import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInterviewerPage } from './add-interviewer.page';

const routes: Routes = [
  {
    path: '',
    component: AddInterviewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInterviewerPageRoutingModule {}
