// ============================================
// EXERCICE 7 – Tableaux avancés
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice7') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 7 : Tableaux Avancés ===\n');

// ----------------------------------------
// Tableau de départ
// ----------------------------------------
log('📌 Tableau de départ:\n');

const notes = [12, 5, 17, 9, 20];
log('const notes = [12, 5, 17, 9, 20];');

// ----------------------------------------
// 1. Calculer la moyenne avec reduce
// ----------------------------------------
log('\n📌 1. Calculer la moyenne avec reduce():\n');

// Explication de reduce
log('// reduce(callback, valeurInitiale)');
log('// callback: (accumulateur, valeurCourante) => nouvelAccumulateur\n');

// Calcul de la somme
const somme = notes.reduce((acc, note) => acc + note, 0);
log('const somme = notes.reduce((acc, note) => acc + note, 0);');
log('somme = ' + somme);

// Calcul de la moyenne
const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
log('\nconst moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;');
log('moyenne = ' + moyenne.toFixed(2));

// Version alternative en une ligne
log('\n// Version alternative:');
const moyenneAlt = notes.reduce((acc, note, i, arr) => {
    acc += note;
    if (i === arr.length - 1) return acc / arr.length;
    return acc;
}, 0);
log('moyenneAlt = ' + moyenneAlt.toFixed(2));

// ----------------------------------------
// 2. Trier en ordre décroissant
// ----------------------------------------
log('\n📌 2. Trier en ordre décroissant avec sort():\n');

// ATTENTION: sort() modifie le tableau original!
// On fait une copie d'abord
const notesTriees = [...notes].sort((a, b) => b - a);

log('// On copie d\'abord pour ne pas modifier l\'original');
log('const notesTriees = [...notes].sort((a, b) => b - a);');
log('\nTableau original: [' + notes.join(', ') + ']');
log('Trié décroissant: [' + notesTriees.join(', ') + ']');

// Explication du comparateur
log('\n// Explication de sort((a, b) => b - a):');
log('// Si b - a > 0 : b vient avant a');
log('// Si b - a < 0 : a vient avant b');
log('// Si b - a = 0 : ordre inchangé');

// ----------------------------------------
// 3. Filtrer les notes ≥ 10
// ----------------------------------------
log('\n📌 3. Filtrer les notes ≥ 10 avec filter():\n');

const notesPassables = notes.filter(note => note >= 10);

log('const notesPassables = notes.filter(note => note >= 10);');
log('\nTableau original: [' + notes.join(', ') + ']');
log('Notes ≥ 10:       [' + notesPassables.join(', ') + ']');

// ----------------------------------------
// 4. Bonus: autres méthodes utiles
// ----------------------------------------
log('\n📌 4. Bonus - Autres méthodes utiles:\n');

// map - transformer chaque élément
const notesSur100 = notes.map(note => note * 5);
log('// map() - Transformer chaque élément');
log('notes.map(note => note * 5) = [' + notesSur100.join(', ') + ']');

// find - trouver le premier élément
const premiereNotePassable = notes.find(note => note >= 10);
log('\n// find() - Trouver le premier élément');
log('notes.find(note => note >= 10) = ' + premiereNotePassable);

// findIndex - trouver l'index
const indexPremiereNotePassable = notes.findIndex(note => note >= 10);
log('\n// findIndex() - Trouver l\'index');
log('notes.findIndex(note => note >= 10) = ' + indexPremiereNotePassable);

// some - au moins un élément satisfait la condition
const auMoinsUneExcellente = notes.some(note => note >= 18);
log('\n// some() - Au moins un élément satisfait');
log('notes.some(note => note >= 18) = ' + auMoinsUneExcellente);

// every - tous les éléments satisfont la condition
const tousPassables = notes.every(note => note >= 10);
log('\n// every() - Tous satisfont la condition');
log('notes.every(note => note >= 10) = ' + tousPassables);

// includes - vérifier si un élément existe
const contient17 = notes.includes(17);
log('\n// includes() - Vérifier existence');
log('notes.includes(17) = ' + contient17);

// ----------------------------------------
// 5. Chaînage de méthodes
// ----------------------------------------
log('\n📌 5. Chaînage de méthodes:\n');

const resultat = notes
    .filter(note => note >= 10)      // Garder notes ≥ 10
    .map(note => note * 5)           // Convertir sur 100
    .sort((a, b) => b - a);          // Trier décroissant

log('const resultat = notes');
log('    .filter(note => note >= 10)   // [12, 17, 20]');
log('    .map(note => note * 5)        // [60, 85, 100]');
log('    .sort((a, b) => b - a);       // [100, 85, 60]');
log('\nRésultat: [' + resultat.join(', ') + ']');

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ reduce():  Réduire à une valeur (somme, moyenne, etc.)     │');
log('│ sort():    Trier (MODIFIE l\'original, copier avant!)      │');
log('│ filter():  Filtrer selon une condition                     │');
log('│ map():     Transformer chaque élément                      │');
log('│ find():    Trouver le premier élément                      │');
log('│ some():    Au moins un satisfait la condition              │');
log('│ every():   Tous satisfont la condition                     │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 7 terminé!');
