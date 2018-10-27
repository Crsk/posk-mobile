import { TestBed } from '@angular/core/testing';

import { SectorMesaService } from './sector-mesa.service';

describe('SectorMesaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectorMesaService = TestBed.get(SectorMesaService);
    expect(service).toBeTruthy();
  });
});
