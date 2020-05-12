import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  atributoLegal = "Qualquer"

  constructor(private router : Router,private headerService:HeaderService) { 
    headerService.headerData={
      title: 'Cadastro de produtos',
      icon:'storefront',
      routeUrl:''
    
  }
  }
  ngOnInit(): void {
  }
  navigateToProductCreate():void{
    this.router.navigate(['create'])  //metodo EventBinding para a navegação de outra tela
  }

}
