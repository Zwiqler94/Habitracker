import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { HabitListComponent } from '@src/app/habit-list/habit-list.component';
import { MainScreenComponent } from '@src/app/main-screen/main-screen.component';
import { MyListsComponent } from '@src/app/my-lists/my-lists.component';

export const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'habit-list', component: HabitListComponent },
  { path: 'my-lists', component: MyListsComponent },
  { path: 'auto-generated',component: AutoGeneratedComponent},
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
