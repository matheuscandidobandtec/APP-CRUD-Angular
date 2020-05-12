import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Produtc } from './product-model';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,private http : HttpClient
  ) { }

  showMessage(msg: string,isError:boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }


  //metodo para add na api
  create(product: Produtc): Observable<Produtc>{
    return this.http.post<Produtc>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
      console.log(e)
      this.showMessage('Ocorreu um erro !',true)
      return EMPTY
  }
  //Metodo para ler os dados da API
  read() : Observable<Produtc[]>{
    return this.http.get<Produtc[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  //metodo para modificar por d
  readById(id:string):Observable<Produtc>{
    const url = `${this.baseUrl}/${id}` 
    return this.http.get<Produtc>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  //Metodo para atualizar no backend
  update(product: Produtc):Observable<Produtc>{
    const url = `${this.baseUrl}/${product.id}` 
     return this.http.put<Produtc>(url,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }  
  delete (product: Produtc):Observable<Produtc>{
    const url = `${this.baseUrl}/${product.id}`
      return this.http.delete<Produtc>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }
}
