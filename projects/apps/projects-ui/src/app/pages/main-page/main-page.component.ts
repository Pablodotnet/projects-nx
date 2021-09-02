import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiService } from '../../shared/api/pokemon-api.service';
import { Pokemon } from '../../shared/interfaces/Pokemon';

@Component({
  selector: 'projects-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]> | undefined;
  inputModel = '';

  constructor(
    private pokemonApi: PokemonApiService,
  ) { }

  ngOnInit(): void {
    this.setAllPokemon();
  }

  setAllPokemon() {
    this.pokemonList$ = this.pokemonApi.getAllPokemon();
  }

  handleInputChange($event: string) {
    this.inputModel = $event;
  }

}
