import { TestBed } from '@angular/core/testing';

import { RetailStaffService } from './retail-staff.service';

describe('RetailStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailStaffService = TestBed.get(RetailStaffService);
    expect(service).toBeTruthy();
  });
});
