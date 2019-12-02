import { TestBed } from '@angular/core/testing';

import { AdministradorGuardsService } from './administrador-guards.service';

describe('AdministradorGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministradorGuardsService = TestBed.get(AdministradorGuardsService);
    expect(service).toBeTruthy();
  });
});
