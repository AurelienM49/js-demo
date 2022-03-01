const inputSavoir = document.getElementById('savoir');
const inputAuteur = document.getElementById('auteur');
const inputDate = document.getElementById('date');
const clearBtn = document.getElementById('clear');
const clearAllBtn = document.getElementById('clearAll');
let form = document.querySelector('form');
let liste = document.getElementById('liste');

let enfant = null;

let savoir = "";
let auteur = "";
let date = "";

//--Récupérer les valeurs des inptus grâce à des évènements
inputSavoir.addEventListener("input", (e) => {
    savoir = e.target.value;
});

inputAuteur.addEventListener("input", (e) => {
    auteur = e.target.value;
});

inputDate.addEventListener("input", (e) => {
    date = e.target.value;
});


/*
fonction qui vérifie les champs, et ajoute les li (enfants) 
avec les valeurs récupérées dans les inputs
*/
function submit(e) {
    e.preventDefault();
    if (savoir == "" || auteur == "" || date == "") {
        alert('Veuillez remplir tout les champs')
    } else {
        enfant = document.createElement('li');
        enfant.setAttribute('onclick', 'remove(this)')
        enfant.innerHTML = "<div class=\"enfant\"><h2>" + savoir + "</h2> <p>" + auteur + ", " + date + "</p></div>"
        liste.appendChild(enfant);
    }
}

//-- fonction pour supprimer les div quand on clique dessus
function remove(item) {
    item.remove();
}

//-- fonction pour supprimer le texte écrit dans les champs input
function clear() {
    inputSavoir.value = ''
    inputAuteur.value = ''
    inputDate.value = ''
}

//-- fonction pour supprimer tous les li afficher
function clearAll() {
    while (liste.firstChild) {
        liste.removeChild(liste.firstChild);
    }
    clear();
}

//--------------------------- appel aux fonctions submit et remove ----------------

clearBtn.addEventListener("click", clear);

clearAllBtn.addEventListener("click", clearAll);

form.addEventListener("submit", submit);

enfant.addEventListener("click", remove);