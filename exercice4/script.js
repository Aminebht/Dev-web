// ============================================
// EXERCICE 4 – Spread Operator
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice4') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 4 : Spread Operator ===\n');

// ----------------------------------------
// 1. Fusion de deux tableaux
// ----------------------------------------
log('📌 1. Fusion de deux tableaux avec spread (...):\n');

const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];

log('const tableau1 = [1, 2, 3];');
log('const tableau2 = [4, 5, 6];');

// Fusion avec spread operator
const tableauFusionne = [...tableau1, ...tableau2];
log('\nconst tableauFusionne = [...tableau1, ...tableau2];');
log('Résultat: [' + tableauFusionne.join(', ') + ']');

// On peut aussi ajouter des éléments
const tableauAvecElements = [...tableau1, 3.5, ...tableau2, 7];
log('\nconst tableauAvecElements = [...tableau1, 3.5, ...tableau2, 7];');
log('Résultat: [' + tableauAvecElements.join(', ') + ']');

// ----------------------------------------
// 2. Copie d'un objet
// ----------------------------------------
log('\n📌 2. Copie d\'un objet avec spread:\n');

const original = { nom: "Noor", age: 10, ville: "Tunis" };
log('const original = { nom: "Noor", age: 10, ville: "Tunis" };');

// Copie avec spread
const copie = { ...original };
log('\nconst copie = { ...original };');
log('copie = ' + JSON.stringify(copie));

// ----------------------------------------
// 3. Modification d'une valeur dans la copie
// ----------------------------------------
log('\n📌 3. Modification d\'une valeur dans la copie:\n');

const copieModifiee = { ...original, age: 11, pays: "Tunisie" };
log('const copieModifiee = { ...original, age: 11, pays: "Tunisie" };');
log('\nOriginal: ' + JSON.stringify(original));
log('Copie modifiée: ' + JSON.stringify(copieModifiee));
log('\n✅ L\'original n\'est PAS modifié!');

// ----------------------------------------
// 4. Copie de tableau
// ----------------------------------------
log('\n📌 4. Copie de tableau:\n');

const nombres = [1, 2, 3, 4, 5];
log('const nombres = [1, 2, 3, 4, 5];');

const copieNombres = [...nombres];
copieNombres.push(6);

log('const copieNombres = [...nombres];');
log('copieNombres.push(6);');
log('\nnombres original: [' + nombres.join(', ') + ']');
log('copieNombres: [' + copieNombres.join(', ') + ']');
log('\n✅ L\'original n\'est PAS modifié!');

// ----------------------------------------
// 5. Spread avec les arguments de fonction
// ----------------------------------------
log('\n📌 5. Spread avec les arguments de fonction:\n');

function additionner(a, b, c) {
    return a + b + c;
}

const valeurs = [10, 20, 30];
log('function additionner(a, b, c) { return a + b + c; }');
log('const valeurs = [10, 20, 30];');
log('\nadditionner(...valeurs) = ' + additionner(...valeurs));

// ----------------------------------------
// 6. Fusion d'objets (merge)
// ----------------------------------------
log('\n📌 6. Fusion d\'objets:\n');

const infosBase = { nom: "Noor", age: 10 };
const infosContact = { email: "noor@email.com", tel: "12345678" };
const infosAdresse = { ville: "Tunis", pays: "Tunisie" };

log('const infosBase = { nom: "Noor", age: 10 };');
log('const infosContact = { email: "noor@email.com", tel: "12345678" };');
log('const infosAdresse = { ville: "Tunis", pays: "Tunisie" };');

const userComplet = { ...infosBase, ...infosContact, ...infosAdresse };
log('\nconst userComplet = { ...infosBase, ...infosContact, ...infosAdresse };');
log('Résultat: ' + JSON.stringify(userComplet, null, 2));

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Fusion tableaux:  [...arr1, ...arr2]                       │');
log('│ Copie tableau:    [...original]                            │');
log('│ Copie objet:      { ...original }                          │');
log('│ Modifier copie:   { ...original, prop: newValue }          │');
log('│ Fusionner objets: { ...obj1, ...obj2, ...obj3 }            │');
log('│ Args fonction:    maFonction(...tableau)                   │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 4 terminé!');
