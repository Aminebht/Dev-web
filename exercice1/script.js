// ============================================
// EXERCICE 1 – Variables et portée
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice1') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 1 : Variables et Portée ===\n');

// ----------------------------------------
// 1. Déclaration des 3 types de variables
// ----------------------------------------
log('📌 1. Déclaration des 3 types de variables:\n');

var maVariableVar = "Je suis déclarée avec var";
let maVariableLet = "Je suis déclarée avec let";
const maVariableConst = "Je suis déclarée avec const";

log('var maVariableVar = "' + maVariableVar + '"');
log('let maVariableLet = "' + maVariableLet + '"');
log('const maVariableConst = "' + maVariableConst + '"');

// ----------------------------------------
// 2. Différence de portée dans un bloc {}
// ----------------------------------------
log('\n📌 2. Différence de portée dans un bloc {}:\n');

var varGlobal = "var - avant le bloc";
let letGlobal = "let - avant le bloc";

log('Avant le bloc:');
log('  varGlobal = "' + varGlobal + '"');
log('  letGlobal = "' + letGlobal + '"');

{
    // Bloc de code
    var varDansBloc = "var - dans le bloc (ACCESSIBLE dehors!)";
    let letDansBloc = "let - dans le bloc (NON accessible dehors)";
    const constDansBloc = "const - dans le bloc (NON accessible dehors)";
    
    log('\nDans le bloc {}:');
    log('  varDansBloc = "' + varDansBloc + '"');
    log('  letDansBloc = "' + letDansBloc + '"');
    log('  constDansBloc = "' + constDansBloc + '"');
}

log('\nAprès le bloc {}:');
log('  varDansBloc est accessible: "' + varDansBloc + '" ✅');

// Test pour let et const (elles ne sont pas accessibles hors du bloc)
try {
    // Cette ligne causerait une erreur: letDansBloc is not defined
    // console.log(letDansBloc);
    log('  letDansBloc n\'est PAS accessible hors du bloc ❌');
} catch (e) {
    log('  letDansBloc n\'est PAS accessible hors du bloc ❌');
}

try {
    // Cette ligne causerait une erreur: constDansBloc is not defined
    // console.log(constDansBloc);
    log('  constDansBloc n\'est PAS accessible hors du bloc ❌');
} catch (e) {
    log('  constDansBloc n\'est PAS accessible hors du bloc ❌');
}

// ----------------------------------------
// 3. Démonstration avec une boucle for
// ----------------------------------------
log('\n📌 3. Exemple avec une boucle for:\n');

// Avec var - la variable "fuit" hors de la boucle
for (var i = 0; i < 3; i++) {
    // boucle
}
log('Après boucle avec var: i = ' + i + ' (accessible!) ✅');

// Avec let - la variable reste dans la boucle
for (let j = 0; j < 3; j++) {
    // boucle
}
// log(j); // Erreur: j is not defined
log('Après boucle avec let: j n\'est PAS accessible ❌');

// ----------------------------------------
// 4. Question piège : réaffectation de const
// ----------------------------------------
log('\n📌 4. QUESTION PIÈGE : Que se passe-t-il si on réaffecte une const?\n');

const maConstante = "Valeur initiale";
log('const maConstante = "Valeur initiale"');
log('\nTentative de réaffectation: maConstante = "Nouvelle valeur"');

try {
    // Décommenter la ligne suivante causerait une erreur
    // maConstante = "Nouvelle valeur"; // TypeError: Assignment to constant variable
    log('⚠️  ERREUR: TypeError: Assignment to constant variable.');
    log('   Une const ne peut PAS être réaffectée!');
} catch (e) {
    log('⚠️  ERREUR: ' + e.message);
}

// Mais attention! Un objet const peut être MODIFIÉ (pas réaffecté)
log('\n📌 5. PIÈGE BONUS : const avec un objet\n');

const monObjet = { nom: "Alice", age: 25 };
log('const monObjet = { nom: "Alice", age: 25 }');
log('Objet initial: ' + JSON.stringify(monObjet));

// On peut modifier les propriétés!
monObjet.age = 30;
monObjet.ville = "Paris";
log('\nModification: monObjet.age = 30; monObjet.ville = "Paris"');
log('Objet modifié: ' + JSON.stringify(monObjet) + ' ✅');

log('\n✨ RÉSUMÉ:');
log('┌─────────┬────────────────────┬─────────────────┬──────────────┐');
log('│ Keyword │ Portée             │ Réaffectation   │ Redéclaration│');
log('├─────────┼────────────────────┼─────────────────┼──────────────┤');
log('│ var     │ Fonction           │ ✅ Oui          │ ✅ Oui       │');
log('│ let     │ Bloc {}            │ ✅ Oui          │ ❌ Non       │');
log('│ const   │ Bloc {}            │ ❌ Non          │ ❌ Non       │');
log('└─────────┴────────────────────┴─────────────────┴──────────────┘');

console.log('Exercice 1 terminé! Ouvrez la console pour plus de détails.');
