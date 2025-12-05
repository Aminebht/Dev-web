// ============================================
// EXERCICE 2 – Fonctions fléchées
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice2') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 2 : Fonctions Fléchées ===\n');

// ----------------------------------------
// 1. Fonction classique
// ----------------------------------------
log('📌 1. Fonction classique:\n');

function somme(a, b) {
    return a + b;
}

log('function somme(a, b) {');
log('    return a + b;');
log('}');
log('\nRésultat: somme(5, 3) = ' + somme(5, 3));

// ----------------------------------------
// 2. Réécriture en fonction fléchée (syntaxe complète)
// ----------------------------------------
log('\n📌 2. Fonction fléchée (syntaxe complète):\n');

const sommeArrow = (a, b) => {
    return a + b;
};

log('const sommeArrow = (a, b) => {');
log('    return a + b;');
log('};');
log('\nRésultat: sommeArrow(5, 3) = ' + sommeArrow(5, 3));

// ----------------------------------------
// 3. Fonction fléchée avec return implicite
// ----------------------------------------
log('\n📌 3. Fonction fléchée avec return IMPLICITE:\n');

const sommeImplicite = (a, b) => a + b;

log('const sommeImplicite = (a, b) => a + b;');
log('\nRésultat: sommeImplicite(5, 3) = ' + sommeImplicite(5, 3));

// ----------------------------------------
// 4. Autres exemples de fonctions fléchées
// ----------------------------------------
log('\n📌 4. Autres exemples:\n');

// Un seul paramètre - pas besoin de parenthèses
const double = x => x * 2;
log('const double = x => x * 2;');
log('double(7) = ' + double(7));

// Pas de paramètre - parenthèses vides obligatoires
const direBonjour = () => "Bonjour!";
log('\nconst direBonjour = () => "Bonjour!";');
log('direBonjour() = ' + direBonjour());

// Retourner un objet (avec parenthèses)
const creerPersonne = (nom, age) => ({ nom: nom, age: age });
log('\nconst creerPersonne = (nom, age) => ({ nom, age });');
log('creerPersonne("Noor", 10) = ' + JSON.stringify(creerPersonne("Noor", 10)));

// ----------------------------------------
// 5. Utilisation avec les méthodes de tableau
// ----------------------------------------
log('\n📌 5. Utilisation avec les méthodes de tableau:\n');

const nombres = [1, 2, 3, 4, 5];
log('const nombres = [1, 2, 3, 4, 5];');

// map avec fonction classique
const doublesClassique = nombres.map(function(n) {
    return n * 2;
});

// map avec fonction fléchée
const doublesArrow = nombres.map(n => n * 2);

log('\n// Fonction classique:');
log('nombres.map(function(n) { return n * 2; })');
log('Résultat: [' + doublesClassique.join(', ') + ']');

log('\n// Fonction fléchée:');
log('nombres.map(n => n * 2)');
log('Résultat: [' + doublesArrow.join(', ') + ']');

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ - Syntaxes des fonctions fléchées:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Syntaxe complète:     (a, b) => { return a + b; }         │');
log('│ Return implicite:     (a, b) => a + b                     │');
log('│ Un paramètre:         x => x * 2                          │');
log('│ Zéro paramètre:       () => "Hello"                       │');
log('│ Retourner un objet:   () => ({ clé: valeur })             │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 2 terminé!');
