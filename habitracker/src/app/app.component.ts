import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'habitracker';
  
  @ViewChild('drawer') public drawer: MatDrawer;
  constructor(private drawerService: SidenavService) {
  }
  ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);

  }
}
