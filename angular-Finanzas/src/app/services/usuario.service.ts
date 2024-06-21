import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario, IUsuarios } from '../interfaces/IUsuario'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    private baseURL = `http://localhost:3000/api`

    constructor (private http: HttpClient){}

    getAllData(): Observable<IUsuarios>{
        return this.http.get<IUsuarios>(`${this.baseURL}/usuario/all`)
    }
    countAllData(): Observable<Number>{
        return this.http.get<Number>(`${this.baseURL}/usuario/count`)
    }
    deleteData(id: number): Observable<any> {
        return this.http.post(`${this.baseURL}/usuario/delete/${id}`,{})
    }
    getData(id: number): Observable<IUsuario>{
        return this.http.get<IUsuario>(`${this.baseURL}/usuario/find/${id}`,)
    }
    saveData(data: any): Observable<IUsuario>{
        return this.http.post<IUsuario>(`${this.baseURL}/usuario/save`, data)
    }




    getDatosMensuales(id: number): Observable<any>{
        return this.http.get<any>(`${this.baseURL}/usuarios/datos-mensuales/${id}`)
    }
    getCuentasBancarias(id: number): Observable<any>{
        return this.http.get<any>(`${this.baseURL}/usuarios/cuentas-bancarias/${id}`)
    }
}