import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IListOverview } from '@src/app/models/IListOverview';
import { ListService } from '@src/app/services/list.service';
import { SidenavService } from '@src/app/services/sidenav.service';

@Component({
  selector: 'app-my-lists',
  styleUrls: ['./my-lists.component.scss'],
  templateUrl: './my-lists.component.html',
})
export class MyListsComponent implements OnInit {

  constructor(private drawer: SidenavService, private lists: ListService,
              private ChangeDetectorRefs: ChangeDetectorRef) {
    this.setupLists();
  }

  private listData: IListOverview[] = [];
  private myLists: any[];

  public displayedColumns: string[] = ['listName', 'listPercentageComplete'];

  public unformattedList;

  public dataSource: IListOverview[];

  public userName = 'Jacob';

  public setupLists(): void {
    this.lists.getLists()
      .subscribe((data: any) => {
        this.myLists = data.lists;
        for (let i = 0; i < this.myLists.length; i++) {
          this.listData.push({ listName: this.myLists[i].name, listPercentageComplete: this.myLists[i].percentCompleted });
        }
        this.dataSource = this.listData;
      });
  }

  public goToList(row): void {
    console.log(row);

  }

  public toggleDrawer(): void {
    this.drawer.toggleDrawer();
  }

  public ngOnInit(): void {
    this.setupLists();
  }

}
