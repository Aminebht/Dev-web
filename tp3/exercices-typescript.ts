// ============================================
// TP3 - Exercices TypeScript
// Partie 4 : Révision des bases de TypeScript
// ============================================

// ============================================
// 1. Variables avec types primitifs
// ============================================

// String - chaîne de caractères
let nom: string = "Belhadj";
let prenom: string = "Amine";
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

// ============================================
// ============================================
// Partie 5 : Approfondissement de TypeScript
// ============================================
// ============================================

console.log("\n\n========================================");
console.log("=== Partie 5: TypeScript Avancé ===");
console.log("========================================\n");

// ============================================
// 1. Types Génériques (Generics)
// ============================================

/**
 * GENERICS - Permettent de créer des composants réutilisables
 * qui fonctionnent avec différents types tout en conservant
 * la sécurité de typage.
 */

// Fonction générique simple
// T est un "type parameter" qui sera déterminé à l'utilisation
function identite<T>(valeur: T): T {
    return valeur;
}

console.log("=== 1. Types Génériques ===");
console.log(`identite<string>("Hello") = ${identite<string>("Hello")}`);
console.log(`identite<number>(42) = ${identite<number>(42)}`);

/**
 * Fonction générique qui crée un tableau de valeurs du même type
 * @param valeur - La valeur à répéter
 * @param fois - Le nombre de répétitions
 * @returns Un tableau contenant la valeur répétée
 */
function creerTableau<T>(valeur: T, fois: number): T[] {
    const resultat: T[] = [];
    for (let i = 0; i < fois; i++) {
        resultat.push(valeur);
    }
    return resultat;
}

console.log(`creerTableau<string>("A", 3) = ${JSON.stringify(creerTableau<string>("A", 3))}`);
console.log(`creerTableau<number>(7, 4) = ${JSON.stringify(creerTableau<number>(7, 4))}`);

// Fonction générique avec plusieurs types
function fusionner<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 } as T & U;
}

const personne = { nom: "Noor" };
const details = { age: 20, ville: "Tunis" };
const personneFusionnee = fusionner(personne, details);
console.log("Fusion d'objets:", personneFusionnee);

// Interface générique
interface Reponse<T> {
    succes: boolean;
    donnees: T;
    message: string;
}

const reponseString: Reponse<string> = {
    succes: true,
    donnees: "Opération réussie",
    message: "OK"
};

const reponseNombre: Reponse<number[]> = {
    succes: true,
    donnees: [1, 2, 3, 4, 5],
    message: "Nombres récupérés"
};

console.log("Réponse string:", reponseString);
console.log("Réponse nombres:", reponseNombre);

// Classe générique
class Boite<T> {
    private contenu: T;

    constructor(valeur: T) {
        this.contenu = valeur;
    }

    getContenu(): T {
        return this.contenu;
    }

    setContenu(valeur: T): void {
        this.contenu = valeur;
    }
}

const boiteString = new Boite<string>("Cadeau");
const boiteNombre = new Boite<number>(100);

console.log(`Boite<string>: ${boiteString.getContenu()}`);
console.log(`Boite<number>: ${boiteNombre.getContenu()}`);

// ============================================
// 2. Unions de types et Types optionnels
// ============================================

/**
 * UNION TYPES - Permettent à une variable d'accepter
 * plusieurs types différents avec l'opérateur |
 */

console.log("\n=== 2. Unions de Types et Types Optionnels ===");

// Union de types simple
let identifiant: string | number;
identifiant = "ABC123";
console.log(`identifiant (string): ${identifiant}`);
identifiant = 12345;
console.log(`identifiant (number): ${identifiant}`);

// Fonction avec union de types
function afficherIdentifiant(id: string | number): void {
    // Type guard - vérification du type à l'exécution
    if (typeof id === "string") {
        console.log(`ID (string, majuscules): ${id.toUpperCase()}`);
    } else {
        console.log(`ID (number, arrondi): ${Math.round(id)}`);
    }
}

afficherIdentifiant("abc123");
afficherIdentifiant(456.789);

// Type alias avec union
type Resultat = "succes" | "erreur" | "en_attente";

function traiterResultat(resultat: Resultat): string {
    switch (resultat) {
        case "succes":
            return "✅ Opération réussie";
        case "erreur":
            return "❌ Une erreur est survenue";
        case "en_attente":
            return "⏳ En cours de traitement";
    }
}

console.log(traiterResultat("succes"));
console.log(traiterResultat("erreur"));

// Types optionnels dans les fonctions
interface ConfigurationAPI {
    url: string;
    methode?: "GET" | "POST" | "PUT" | "DELETE";  // Optionnel avec union
    timeout?: number;  // Optionnel
    headers?: Record<string, string>;  // Optionnel
}

function appelAPI(config: ConfigurationAPI): void {
    // Valeurs par défaut pour les propriétés optionnelles
    const methode = config.methode ?? "GET";
    const timeout = config.timeout ?? 5000;
    
    console.log(`\nAppel API:`);
    console.log(`  URL: ${config.url}`);
    console.log(`  Méthode: ${methode}`);
    console.log(`  Timeout: ${timeout}ms`);
    if (config.headers) {
        console.log(`  Headers: ${JSON.stringify(config.headers)}`);
    }
}

// Appel avec configuration minimale
appelAPI({ url: "https://api.example.com/users" });

// Appel avec configuration complète
appelAPI({
    url: "https://api.example.com/data",
    methode: "POST",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
});

// Union avec null (Nullable types)
function trouverUtilisateur(id: number): string | null {
    const utilisateurs: Record<number, string> = {
        1: "Alice",
        2: "Bob",
        3: "Charlie"
    };
    return utilisateurs[id] ?? null;
}

console.log(`\nUtilisateur 1: ${trouverUtilisateur(1)}`);
console.log(`Utilisateur 99: ${trouverUtilisateur(99)}`);

// ============================================
// 3. Énumérations (Enums)
// ============================================

/**
 * ENUMS - Permettent de définir un ensemble de constantes nommées.
 * Utiles pour représenter un groupe de valeurs liées.
 */

console.log("\n=== 3. Énumérations (Enums) ===");

// Enum numérique (valeurs auto-incrémentées)
enum JourSemaine {
    Lundi = 1,
    Mardi,
    Mercredi,
    Jeudi,
    Vendredi,
    Samedi,
    Dimanche
}

console.log(`Lundi = ${JourSemaine.Lundi}`);
console.log(`Vendredi = ${JourSemaine.Vendredi}`);
console.log(`Jour 3 = ${JourSemaine[3]}`);  // Accès inverse

// Enum string (valeurs explicites)
enum Couleur {
    Rouge = "#FF0000",
    Vert = "#00FF00",
    Bleu = "#0000FF",
    Jaune = "#FFFF00",
    Noir = "#000000",
    Blanc = "#FFFFFF"
}

console.log(`Couleur Rouge = ${Couleur.Rouge}`);
console.log(`Couleur Bleu = ${Couleur.Bleu}`);

// Enum pour les statuts d'une tâche
enum StatutTache {
    NonCommencee = "NON_COMMENCEE",
    EnCours = "EN_COURS",
    EnPause = "EN_PAUSE",
    Terminee = "TERMINEE",
    Annulee = "ANNULEE"
}

// Utilisation de l'enum dans une interface
interface Tache {
    id: number;
    titre: string;
    statut: StatutTache;
    priorite: Priorite;
}

// Enum numérique pour la priorité
enum Priorite {
    Basse = 1,
    Moyenne = 2,
    Haute = 3,
    Critique = 4
}

// Fonction utilisant les enums
function afficherTache(tache: Tache): void {
    const iconeStatut: Record<StatutTache, string> = {
        [StatutTache.NonCommencee]: "⬜",
        [StatutTache.EnCours]: "🔄",
        [StatutTache.EnPause]: "⏸️",
        [StatutTache.Terminee]: "✅",
        [StatutTache.Annulee]: "❌"
    };

    const iconePriorite: Record<Priorite, string> = {
        [Priorite.Basse]: "🟢",
        [Priorite.Moyenne]: "🟡",
        [Priorite.Haute]: "🟠",
        [Priorite.Critique]: "🔴"
    };

    console.log(`\n${iconeStatut[tache.statut]} Tâche #${tache.id}: ${tache.titre}`);
    console.log(`   Statut: ${tache.statut}`);
    console.log(`   Priorité: ${iconePriorite[tache.priorite]} ${Priorite[tache.priorite]}`);
}

// Création de tâches
const taches: Tache[] = [
    { id: 1, titre: "Apprendre TypeScript", statut: StatutTache.EnCours, priorite: Priorite.Haute },
    { id: 2, titre: "Créer un projet", statut: StatutTache.NonCommencee, priorite: Priorite.Moyenne },
    { id: 3, titre: "Réviser JavaScript", statut: StatutTache.Terminee, priorite: Priorite.Basse }
];

taches.forEach(afficherTache);

// Const enum (optimisé, inline à la compilation)
const enum Direction {
    Haut = "HAUT",
    Bas = "BAS",
    Gauche = "GAUCHE",
    Droite = "DROITE"
}

function deplacer(direction: Direction): void {
    console.log(`\nDéplacement vers: ${direction}`);
}

deplacer(Direction.Haut);
deplacer(Direction.Droite);

// ============================================
// Résumé et conclusion
// ============================================

console.log("\n========================================");
console.log("✅ Partie 5 terminée - TypeScript Avancé maîtrisé!");
console.log("========================================");
console.log(`
📚 Concepts couverts:
   1. Generics: Fonctions, interfaces et classes génériques
   2. Unions: string | number, types littéraux, nullable
   3. Optionnels: Propriétés et paramètres optionnels
   4. Enums: Numériques, string, et const enums
`);

