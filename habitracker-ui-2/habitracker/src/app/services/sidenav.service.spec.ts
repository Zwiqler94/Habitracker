import { TestBed } from '@angular/core/testing';
import { SidenavService } from 'src/app/services/sidenav.service';


describe('SidenavService', () => {
  let service: SidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
