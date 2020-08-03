import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHabitComponent } from './new-habit/new-habit.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { MyListsComponent } from './my-lists/my-lists.component';

const routes: Routes = [
  {path:'habit-list', component: HabitListComponent },
  {path:'my-lists', component:MyListsComponent},
  {path: 'new-habit', component: NewHabitComponent},
  {path: '', component:MainScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
