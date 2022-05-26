import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesPipe } from './pipes.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    PipesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ListadoModule { }
