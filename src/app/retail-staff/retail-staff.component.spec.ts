import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailStaffComponent } from './retail-staff.component';

describe('RetailStaffComponent', () => {
  let component: RetailStaffComponent;
  let fixture: ComponentFixture<RetailStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
