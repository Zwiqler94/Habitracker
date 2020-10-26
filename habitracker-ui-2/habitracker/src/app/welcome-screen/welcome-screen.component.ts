import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private drawer: SidenavService) { }

  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  ngOnInit(): void {
  }

}
