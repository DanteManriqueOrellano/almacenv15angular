import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EitaingresoComponent } from './eitaingreso/eitaingreso.component';
import { ListaingresoComponent } from './listaingreso/listaingreso.component';
import { RegistraringresoComponent } from './registraringreso/registraringreso.component';
import { SubmenucrudingesoComponent } from './submenucrudingeso/submenucrudingeso.component';

const routes: Routes = [
  {
    path:"",
    component:SubmenucrudingesoComponent,
    children:[
      {
        path:'registraingreso',
        component:RegistraringresoComponent
      },
      {
        path:'editaingreso',
        component:EitaingresoComponent 
      },
      {
        path:'listaingresos',
        component:ListaingresoComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
