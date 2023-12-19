import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  isExpanded = false;
  public dados: any;

  constructor(private dadosService: DataService) {}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  obterDados() {
    this.dadosService.obterDados().subscribe(
      (response: any) => {
        this.dados = response;
        console.log(this.dados);
      },
      (error) => {
        console.log('Erro ao obter dados:', error);
      }
    );
  }

  ngOnInit() {
    this.obterDados();
  }
}
