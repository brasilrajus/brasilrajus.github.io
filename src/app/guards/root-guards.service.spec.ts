import { TestBed } from '@angular/core/testing';

import { RootGuardsService } from './root-guards.service';

describe('RootGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootGuardsService = TestBed.get(RootGuardsService);
    expect(service).toBeTruthy();
  });
});
