import { TestBed } from '@angular/core/testing';

import { CambioPaginaService } from './cambio-pagina.service';

describe('CambioPaginaService', () => {
  let service: CambioPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
