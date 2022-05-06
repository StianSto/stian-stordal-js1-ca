const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const playerID = params.get("id");

const title = document.querySelector("title");
const playerContainer = document.querySelector(".player__container");

const url = `https://api-football-v1.p.rapidapi.com/v3/players?id=${playerID}&season=2021`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'e87280083dmshf7920795d7ee8ebp1abb21jsn989b22f6e6a3'
	}
};

async function callApiPlayer() {
    try {

        const apiResponse = await fetch(url, options);
        const results = await apiResponse.json();
        console.log(results.response[0].player)
        player = results.response[0].player

        playerProfile();
    }
    catch(error){
        console.log(error);
        playerContainer.innerHTML = `<h2 class="error--fetch">an error ocurred while calling API.<h2>`
    }
}
callApiPlayer();

let player;
function playerProfile() {
    title.innerHTML = `${player.name} | JS1 - CA`
    playerContainer.innerHTML = `<div class="player-profile">
                                    <div class="player-profile__img">
                                        <img src="${player.photo}">
                                    </div>
                                    <div class="player-profile__info">
                                        <h1>${player.name}</h1>
                                        <p>Age: ${player.age}</p>
                                        <p>Nationality: ${player.nationality}</p>
                                    </div>
                                </div>`
}