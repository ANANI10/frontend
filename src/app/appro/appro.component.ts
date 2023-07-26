import { Component, OnInit } from '@angular/core';
import { Appro } from '../models/appro.model';
import { ApproService } from '../services/appro.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appro',
  templateUrl: './appro.component.html',
  styleUrls: ['./appro.component.css']
})
export class ApproComponent implements OnInit {

  title !:'Appro';
  titre :string = 'Appro';
  listAppro : Appro[] = [];

  




  constructor(private approService : ApproService){

  }

  ngOnInit(): void {
    this.fecthAllAppro();
  }

  fecthAllAppro(){
    this.approService.liste_appro().subscribe({
      next:(response)=>{
        console.log(response);
        this.listAppro = response.message;
        console.log(this.listAppro)
      },
      error(err){
        console.log('Erreur du chargement' , err);
      },
    });
  }

  onAddAppro(approForm:NgForm){
    if (approForm.valid ){
      return ;
  }
  console.log(approForm.value);
  this.approService.add_appro(approForm.value).subscribe(appro =>
    this.listAppro.push(appro));
    approForm.reset();
    //console.log("Ajouté avec succès");
}

  onDeleteAppro(id:number){
    console.log(id)
    this.approService.delete_appro(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fecthAllAppro();
      },
      error(err){
        console.log('Erreur de suppression' , err);
      },
    });
  }

  onUpdateAppro(id:number , appro:Appro){
    this.approService.update_appro(id, appro).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("Erreur de mis a jours" , err);
      },
    });
  }

  onSave(){
    console.log('Article sauvegardé')
  }

}
