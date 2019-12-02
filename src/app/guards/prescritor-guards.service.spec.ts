import { TestBed } from '@angular/core/testing';

import { PrescritorGuardsService } from './prescritor-guards.service';

describe('PrescritorGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescritorGuardsService = TestBed.get(PrescritorGuardsService);
    expect(service).toBeTruthy();
  });
});
