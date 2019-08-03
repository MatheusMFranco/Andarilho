import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listen-now' },
  {
    path: 'listen-now',
    loadChildren: './modules/listen-now/listen-now.module#ListenNowModule'
  },
  {
    path: 'library',
    loadChildren: './modules/library/library.module#LibraryModule'
  },
  {
    path: 'browse',
    loadChildren: './modules/browse/browse.module#BrowseModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
