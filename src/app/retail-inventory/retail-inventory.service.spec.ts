import { TestBed } from '@angular/core/testing';

import { RetailInventoryService } from './retail-inventory.service';

describe('RetailInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailInventoryService = TestBed.get(RetailInventoryService);
    expect(service).toBeTruthy();
  });
});
