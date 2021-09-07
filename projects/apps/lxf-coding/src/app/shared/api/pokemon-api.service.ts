import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pokemon } from '../interfaces/Pokemon';
import { PokemonMock } from '../mocks/PokemonMock';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  urlPokemon = '';
  pokemonList: Pokemon[] = PokemonMock;

  constructor(
    private http: HttpClient,
  ) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return of(this.pokemonList);
    // return this.http.get<Pokemon[]>(this.urlPokemon);
  }
}
