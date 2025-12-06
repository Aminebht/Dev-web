/**
 * Point d'entrée principal de l'application Angular
 * 
 * Ce fichier bootstrap (démarre) l'application en mode standalone.
 * Il charge le composant racine App avec sa configuration.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Bootstrap de l'application
 * - Charge le composant App comme composant racine
 * - Applique la configuration définie dans appConfig
 * - Capture et affiche les erreurs potentielles dans la console
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
