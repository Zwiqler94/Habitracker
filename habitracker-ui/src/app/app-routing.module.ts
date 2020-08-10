import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from '@src/app/habit-list/habit-list.component';
import { MainScreenComponent } from '@src/app/main-screen/main-screen.component';
import { MyListsComponent } from '@src/app/my-lists/my-lists.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'habit-list', component: HabitListComponent },
  {path: 'my-lists', component: MyListsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
