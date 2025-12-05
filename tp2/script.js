// ============================================
// TP2 - Gestion de Tâches
// Étape 6 : Utilisation des fonctions
// ============================================

// --- Déclaration des variables ---

// Liste des tâches (tableau vide pour l'instant)
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
// Étape 6 : Fonctions dédiées
// ============================================

/**
 * Ajoute une nouvelle tâche
 * @param {string} texte - Le texte de la tâche
 */
function ajouterTache(texte) {
    // Vérifier que le texte n'est pas vide
    if (!texte || texte.trim() === '') {
        alert('Veuillez entrer une tâche!');
        return false;
    }
    
    // Créer l'élément de liste
    const li = creerElementTache(texte.trim());
    
    // Ajouter à la liste
    taskList.appendChild(li);
    
    console.log('✅ Tâche ajoutée:', texte);
    return true;
}

/**
 * Crée un élément DOM pour une tâche
 * @param {string} texte - Le texte de la tâche
 * @returns {HTMLElement} - L'élément li créé
 */
function creerElementTache(texte) {
    // Créer un élément <li>
    const li = document.createElement('li');
    
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
    btnDelete.addEventListener('click', () => supprimerTache(li));
    
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
 * @param {HTMLElement} li - L'élément de la tâche à supprimer
 */
function supprimerTache(li) {
    const texte = li.querySelector('.task-text').textContent;
    li.remove();
    console.log('🗑️ Tâche supprimée:', texte);
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

console.log('🎯 Application prête - Fonctions: ajouterTache(), supprimerTache(), terminerTache()');
