import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { SubmenucrudingesoComponent } from './submenucrudingeso/submenucrudingeso.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistraringresoComponent } from './registraringreso/registraringreso.component';
import { ListaingresoComponent } from './listaingreso/listaingreso.component';
import { EitaingresoComponent } from './eitaingreso/eitaingreso.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    SubmenucrudingesoComponent,
    RegistraringresoComponent,
    ListaingresoComponent,
    EitaingresoComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatAutocompleteModule
    


  ],
  exports:[SubmenucrudingesoComponent],
  
})
export class IngresoModule { }
