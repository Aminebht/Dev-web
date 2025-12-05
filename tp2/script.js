// ============================================
// TP2 - Gestion de Tâches
// Étape 9 : Persistance avec LocalStorage
// ============================================

// --- Déclaration des variables ---

// Clé pour le localStorage
const STORAGE_KEY = 'todolist_taches';

// Liste des tâches (tableau d'objets)
// Chaque tâche est un objet avec: { texte, terminee }
let taches = [];

// Référence aux éléments du DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const clearAllBtn = document.getElementById('clearAllBtn');
const totalCount = document.getElementById('totalCount');
const pendingCount = document.getElementById('pendingCount');
const completedCount = document.getElementById('completedCount');

// --- Message de bienvenue ---
console.log('🚀 TP2 - Gestionnaire de Tâches');
console.log('📋 Application initialisée');
console.log('%c Bienvenue dans le Gestionnaire de Tâches! ', 'background: #00d9ff; color: #1a1a2e; font-size: 16px; padding: 5px;');

// ============================================
// Étape 9 : LocalStorage
// ============================================

/**
 * Sauvegarde les tâches dans le localStorage
 */
function sauvegarderTaches() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(taches));
    console.log('💾 Tâches sauvegardées dans localStorage');
}

/**
 * Charge les tâches depuis le localStorage
 */
function chargerTaches() {
    const donnees = localStorage.getItem(STORAGE_KEY);
    if (donnees) {
        taches = JSON.parse(donnees);
        console.log('📂 Tâches chargées depuis localStorage:', taches);
    } else {
        taches = [];
        console.log('📂 Aucune tâche sauvegardée trouvée');
    }
}

/**
 * Ajoute une nouvelle tâche (objet) au tableau
 * @param {string} texte - Le texte de la tâche
 */
function ajouterTache(texte) {
    // Vérifier que le texte n'est pas vide
    if (!texte || texte.trim() === '') {
        alert('Veuillez entrer une tâche!');
        return false;
    }
    
    // Créer un objet tâche
    const nouvelleTache = {
        texte: texte.trim(),
        terminee: false
    };
    
    // Ajouter au tableau
    taches.push(nouvelleTache);
    
    // Rafraîchir l'affichage
    afficherTaches();
    
    console.log('✅ Tâche ajoutée:', nouvelleTache);
    console.log('📋 Tableau des tâches:', taches);
    
    // Sauvegarder dans localStorage
    sauvegarderTaches();
    
    return true;
}

/**
 * Affiche toutes les tâches du tableau dans le DOM
 */
function afficherTaches() {
    // Vider la liste actuelle
    taskList.innerHTML = '';
    
    // Parcourir le tableau avec une boucle
    for (let i = 0; i < taches.length; i++) {
        const tache = taches[i];
        const li = creerElementTache(tache, i);
        taskList.appendChild(li);
    }
    
    // Afficher un message si la liste est vide
    if (taches.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.textContent = 'Aucune tâche pour le moment. Ajoutez-en une!';
        taskList.appendChild(emptyMsg);
    }
    
    // Mettre à jour les compteurs
    mettreAJourCompteurs();
}

/**
 * Met à jour les compteurs de tâches
 */
function mettreAJourCompteurs() {
    const total = taches.length;
    const terminees = taches.filter(t => t.terminee).length;
    const enCours = total - terminees;
    
    totalCount.textContent = total;
    pendingCount.textContent = enCours;
    completedCount.textContent = terminees;
    
    // Désactiver le bouton "Tout supprimer" si pas de tâches
    clearAllBtn.disabled = total === 0;
}

/**
 * Crée un élément DOM pour une tâche
 * @param {Object} tache - L'objet tâche { texte, terminee }
 * @param {number} index - L'index de la tâche dans le tableau
 * @returns {HTMLElement} - L'élément li créé
 */
function creerElementTache(tache, index) {
    // Créer un élément <li>
    const li = document.createElement('li');
    li.dataset.index = index;
    
    // Ajouter la classe completed si la tâche est terminée
    if (tache.terminee) {
        li.classList.add('completed');
    }
    
    // Créer le span pour le texte de la tâche
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = tache.texte;
    
    // Créer le conteneur pour les boutons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';
    
    // Créer le bouton "Terminer"
    const btnComplete = document.createElement('button');
    btnComplete.className = 'btn-complete';
    btnComplete.textContent = tache.terminee ? '↩ Reprendre' : '✓ Terminer';
    btnComplete.addEventListener('click', () => terminerTache(index));
    
    // Créer le bouton "Supprimer"
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.textContent = '✕ Supprimer';
    btnDelete.addEventListener('click', () => supprimerTache(index));
    
    // Assembler les éléments
    buttonsDiv.appendChild(btnComplete);
    buttonsDiv.appendChild(btnDelete);
    li.appendChild(taskText);
    li.appendChild(buttonsDiv);
    
    return li;
}

/**
 * Marque une tâche comme terminée ou non terminée
 * @param {number} index - L'index de la tâche
 */
function terminerTache(index) {
    // Inverser l'état de la tâche
    taches[index].terminee = !taches[index].terminee;
    
    // Rafraîchir l'affichage
    afficherTaches();
    
    const etat = taches[index].terminee ? '✔️ terminée' : '🔄 reprise';
    console.log(`Tâche ${etat}:`, taches[index].texte);
    
    // Sauvegarder dans localStorage
    sauvegarderTaches();
}

/**
 * Supprime une tâche de la liste
 * @param {number} index - L'index de la tâche à supprimer
 */
function supprimerTache(index) {
    const texte = taches[index].texte;
    // Supprimer du tableau
    taches.splice(index, 1);
    // Rafraîchir l'affichage
    afficherTaches();
    // Sauvegarder dans localStorage
    sauvegarderTaches();
    console.log('🗑️ Tâche supprimée:', texte);
    console.log('📋 Tableau des tâches:', taches);
}

/**
 * Supprime toutes les tâches
 */
function toutSupprimer() {
    if (taches.length === 0) return;
    
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches?')) {
        taches = [];
        afficherTaches();
        sauvegarderTaches();
        console.log('🗑️ Toutes les tâches ont été supprimées');
    }
}

/**
 * Filtre les tâches selon le texte de recherche
 * @param {string} recherche - Le texte à rechercher
 */
function filtrerTaches(recherche) {
    const items = taskList.querySelectorAll('li:not(.empty-message)');
    const rechercheMin = recherche.toLowerCase().trim();
    
    items.forEach(li => {
        const texte = li.querySelector('.task-text').textContent.toLowerCase();
        if (texte.includes(rechercheMin) || rechercheMin === '') {
            li.classList.remove('hidden');
        } else {
            li.classList.add('hidden');
        }
    });
}

/**
 * Gère l'ajout d'une tâche depuis l'input
 */
function gererAjoutTache() {
    const texte = taskInput.value;
    
    if (ajouterTache(texte)) {
        // Vider la zone de saisie
        taskInput.value = '';
        // Remettre le focus sur l'input
        taskInput.focus();
    }
}

// ============================================
// Écouteurs d'événements
// ============================================

// Écouteur sur le bouton "Ajouter"
addBtn.addEventListener('click', gererAjoutTache);

// Écouteur pour la touche "Entrée"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        gererAjoutTache();
    }
});

// Écouteur pour le bouton "Tout supprimer"
clearAllBtn.addEventListener('click', toutSupprimer);

// Écouteur pour la recherche
searchInput.addEventListener('input', function() {
    filtrerTaches(this.value);
});

// Focus automatique sur l'input
taskInput.focus();

// Charger les tâches sauvegardées au démarrage
chargerTaches();

// Afficher les tâches
afficherTaches();

console.log('🎯 Application prête - Fonctions: ajouterTache(), supprimerTache(), terminerTache()');
console.log('💾 Les tâches sont persistées dans localStorage');
console.log('🔍 Recherche et compteurs disponibles');
