import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailInventoryComponent } from './retail-inventory.component';

describe('RetailInventoryComponent', () => {
  let component: RetailInventoryComponent;
  let fixture: ComponentFixture<RetailInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
