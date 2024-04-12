const websiteData = [
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/e-commerce.png",
        title: "Site e-commerce",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        alternate: "Homepage page site e-commerce",
        link : `https://rbz-code.github.io/projet-ww/`,
    }
]

const featureData = [
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/hexa.png",
        title: "Générateur héxadécimal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/generateur-hexa.git`,
    },
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/imc.png",
        title: "Calculateur d'IMC",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/IMC.git`,
    },
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/validation.png",
        title: "Formulaire de validation",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/validation_formulaire_de_contacte.git`,
    }
]
const apiData = [
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/pokemon.png",
        title: "PokéAPI",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/pokeAPI.git`,
    },
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/meteo.png",
        title: "Un lieu, une météo",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/Meteo.git`,
    }
    
]
const gameData = [
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/shifu.png",
        title: "Shi fu mi",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/Shifumi.git`,
    },
    {
        frameRoute: "https://chouanibe97640.github.io/portfolio2/images/morpion.png",
        title: "Morpion",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error tempore tenetur illo alias eveniet deleniti vel magni at laboriosam!",
        link : `https://github.com/Chouanibe97640/Morpion.git`,
    }
]

    // Générer les website card
const websiteContainer = document.querySelector('.website');
const displayMethods = () => {
    websiteData.map((websiteData) => {
        const websiteElement = document.createElement('div');
        websiteElement.classList.add('website-container');
        websiteElement.innerHTML = `
        <div class="website__card">
            <img class="japanese__card-img" src="${websiteData.frameRoute}" alt="${websiteData.alternate}">
            <div class="__card-description">
                <h3>${websiteData.title}</h3>
                <p>${websiteData.text}</p>
                <a target="_blank" href="${websiteData.link}"><button class = "modal-trigger" data-card-type="website">Découvrir</button></a>
            </div>
        </div> `;
    
        websiteContainer.appendChild(websiteElement);
    });
};

displayMethods();


// Générer les feature card
const featureContainer = document.querySelector('.feature');
const displayFeatureMethods = () => {
    featureData.map((featureData) => {
        const featureElement = document.createElement('div');
        featureElement.classList.add('website-container');
        featureElement.innerHTML = `
        <div class="website__card">
            <img class="feature__card-img" src="${featureData.frameRoute}" alt="${featureData.alternate}">
            <div class="__card-description">
                <h3>${featureData.title}</h3>
                <p>${featureData.text}</p>
                <a target="_blank" href="${featureData.link}"><button class = "modal-trigger" data-card-type="website">Découvrir</button></a>
            </div>
        </div> `;
    
        featureContainer.appendChild(featureElement);
    });
};

displayFeatureMethods();

// Générer les api card
const apiContainer = document.querySelector('.api');
const displayApiMethods = () => {
    apiData.map((apiData) => {
        const apiElement = document.createElement('div');
        apiElement.classList.add('website-container');
        apiElement.innerHTML = `
        <div class="website__card">
            <img class="api__card-img" src="${apiData.frameRoute}" alt="${apiData.alternate}">
            <div class="__card-description">
                <h3>${apiData.title}</h3>
                <p>${apiData.text}</p>
                <a target="_blank" href="${apiData.link}"><button class = "modal-trigger" data-card-type="website">Découvrir</button></a> 
            </div>
        </div> `;
    
        apiContainer.appendChild(apiElement);
    });
};

displayApiMethods();


// Générer les games card
const gameContainer = document.querySelector('.game');
const displayGameMethods = () => {
    gameData.map((gameData) => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('website-container');
        gameElement.innerHTML = `
        <div class="website__card">
            <img class="game__card-img" src="${gameData.frameRoute}" alt="${gameData.alternate}">
            <div class="__card-description">
                <h3>${gameData.title}</h3>
                <p>${gameData.text}</p>
                <a target="_blank" href="${gameData.link}"><button class = "modal-trigger" data-card-type="website">Découvrir</button></a>
            </div>
        </div> `;
    
        gameContainer.appendChild(gameElement);
    });
};

displayGameMethods();