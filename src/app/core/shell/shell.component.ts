import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {  Subscription } from 'rxjs';


import { ViewChild  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {

  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 

  loading = false;
  title = 'angu-res';

  /*Reemplazar estos valores con valores reales */
  

  
  subs:Subscription
  id:string | null
  alias:string

  constructor(
    private observer: BreakpointObserver,
    private router:Router,
    private route:ActivatedRoute,
    ) {
      //this.spinner.show()
      this.router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.loading = true;
        }
        if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.loading = false;
        }
      });
      
   
     // this.serviceIdFromObra.set(this.route.snapshot.params['id']) 
  }
  ngOnDestroy(): void {
  
   //this.subs.unsubscribe()
    
  }
  despacho(){
    //console.log(id)
    
    this.router.navigate(['/despacho',this.route.snapshot.params['id']])
  }

  
    
  

 goToInsumo(){
   this.router.navigate(['/insumo'])
 }
 ngAfterViewInit() {
  this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1))
    .subscribe((res:any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.id = this.route.snapshot.paramMap.get("id")//trae de la interfaz anterior
    
    /*this.subs = this.ejecucionObraServiceGQL.buscaobraById(this.busca.document,{id:this.id}).subscribe((val:any)=>{
      const obra = val.buscaUnaEjecucionObra
      this.alias = obra.alias
      this.spinner.hide()
      
    })*/
}

}
