import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitViewComponent } from './habit-view.component';

describe('HabitViewComponent', () => {
  let component: HabitViewComponent;
  let fixture: ComponentFixture<HabitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
