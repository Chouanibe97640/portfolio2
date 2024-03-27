let IMC;

function calculate() {
    let taille = document.querySelector('.taille-utilisateur').value;
    let poids = document.querySelector('.poids-utilisateur').value;

    taille = parseFloat(taille);
    poids = parseFloat(poids);

    if (!isNaN(taille) && !isNaN(poids) && taille > 0 && poids > 0) {
        IMC = poids / (taille * taille);
    } else {
        alert("Veuillez remplir tous les champs avec des nombres valides et positifs.");
    }
}

document.querySelector('.bouton-click').addEventListener('click', function () {
    calculate(); 

    let affichageNombre = document.querySelector('.nombre-calcule');
    let affichageResultat = document.querySelector('.resultat-calcule');

    if (!isNaN(IMC)) {
        affichageNombre.textContent = "IMC : " + IMC.toFixed(2); 
        if (IMC < 16.5) {
            affichageResultat.textContent = "Résultat : Maigreur extrême";
        } else if (IMC >= 16.5 && IMC < 18.5) {
            affichageResultat.textContent = "Résultat : Maigreur";
        } else if (IMC >= 18.5 && IMC < 25) {
            affichageResultat.textContent = "Résultat : Corpulence normale";
        } else if (IMC >= 25 && IMC < 30) {
            affichageResultat.textContent = "Résultat : Surpoids ou pré-obésité";
        } else if (IMC >= 30 && IMC < 35) {
            affichageResultat.textContent = "Résultat : Obésité modérée (classe I)";
        } else if (IMC >= 35 && IMC < 40) {
            affichageResultat.textContent = "Résultat : Obésité sévère (classe II)";
        } else if (IMC >= 40) {
            affichageResultat.textContent = "Résultat : Obésité morbide (classe III)";
        }
    }
});
