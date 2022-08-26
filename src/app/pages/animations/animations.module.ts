import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationsPageRoutingModule } from './animations-routing.module';

import { AnimationsPage } from './animations.page';
import { ModuleCommunModule } from 'src/app/components/module-commun/module-commun.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationsPageRoutingModule,
    ModuleCommunModule
  ],
  declarations: [AnimationsPage]
})
export class AnimationsPageModule {}
