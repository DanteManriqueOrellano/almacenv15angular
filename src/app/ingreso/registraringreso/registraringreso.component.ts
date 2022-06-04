import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { map, Observable, startWith } from 'rxjs';
import { IInsumo } from 'src/app/sharing.insumo.service';

import { IIngreso } from '../entity/entity.ingreso';
import { InsumoService } from '../services/insumo.service';



@Component({
  selector: 'app-registraringreso',
  templateUrl: './registraringreso.component.html',
  styleUrls: ['./registraringreso.component.css']
})
export class RegistraringresoComponent implements OnInit {
  datas = this.insumoService.getInsumo()
  optionsInsumo:any[] = ["uno","dos","tres"]
  optionsProveedor:any[]
  filteredOptions:any //Observable<any[]>;
  filteredOptionsProveedor:any
  constructor(private insumoService:InsumoService){}
  ngOnInit(): void {
    
    this.form.formGroup.get('idinsumo')?.valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
    this.getIsnumo()
    
    
  }

  selectedValue: string;
  selected: Date | null;

  public form = createForm<IIngreso>(this, {
    formType:FormType.SUB,
    formControls:{
      idingreso:new FormControl(null,Validators.required),
      iddocumento:new FormControl(null,Validators.required),
      idinsumo:new FormControl([],Validators.required),
      idproveedor:new FormControl(null,Validators.required),
      fingreso:new FormControl(new Date(),Validators.required),
      nrodocumento:new FormControl(null,Validators.required),
      cantidad:new FormControl(null,Validators.required),
      punitario:new FormControl(null,Validators.required),
      reingreso:new FormControl(null,Validators.required),
    }

  })
  getIsnumo(){
    this.insumoService.getInsumo().subscribe((response)=>{
      this.optionsInsumo = response;
      this.filteredOptions = response;
    })
  }
  getProveedor(){
    this.insumoService.getInsumo().subscribe((response)=>{
      this.optionsInsumo = response;
      this.filteredOptions = response;
    })
  }

  filterData(enteredData:any){
    this.filteredOptions = this.optionsInsumo.filter(item => {
      return item.insumo.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }


}
