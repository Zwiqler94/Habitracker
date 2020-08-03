import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  toggleDrawer(){
    this.drawer.toggleDrawer();
  }

  ngOnInit(): void {
  }

}
