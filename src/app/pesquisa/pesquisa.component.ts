import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  valores = [];

  onKey(event: any) { // evento acontece quando uma tecla é pressionada
    for(let a of this.disco.artistas){//verifica se a substring está no nome/título e se já existe na lista valores
      if(a.nome.toLowerCase().includes((<HTMLInputElement>event.target).value.toLocaleLowerCase()) &&
      !this.valores.includes(a)){
        this.valores.push(a);
      }
    }
    for(let m of this.disco.musicas){
      if(m.titulo.toLowerCase().includes((<HTMLInputElement>event.target).value.toLowerCase())&&
      !this.valores.includes(m)){
        this.valores.push(m);
      }
    }
    for(let g of this.disco.generos){
      if(g.nome.toLowerCase().includes((<HTMLInputElement>event.target).value.toLowerCase())&&
      !this.valores.includes(g)){
        this.valores.push(g);
      }
    }
  }

  constructor(private disco: DiscoService) { }

  ngOnInit() {
  }

}
