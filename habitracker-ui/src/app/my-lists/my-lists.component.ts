import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IListOverview } from '@src/app/models/IListOverview';
import { ListService } from '@src/app/services/list.service';
import { SidenavService } from '@src/app/services/sidenav.service';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent implements OnInit {



  private listData: IListOverview[] = [];
  private myLists: any[];

  public displayedColumns: string[] = ['listName', 'listPercentageComplete'];

  public unformattedList;

  constructor(private drawer: SidenavService, private lists: ListService,
    private ChangeDetectorRefs: ChangeDetectorRef) {
    this.setupLists();
  }

  public dataSource: IListOverview[];

  public setupLists() {
    this.lists.getLists()
      .subscribe((data: any) => {
        this.myLists = data.lists;
        for (var i = 0; i < this.myLists.length; i++) {
          this.listData.push({ listName: this.myLists[i].name, listPercentageComplete: this.myLists[i].percentCompleted });
        }
        this.dataSource = this.listData;
      });
  }

  public goToList(row): void {
    console.log(row);

  }

  public userName = 'Jacob';


  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  public ngOnInit(): void {
    this.setupLists();
  }

}

