import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { IUsuario, IUser } from '../../../interfaces/IUsuario';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private UsuarioService: UsuarioService){}
  //datos: IUsuarios = { sum: 0, usuarios: [] };
  datos: IUsuario[] = []
  DB_CONTROL:number=0;
  cantidadUsuarios:number=0;
  newRegistro: IUser ={
    nombre:"",
    correo:"",
    contrasena:""
  };

  editRegister: IUsuario ={
    id:0,
    nombre:"",
    correo:"",
    contrasena:""
  };

  ngOnInit() {
    this.GET();
    this.countAllUsuarios();
  }
    GET(){
      // MOSTRAR LA LISTA DE USUARIOS
    this.UsuarioService.getAllData()
    .subscribe((data:any) => {
      this.datos = data;
    })
    }

    countAllUsuarios() {
      this.UsuarioService.countAllData().subscribe((count: any) => {
        this.cantidadUsuarios = count;
      });
    }

////////////////////////////////////////////////////////////////////

    //BUSCAR DATO DEL USUARIO POR ID
    GET_UNIT(): void {
        this.UsuarioService.getData(this.DB_CONTROL).subscribe((datos:any) => {
          this.datos = [datos]
          console.log(datos)
        });
      }

////////////////////////////////////////////////////////////////////

   //OBTENER DATO PARA ACTUALIZAR USUARIO
   GET_ACTUALIZED(datoO:IUsuario){
      this.editRegister = { ...datoO };
    }

////////////////////////////////////////////////////////////////////

    //AGREGAR DATO DE USUARIO
    POST() {
      this.UsuarioService.saveData(this.newRegistro).subscribe(response => {
        console.log('Usuario registrado con exito:', response);
        this.GET();

        // limpieza de la interfaz post registro
        this.newRegistro={
          nombre:"",
          correo:"",
          contrasena:""
        };
      });
    }

////////////////////////////////////////////////////////////////////

    //MODIFICAR DATO DE USUARIO
    PUT(usuario:IUsuario ) {
      console.log(usuario)
      this.UsuarioService.saveData(usuario).subscribe(response => {
        console.log('Usuario modificado con exito:', response);
        
        this.GET();
      });
    }

////////////////////////////////////////////////////////////////////

    //ELIMINAR DATO USUARIO
    DELETED(id: number) {
      this.UsuarioService.deleteData(id).subscribe(response => {
        console.log('Usuario eliminado con exito:', response);
        
        console.log(id)
        this.GET();
      });
    }
}