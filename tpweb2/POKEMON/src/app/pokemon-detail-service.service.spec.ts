import { TestBed } from '@angular/core/testing';

import { PokemonDetailServiceService } from './pokemon-detail-service.service';

describe('PokemonDetailServiceService', () => {
  let service: PokemonDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
