import { Component } from '@angular/core';
import { IngresoService } from '../../../services/ingreso.service';
import { IIngreso, IViewIncome } from '../../../interfaces/IIngreso';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-view-income',
  templateUrl: './view-income.component.html',
  styleUrls: ['./view-income.component.css']
})
export class ViewIncomeComponent implements OnInit {
  constructor(private IngresoService:IngresoService){}
  datos: IIngreso[] = []
  DB_CONTROL:number=0;
  cantidadIngreso:number=0;
  newRegistro: IViewIncome ={
    fecha:new Date(),
    descripcion:"",
    monto:0,
    categoria:""
  };

  editRegister: IIngreso ={
    id:0,
    fecha:new Date(),
    descripcion:"",
    monto:0,
    categoria:""
  };

  ngOnInit() {
    this.GET();
    this.countAllIngresos();
  }
    GET(){
      // MOSTRAR LA LISTA DE INGRESO
    this.IngresoService.getAllData()
    .subscribe((data:any) => {
      this.datos = data;
    })
    }

    countAllIngresos() {
      this.IngresoService.countAllData().subscribe((count: any) => {
        this.cantidadIngreso = count;
      });
    }

////////////////////////////////////////////////////////////////////

    //BUSCAR DATO DEL INGRESO POR ID
    GET_UNIT(): void {
        this.IngresoService.getData(this.DB_CONTROL).subscribe((datos:any) => {
          this.datos = [datos]
          console.log(datos)
        });
      }

////////////////////////////////////////////////////////////////////

   //OBTENER DATO PARA ACTUALIZAR INGRESO
   GET_ACTUALIZED(datoO:IIngreso){
      this.editRegister = { ...datoO };
    }

////////////////////////////////////////////////////////////////////

    //AGREGAR DATO DE INGRESO
    POST() {
      this.IngresoService.saveData(this.newRegistro).subscribe(response => {
        console.log('Ingreso registrado con exito:', response);
        this.GET();

        // limpieza de la interfaz post registro
        this.newRegistro={
          fecha:new Date(),
          descripcion:"",
          monto:0,
          categoria:""
        };
      });
    }

////////////////////////////////////////////////////////////////////

    //MODIFICAR DATO DE Ingreso
    PUT(ingreso:IIngreso ) {
      console.log(ingreso)
      this.IngresoService.saveData(ingreso).subscribe(response => {
        console.log('Ingreso modificado con exito:', response);
        
        this.GET();
      });
    }

////////////////////////////////////////////////////////////////////

    //ELIMINAR DATO Ingreso
    DELETED(id: number) {
      this.IngresoService.deleteData(id).subscribe(response => {
        console.log('Ingreso eliminado con exito:', response);
        
        console.log(id)
        this.GET();
      });
    }
}
