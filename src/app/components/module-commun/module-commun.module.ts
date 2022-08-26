import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AnimateCardComponent } from '../animate-card/animate-card.component';



@NgModule({
  declarations: [AnimateCardComponent],
  imports: [
    CommonModule
  ],
  exports : [AnimateCardComponent]
})
export class ModuleCommunModule { }
