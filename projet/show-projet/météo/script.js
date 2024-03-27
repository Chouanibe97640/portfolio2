const changerVille = document.querySelector('.chVille');
changerVille.addEventListener('click', () => {
    let ville = prompt ('Quelle ville souhaitez-vous voir ?');
    getTemp(ville);
});

function getTemp(city){
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=acd25ed748e3f83b449c75200c84aced&units=metric")
    .then(response => response.json())
    .then (data => {
        let temp = data.main.temp;
        let ville = data.name;
        document.querySelector('.temperature').textContent = temp;
        document.querySelector('.ville').textContent = ville;
    })
    .catch(error => console.log(error));
}