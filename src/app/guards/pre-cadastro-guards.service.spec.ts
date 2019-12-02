import { TestBed } from '@angular/core/testing';

import { PreCadastroGuardsService } from './pre-cadastro-guards.service';

describe('PreCadastroGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreCadastroGuardsService = TestBed.get(PreCadastroGuardsService);
    expect(service).toBeTruthy();
  });
});
