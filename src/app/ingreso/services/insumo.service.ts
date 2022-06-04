import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { IInsumo, SharingInsumoService } from 'src/app/sharing.insumo.service';
import { Observable } from 'rxjs';
import { SharingProveedorService } from 'src/app/sharing.proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  private data$:Observable<IInsumo>

  constructor(private http:HttpClient,
    private sharingInsumoService:SharingInsumoService,
    private sharingProveedorService:SharingProveedorService
    ) { }

   getInsumo(){
    return this.sharingInsumoService.sharingObservable;
  }
  getProveedor(){
    return this.sharingProveedorService.sharingObservable

  }
}
