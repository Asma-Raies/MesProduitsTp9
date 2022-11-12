import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/Categorie.model';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../service/produit.service';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  categories! : Categorie[];
updatedCatId! : number;
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }
  
  ngOnInit() {
    this.categories = this.produitService.listeCategories();
  // console.log(this.route.snapshot.params.id);
  this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentProduit);
  this.updatedCatId=this.currentProduit.categorie.idCat;
  }
  updateProduit() {
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
    }
  }