import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

amigos = [
  {
    nome: "Guilherme",
    idade: "23",
    level: "5"
  },
  {
    nome: "Jeferson",
    idade: "22",
    level: "5"
  },
  {
    nome: "Leandro",
    idade: "24",
    level: "5"
  },
  {
    nome: "Paola",
    idade: "23",
    level: "4"
  },
  {
    nome: "Brenda",
    idade: "23",
    level: "4"
  },
  {
    nome: "Beatriz",
    idade: "29",
    level: "5"
  }
    
]

  constructor(private actionSheetController : ActionSheetController) { }


  ngOnInit() {
  }
    async deleteAmigoAction(nome:string){
      let buttons = [
        { text: "Deletar", role: "destructive",
        handler: () =>{
          this.deleteAmigo(nome);
    }},
    {text: "Editar"},
    {text: "Cancelar", role: "cancel"}
    ];

      const actionSheet=await this.actionSheetController.create({
        header:"Ações",
        buttons: buttons
      });
      await actionSheet.present();
    }
    deleteAmigo (nome:string){
      this.amigos.forEach((item,index)=>{
        if(item.nome===nome) this.amigos.splice(index,1);
      })
    }
  }

