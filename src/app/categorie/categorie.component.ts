import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories.model';
import { CategoriesService } from '../services/categories.service';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{

  title !:'Categorie';
  titre :string = 'Categorie';
  listCategorie : Categories[] = [];
  categorie: Categories = {
    id: 0,
    designation: ''
  };
  
  constructor(private categorieService:CategoriesService){

  }

  ngOnInit(): void {
    this.fecthAllCategorie();

  }

  fecthAllCategorie(){
    this.categorieService.liste_categorie().subscribe({
      next:(response)=>{
        console.log(response);
        this.listCategorie = response.val;
        console.log(this.listCategorie)
      },
      error(err){
        console.log('Erreur du chargement' , err);
      },
    });
  }

  onAddCategorie(categorieForm:NgForm){
    if (categorieForm.valid ){
      return ;
  }
  console.log(categorieForm.value);
  this.categorieService.add_categorie(categorieForm.value).subscribe(categorie =>
    this.listCategorie.push(categorie));
    categorieForm.reset();
    //console.log("Ajouté avec succès");
  
}

onDeleteCategorie(id:number){
  console.log(id)
  this.categorieService.delete_categorie(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.fecthAllCategorie()
    },
    error(err){
      console.log('Erreur de suppression' , err);
    },
  });
}

onUpdateCategorie(id:number , categorie:Categories){
  this.categorieService.update_categorie(id, categorie).subscribe({
    next:(response)=>{
      console.log(response);
    },
    error(err){
      console.log("Erreur de mis a jours" , err)
    },
  });
}

}
