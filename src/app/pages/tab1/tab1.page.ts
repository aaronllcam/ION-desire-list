import { Component } from '@angular/core';
import { DesireService } from './../../services/desire.service';
import { List } from './../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lists:List[];
  constructor(public desireService: DesireService,
              private router:Router) {
    this.lists = desireService.getLists();
  }

  addList(){
    this.router.navigateByUrl('/tabs/tab1/add-list');
  }

}
