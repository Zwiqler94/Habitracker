import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.scss']
})
export class NewHabitComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  toggleDrawer(){
    this.drawer.toggleDrawer();
  }

  ngOnInit(): void {
  }

}
