/**
 * Configuration de l'application Angular
 * 
 * Ce fichier définit les providers globaux de l'application standalone.
 * Les providers configurent les services et fonctionnalités au niveau de l'application.
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';

/**
 * Configuration principale de l'application
 * 
 * Providers inclus :
 * - provideBrowserGlobalErrorListeners : Gestion globale des erreurs du navigateur
 * - provideZoneChangeDetection : Configuration de la détection de changements avec Zone.js
 *   - eventCoalescing: true - Optimise les performances en regroupant les événements
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    
  ]
};
