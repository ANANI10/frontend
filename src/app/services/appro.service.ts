import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Appro } from '../models/appro.model';

@Injectable({
  providedIn: 'root'
})
export class ApproService{

  constructor(private http : HttpClient) { }
  
  liste_appro():Observable<any>{
    return this.http.get<any>(`${environment.backendHost}/liste/appro`)
  }

  add_appro(appro:Appro):Observable<Appro>{
    return this.http.post<Appro>(`${environment.backendHost}/add/appro`, appro);
  }

  delete_appro(id : number):Observable<unknown>{
    return this.http.delete(`${environment.backendHost}/delete/appro/${id}`)
  }

  update_appro(id:number , appro:Appro):Observable<Appro>{
    return this.http.put<Appro>(`${environment.backendHost}/update/appro/${id}`, appro)
  }


}
