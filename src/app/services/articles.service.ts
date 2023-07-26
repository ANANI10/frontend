import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Appro } from '../models/appro.model';
import { Article } from '../models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

constructor(private http:HttpClient) { }

liste_article():Observable<any>{
  return this.http.get<any>(`${environment.backendHost}/liste/article`)
}

add_article(article:Article):Observable<Article>{
  return this.http.post<Article>(`${environment.backendHost}/add/article`, article);
}

delete_article(id : number):Observable<unknown>{
  return this.http.delete(`${environment.backendHost}/delete/article/${id}`)
}

update_article(id:number , article:Article):Observable<Article>{
  return this.http.put<Article>(`${environment.backendHost}/update/article/${id}`, article)
}
}
