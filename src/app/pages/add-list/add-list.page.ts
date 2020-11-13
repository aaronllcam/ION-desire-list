import { Component, OnInit } from '@angular/core';
import { DesireService } from './../../services/desire.service';
import { ActivatedRoute } from '@angular/router';
import { List } from './../../models/list.model';
import { ListItem } from './../../models/list-item.model';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  listId;
  list:List;
  inputItem:string = '';


  constructor(  private desireService:DesireService,
                private route:ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      this.listId = params['listId'];
      this.list = desireService.getListById(this.listId);
      // console.log("constructor add-list: ", this.list);
    })

  }

  ngOnInit() {
  }

  addItem(){
    if(this.inputItem.length === 0){
      return;
    }

    const newItem = new ListItem(this.inputItem);
    this.list.items.push(newItem);

    this.inputItem = '';
    this.desireService.saveStorage();
  }

  changeCheck(item:ListItem){

    const pendingItems:number = this.list.items.filter( item => !item.complete).length;
    if(pendingItems === 0){
      this.list.finishedAt = new Date();
      this.list.finished = true;
    }else{
      this.list.finishedAt = null;
      this.list.finished = false;

    }
    this.desireService.saveStorage();
  }

  removeItem(idx:number){
    this.list.items.splice(idx, 1);
    this.desireService.saveStorage();
  }

}
