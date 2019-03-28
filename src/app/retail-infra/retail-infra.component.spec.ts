import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailInfraComponent } from './retail-infra.component';

describe('RetailInfraComponent', () => {
  let component: RetailInfraComponent;
  let fixture: ComponentFixture<RetailInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
