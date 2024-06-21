import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICuentaBancaria, ICuentaBancarias } from '../interfaces/ICuentaBancaria'

@Injectable({
    providedIn: 'root'
})

export class CuentaBancariaService {
    private baseURL = `http://localhost:3000/api`

    constructor (private http: HttpClient){}

    getAllData(): Observable<ICuentaBancarias>{
        return this.http.get<ICuentaBancarias>(`${this.baseURL}/cuenta_bancaria/all`)
    }
    countAllData(): Observable<Number>{
        return this.http.get<Number>(`${this.baseURL}/cuenta_bancaria/count`)
    }
    deleteData(id: number): Observable<any> {
        return this.http.post(`${this.baseURL}/cuenta_bancaria/delete/${id}`,{})
    }
    getData(id: number): Observable<ICuentaBancaria>{
        return this.http.get<ICuentaBancaria>(`${this.baseURL}/cuenta_bancaria/find/${id}`,)
    }
    saveData(data: any): Observable<ICuentaBancaria>{
        return this.http.post<ICuentaBancaria>(`${this.baseURL}/cuenta_bancaria/save`, data)
    }
}