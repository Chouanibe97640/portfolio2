let button = document.getElementById('button');
let image = document.getElementById('image');
let pokeNum = document.getElementById('number');
let pokeName = document.getElementById('name');

const changepokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; //[0, 1]
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await  fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default
    pokeNum.textContent = `#${response.id} `;
    pokeName.textContent = response.name;
}

changepokemon();
button.addEventListener("click", changepokemon);