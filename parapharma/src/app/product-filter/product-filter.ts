import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

/**
 * Composant standalone pour afficher et filtrer les produits de para-pharmacie
 * 
 * Fonctionnalités :
 * - Affichage d'une liste de produits
 * - Recherche en temps réel avec [(ngModel)]
 * - Filtrage insensible à la casse
 * - Gestion de l'affichage vide (aucun résultat)
 * - Code couleur pour le niveau de stock
 */
@Component({
  selector: 'app-product-filter',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  /**
   * Terme de recherche saisi par l'utilisateur
   * Lié au champ input via [(ngModel)] pour une liaison bidirectionnelle
   */
  searchTerm: string = '';

  /**
   * Liste statique des produits disponibles dans la para-pharmacie
   * Contient 7 produits avec différentes catégories et niveaux de stock
   * Prix en TND (Dinar Tunisien)
   */
  products: Product[] = [
    { id: 1, name: 'Paracétamol 500mg', price: 3.5, category: 'Médicament', stock: 15 },
    { id: 2, name: 'Vitamine C 1000mg', price: 8.9, category: 'Complément', stock: 3 },
    { id: 3, name: 'Crème Hydratante', price: 12.5, category: 'Cosmétique', stock: 0 },
    { id: 4, name: 'Sirop pour la Toux', price: 6.75, category: 'Médicament', stock: 8 },
    { id: 5, name: 'Gel Désinfectant', price: 4.2, category: 'Hygiène', stock: 20 },
    { id: 6, name: 'Thermomètre Digital', price: 15.9, category: 'Matériel', stock: 2 },
    { id: 7, name: 'Compresses Stériles', price: 3.8, category: 'Matériel', stock: 12 }
  ];

  /**
   * Getter qui retourne la liste filtrée des produits selon le terme de recherche
   * 
   * Logique de filtrage :
   * - Si searchTerm est vide, retourne tous les produits
   * - Sinon, filtre les produits dont le nom contient le terme de recherche
   * - Le filtrage est insensible à la casse (toLowerCase)
   * - Les espaces inutiles sont ignorés (trim)
   * 
   * @returns {Product[]} Liste des produits correspondant à la recherche
   */
  get filteredProducts(): Product[] {
    // Si pas de recherche, afficher tous les produits
    if (!this.searchTerm.trim()) {
      return this.products;
    }
    
    // Normaliser le terme de recherche (minuscules + suppression des espaces)
    const searchLower = this.searchTerm.toLowerCase().trim();
    
    // Filtrer les produits dont le nom contient le terme de recherche
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }

  /**
   * Détermine la classe CSS à appliquer en fonction du niveau de stock
   * 
   * Règles de codage couleur :
   * - stock === 0 : 'stock-out' (rouge - rupture de stock)
   * - stock < 5 : 'stock-low' (orange - stock faible)
   * - stock >= 5 : 'stock-ok' (vert - stock suffisant)
   * 
   * @param {number} stock - Quantité en stock du produit
   * @returns {string} Nom de la classe CSS à appliquer
   */
  getStockClass(stock: number): string {
    if (stock === 0) return 'stock-out';
    if (stock < 5) return 'stock-low';
    return 'stock-ok';
  }
}
