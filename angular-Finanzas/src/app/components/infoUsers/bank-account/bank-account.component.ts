import { Component, OnInit } from '@angular/core';
import { CuentaBancariaService } from '../../../services/cuenta-bancaria.service';
import { ICuentaBancaria, IBankAccount } from '../../../interfaces/ICuentaBancaria';
@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  constructor(private CuentaBancariaService: CuentaBancariaService){}
  
  datos: ICuentaBancaria[] = []
  DB_CONTROL:number=0;
  cantidadCuentas:number=0;

  newRegistro: IBankAccount ={
    banco:"",
    numero_cuenta:"",
    tipo_cuenta:""
  };

  editRegister: ICuentaBancaria ={
    id:0,
    banco:"",
    numero_cuenta:"",
    tipo_cuenta:""
  };

  ngOnInit() {
    this.GET();
    this.countAllCuentas();
  }
    GET(){
      // MOSTRAR LA LISTA DE LAS CUENTAS BANCARIAS
    this.CuentaBancariaService.getAllData()
    .subscribe((data:any) => {
      this.datos = data;
    })
    }

    countAllCuentas() {
      this.CuentaBancariaService.countAllData().subscribe((count: any) => {
        this.cantidadCuentas = count;
      });
    }

    
////////////////////////////////////////////////////////////////////

    //BUSCAR DATO DE CUENTA BANCARIA POR ID
    GET_UNIT(): void {
        this.CuentaBancariaService.getData(this.DB_CONTROL).subscribe((datos:any) => {
          this.datos = [datos]
          console.log(datos)
        });
      }

////////////////////////////////////////////////////////////////////

   //OBTENER DATO PARA ACTUALIZAR CUENTA BANCARIA
   GET_ACTUALIZED(datoO:ICuentaBancaria){
      this.editRegister = { ...datoO };
    }
////////////////////////////////////////////////////////////////////

    //AGREGAR DATO TUTOR
    POST() {
      this.CuentaBancariaService.saveData(this.newRegistro).subscribe(response => {
        console.log('Cuenta bancaria registrada con exito:', response);
        this.GET();

        // limpieza de la interfaz post registro
        this.newRegistro={
          banco:"",
          numero_cuenta:"",
          tipo_cuenta:""
        };
      });
    }

////////////////////////////////////////////////////////////////////

    //MODIFICAR DATO CUENTA BANCARIA
    PUT(Cuenta:ICuentaBancaria ) {
      console.log(Cuenta)
      this.CuentaBancariaService.saveData(Cuenta).subscribe(response => {
        console.log('Cuenta bancaria modificada con exito:', response);
        
        this.GET();
      });
    }

////////////////////////////////////////////////////////////////////

    //ELIMINAR DATO CUENTA BANCARIA
    DELETED(id: number) {
      this.CuentaBancariaService.deleteData(id).subscribe(response => {
        console.log('Cuenta bancaria eliminada con exito:', response);
        
        console.log(id)
        this.GET();
      });
    }
}