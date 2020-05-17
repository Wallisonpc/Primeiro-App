import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

viagens =[
{
  Local: "Ilhas Maldivas",
  img: "https://assets-cdn.kangaroo.com.br/images/maldivas/viagem-ilhas-maldivas-vista-aerea-ilha-resort-bangalo.jpg",
  Descrição: "As Maldivas são uma porção de ilhas que se espalham por  90mil m² em meio ao azul do Oceano Índico. O mar de temperatura entre 24 ºC e 33 ºC, o clima dividido entre a estação seca e a chuvosa," 
  +" mar absolutamente azul,  areias brancas e ilhas com palmeiras e vegetação nativa, fazem este lugar parecer um verdadeiro paraíso. ",
  data: "15/04/2015"
},
{
  local: "Cinque Terre - Italia",
  img: "https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_2582.jpg",
  Descrição: "  O Cinque Terre é parte da costa na região de Ligúria, na Itália. Os terraços construídos sobre a paisagem acidentada são uma atração turística popular. ",
  data: "05/02/2019"
},
{
  local: "Machu Picchu",
  img: "https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_2586.jpg",
  Descrição: "Uma das sete maravilhas do mundo moderno, Machu Picchu, no Peru, é um deleite aos olhos dos 2500 turistas que passam pela cidade diariamente. O ápice do engenho arquitetônico e astronômico dos incas encanta por seus mistérios e beleza dessa cidade que ficou perdida por muitos séculos.",
  data: "20/12/2014"
},
{
  local: "Santorini, Grécia",
  img: "https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_2590.jpg",
  Descrição: "Santorini, a mais célebre das ilhas gregas impressiona pelo casamento perfeito entre natureza e arquitetura. As charmosas casinhas brancas de teto azul, construídas uma em cima das outras, as ruas estreitas que terminam em uma praia que mais parece esculpida à mão e o fabuloso mar Egeu criam um lugar que você certamente precisa conhecer, pelo menos uma vez na vida.",
  data: "08/11/2008"
}

]  

  constructor() { }

  ngOnInit() {
  }

}
