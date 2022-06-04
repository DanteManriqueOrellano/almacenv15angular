import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IIngreso } from './ingreso/entity/entity.ingreso';
import {HttpClient, HttpHeaders} from '@angular/common/http'
export interface IInsumo{
  idinsumo:number;
  insumo:string;
  umedida:string;
  idcategoria:number;
}
export interface der {
  range: string,
  majorDimension: string,
  values: []
}

@Injectable({
  providedIn: 'root'
})
export class SharingInsumoService {
  private api ="https://almacenv15.herokuapp.com/insumo"
  constructor(private http:HttpClient){
    
    
  }
  
  private sharingObservablePrivate: BehaviorSubject<IInsumo[]> = new BehaviorSubject<IInsumo[]>(
    [{
      idinsumo:0,
      insumo:"",
      umedida:"",
      idcategoria:0
    }])

    
  get sharingObservable(){
    this.http.get<IInsumo[]>(this.api).subscribe(
      (recivedItems) =>
        {
           
          
          this.sharingObservableData = recivedItems
        }
    )
    
    return this.sharingObservablePrivate.asObservable()

  }
  set sharingObservableData(data:IInsumo[]){
    this.sharingObservablePrivate.next(data);

  }
}
