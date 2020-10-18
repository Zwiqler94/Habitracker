import { Component, OnInit } from '@angular/core';
import { SidenavService } from '@src/app/services/sidenav.service';

@Component({
  selector: 'app-habit-list',
  styleUrls: ['./habit-list.component.scss'],
  templateUrl: './habit-list.component.html',
})
export class HabitListComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  public ngOnInit(): void {
  }

}
