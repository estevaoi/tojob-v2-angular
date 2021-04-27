import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-painel',
  templateUrl: './meu-painel.component.html',
  styleUrls: ['./meu-painel.component.css']
})
export class MeuPainelComponent implements OnInit {

  nome: string = 'Estêvão';

  constructor() { }

  ngOnInit(): void {
  }

}
