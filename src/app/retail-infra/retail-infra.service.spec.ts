import { TestBed } from '@angular/core/testing';

import { RetailInfraService } from './retail-infra.service';

describe('RetailInfraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailInfraService = TestBed.get(RetailInfraService);
    expect(service).toBeTruthy();
  });
});
