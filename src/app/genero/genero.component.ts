import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  genero = null;

  constructor(private disco: DiscoService, private route: ActivatedRoute) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.genero = this.disco.encontrarGenero(parseInt(id));
    
  }

}
