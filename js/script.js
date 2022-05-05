const playersContainer = document.querySelector(".players-container");

const url = 'https://api-football-v1.p.rapidapi.com/v3/players?team=40&season=2021&page=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e87280083dmshf7920795d7ee8ebp1abb21jsn989b22f6e6a3'
	}
};

async function callApiFootballDatabase() {
    try {
        const response = await fetch(url, options);
        const results = await response.json();
        const players = results.response;

        console.log(players);

        playersContainer.innerHTML = "";
        players.forEach(element => {
            let player = element.player;
            playersContainer.innerHTML += `<a href="details.html?id=${player.id}" class="player-card">
                                            <div class="player-card__img">
                                                <img src="${player.photo}"> 
                                            </div>
                                            <div class="player-card__info">
                                                <h2>${player.name}</h2>
                                                <p>Age: ${player.age}</p>
                                                <p>Nationality: ${player.nationality}</p>
                                            </div>
                                        </a>`
        });
        
    }
    catch(error) {
        console.log(error);
        playersContainer.innerHTML = error;
    }
}
callApiFootballDatabase();  