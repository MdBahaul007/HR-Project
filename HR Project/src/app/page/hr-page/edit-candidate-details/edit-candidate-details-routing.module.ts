import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCandidateDetailsPage } from './edit-candidate-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditCandidateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCandidateDetailsPageRoutingModule {}
