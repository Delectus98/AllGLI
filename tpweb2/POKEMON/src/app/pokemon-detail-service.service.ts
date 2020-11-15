import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailServiceService {
  value: Subject<string>;
  constructor() {
    this.value = new Subject<string>();
  }

  getObservable(): Subject<string> {
    return this.value;
  }

  setValue(value: string): void{
    this.value.next(value);
  }

}
