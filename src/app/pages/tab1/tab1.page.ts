import { Component } from '@angular/core';
import { DesireService } from './../../services/desire.service';
import { List } from './../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lists:List[];

  constructor(public desireService: DesireService,
              private router:Router,
              private alertCtrl: AlertController) {

    this.lists = desireService.getLists();

  }

  async addList(){
    //this.router.navigateByUrl('/tabs/tab1/add-list');
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => console.log('cancelar')
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.title.trim() === "") return;
            
            
            const listId:number = this.desireService.newList(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add-list/${listId}`);
            
            
          }
        }
      ]
    });

    await alert.present();

  }

  

}
