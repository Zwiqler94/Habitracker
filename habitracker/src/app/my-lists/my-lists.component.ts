import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

export interface List {
  listName: string;
  listPercentageComplete: string;
}


const listData: List[] = [
  { listName: 'Health', listPercentageComplete: '54%' },
  { listName: 'Hobbies', listPercentageComplete: '26%' },
  { listName: 'Chores', listPercentageComplete: '95%' }
];




@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss']
})
export class MyListsComponent implements OnInit {

  displayedColumns: string[] = ['listName', 'listPercentageComplete'];
  
  dataSource = listData;

  constructor(private drawer: SidenavService) { }

  toggleDrawer() {
    this.drawer.toggleDrawer();
  }

  ngOnInit(): void {
  }

}
