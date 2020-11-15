import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonDetailServiceResource} from '../pokemon';
import {PokemonAPIServiceService} from '../pokemon-apiservice.service';
import {PokemonDetailServiceService} from '../pokemon-detail-service.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  providers: [PokemonAPIServiceService]
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokId: string;
  searchPokName = '';
  pokemonDetail: PokemonDetailServiceResource;

  constructor(private pkApi: PokemonAPIServiceService, private pkDetailService: PokemonDetailServiceService) {
    this.pokemons.push(new Pokemon('25', 'Pikachu'));
    this.pokemons.push(new Pokemon('172', 'Pichu'));
    this.pokemons.push(new Pokemon('26', 'Raichu'));
  }

  ngOnInit(): void {
    this.pkApi.getPokemons().subscribe((d) =>
      {
        d.results.forEach((e, index) => this.pokemons.push(new Pokemon('' + index, e.name)));
      });
    this.pkDetailService.getObservable().subscribe((d) => {
      console.log('ListPokemonComponent:' + d);
    });
  }

  go(): void {
    if (this.selectedPokId !== '' && typeof(this.selectedPokId) !== 'undefined') {
      console.log(this.selectedPokId);
      this.pkApi.getPokemonInfo(this.selectedPokId).subscribe((d) => {
        console.log(d.id + ', masse:' + d.weight);
        this.pokemonDetail = d;
        this.pkDetailService.setValue('changed by GO');
      });
    }
  }
}
