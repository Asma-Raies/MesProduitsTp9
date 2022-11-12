import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/Categorie.model';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  message :string ="";
  newProduit = new Produit();
  categories! : Categorie[];
  newCategorie!: Categorie;
  newIdCat!:number;
  constructor(private produitService: ProduitService,private router :Router) { }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }

  addProduit(){
    console.log(this.newIdCat);
    this.newCategorie=this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie=this.newCategorie;
   this.produitService.ajouterProduit(this.newProduit);
   this.router.navigate(['produits']);
   }

}
