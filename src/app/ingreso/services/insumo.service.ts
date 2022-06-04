import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { IInsumo, SharingInsumoService } from 'src/app/sharing.insumo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  private data$:Observable<IInsumo>

  constructor(private http:HttpClient,private sharingInsumoService:SharingInsumoService) { }

   getInsumo(){
    return this.sharingInsumoService.sharingObservable;
  }
}
