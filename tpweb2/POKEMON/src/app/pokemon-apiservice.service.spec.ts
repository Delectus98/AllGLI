import { TestBed } from '@angular/core/testing';

import { PokemonAPIServiceService } from './pokemon-apiservice.service';

describe('PokemonAPIServiceService', () => {
  let service: PokemonAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
