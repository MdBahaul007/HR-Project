import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInterviewerPageRoutingModule } from './add-interviewer-routing.module';

import { AddInterviewerPage } from './add-interviewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInterviewerPageRoutingModule
  ],
  declarations: [AddInterviewerPage]
})
export class AddInterviewerPageModule {}
