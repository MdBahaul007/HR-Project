import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HrPagePageRoutingModule } from './hr-page-routing.module';

import { HrPagePage } from './hr-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HrPagePageRoutingModule
  ],
  declarations: [HrPagePage]
})
export class HrPagePageModule {}
