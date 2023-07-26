import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Article } from '../models/articles.model';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  liste_categorie():Observable<any>{
    return this.http.get<any>(`${environment.backendHost}/liste/categorie`)
  }
  
  add_categorie(categorie:Categories):Observable<Categories>{
    return this.http.post<Categories>(`${environment.backendHost}/add/categorie`, categorie);
  }
  
  delete_categorie(id : number):Observable<unknown>{
    return this.http.delete(`${environment.backendHost}/delete/categorie/${id}`)
  }
  
  update_categorie(id:number , categorie:Categories):Observable<Categories>{
    return this.http.put<Categories>(`${environment.backendHost}/update/categorie/${id}`, categorie)
  }
}
