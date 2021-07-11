import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCandidateDetailsPageRoutingModule } from './edit-candidate-details-routing.module';

import { EditCandidateDetailsPage } from './edit-candidate-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCandidateDetailsPageRoutingModule
  ],
  declarations: [EditCandidateDetailsPage]
})
export class EditCandidateDetailsPageModule {}
