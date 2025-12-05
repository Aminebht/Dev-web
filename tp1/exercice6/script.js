// ============================================
// EXERCICE 6 – Classe ES6
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice6') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

log('=== EXERCICE 6 : Classe ES6 ===\n');

// ----------------------------------------
// 1. Définition de la classe Etudiant
// ----------------------------------------
log('📌 1. Définition de la classe Etudiant:\n');

class Etudiant {
    // Constructeur
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    
    // Méthode getMention()
    getMention() {
        if (this.note >= 16) {
            return "Très bien";
        } else if (this.note >= 14) {
            return "Bien";
        } else if (this.note >= 10) {
            return "Passable";
        } else {
            return "Échec";
        }
    }
    
    // Méthode pour afficher les infos
    getInfo() {
        return `${this.nom} - Note: ${this.note}/20 - Mention: ${this.getMention()}`;
    }
}

log('class Etudiant {');
log('    constructor(nom, note) {');
log('        this.nom = nom;');
log('        this.note = note;');
log('    }');
log('    ');
log('    getMention() {');
log('        if (this.note >= 16) return "Très bien";');
log('        else if (this.note >= 14) return "Bien";');
log('        else if (this.note >= 10) return "Passable";');
log('        else return "Échec";');
log('    }');
log('}');

// ----------------------------------------
// 2. Instanciation de 3 étudiants
// ----------------------------------------
log('\n📌 2. Instanciation de 3 étudiants:\n');

const etudiant1 = new Etudiant("Noor", 18);
const etudiant2 = new Etudiant("Ahmed", 14);
const etudiant3 = new Etudiant("Sara", 8);

log('const etudiant1 = new Etudiant("Noor", 18);');
log('const etudiant2 = new Etudiant("Ahmed", 14);');
log('const etudiant3 = new Etudiant("Sara", 8);');

// ----------------------------------------
// 3. Affichage des mentions
// ----------------------------------------
log('\n📌 3. Affichage des mentions:\n');

log('🎓 ' + etudiant1.getInfo());
log('🎓 ' + etudiant2.getInfo());
log('🎓 ' + etudiant3.getInfo());

// ----------------------------------------
// 4. Test de toutes les mentions
// ----------------------------------------
log('\n📌 4. Test de toutes les mentions:\n');

const testEtudiants = [
    new Etudiant("Alice", 20),
    new Etudiant("Bob", 16),
    new Etudiant("Charlie", 15),
    new Etudiant("Diana", 14),
    new Etudiant("Eve", 12),
    new Etudiant("Frank", 10),
    new Etudiant("Grace", 9),
    new Etudiant("Henry", 5)
];

log('┌────────────────┬────────┬──────────────┐');
log('│ Étudiant       │ Note   │ Mention      │');
log('├────────────────┼────────┼──────────────┤');

testEtudiants.forEach(e => {
    const nomPadded = e.nom.padEnd(14);
    const notePadded = (e.note + '/20').padEnd(6);
    const mention = e.getMention().padEnd(12);
    log(`│ ${nomPadded} │ ${notePadded} │ ${mention} │`);
});

log('└────────────────┴────────┴──────────────┘');

// ----------------------------------------
// 5. Barème des mentions
// ----------------------------------------
log('\n📌 5. Barème des mentions:\n');
log('┌────────────────┬─────────────────────┐');
log('│ Note           │ Mention             │');
log('├────────────────┼─────────────────────┤');
log('│ ≥ 16           │ 🏆 Très bien        │');
log('│ ≥ 14 et < 16   │ 👍 Bien             │');
log('│ ≥ 10 et < 14   │ ✅ Passable         │');
log('│ < 10           │ ❌ Échec            │');
log('└────────────────┴─────────────────────┘');

// ----------------------------------------
// 6. Bonus: Héritage (extension de classe)
// ----------------------------------------
log('\n📌 6. Bonus - Héritage de classe:\n');

class EtudiantAvance extends Etudiant {
    constructor(nom, note, specialite) {
        super(nom, note);  // Appel du constructeur parent
        this.specialite = specialite;
    }
    
    getInfo() {
        return `${this.nom} (${this.specialite}) - Note: ${this.note}/20 - ${this.getMention()}`;
    }
}

log('class EtudiantAvance extends Etudiant {');
log('    constructor(nom, note, specialite) {');
log('        super(nom, note);');
log('        this.specialite = specialite;');
log('    }');
log('}');

const etudiantInfo = new EtudiantAvance("Yasmine", 17, "Informatique");
log('\n🎓 ' + etudiantInfo.getInfo());

// ----------------------------------------
// Résumé
// ----------------------------------------
log('\n✨ RÉSUMÉ:\n');
log('┌────────────────────────────────────────────────────────────┐');
log('│ Classe:      class NomClasse { ... }                       │');
log('│ Constructeur: constructor(params) { this.prop = val; }     │');
log('│ Méthode:     nomMethode() { ... }                          │');
log('│ Instance:    const obj = new NomClasse(args);              │');
log('│ Héritage:    class Enfant extends Parent { ... }           │');
log('│ Super:       super(args) dans le constructeur enfant       │');
log('└────────────────────────────────────────────────────────────┘');

console.log('Exercice 6 terminé!');
