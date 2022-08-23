import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastAnimationPageRoutingModule } from './last-animation-routing.module';

import { LastAnimationPage } from './last-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastAnimationPageRoutingModule
  ],
  declarations: [LastAnimationPage]
})
export class LastAnimationPageModule {}
