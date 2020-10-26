import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private drawer: MatDrawer;

  public setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public openDrawer(): void {
    this.drawer.open();
  }

  public closeDrawer(): void {
    this.drawer.close();
  }

  public toggleDrawer(): void {
    this.drawer.toggle();
   }

  constructor() { }
}
