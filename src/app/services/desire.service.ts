import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DesireService {

  lists:List[] = [];

  constructor() { 

    this.loadStorage();
  }

  getLists():List[]{
    return this.lists;
  }

  newList(title:string):number{

    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;

  }

  getListById(id: string | number):List{

    id = Number(id);

    return this.lists.find( listData => listData.id === id );

  }

  saveStorage(){
    //Almacenar en el local storage del navegador
    localStorage.setItem('data', JSON.stringify(this.lists) );
  }

  loadStorage(){

    if(localStorage.getItem('data')) this.lists = JSON.parse(localStorage.getItem('data'));
    else this.lists = [];
  }

  removeList(list:List){
    this.lists = this.lists.filter( listData => listData.id !== list.id);
    this.saveStorage();
  }
}
