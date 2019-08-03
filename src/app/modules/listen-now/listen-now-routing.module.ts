import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListenNowComponent } from './listen-now.component';


const routes: Routes = [
  {
    path: '',
    component: ListenNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListenNowRoutingModule { }
