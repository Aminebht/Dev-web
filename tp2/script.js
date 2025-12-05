// ============================================
// TP2 - Gestion de Tâches
// Étape 3 : Manipulation du DOM
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
console.log('📝 Liste des tâches:', taches);
console.log('✅ Script chargé avec succès!');

// Afficher un message dans la console avec les infos
console.log('%c Bienvenue dans le Gestionnaire de Tâches! ', 'background: #00d9ff; color: #1a1a2e; font-size: 16px; padding: 5px;');

// ============================================
// Étape 3 : Manipulation du DOM
// ============================================

// Fonction pour ajouter une tâche à la liste
function ajouterTacheAuDOM(texte) {
    // Créer un élément <li>
    const li = document.createElement('li');
    
    // Créer le span pour le texte de la tâche
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = texte;
    
    // Ajouter le texte au li
    li.appendChild(taskText);
    
    // Ajouter le li à la liste
    taskList.appendChild(li);
    
    console.log('✅ Tâche ajoutée:', texte);
}

// Fonction pour récupérer le texte et ajouter la tâche
function recupererEtAjouterTache() {
    // Récupérer le texte de la zone de saisie
    const texte = taskInput.value.trim();
    
    // Vérifier que le texte n'est pas vide
    if (texte === '') {
        alert('Veuillez entrer une tâche!');
        return;
    }
    
    // Ajouter la tâche au DOM
    ajouterTacheAuDOM(texte);
    
    // Vider la zone de saisie
    taskInput.value = '';
    
    // Remettre le focus sur l'input
    taskInput.focus();
}

// Test : ajouter le listener au bouton (temporaire pour test)
addBtn.addEventListener('click', recupererEtAjouterTache);

// ============================================
// Étape 4 : Gestion des événements
// ============================================

// Écouteur d'événement sur le bouton "Ajouter"
addBtn.addEventListener('click', recupererEtAjouterTache);

// Écouteur d'événement pour la touche "Entrée" dans l'input
taskInput.addEventListener('keypress', function(event) {
    // Vérifier si la touche pressée est "Entrée" (code 13 ou 'Enter')
    if (event.key === 'Enter') {
        recupererEtAjouterTache();
    }
});

// Focus automatique sur l'input au chargement de la page
taskInput.focus();

console.log('🎯 Événements configurés: click sur bouton + touche Entrée');
