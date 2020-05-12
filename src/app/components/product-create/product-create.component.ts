import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router'
import { Produtc } from '../product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Produtc = {
    name: "",
    price: null
  }

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  craeteProduct(): void{

    this.productService.create(this.product).subscribe(()=>
    {
    this.productService.showMessage('Operação realizada com sucesso !')
    this.router.navigate(['/products'])
    }
  )
}
  cancel():void{
    this.router.navigate(['/products'])
  }

}
