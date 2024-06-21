import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';
import { ITransaccion, IViewTransactions } from '../../../interfaces/ITransaccion';


@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit{
  
  constructor(private transaccionService: TransaccionService){}
  
  datos: ITransaccion[] = []
  DB_CONTROL:number=0;
  CantidadTransacciones:number=0;
  newRegistro: IViewTransactions ={
    fecha: new Date(),
    descripcion:"",
    monto:0,
    categoria:""
  };


  editRegister: ITransaccion ={
    id:0,
    fecha: new Date(),
    descripcion:"",
    monto:0,
    categoria:""
  };

  ngOnInit() {
    this.GET();
    this.countAllTransactions();
  }
    GET(){
      // MOSTRAR LA LISTA DE TRANSACCIONES
    this.transaccionService.getAllData()
    .subscribe((data:any) => {
      this.datos = data;
    })
    }

    countAllTransactions() {
      this.transaccionService.countAllData().subscribe((count: any) => {
        this.CantidadTransacciones = count;
      });
    }

////////////////////////////////////////////////////////////////////

    //BUSCAR DATO DE LA TRANSACCION POR ID
    GET_UNIT(): void {
        this.transaccionService.getData(this.DB_CONTROL).subscribe((datos:any) => {
          this.datos = [datos]
          console.log(datos)
        });
      }

////////////////////////////////////////////////////////////////////

   //OBTENER DATO PARA ACTUALIZAR TRANSACCION
   GET_ACTUALIZED(datoO:ITransaccion){
      this.editRegister = { ...datoO };
    }

////////////////////////////////////////////////////////////////////

    //AGREGAR DATO DE TRANSACCION
    POST() {
      this.transaccionService.saveData(this.newRegistro).subscribe(response => {
        console.log('Transaccion agregada con exito:', response);
        this.GET();

        // limpieza de la interfaz post registro
        this.newRegistro={
          fecha: new Date(),
          descripcion:"",
          monto:0,
          categoria:"",
          estado:true
        };
      });
    }

////////////////////////////////////////////////////////////////////

    //MODIFICAR DATO DE TRANSACCION
    PUT(usuario:ITransaccion ) {
      console.log(usuario)
      this.transaccionService.saveData(usuario).subscribe(response => {
        console.log('Transaccion actualizada con exito:', response);
        
        this.GET();
      });
    }

////////////////////////////////////////////////////////////////////

    //ELIMINAR DATO DE TRANSACCION
    DELETED(id: number) {
      this.transaccionService.deleteData(id).subscribe(response => {
        console.log('Transaccion eliminada con exito:', response);
        
        console.log(id)
        this.GET();
      });
    }
}