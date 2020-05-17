import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  buttons =[
    {text: "Não aceito", role: "destructive"},
    {text: "Cancelar", role: "cancel"},
    {text: "Aceito"}
  ]

  constructor(public actionShettController: ActionSheetController) { }

  ngOnInit() {
  }
  async ativarAction(){
    const ActionSheet = await this.actionShettController.create({
      header: "Ações",
      buttons: this.buttons
    });
    await ActionSheet.present();
  }

}
