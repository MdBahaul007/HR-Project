import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowHrPage } from './know-hr.page';

const routes: Routes = [
  {
    path: '',
    component: KnowHrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowHrPageRoutingModule {}
