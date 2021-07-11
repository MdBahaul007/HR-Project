import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrPagePage } from './hr-page.page';

const routes: Routes = [
  {
    path: '',
    component: HrPagePage
  },
  {
    path: 'add-candidate',
    loadChildren: () => import('./add-candidate/add-candidate.module').then( m => m.AddCandidatePageModule)
  },
  {
    path: 'add-interviewer',
    loadChildren: () => import('./add-interviewer/add-interviewer.module').then( m => m.AddInterviewerPageModule)
  },
  {
    path: 'edit-interviewer-details',
    loadChildren: () => import('./edit-interviewer-details/edit-interviewer-details.module').then( m => m.EditInterviewerDetailsPageModule)
  },
  {
    path: 'edit-candidate-details',
    loadChildren: () => import('./edit-candidate-details/edit-candidate-details.module').then( m => m.EditCandidateDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrPagePageRoutingModule {}
