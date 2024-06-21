import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransaccion, ITransaccions } from '../interfaces/ITransaccion'

@Injectable({
    providedIn: 'root'
})

export class TransaccionService {
    private baseURL = `http://localhost:3000/api`

    constructor (private http: HttpClient){}

    getAllData(): Observable<ITransaccions>{
        return this.http.get<ITransaccions>(`${this.baseURL}/transaccion/all`)
    }
    countAllData(): Observable<Number>{
        return this.http.get<Number>(`${this.baseURL}/transaccion/count`)
    }
    deleteData(id: number): Observable<any> {
        return this.http.post(`${this.baseURL}/transaccion/delete/${id}`,{})
    }
    getData(id: number): Observable<ITransaccion>{
        return this.http.get<ITransaccion>(`${this.baseURL}/transaccion/find/${id}`,)
    }
    saveData(data: any): Observable<ITransaccion>{
        return this.http.post<ITransaccion>(`${this.baseURL}/transaccion/save`, data)
    }
}