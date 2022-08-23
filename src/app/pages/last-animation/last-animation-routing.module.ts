import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastAnimationPage } from './last-animation.page';

const routes: Routes = [
  {
    path: '',
    component: LastAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastAnimationPageRoutingModule {}
