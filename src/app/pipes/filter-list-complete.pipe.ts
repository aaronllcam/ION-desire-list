import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model'

@Pipe({
  name: 'filterListComplete'
})
export class FilterListCompletePipe implements PipeTransform {

  transform(lists: List[], complete:boolean = true): List[] {
    
    return lists.filter( list =>  list.finished === complete );
  
  }


}
