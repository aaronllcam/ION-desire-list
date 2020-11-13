import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesireService } from './../../services/desire.service';
import { List } from './../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finishedPage: boolean = true;
  lists:List[];

  constructor(public desireService: DesireService,
              private router:Router) { 

    this.lists = desireService.getLists();
    
  }

  ngOnInit() {}

  
  navigateToList(list:List){

    if(this.finishedPage){
      this.router.navigate([`/tabs/tab2/add-list/${list.id}`]);

    }else{
      this.router.navigate([`/tabs/tab1/add-list/${list.id}`]);
      
    }
    // console.log(list);
  }

  removeList(list:List){
    console.log("Hola");
    this.desireService.removeList(list);
  }
  
}