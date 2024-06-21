import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIngreso, IIngresos } from '../interfaces/IIngreso'

@Injectable({
    providedIn: 'root'
})

export class IngresoService {
    private baseURL = `http://localhost:3000/api`

    constructor (private http: HttpClient){}

    getAllData(): Observable<IIngresos>{
        return this.http.get<IIngresos>(`${this.baseURL}/ingreso/all`)
    }
    countAllData(): Observable<Number>{
        return this.http.get<Number>(`${this.baseURL}/ingreso/count`)
    }
    deleteData(id: number): Observable<any> {
        return this.http.post(`${this.baseURL}/ingreso/delete/${id}`,{})
    }
    getData(id: number): Observable<IIngreso>{
        return this.http.get<IIngreso>(`${this.baseURL}/ingreso/find/${id}`,)
    }
    saveData(data: any): Observable<IIngreso>{
        return this.http.post<IIngreso>(`${this.baseURL}/ingreso/save`, data)
    }
}