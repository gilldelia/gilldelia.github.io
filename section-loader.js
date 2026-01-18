// ==========================================
// Section Loader - Loads HTML sections dynamically
// ==========================================

// Charge toutes les sections de manière asynchrone
async function loadSection(sectionId, file) {
    try {
        const response = await fetch(`sections/${file}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(`${sectionId}-section`).innerHTML = html;
    } catch (error) {
        console.error(`Erreur lors du chargement de ${file}:`, error);
    }
}

// Charger toutes les sections au chargement de la page
document.addEventListener('DOMContentLoaded', async () => {
    await loadSection('hero', 'hero.html');
    await loadSection('about', 'about.html');
    await loadSection('projects', 'projects.html');
    await loadSection('experience', 'experience.html');
    await loadSection('skills', 'skills.html');
    await loadSection('contact', 'contact.html');
});
