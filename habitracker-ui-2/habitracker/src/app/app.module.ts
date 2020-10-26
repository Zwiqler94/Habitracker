import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HabitCreateComponent } from './Habits/habit-create/habit-create.component';
import { HabitViewComponent } from './Habits/habit-view/habit-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCreateComponent } from './Lists/list-create/list-create.component';
import { ListViewComponent } from './Lists/list-view/list-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from 'src/app/services/sidenav.service';
import { UserSettingsComponent } from './User/user-settings/user-settings.component';
import { UsersListsViewComponent } from './User/users-lists-view/users-lists-view.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListsViewComponent,
    ListViewComponent,
    ListCreateComponent,
    HabitCreateComponent,
    HabitViewComponent,
    UserSettingsComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
