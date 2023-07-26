import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articles.model';
import { ArticlesService } from '../services/articles.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title !:'Article';
  titre :string = 'Article';
  listArticle : Article[] = [];

  constructor(private articleService:ArticlesService){}

   articleForm = new FormGroup({

    libelle : new FormControl('' , Validators.required),
    prix : new FormControl('' , Validators.required),
    qteStock : new FormControl('' , Validators.required),
    dateCreation : new FormControl('' , Validators.required),
    qteSeuil : new FormControl('' , Validators.required)

   })

  ngOnInit(): void {
    this.fecthAllArticle();
  }

  fecthAllArticle(){
    this.articleService.liste_article().subscribe({
      next:(response)=>{
        console.log(response);
        this.listArticle = response.message;
        console.log(this.listArticle)
      },
      error(err){
        console.log('Erreur du chargement' , err);
      },
    });
  }
  
  onAddArticle(articleForm:NgForm){
    if (articleForm.valid ){
      return ;
  }
  console.log(articleForm.value);
  this.articleService.add_article(articleForm.value).subscribe(article =>
    this.listArticle.push(article));
    articleForm.reset();
    //console.log("Ajouté avec succès");
  
}

onDeleteArticle(id:number){
  console.log(id)
  this.articleService.delete_article(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.fecthAllArticle()
    },
    error(err){
      console.log('Erreur de suppression' , err);
    },
  });
}

onUpdateArticle(id:number , article:Article){
  this.articleService.update_article(id, article).subscribe({
    next:(response)=>{
      console.log(response);
    },
    error(err){
      console.log("Erreur de mis a jours" , err)
    },
  });
}

}

