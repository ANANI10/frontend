import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ApproComponent } from './appro/appro.component';
import { CategorieComponent } from './categorie/categorie.component';
import { VenteComponent } from './vente/vente.component';
import { AdminComponent } from './dashbord/admin/admin.component';
import { ClientComponent } from './dashbord/client/client.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ApproComponent,
    CategorieComponent,
    VenteComponent,
    AdminComponent,
    ClientComponent,
    AccueilPageComponent,
    ConnexionComponent,
    AdministrateurComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
