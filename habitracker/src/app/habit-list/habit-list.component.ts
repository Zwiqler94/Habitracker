import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  toggleDrawer(){
    this.drawer.toggleDrawer();
  }

  ngOnInit(): void {
  }

}
