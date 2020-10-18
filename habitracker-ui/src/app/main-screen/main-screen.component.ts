import { Component, OnInit } from '@angular/core';
import { SidenavService } from '@src/app/services/sidenav.service';

@Component({
  selector: 'app-main-screen',
  styleUrls: ['./main-screen.component.scss'],
  templateUrl: './main-screen.component.html',
})
export class MainScreenComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  public ngOnInit(): void {
  }

}
