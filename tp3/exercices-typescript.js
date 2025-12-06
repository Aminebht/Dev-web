// ============================================
// TP3 - Exercices TypeScript
// Partie 4 : Révision des bases de TypeScript
// ============================================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ============================================
// 1. Variables avec types primitifs
// ============================================
// String - chaîne de caractères
var nom = "Belhadj";
var prenom = "Amine";
var message = "Bonjour, je suis ".concat(prenom, " ").concat(nom);
// Number - nombres (entiers et décimaux)
var age = 20;
var note = 15.5;
var annee = 2025;
// Boolean - valeurs booléennes
var estEtudiant = true;
var estDiplome = false;
// Array - tableaux typés
var notes = [12, 15, 18, 14, 16];
var prenoms = ["Alice", "Bob", "Charlie"];
// Tuple - tableau avec types fixes
var etudiantTuple = ["Noor", 20, true];
// Any - type dynamique (à éviter si possible)
var valeurDynamique = "texte";
valeurDynamique = 42; // Pas d'erreur
// Null et Undefined
var valeurNull = null;
var valeurUndefined = undefined;
// Void - absence de valeur (pour les fonctions)
function afficherMessage(msg) {
    console.log(msg);
}
// Never - fonction qui ne retourne jamais
function erreurFatale(message) {
    throw new Error(message);
}
console.log("=== Partie 4: Variables avec types primitifs ===");
console.log("Nom: ".concat(nom, ", Pr\u00E9nom: ").concat(prenom));
console.log("Age: ".concat(age, ", Note: ").concat(note));
console.log("Est \u00E9tudiant: ".concat(estEtudiant));
console.log("Notes: ".concat(notes));
console.log("Tuple: ".concat(etudiantTuple));
// ============================================
// 2. Fonction typée - Calcul de somme
// ============================================
/**
 * Calcule la somme de deux nombres
 * @param a - Premier nombre
 * @param b - Deuxième nombre
 * @returns La somme des deux nombres
 */
function somme(a, b) {
    return a + b;
}
// Fonction fléchée typée
var multiplication = function (a, b) { return a * b; };
// Fonction avec paramètre optionnel
function saluer(nom, titre) {
    if (titre) {
        return "Bonjour ".concat(titre, " ").concat(nom, "!");
    }
    return "Bonjour ".concat(nom, "!");
}
// Fonction avec valeur par défaut
function calculerMoyenne(notes, coefficient) {
    if (coefficient === void 0) { coefficient = 1; }
    var total = notes.reduce(function (acc, note) { return acc + note; }, 0);
    return (total / notes.length) * coefficient;
}
console.log("\n=== Partie 4: Fonctions typées ===");
console.log("Somme de 5 + 3 = ".concat(somme(5, 3)));
console.log("Multiplication de 4 * 7 = ".concat(multiplication(4, 7)));
console.log("Saluer: ".concat(saluer("Noor")));
console.log("Saluer avec titre: ".concat(saluer("Noor", "Dr.")));
console.log("Moyenne des notes: ".concat(calculerMoyenne(notes)));
// Utilisation de l'interface
var etudiant1 = {
    id: 1,
    nom: "Ben Ahmed",
    prenom: "Noor",
    age: 20
};
var etudiant2 = {
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
var Etudiant = /** @class */ (function () {
    /**
     * Constructeur de la classe Etudiant
     */
    function Etudiant(id, nom, prenom, age, email) {
        // Propriétés supplémentaires
        this.notes = [];
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
    Etudiant.prototype.afficherInfos = function () {
        console.log("┌─────────────────────────────────────┐");
        console.log("\u2502 ID: ".concat(this.id));
        console.log("\u2502 Nom: ".concat(this.nom));
        console.log("\u2502 Pr\u00E9nom: ".concat(this.prenom));
        console.log("\u2502 Age: ".concat(this.age, " ans"));
        if (this.email) {
            console.log("\u2502 Email: ".concat(this.email));
        }
        console.log("\u2502 Date d'inscription: ".concat(this.dateInscription.toLocaleDateString()));
        if (this.notes.length > 0) {
            console.log("\u2502 Notes: ".concat(this.notes.join(", ")));
            console.log("\u2502 Moyenne: ".concat(this.calculerMoyenne().toFixed(2)));
        }
        console.log("└─────────────────────────────────────┘");
    };
    /**
     * Ajoute une note à l'étudiant
     */
    Etudiant.prototype.ajouterNote = function (note) {
        if (note >= 0 && note <= 20) {
            this.notes.push(note);
        }
        else {
            console.log("Note invalide (doit être entre 0 et 20)");
        }
    };
    /**
     * Calcule la moyenne des notes
     */
    Etudiant.prototype.calculerMoyenne = function () {
        if (this.notes.length === 0)
            return 0;
        var total = this.notes.reduce(function (acc, note) { return acc + note; }, 0);
        return total / this.notes.length;
    };
    /**
     * Retourne le nom complet de l'étudiant
     */
    Etudiant.prototype.getNomComplet = function () {
        return "".concat(this.prenom, " ").concat(this.nom);
    };
    return Etudiant;
}());
console.log("\n=== Partie 4: Classe Etudiant ===");
// Création d'instances
var etudiantA = new Etudiant(1, "Ben Ahmed", "Noor", 20, "noor@email.com");
var etudiantB = new Etudiant(2, "Trabelsi", "Ahmed", 21);
// Ajout de notes
etudiantA.ajouterNote(15);
etudiantA.ajouterNote(18);
etudiantA.ajouterNote(14);
etudiantB.ajouterNote(12);
etudiantB.ajouterNote(16);
// Affichage des informations
etudiantA.afficherInfos();
etudiantB.afficherInfos();
console.log("\nNom complet de l'\u00E9tudiant A: ".concat(etudiantA.getNomComplet()));
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
function identite(valeur) {
    return valeur;
}
console.log("=== 1. Types Génériques ===");
console.log("identite<string>(\"Hello\") = ".concat(identite("Hello")));
console.log("identite<number>(42) = ".concat(identite(42)));
/**
 * Fonction générique qui crée un tableau de valeurs du même type
 * @param valeur - La valeur à répéter
 * @param fois - Le nombre de répétitions
 * @returns Un tableau contenant la valeur répétée
 */
function creerTableau(valeur, fois) {
    var resultat = [];
    for (var i = 0; i < fois; i++) {
        resultat.push(valeur);
    }
    return resultat;
}
console.log("creerTableau<string>(\"A\", 3) = ".concat(JSON.stringify(creerTableau("A", 3))));
console.log("creerTableau<number>(7, 4) = ".concat(JSON.stringify(creerTableau(7, 4))));
// Fonction générique avec plusieurs types
function fusionner(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var personne = { nom: "Noor" };
var details = { age: 20, ville: "Tunis" };
var personneFusionnee = fusionner(personne, details);
console.log("Fusion d'objets:", personneFusionnee);
var reponseString = {
    succes: true,
    donnees: "Opération réussie",
    message: "OK"
};
var reponseNombre = {
    succes: true,
    donnees: [1, 2, 3, 4, 5],
    message: "Nombres récupérés"
};
console.log("Réponse string:", reponseString);
console.log("Réponse nombres:", reponseNombre);
// Classe générique
var Boite = /** @class */ (function () {
    function Boite(valeur) {
        this.contenu = valeur;
    }
    Boite.prototype.getContenu = function () {
        return this.contenu;
    };
    Boite.prototype.setContenu = function (valeur) {
        this.contenu = valeur;
    };
    return Boite;
}());
var boiteString = new Boite("Cadeau");
var boiteNombre = new Boite(100);
console.log("Boite<string>: ".concat(boiteString.getContenu()));
console.log("Boite<number>: ".concat(boiteNombre.getContenu()));
// ============================================
// 2. Unions de types et Types optionnels
// ============================================
/**
 * UNION TYPES - Permettent à une variable d'accepter
 * plusieurs types différents avec l'opérateur |
 */
console.log("\n=== 2. Unions de Types et Types Optionnels ===");
// Union de types simple
var identifiant;
identifiant = "ABC123";
console.log("identifiant (string): ".concat(identifiant));
identifiant = 12345;
console.log("identifiant (number): ".concat(identifiant));
// Fonction avec union de types
function afficherIdentifiant(id) {
    // Type guard - vérification du type à l'exécution
    if (typeof id === "string") {
        console.log("ID (string, majuscules): ".concat(id.toUpperCase()));
    }
    else {
        console.log("ID (number, arrondi): ".concat(Math.round(id)));
    }
}
afficherIdentifiant("abc123");
afficherIdentifiant(456.789);
function traiterResultat(resultat) {
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
function appelAPI(config) {
    var _a, _b;
    // Valeurs par défaut pour les propriétés optionnelles
    var methode = (_a = config.methode) !== null && _a !== void 0 ? _a : "GET";
    var timeout = (_b = config.timeout) !== null && _b !== void 0 ? _b : 5000;
    console.log("\nAppel API:");
    console.log("  URL: ".concat(config.url));
    console.log("  M\u00E9thode: ".concat(methode));
    console.log("  Timeout: ".concat(timeout, "ms"));
    if (config.headers) {
        console.log("  Headers: ".concat(JSON.stringify(config.headers)));
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
function trouverUtilisateur(id) {
    var _a;
    var utilisateurs = {
        1: "Alice",
        2: "Bob",
        3: "Charlie"
    };
    return (_a = utilisateurs[id]) !== null && _a !== void 0 ? _a : null;
}
console.log("\nUtilisateur 1: ".concat(trouverUtilisateur(1)));
console.log("Utilisateur 99: ".concat(trouverUtilisateur(99)));
// ============================================
// 3. Énumérations (Enums)
// ============================================
/**
 * ENUMS - Permettent de définir un ensemble de constantes nommées.
 * Utiles pour représenter un groupe de valeurs liées.
 */
console.log("\n=== 3. Énumérations (Enums) ===");
// Enum numérique (valeurs auto-incrémentées)
var JourSemaine;
(function (JourSemaine) {
    JourSemaine[JourSemaine["Lundi"] = 1] = "Lundi";
    JourSemaine[JourSemaine["Mardi"] = 2] = "Mardi";
    JourSemaine[JourSemaine["Mercredi"] = 3] = "Mercredi";
    JourSemaine[JourSemaine["Jeudi"] = 4] = "Jeudi";
    JourSemaine[JourSemaine["Vendredi"] = 5] = "Vendredi";
    JourSemaine[JourSemaine["Samedi"] = 6] = "Samedi";
    JourSemaine[JourSemaine["Dimanche"] = 7] = "Dimanche";
})(JourSemaine || (JourSemaine = {}));
console.log("Lundi = ".concat(JourSemaine.Lundi));
console.log("Vendredi = ".concat(JourSemaine.Vendredi));
console.log("Jour 3 = ".concat(JourSemaine[3])); // Accès inverse
// Enum string (valeurs explicites)
var Couleur;
(function (Couleur) {
    Couleur["Rouge"] = "#FF0000";
    Couleur["Vert"] = "#00FF00";
    Couleur["Bleu"] = "#0000FF";
    Couleur["Jaune"] = "#FFFF00";
    Couleur["Noir"] = "#000000";
    Couleur["Blanc"] = "#FFFFFF";
})(Couleur || (Couleur = {}));
console.log("Couleur Rouge = ".concat(Couleur.Rouge));
console.log("Couleur Bleu = ".concat(Couleur.Bleu));
// Enum pour les statuts d'une tâche
var StatutTache;
(function (StatutTache) {
    StatutTache["NonCommencee"] = "NON_COMMENCEE";
    StatutTache["EnCours"] = "EN_COURS";
    StatutTache["EnPause"] = "EN_PAUSE";
    StatutTache["Terminee"] = "TERMINEE";
    StatutTache["Annulee"] = "ANNULEE";
})(StatutTache || (StatutTache = {}));
// Enum numérique pour la priorité
var Priorite;
(function (Priorite) {
    Priorite[Priorite["Basse"] = 1] = "Basse";
    Priorite[Priorite["Moyenne"] = 2] = "Moyenne";
    Priorite[Priorite["Haute"] = 3] = "Haute";
    Priorite[Priorite["Critique"] = 4] = "Critique";
})(Priorite || (Priorite = {}));
// Fonction utilisant les enums
function afficherTache(tache) {
    var _a, _b;
    var iconeStatut = (_a = {},
        _a[StatutTache.NonCommencee] = "⬜",
        _a[StatutTache.EnCours] = "🔄",
        _a[StatutTache.EnPause] = "⏸️",
        _a[StatutTache.Terminee] = "✅",
        _a[StatutTache.Annulee] = "❌",
        _a);
    var iconePriorite = (_b = {},
        _b[Priorite.Basse] = "🟢",
        _b[Priorite.Moyenne] = "🟡",
        _b[Priorite.Haute] = "🟠",
        _b[Priorite.Critique] = "🔴",
        _b);
    console.log("\n".concat(iconeStatut[tache.statut], " T\u00E2che #").concat(tache.id, ": ").concat(tache.titre));
    console.log("   Statut: ".concat(tache.statut));
    console.log("   Priorit\u00E9: ".concat(iconePriorite[tache.priorite], " ").concat(Priorite[tache.priorite]));
}
// Création de tâches
var taches = [
    { id: 1, titre: "Apprendre TypeScript", statut: StatutTache.EnCours, priorite: Priorite.Haute },
    { id: 2, titre: "Créer un projet", statut: StatutTache.NonCommencee, priorite: Priorite.Moyenne },
    { id: 3, titre: "Réviser JavaScript", statut: StatutTache.Terminee, priorite: Priorite.Basse }
];
taches.forEach(afficherTache);
function deplacer(direction) {
    console.log("\nD\u00E9placement vers: ".concat(direction));
}
deplacer("HAUT" /* Direction.Haut */);
deplacer("DROITE" /* Direction.Droite */);
// ============================================
// Résumé et conclusion
// ============================================
console.log("\n========================================");
console.log("✅ Partie 5 terminée - TypeScript Avancé maîtrisé!");
console.log("========================================");
console.log("\n\uD83D\uDCDA Concepts couverts:\n   1. Generics: Fonctions, interfaces et classes g\u00E9n\u00E9riques\n   2. Unions: string | number, types litt\u00E9raux, nullable\n   3. Optionnels: Propri\u00E9t\u00E9s et param\u00E8tres optionnels\n   4. Enums: Num\u00E9riques, string, et const enums\n");
