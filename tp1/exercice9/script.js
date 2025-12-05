// ============================================
// EXERCICE 9 – Fetch + async/await
// ============================================

// Fonction utilitaire pour afficher dans la page
function log(message, elementId = 'exercice9') {
    const element = document.getElementById(elementId);
    element.innerHTML += message + '\n';
}

function clearLog(elementId = 'exercice9') {
    document.getElementById(elementId).innerHTML = '';
}

// URL de l'API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ----------------------------------------
// Fonction principale: Fetch des 5 premiers posts
// ----------------------------------------
async function fetchPosts() {
    clearLog();
    const btn = document.getElementById('btnFetch');
    btn.disabled = true;
    
    log('=== Récupération des posts avec fetch + async/await ===\n');
    log('📡 URL: ' + API_URL);
    log('⏳ Chargement en cours...\n');
    
    try {
        // Appel fetch avec await
        const response = await fetch(API_URL);
        
        // Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        // Convertir en JSON
        const posts = await response.json();
        
        // Récupérer les 5 premiers posts
        const premiersPosts = posts.slice(0, 5);
        
        log('✅ Données récupérées avec succès!\n');
        log('📝 Titres des 5 premiers posts:\n');
        log('─'.repeat(60) + '\n');
        
        premiersPosts.forEach((post, index) => {
            log(`📌 Post #${post.id}: ${post.title}\n`);
        });
        
        log('─'.repeat(60));
        log(`\n✨ Total: ${posts.length} posts disponibles`);
        
    } catch (error) {
        log('❌ Erreur: ' + error.message);
        console.error('Erreur détaillée:', error);
    } finally {
        btn.disabled = false;
    }
}

// ----------------------------------------
// Bonus: Récupérer tous les posts avec détails
// ----------------------------------------
async function fetchAllPosts() {
    clearLog();
    
    log('=== Récupération de tous les posts ===\n');
    log('⏳ Chargement...\n');
    
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        
        log(`✅ ${posts.length} posts récupérés!\n`);
        log('📊 Statistiques:\n');
        
        // Grouper par userId
        const parUser = posts.reduce((acc, post) => {
            acc[post.userId] = (acc[post.userId] || 0) + 1;
            return acc;
        }, {});
        
        Object.entries(parUser).forEach(([userId, count]) => {
            log(`   👤 User ${userId}: ${count} posts`);
        });
        
        // Moyenne de caractères par titre
        const moyenneTitre = posts.reduce((acc, p) => acc + p.title.length, 0) / posts.length;
        log(`\n📏 Longueur moyenne des titres: ${moyenneTitre.toFixed(1)} caractères`);
        
    } catch (error) {
        log('❌ Erreur: ' + error.message);
    }
}

// ----------------------------------------
// Afficher le code source
// ----------------------------------------
function afficherCodeSource() {
    const codeElement = document.getElementById('codeSource');
    codeElement.innerHTML = `
<span style="color:#ff6b6b">// Fonction async pour récupérer les posts</span>
<span style="color:#00d9ff">async function</span> fetchPosts() {
    <span style="color:#00d9ff">try</span> {
        <span style="color:#888">// 1. Appel fetch avec await</span>
        <span style="color:#00d9ff">const</span> response = <span style="color:#ffaa00">await</span> fetch(<span style="color:#88ff88">'https://jsonplaceholder.typicode.com/posts'</span>);
        
        <span style="color:#888">// 2. Vérifier si OK</span>
        <span style="color:#00d9ff">if</span> (!response.ok) {
            <span style="color:#00d9ff">throw new</span> Error(\`Erreur HTTP: \${response.status}\`);
        }
        
        <span style="color:#888">// 3. Convertir en JSON</span>
        <span style="color:#00d9ff">const</span> posts = <span style="color:#ffaa00">await</span> response.json();
        
        <span style="color:#888">// 4. Récupérer les 5 premiers</span>
        <span style="color:#00d9ff">const</span> premiersPosts = posts.slice(<span style="color:#ffaa00">0</span>, <span style="color:#ffaa00">5</span>);
        
        <span style="color:#888">// 5. Afficher les titres</span>
        premiersPosts.forEach(post => {
            console.log(post.title);
        });
        
    } <span style="color:#00d9ff">catch</span> (error) {
        console.error(<span style="color:#88ff88">'Erreur:'</span>, error.message);
    }
}

<span style="color:#ff6b6b">// Appeler la fonction</span>
fetchPosts();
`;
}

// Initialisation
afficherCodeSource();

// Auto-fetch au chargement
window.addEventListener('DOMContentLoaded', () => {
    log('=== EXERCICE 9 : Fetch + async/await ===\n');
    log('👆 Cliquez sur un bouton pour récupérer les données\n');
    log('📌 API utilisée: JSONPlaceholder\n');
    log('🔗 ' + API_URL);
});

// ----------------------------------------
// Résumé dans la console
// ----------------------------------------
console.log('=== EXERCICE 9 : Fetch + async/await ===');
console.log(`
📌 Syntaxe de base:

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Utiliser data...
    } catch (error) {
        console.error(error);
    }
}

📌 Points clés:
- async : déclare une fonction asynchrone
- await : attend la résolution d'une Promise
- fetch() : retourne une Promise avec la Response
- response.json() : retourne une Promise avec les données
- try/catch : gestion des erreurs
`);
