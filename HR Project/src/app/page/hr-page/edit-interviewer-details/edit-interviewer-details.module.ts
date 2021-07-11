import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInterviewerDetailsPageRoutingModule } from './edit-interviewer-details-routing.module';

import { EditInterviewerDetailsPage } from './edit-interviewer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInterviewerDetailsPageRoutingModule
  ],
  declarations: [EditInterviewerDetailsPage]
})
export class EditInterviewerDetailsPageModule {}
