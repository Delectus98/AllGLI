import {Component, Inject, Input, OnInit} from '@angular/core';
import {PokemonDetailServiceResource} from '../pokemon';
import {PokemonDetailServiceService} from '../pokemon-detail-service.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('detail')
  detail: PokemonDetailServiceResource;
  constructor(private pkDetailService: PokemonDetailServiceService) { }

  ngOnInit(): void {
    this.pkDetailService.getObservable().subscribe((d) => {
      console.log('PokemonDetailComponent:' + d);
    });
  }

}
