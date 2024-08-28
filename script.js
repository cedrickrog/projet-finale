// Script simple pour ajouter une alerte quand un jeu est cliqué
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Vous avez sélectionné un jeu !');
    });
});