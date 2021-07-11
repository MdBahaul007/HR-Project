import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInterviewerDetailsPage } from './edit-interviewer-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditInterviewerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInterviewerDetailsPageRoutingModule {}
