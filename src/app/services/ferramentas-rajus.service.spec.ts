import { TestBed } from '@angular/core/testing';

import { FerramentasRajusService } from './ferramentas-rajus.service';

describe('FerramentasRajusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FerramentasRajusService = TestBed.get(FerramentasRajusService);
    expect(service).toBeTruthy();
  });
});
