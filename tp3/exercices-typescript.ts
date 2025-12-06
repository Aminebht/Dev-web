// ============================================
// TP3 - Exercices TypeScript
// Partie 4 : Révision des bases de TypeScript
// ============================================

// ============================================
// 1. Variables avec types primitifs
// ============================================

// String - chaîne de caractères
let nom: string = "Noor";
let prenom: string = "Ben Ahmed";
let message: string = `Bonjour, je suis ${prenom} ${nom}`;

// Number - nombres (entiers et décimaux)
let age: number = 20;
let note: number = 15.5;
let annee: number = 2025;

// Boolean - valeurs booléennes
let estEtudiant: boolean = true;
let estDiplome: boolean = false;

// Array - tableaux typés
let notes: number[] = [12, 15, 18, 14, 16];
let prenoms: Array<string> = ["Alice", "Bob", "Charlie"];

// Tuple - tableau avec types fixes
let etudiantTuple: [string, number, boolean] = ["Noor", 20, true];

// Any - type dynamique (à éviter si possible)
let valeurDynamique: any = "texte";
valeurDynamique = 42; // Pas d'erreur

// Null et Undefined
let valeurNull: null = null;
let valeurUndefined: undefined = undefined;

// Void - absence de valeur (pour les fonctions)
function afficherMessage(msg: string): void {
    console.log(msg);
}

// Never - fonction qui ne retourne jamais
function erreurFatale(message: string): never {
    throw new Error(message);
}

console.log("=== Partie 4: Variables avec types primitifs ===");
console.log(`Nom: ${nom}, Prénom: ${prenom}`);
console.log(`Age: ${age}, Note: ${note}`);
console.log(`Est étudiant: ${estEtudiant}`);
console.log(`Notes: ${notes}`);
console.log(`Tuple: ${etudiantTuple}`);

// ============================================
// 2. Fonction typée - Calcul de somme
// ============================================

/**
 * Calcule la somme de deux nombres
 * @param a - Premier nombre
 * @param b - Deuxième nombre
 * @returns La somme des deux nombres
 */
function somme(a: number, b: number): number {
    return a + b;
}

// Fonction fléchée typée
const multiplication = (a: number, b: number): number => a * b;

// Fonction avec paramètre optionnel
function saluer(nom: string, titre?: string): string {
    if (titre) {
        return `Bonjour ${titre} ${nom}!`;
    }
    return `Bonjour ${nom}!`;
}

// Fonction avec valeur par défaut
function calculerMoyenne(notes: number[], coefficient: number = 1): number {
    const total = notes.reduce((acc, note) => acc + note, 0);
    return (total / notes.length) * coefficient;
}

console.log("\n=== Partie 4: Fonctions typées ===");
console.log(`Somme de 5 + 3 = ${somme(5, 3)}`);
console.log(`Multiplication de 4 * 7 = ${multiplication(4, 7)}`);
console.log(`Saluer: ${saluer("Noor")}`);
console.log(`Saluer avec titre: ${saluer("Noor", "Dr.")}`);
console.log(`Moyenne des notes: ${calculerMoyenne(notes)}`);

// ============================================
// 3. Interface Etudiant
// ============================================

/**
 * Interface définissant la structure d'un étudiant
 */
interface IEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    email?: string;  // Propriété optionnelle
}

// Utilisation de l'interface
const etudiant1: IEtudiant = {
    id: 1,
    nom: "Ben Ahmed",
    prenom: "Noor",
    age: 20
};

const etudiant2: IEtudiant = {
    id: 2,
    nom: "Trabelsi",
    prenom: "Sara",
    age: 22,
    email: "sara.trabelsi@email.com"
};

console.log("\n=== Partie 4: Interface Etudiant ===");
console.log("Etudiant 1:", etudiant1);
console.log("Etudiant 2:", etudiant2);

// ============================================
// 4. Classe Etudiant implémentant l'interface
// ============================================

/**
 * Classe Etudiant qui implémente l'interface IEtudiant
 */
class Etudiant implements IEtudiant {
    // Propriétés de l'interface
    id: number;
    nom: string;
    prenom: string;
    age: number;
    email?: string;

    // Propriétés supplémentaires
    private notes: number[] = [];
    readonly dateInscription: Date;

    /**
     * Constructeur de la classe Etudiant
     */
    constructor(id: number, nom: string, prenom: string, age: number, email?: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.email = email;
        this.dateInscription = new Date();
    }

    /**
     * Affiche les informations de l'étudiant
     */
    afficherInfos(): void {
        console.log("┌─────────────────────────────────────┐");
        console.log(`│ ID: ${this.id}`);
        console.log(`│ Nom: ${this.nom}`);
        console.log(`│ Prénom: ${this.prenom}`);
        console.log(`│ Age: ${this.age} ans`);
        if (this.email) {
            console.log(`│ Email: ${this.email}`);
        }
        console.log(`│ Date d'inscription: ${this.dateInscription.toLocaleDateString()}`);
        if (this.notes.length > 0) {
            console.log(`│ Notes: ${this.notes.join(", ")}`);
            console.log(`│ Moyenne: ${this.calculerMoyenne().toFixed(2)}`);
        }
        console.log("└─────────────────────────────────────┘");
    }

    /**
     * Ajoute une note à l'étudiant
     */
    ajouterNote(note: number): void {
        if (note >= 0 && note <= 20) {
            this.notes.push(note);
        } else {
            console.log("Note invalide (doit être entre 0 et 20)");
        }
    }

    /**
     * Calcule la moyenne des notes
     */
    calculerMoyenne(): number {
        if (this.notes.length === 0) return 0;
        const total = this.notes.reduce((acc, note) => acc + note, 0);
        return total / this.notes.length;
    }

    /**
     * Retourne le nom complet de l'étudiant
     */
    getNomComplet(): string {
        return `${this.prenom} ${this.nom}`;
    }
}

console.log("\n=== Partie 4: Classe Etudiant ===");

// Création d'instances
const etudiantA = new Etudiant(1, "Ben Ahmed", "Noor", 20, "noor@email.com");
const etudiantB = new Etudiant(2, "Trabelsi", "Ahmed", 21);

// Ajout de notes
etudiantA.ajouterNote(15);
etudiantA.ajouterNote(18);
etudiantA.ajouterNote(14);

etudiantB.ajouterNote(12);
etudiantB.ajouterNote(16);

// Affichage des informations
etudiantA.afficherInfos();
etudiantB.afficherInfos();

console.log(`\nNom complet de l'étudiant A: ${etudiantA.getNomComplet()}`);

console.log("\n✅ Partie 4 terminée - Bases de TypeScript maîtrisées!");
