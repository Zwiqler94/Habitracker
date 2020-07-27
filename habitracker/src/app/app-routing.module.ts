import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHabitComponent } from './new-habit/new-habit.component';

const routes: Routes = [{path: 'new-habit', component: NewHabitComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
