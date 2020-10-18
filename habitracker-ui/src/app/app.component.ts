import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from '@src/app/services/sidenav.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit {
  public title = 'habitracker';

  @ViewChild('drawer') public drawer: MatDrawer;
  constructor(private drawerService: SidenavService) {
  }
  public ngAfterViewInit(): void {
    this.drawerService.setDrawer(this.drawer);

  }
}
