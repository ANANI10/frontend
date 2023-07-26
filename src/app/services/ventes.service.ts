import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ventes } from '../models/ventes.model';

@Injectable({
  providedIn: 'root'
})
export class VentesService {

  constructor(private http:HttpClient) { }

  liste_vente():Observable<any>{
    return this.http.get<any>(`${environment.backendHost}/liste/vente`)
  }
  
  add_vente(vente:Ventes):Observable<Ventes>{
    return this.http.post<Ventes>(`${environment.backendHost}/add/vente`, vente);
  }
  
  delete_vente(id : number):Observable<unknown>{
    return this.http.delete(`${environment.backendHost}/delete/vente/${id}`)
  }
  
  update_vente(id:number , vente:Ventes):Observable<Ventes>{
    return this.http.put<Ventes>(`${environment.backendHost}/update/vente/${id}`, vente)
  }
}
