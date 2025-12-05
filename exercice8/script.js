// ============================================
// EXERCICE 8 – Promesse simple
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice8') {
    const element = document.getElementById(elementId);
    const timestamp = new Date().toLocaleTimeString();
    element.innerHTML += `[${timestamp}] ${message}\n`;
}

function clearLog(elementId = 'exercice8') {
    document.getElementById(elementId).innerHTML = '';
}

// ----------------------------------------
// Fonction wait avec Promise
// ----------------------------------------
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Affichage initial
log('=== EXERCICE 8 : Promesse Simple ===\n');
log('📌 Fonction wait définie:\n');
log('const wait = ms => new Promise(resolve => setTimeout(resolve, ms));');
log('\n👆 Cliquez sur un bouton pour lancer la simulation\n');

// ----------------------------------------
// 1. Téléchargement avec .then()
// ----------------------------------------
function lancerTelechargement() {
    clearLog();
    log('=== Méthode 1: Utilisation de .then() ===\n');
    
    log('📥 Début du téléchargement...');
    log('⏳ Téléchargement en cours (2 secondes)...\n');
    
    wait(2000).then(() => {
        log('✅ Fin du téléchargement!');
        log('\n--- Simulation terminée ---');
    });
    
    log('⚡ Ce message s\'affiche IMMÉDIATEMENT (code asynchrone)');
}

// ----------------------------------------
// 2. Téléchargement avec async/await
// ----------------------------------------
async function lancerTelechargementAsync() {
    clearLog();
    log('=== Méthode 2: Utilisation de async/await ===\n');
    
    log('📥 Début du téléchargement...');
    log('⏳ Téléchargement en cours (2 secondes)...\n');
    
    await wait(2000);
    
    log('✅ Fin du téléchargement!');
    log('\n--- Simulation terminée ---');
}

// ----------------------------------------
// Afficher le code
// ----------------------------------------
log('\n📌 Code avec .then():\n');
log('log("Début");');
log('wait(2000).then(() => {');
log('    log("Fin");');
log('});');

log('\n📌 Code avec async/await:\n');
log('async function demo() {');
log('    log("Début");');
log('    await wait(2000);');
log('    log("Fin");');
log('}');

// ----------------------------------------
// Exemple plus complexe (pour la console)
// ----------------------------------------
console.log('=== EXERCICE 8 : Exemples supplémentaires ===');

// Exemple avec plusieurs étapes
async function telechargementMultiEtapes() {
    console.log('📥 Étape 1: Connexion au serveur...');
    await wait(1000);
    
    console.log('📥 Étape 2: Téléchargement des données...');
    await wait(1500);
    
    console.log('📥 Étape 3: Traitement des données...');
    await wait(500);
    
    console.log('✅ Terminé!');
}

// Exemple avec Promise.all (exécution parallèle)
async function telechargementParallele() {
    console.log('📥 Téléchargement de 3 fichiers en parallèle...');
    
    const debut = Date.now();
    
    await Promise.all([
        wait(1000).then(() => console.log('  ✅ Fichier 1 téléchargé')),
        wait(1500).then(() => console.log('  ✅ Fichier 2 téléchargé')),
        wait(800).then(() => console.log('  ✅ Fichier 3 téléchargé'))
    ]);
    
    const duree = Date.now() - debut;
    console.log(`✅ Tous terminés en ${duree}ms (au lieu de 3300ms en série)`);
}

console.log('Fonctions disponibles dans la console:');
console.log('- telechargementMultiEtapes()');
console.log('- telechargementParallele()');

// ----------------------------------------
// Résumé affiché dans la page
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Promise:     new Promise((resolve, reject) => {...})       │');
log('│ Attendre:    const wait = ms => new Promise(r => ...)     │');
log('│ .then():     promise.then(result => {...})                 │');
log('│ .catch():    promise.catch(error => {...})                 │');
log('│ async:       async function nom() {...}                    │');
log('│ await:       const result = await promise;                 │');
log('│ Parallèle:   await Promise.all([p1, p2, p3])              │');
log('└────────────────────────────────────────────────────────────┘');
