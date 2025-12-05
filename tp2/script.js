// ============================================
// TP2 - Gestion de Tâches
// Étape 7 : Tableaux et boucles
// ============================================

// --- Déclaration des variables ---

// Liste des tâches (tableau pour stocker les tâches)
let taches = [];

// Référence aux éléments du DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// --- Message de bienvenue ---
console.log('🚀 TP2 - Gestionnaire de Tâches');
console.log('📋 Application initialisée');
console.log('%c Bienvenue dans le Gestionnaire de Tâches! ', 'background: #00d9ff; color: #1a1a2e; font-size: 16px; padding: 5px;');

// ============================================
// Étape 7 : Gestion avec tableau
// ============================================

/**
 * Ajoute une nouvelle tâche au tableau et rafraîchit l'affichage
 * @param {string} texte - Le texte de la tâche
 */
function ajouterTache(texte) {
    // Vérifier que le texte n'est pas vide
    if (!texte || texte.trim() === '') {
        alert('Veuillez entrer une tâche!');
        return false;
    }
    
    // Ajouter au tableau
    taches.push(texte.trim());
    
    // Rafraîchir l'affichage
    afficherTaches();
    
    console.log('✅ Tâche ajoutée:', texte);
    console.log('📋 Tableau des tâches:', taches);
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
        const li = creerElementTache(taches[i], i);
        taskList.appendChild(li);
    }
    
    // Afficher un message si la liste est vide
    if (taches.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.textContent = 'Aucune tâche pour le moment. Ajoutez-en une!';
        taskList.appendChild(emptyMsg);
    }
}

/**
 * Crée un élément DOM pour une tâche
 * @param {string} texte - Le texte de la tâche
 * @param {number} index - L'index de la tâche dans le tableau
 * @returns {HTMLElement} - L'élément li créé
 */
function creerElementTache(texte, index) {
    // Créer un élément <li>
    const li = document.createElement('li');
    li.dataset.index = index;
    
    // Créer le span pour le texte de la tâche
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = texte;
    
    // Créer le conteneur pour les boutons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';
    
    // Créer le bouton "Terminer"
    const btnComplete = document.createElement('button');
    btnComplete.className = 'btn-complete';
    btnComplete.textContent = '✓ Terminer';
    btnComplete.addEventListener('click', () => terminerTache(li, btnComplete));
    
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
 * @param {HTMLElement} li - L'élément de la tâche
 * @param {HTMLElement} btn - Le bouton terminer
 */
function terminerTache(li, btn) {
    li.classList.toggle('completed');
    
    // Changer le texte du bouton selon l'état
    if (li.classList.contains('completed')) {
        btn.textContent = '↩ Reprendre';
        console.log('✔️ Tâche terminée');
    } else {
        btn.textContent = '✓ Terminer';
        console.log('🔄 Tâche reprise');
    }
}

/**
 * Supprime une tâche de la liste
 * @param {number} index - L'index de la tâche à supprimer
 */
function supprimerTache(index) {
    const texte = taches[index];
    // Supprimer du tableau
    taches.splice(index, 1);
    // Rafraîchir l'affichage
    afficherTaches();
    console.log('🗑️ Tâche supprimée:', texte);
    console.log('📋 Tableau des tâches:', taches);
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

// Focus automatique sur l'input
taskInput.focus();

// Afficher l'état initial (liste vide)
afficherTaches();

console.log('🎯 Application prête - Fonctions: ajouterTache(), supprimerTache(), terminerTache()');
console.log('📊 Les tâches sont maintenant stockées dans un tableau');
