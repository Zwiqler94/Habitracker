import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreateComponent } from './list-create.component';

describe('ListCreateComponent', () => {
  let component: ListCreateComponent;
  let fixture: ComponentFixture<ListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
