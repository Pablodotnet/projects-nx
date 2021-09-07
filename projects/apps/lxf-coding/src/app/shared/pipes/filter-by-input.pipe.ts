import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';

@Pipe({
  name: 'filterByInput'
})
export class FilterByInputPipe implements PipeTransform {

  transform(listToFilter: Pokemon[], inputString: string): Pokemon[] {
    return listToFilter.filter(({ content }) => content.includes(inputString));
  }

}
