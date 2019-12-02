import { TestBed } from '@angular/core/testing';

import { HomePreCadastroGuardsService } from './home-pre-cadastro-guards.service';

describe('HomePreCadastroGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePreCadastroGuardsService = TestBed.get(HomePreCadastroGuardsService);
    expect(service).toBeTruthy();
  });
});
