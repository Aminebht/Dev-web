// ============================================
// EXERCICE 5 – Objet simple
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice5') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 5 : Objet Simple ===\n');

// ----------------------------------------
// 1. Création de l'objet livre
// ----------------------------------------
log('📌 1. Création de l\'objet livre:\n');

const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    
    // Méthode getInfo()
    getInfo() {
        return `"${this.titre}" écrit par ${this.auteur} en ${this.annee}`;
    }
};

log('const livre = {');
log('    titre: "Le Petit Prince",');
log('    auteur: "Antoine de Saint-Exupéry",');
log('    annee: 1943,');
log('    ');
log('    getInfo() {');
log('        return `"${this.titre}" écrit par ${this.auteur} en ${this.annee}`;');
log('    }');
log('};');

// ----------------------------------------
// 2. Accès aux propriétés
// ----------------------------------------
log('\n📌 2. Accès aux propriétés:\n');

log('livre.titre = "' + livre.titre + '"');
log('livre.auteur = "' + livre.auteur + '"');
log('livre.annee = ' + livre.annee);

// ----------------------------------------
// 3. Appel de la méthode getInfo()
// ----------------------------------------
log('\n📌 3. Appel de la méthode getInfo():\n');

log('livre.getInfo() =');
log('➡️  "' + livre.getInfo() + '"');

// ----------------------------------------
// 4. Autres exemples de livres
// ----------------------------------------
log('\n📌 4. Autres exemples de livres:\n');

const livre2 = {
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    getInfo() {
        return `"${this.titre}" écrit par ${this.auteur} en ${this.annee}`;
    }
};

const livre3 = {
    titre: "L'Étranger",
    auteur: "Albert Camus",
    annee: 1942,
    getInfo() {
        return `"${this.titre}" écrit par ${this.auteur} en ${this.annee}`;
    }
};

log('📚 ' + livre2.getInfo());
log('📚 ' + livre3.getInfo());

// ----------------------------------------
// 5. Syntaxe alternative avec fonction fléchée (attention au this!)
// ----------------------------------------
log('\n📌 5. Note sur les fonctions fléchées:\n');

log('⚠️  ATTENTION: Les fonctions fléchées ne fonctionnent pas');
log('   comme méthodes d\'objet car elles n\'ont pas leur propre "this".');
log('');
log('   ❌ getInfo: () => `${this.titre}...`  // this sera undefined');
log('   ✅ getInfo() { return `${this.titre}...` }  // this = l\'objet');

// ----------------------------------------
// 6. Factory function (bonus)
// ----------------------------------------
log('\n📌 6. Factory function (bonus):\n');

function creerLivre(titre, auteur, annee) {
    return {
        titre,
        auteur,
        annee,
        getInfo() {
            return `"${this.titre}" écrit par ${this.auteur} en ${this.annee}`;
        }
    };
}

log('function creerLivre(titre, auteur, annee) {');
log('    return { titre, auteur, annee, getInfo() {...} };');
log('}');

const livre4 = creerLivre("Les Misérables", "Victor Hugo", 1862);
log('\nconst livre4 = creerLivre("Les Misérables", "Victor Hugo", 1862);');
log('📚 ' + livre4.getInfo());

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Objet: const obj = { prop: valeur, methode() {...} }       │');
log('│ Accès: obj.prop ou obj["prop"]                             │');
log('│ Méthode: obj.methode()                                     │');
log('│ this: référence l\'objet courant dans une méthode          │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 5 terminé!');
