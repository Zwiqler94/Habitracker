import { Component, OnInit } from '@angular/core';
import { SidenavService } from '@src/app/services/sidenav.service';

export interface IList {
  listName: string;
  listPercentageComplete: string;
}

const listData: IList[] = [
  { listName: 'Health', listPercentageComplete: '54%' },
  { listName: 'Hobbies', listPercentageComplete: '26%' },
  { listName: 'Chores', listPercentageComplete: '95%' },
];

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {

  public displayedColumns: string[] = ['listName', 'listPercentageComplete'];

  public dataSource = listData;

  constructor(private drawer: SidenavService) { }

  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  public ngOnInit(): void {
  }

}
