import { Injectable } from '@angular/core';
import { SharingProveedorService } from 'src/app/sharing.proveedor.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private sharingProveedorService:SharingProveedorService) { }
  getProveedor(){
    return this.sharingProveedorService.sharingObservable;
  }
}
