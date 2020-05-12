import { Component, OnInit } from '@angular/core';
import { Produtc } from '../product-model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product:Produtc


  products: Produtc[]
  displayedColumns= ['id','name','price','action']

  constructor(private productService: ProductService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.productService.read().subscribe(products => {
          this.products= products
          console.log(products)

      const id =this.route.snapshot.paramMap.get('id')
      this.productService.readById(id).subscribe(products =>{
          this.product = products

      })
      })
    }
    delete():void{
      this.productService.delete(this.product).subscribe(()=>
      this.productService.showMessage('Produto deletado com sucesso')
      )
    }
}


