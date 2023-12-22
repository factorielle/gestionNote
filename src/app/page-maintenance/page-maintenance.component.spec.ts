import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaintenanceComponent } from './page-maintenance.component';

describe('PageMaintenanceComponent', () => {
  let component: PageMaintenanceComponent;
  let fixture: ComponentFixture<PageMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMaintenanceComponent]
    });
    fixture = TestBed.createComponent(PageMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
