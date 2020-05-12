import { Component, OnInit } from '@angular/core';
import { Produtc } from '../product-model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Produtc
  constructor(private productService: ProductService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(products =>{
        this.product = products

    })
  }

  delete():void{
    this.productService.delete(this.product).subscribe(()=>
    this.productService.showMessage('Produto deletado com sucesso')
   
    )
    this.router.navigate(['/products'])
  }
  cancel():void{
    this.router.navigate(['/products'])
    this.productService.showMessage('Operação cancelada')
}
}
