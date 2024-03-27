// Sélecteurs
let randomBtn = document.querySelector(".random-btn");

const colorLabels = [...document.querySelectorAll(".input-group label")];
const colorInputs = [...document.querySelectorAll("input[type='color']")];
const rangeInput = document.querySelector(".inp-range");

const rangeLabel = document.querySelector(".orientation-val");

const copyBtn = document.querySelector(".copy-btn");


// Définir les données initialles
let data = {
    angle:90,
    colors:["#FFFFFF","#000000"]
}

// Fonction mettre à jour l'interface
function updateUi(){

    // document.body.style.background = `linear-gradient(${data.angle}deg, ${data.colors[0]}, ${data.colors[1]})`;

    document.body.style.background = `linear-gradient(${data.angle}deg, ${data.colors.join(",")})`;

   

    rangeLabel.textContent = `${data.angle}°`;
  

    colorLabels.forEach((label, index) => {
        label.textContent = data.colors[index];
        label.style.background= data.colors[index];

        // Ajuster la couleur du texte en fonction de la couleur de fond
        let hexa = label.textContent.replace("#","") ;
        let red = parseInt(hexa.slice(0,2),16);
        let green = parseInt(hexa.slice(2,4),16);
        let blue = parseInt(hexa.slice(4,6),16);
        let yiq = ( red * 299 + green * 587 + blue * 114) / 1000;
        console.log(yiq)
        if (yiq >= 128) {
            label.style.color = "black";
        } else {
            label.style.color = "white";
        }


    })
}



// Gestionnaires d'events 

rangeInput.addEventListener("input", () => {
    data.angle = rangeInput.value;
    updateUi()
});

colorInputs.forEach(input => {
    input.addEventListener("input", (event) =>{
        const index = colorInputs.indexOf(event.target);
        data.colors[index] = event.target.value.toUpperCase();
        updateUi();
    });
});

// Copier 
copyBtn.addEventListener("click", function () {
   
    const gradient = `linear-gradient(${data.angle}deg, ${data.colors[0]}, ${data.colors[1]})`;

    navigator.clipboard.writeText(gradient);
});


// Fonction de sélection random 
randomBtn.addEventListener("click", function () {
    data.colors.forEach((color, index) =>{
        let randomColor = `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`;
      
     data.colors[index] = randomColor;
 

    });
    updateUi();
});

updateUi();