import { Component, signal } from '@angular/core';
import { ProductFilter } from './product-filter/product-filter';

/**
 * Composant racine de l'application para-pharma
 * 
 * Ce composant standalone sert de point d'entrée principal.
 * Il importe et affiche le composant ProductFilter qui contient
 * toute la logique de l'application.
 */
@Component({
  selector: 'app-root',
  imports: [ProductFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * Titre de l'application stocké dans un signal Angular
   * Les signals permettent une réactivité fine et performante
   */
  protected readonly title = signal('para-pharma');
}
