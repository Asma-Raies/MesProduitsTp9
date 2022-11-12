import { Categorie } from "./Categorie.model";
export class Produit {
    idProduit? : number;
    nomProduit? : string;
    prixProduit? : number;
    dateCreation? : Date ;
    categorie! : Categorie; ;
    }