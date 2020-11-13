import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DesireService {

  lists:List[] = [];

  constructor() { 

    const listShopping = new List("Lista de la compra");
    const listFrameworks = new List("Aprender Frameworks");

    this.lists.push(listShopping, listFrameworks);
  }

  getLists():List[]{
    return this.lists;
  }
}
