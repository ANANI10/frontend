import { TestBed } from '@angular/core/testing';

import { VentesService } from './ventes.service';

describe('VentesService', () => {
  let service: VentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
