import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraringresoComponent } from '../ingreso/registraringreso/registraringreso.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path:'',
    component:ShellComponent,
    children:[{
      path:"ingreso",
      loadChildren:()=>import('../ingreso/ingreso.module').then(m=>m.IngresoModule)
    }
      
    ]
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
