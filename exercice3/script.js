// ============================================
// EXERCICE 3 – Destructuring
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice3') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 3 : Destructuring ===\n');

// ----------------------------------------
// 1. Objet de départ
// ----------------------------------------
log('📌 1. Objet de départ:\n');

const user = { name: "Noor", age: 10, city: "Tunis" };
log('const user = { name: "Noor", age: 10, city: "Tunis" };');
log('Objet complet: ' + JSON.stringify(user));

// ----------------------------------------
// 2. Extraction de name et age avec destructuring
// ----------------------------------------
log('\n📌 2. Destructuring - Extraction de name et age:\n');

// Méthode classique (sans destructuring)
log('// Méthode classique (sans destructuring):');
const nameClassique = user.name;
const ageClassique = user.age;
log('const nameClassique = user.name;  // "' + nameClassique + '"');
log('const ageClassique = user.age;    // ' + ageClassique);

// Avec destructuring
log('\n// Avec destructuring:');
const { name, age } = user;
log('const { name, age } = user;');
log('name = "' + name + '"');
log('age = ' + age);

// ----------------------------------------
// 3. Destructuring avec renommage
// ----------------------------------------
log('\n📌 3. Destructuring avec renommage:\n');

const { name: prenom, age: annees, city: ville } = user;
log('const { name: prenom, age: annees, city: ville } = user;');
log('prenom = "' + prenom + '"');
log('annees = ' + annees);
log('ville = "' + ville + '"');

// ----------------------------------------
// 4. Destructuring avec valeur par défaut
// ----------------------------------------
log('\n📌 4. Destructuring avec valeur par défaut:\n');

const { name: nom, country = "Tunisie" } = user;
log('const { name: nom, country = "Tunisie" } = user;');
log('nom = "' + nom + '"');
log('country = "' + country + '" (valeur par défaut car non présente)');

// ----------------------------------------
// 5. Destructuring de tableaux
// ----------------------------------------
log('\n📌 5. Destructuring de tableaux:\n');

const couleurs = ["rouge", "vert", "bleu", "jaune"];
log('const couleurs = ["rouge", "vert", "bleu", "jaune"];');

const [premiere, deuxieme] = couleurs;
log('\nconst [premiere, deuxieme] = couleurs;');
log('premiere = "' + premiere + '"');
log('deuxieme = "' + deuxieme + '"');

// Ignorer des éléments
const [, , troisieme] = couleurs;
log('\nconst [, , troisieme] = couleurs;');
log('troisieme = "' + troisieme + '" (on a ignoré les 2 premiers)');

// Rest operator
const [first, ...reste] = couleurs;
log('\nconst [first, ...reste] = couleurs;');
log('first = "' + first + '"');
log('reste = [' + reste.map(c => '"' + c + '"').join(', ') + ']');

// ----------------------------------------
// 6. Destructuring dans les paramètres de fonction
// ----------------------------------------
log('\n📌 6. Destructuring dans les paramètres de fonction:\n');

function afficherUser({ name, age }) {
    return `${name} a ${age} ans`;
}

log('function afficherUser({ name, age }) {');
log('    return `${name} a ${age} ans`;');
log('}');
log('\nafficherUser(user) = "' + afficherUser(user) + '"');

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Objet:    const { prop1, prop2 } = objet;                  │');
log('│ Renommer: const { prop: nouveauNom } = objet;              │');
log('│ Défaut:   const { prop = valeurDefaut } = objet;           │');
log('│ Tableau:  const [a, b, c] = tableau;                       │');
log('│ Ignorer:  const [, , c] = tableau;                         │');
log('│ Rest:     const [first, ...reste] = tableau;               │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 3 terminé!');
