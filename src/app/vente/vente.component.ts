import { Component, OnInit } from '@angular/core';
import { Ventes } from '../models/ventes.model';
import { NgForm } from '@angular/forms';
import { VentesService } from '../services/ventes.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  title !:'Vente';
  titre :string = 'Vente';
  listVente : Ventes[] = [];

  constructor(private ventesService:VentesService){

  }

  ngOnInit(): void {
    this.fecthAllVente();
  }

  fecthAllVente(){
    this.ventesService.liste_vente().subscribe({
      next:(response)=>{
        console.log(response);
        this.listVente = response.message;
        console.log(this.listVente)
      },
      error(err){
        console.log('Erreur du chargement' , err);
      },
    });
  }

  onAddVente(venteForm:NgForm){
    if (venteForm.valid ){
      return ;
  }
  console.log(venteForm.value);
  this.ventesService.add_vente(venteForm.value).subscribe(vente =>
    this.listVente.push(vente));
    venteForm.reset();
    //console.log("Ajouté avec succès");
  
}

  onDeleteVente(id:number){
    console.log(id)
    this.ventesService.delete_vente(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fecthAllVente()
      },
      error(err){
        console.log('Erreur de suppression' , err);
      },
    });
  }

  onUpdateVente(id:number , vente:Ventes){
    this.ventesService.update_vente(id, vente).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("Erreur de mis a jours" , err)
      },
    });
  }
}
