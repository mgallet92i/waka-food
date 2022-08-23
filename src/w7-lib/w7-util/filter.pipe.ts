import { Pipe, PipeTransform } from '@angular/core';
import { W7Filter } from './filter';

@Pipe({
  name: 'filter'
})
export class W7FilterPipe implements PipeTransform {

  // TODO: multi filter
  transform(items: any[],
            filter: W7Filter,
            exactMatch: boolean = true): any[] {
    if (items === undefined) {
      return [];
    }
    if (filter?.searchText === undefined) {
      return items;
    }
    filter.searchText = filter.searchText.toLowerCase();
    return items.filter((item: any) => {
      if (item !== undefined && item[filter.fieldName] !== undefined) {
        if (exactMatch) {
          return item[filter.fieldName].toLowerCase() === filter.searchText;
        }
        return item[filter.fieldName].toLowerCase().includes(filter.searchText);
      }
      return false;
    });
  }
}
