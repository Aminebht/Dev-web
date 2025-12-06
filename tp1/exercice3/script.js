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
