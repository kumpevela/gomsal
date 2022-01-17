import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoreographiesContentComponent } from './components/choreographies-content/choreographies-content.component';

const routes: Routes = [
  {
    path: '', component: ChoreographiesContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoreographiesRoutingModule { }
