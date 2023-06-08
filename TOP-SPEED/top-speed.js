// Fonction qui change l'image affiché avec la classe rouge
function imgSlider(anything) {
    document.querySelector('.rouge').src = anything;
}

// Fonction qui la couleur du bg de la classe cercle et liens , et le couleur du texte de la classe titre
function changeCouleurCercle(color) {
    const cercle = document.querySelector('.cercle');
    cercle.style.background = color;

    const titre = document.querySelector('.titre');
    titre.style.color = color;

    const liens = document.querySelectorAll('.liens');
// Ici on recherche les element de la classe liens pour les selectionner (car il y en a plusieurs)
    liens.forEach(lien => {
        lien.style.background = color;
    });
}


