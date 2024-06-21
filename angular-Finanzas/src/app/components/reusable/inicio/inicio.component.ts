import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Generacion de rutas
  constructor(private router:Router){}
  navigateToPage(page:string){
    this.router.navigate([page]);
  }
}
