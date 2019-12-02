import { TestBed } from '@angular/core/testing';

import { PacienteGuardsService } from './paciente-guards.service';

describe('PacienteGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteGuardsService = TestBed.get(PacienteGuardsService);
    expect(service).toBeTruthy();
  });
});
