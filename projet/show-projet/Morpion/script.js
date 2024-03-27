// Récupérer nos box 
const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.resetBtn');

let currentPlayer = 'X';
const info = document.querySelector('.info');
info.textContent = `C'est au tour de ${currentPlayer}`;

const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const game = ["", "", "", "", "", "", "", "", ""]

let lock = false;

// Ajouter un event au clic sur chaque box
boxes.forEach(box => box.addEventListener('click', handleClick));

function handleClick(event){

    // Récupérer la box sur laquelle on a cliqué
    const clickedBox = event.target;
    

    // Récupérer l'index de la box cliqué 
    const boxIndex = clickedBox.getAttribute('data-index');

    if(lock || game[boxIndex] !== ""){
        return;
    }
    // stocker dans le tableau game la valeur du joueur actuel
    game[boxIndex] = currentPlayer;


    // Ecrire dans les box la valeur du joueur actuel
   clickedBox.textContent = currentPlayer;



    checkWinner();

}

function checkWinner(){

    for(let i = 0; i < winningComb.length; i++){
        // recupérer les combinaisons gagnantes
        const combToCheck = winningComb[i];

    // stocker dans des variables les valeurs de chaque combinaison gagnante
        let [a, b, c] = combToCheck.map(index => game[index]);


    // vérifier si les valeurs sont identiques
        if(a === '' || b === '' || c === ''){
            continue;
        }
        else if(a === b && b === c){
            info.textContent =`Le joueur ${currentPlayer} a gagné`;

            // bloquer le jeu
            lock=true;

            // afficher le bouton reset
            resetBtn.style.display = 'block';

            // Mettre en évidence la combinaison gagnante
            highLightComb(combToCheck);

            return;
        }
    }

    // vérifier si toutes les cases sont remplies
    if(!game.includes('')){
        info.textContent ="Match nul";

        // bloquer le jeu
        lock=true;

          // afficher le bouton reset
          resetBtn.style.display = 'block';

          return;
    }

    switchPlayer();

}

function switchPlayer(){
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   info.textContent = `C'est au tour de ${currentPlayer}`;
}

function highLightComb(comb){
    comb.forEach(index => boxes[index].classList.add('highLight'));
}


// reset la partie 
resetBtn.addEventListener('click', resetGame);

// reset avec la touche r 
document.addEventListener('keydown', function(event){
    if(event.key === 'r' || event.key === 'R'){
        resetGame();
    }
});

function resetGame(){
//réinitialiser le tableau game
    for (let i = 0; i < game.length; i++) {
        game[i] = "";
    }
// réinitialiser les box
boxes.forEach(box => box.textContent = "");
currentPlayer = 'X';
info.textContent = `C'est au tour de ${currentPlayer}`;

boxes.forEach(box => box.classList.remove('highLight'));

lock=false;

resetBtn.style.display = 'none';

}