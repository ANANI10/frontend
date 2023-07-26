import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { ArticleComponent } from './article/article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { VenteComponent } from './vente/vente.component';
import { AdminComponent } from './dashbord/admin/admin.component';
import { ClientComponent } from './dashbord/client/client.component';
import { ApproComponent } from './appro/appro.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'' , pathMatch:'full' , redirectTo:'connexion'},
  {path:'connexion' , component:ConnexionComponent},
  {path:'accueil' , component:AccueilPageComponent},
  {path:'administrateur' , component:AdministrateurComponent},
  {path:'appro'  , component:ApproComponent},
  {path:'article' , component:ArticleComponent},
  {path:'categorie' , component:CategorieComponent},
  {path:'vente' , component:VenteComponent},
  {path:'dashbord' , component:AdminComponent},
  {path:'client', component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
