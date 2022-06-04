import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
export interface IProveedor{
  idproveedor:number
  razon_social:string
  ruc:string
}

@Injectable({
  providedIn: 'root'
})
export class SharingProveedorService {
private api ="https://almacenv15.herokuapp.com/proveedor"
constructor(private http:HttpClient){}

private sharingObservablePrivate: BehaviorSubject<IProveedor[]> = new BehaviorSubject<IProveedor[]>([])

  
get sharingObservable(){
  this.http.get<IProveedor[]>(this.api).subscribe(
    (recivedItems) =>
      {
        this.sharingObservableData = recivedItems
      }
  )
  
  return this.sharingObservablePrivate.asObservable()

}
set sharingObservableData(data:IProveedor[]){
  this.sharingObservablePrivate.next(data);

}
}
