import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from 'src/app/welcome-screen/welcome-screen.component';
import { ListViewComponent } from 'src/app/Lists/list-view/list-view.component';
import { HabitViewComponent } from 'src/app/Habits/habit-view/habit-view.component';
import { UsersListsViewComponent } from 'src/app/User/users-lists-view/users-lists-view.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'users-lists-view', component: UsersListsViewComponent },
  { path: 'list-view', component: ListViewComponent },
  { path: 'habit-view', component: HabitViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
