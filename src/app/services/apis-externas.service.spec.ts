import { TestBed } from '@angular/core/testing';

import { ApisExternasService } from './apis-externas.service';

describe('ApisExternasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApisExternasService = TestBed.get(ApisExternasService);
    expect(service).toBeTruthy();
  });
});
