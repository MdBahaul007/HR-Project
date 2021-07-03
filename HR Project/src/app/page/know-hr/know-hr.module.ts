import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowHrPageRoutingModule } from './know-hr-routing.module';

import { KnowHrPage } from './know-hr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowHrPageRoutingModule
  ],
  declarations: [KnowHrPage]
})
export class KnowHrPageModule {}
