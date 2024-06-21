import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-init',
  templateUrl: './page-init.component.html',
  styleUrls: ['./page-init.component.css']
})
export class PageInitComponent implements OnInit{
    
  //Generacion de rutas
    constructor(private router:Router){}
    navigateToPage(page:string){
      this.router.navigate([page]);
    }
  

    
  
  ngOnInit(): void {
  }

}
