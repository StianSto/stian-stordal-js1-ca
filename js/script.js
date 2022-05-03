const playersContainer = document.querySelector(".players-container");
import playerArr from "./tempApiArray";

const tempArr = new  playerArr
console.log(playerArr)

const url = 'https://api-football-v1.p.rapidapi.com/v3/players?team=40&season=2021&page=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e87280083dmshf7920795d7ee8ebp1abb21jsn989b22f6e6a3'
	}
};

console.log(playerArr)

async function callApiFootballDatabase() {
    try {
        const response = await fetch(url, options);
        const results = await response.json();
        players = results.response;

        console.log(players)

        playersContainer.innerHTML = "";
        players.forEach(element => {
            let player = element.player;
            playersContainer.innerHTML += `<div class="player-card">
                                            <img src="${player.photo}"> 
                                            <h2>${player.name}</h2>
                                            <p>${player.age}</p>
                                        </div>`
        });
        
    }
    catch(error) {
        console.log(error)
    }
}
// callApiFootballDatabase();  
//turned off for rapidapi subscription