/**
 * Interface représentant un produit de para-pharmacie
 * Utilisée pour typer les données des produits dans l'application
 */
export interface Product {
  /** Identifiant unique du produit */
  id: number;
  
  /** Nom du produit */
  name: string;
  
  /** Prix du produit en TND (Dinar Tunisien) */
  price: number;
  
  /** Catégorie du produit (ex: Médicament, Cosmétique, Hygiène) */
  category: string;
  
  /** Quantité disponible en stock (0 = rupture de stock) */
  stock: number;
}
