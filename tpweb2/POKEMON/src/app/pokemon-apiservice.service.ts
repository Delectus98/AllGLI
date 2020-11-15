import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPokemon, PokemonDetailServiceResource, PokemonServiceResource} from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIServiceService {

  constructor(public http: HttpClient) { }

  getPokemons(): Observable<PokemonServiceResource>{
    return this.http.get<PokemonServiceResource>(url);
  }

  getPokemonInfo(id: string): Observable<PokemonDetailServiceResource>{
    return this.http.get<PokemonDetailServiceResource>(url + id + '/');
  }
}
