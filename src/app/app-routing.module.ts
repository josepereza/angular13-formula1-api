import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ListadoComponent } from './modules/listado/pages/listado/listado.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'listado', component: ListadoComponent,
    loadChildren: () => import('../app/modules/listado/listado.module').then(m => m.ListadoModule)
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
