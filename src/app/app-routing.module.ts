import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component'
import {ProductCrudComponent} from './components/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path:"create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path:"products/delete/:id",
  component: ProductDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
