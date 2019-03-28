import { TestBed } from '@angular/core/testing';

import { RetailCustomerService } from './retail-customer.service';

describe('RetailCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailCustomerService = TestBed.get(RetailCustomerService);
    expect(service).toBeTruthy();
  });
});
