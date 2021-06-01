import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback.component';


@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule
  ]
})
export class FeedbackModule { }
