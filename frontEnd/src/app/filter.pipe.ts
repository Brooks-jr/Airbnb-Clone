import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from "./listing";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Listing>, searchStr: string): Array<Listing> {
    return value.filter(listing => {
      return listing.title.toLowerCase().includes(searchStr.toLowerCase()) || listing.description.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}
