import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListsViewComponent } from './users-lists-view.component';

describe('UsersListsViewComponent', () => {
  let component: UsersListsViewComponent;
  let fixture: ComponentFixture<UsersListsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
