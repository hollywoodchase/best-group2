// On push of the submit button, take the value of the city
var proTeams = [];
var phillyTeams = [];
var phillyTeamsTonight = [];

$('#submit-button').on('click', function() {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    
    var queryURL1 = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + userCity;

    $.get(queryURL1).then(function(response) {
        phillyTeams = response.teams;
        var leagues = ["NFL", "NBA", "NHL", "MLB"];
        for (let i = 0; i < phillyTeams.length; i++) {
            if (leagues.indexOf(phillyTeams[i].strLeague) !== -1) {
                proTeams.push(phillyTeams[i].strTeam);
            } 
        }
    });
    var date = $('#date-input').val().trim();
    const url = "https://cors-anywhere.herokuapp.com/https://api-nba-v1.p.rapidapi.com/games/date/" + date;
        const settings = {
            url: url,
            method: "GET",
            headers: {
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	            "x-rapidapi-key": "1eb7eadabemshf0789dca576eb58p1442aejsnece09022835e"
            }
        };
        $.ajax(settings).then(function (response) {
            var games = response.api.games;
            var teams = [];
            var hTeam;
            var vTeam;
            for (let j = 0; j < games.length; j++) {
                teams.push(games[j].hTeam.fullName);
                teams.push(games[j].vTeam.fullName);
            }
            for (let k = 0; k < teams.length; k++) {
                if (proTeams.indexOf(teams[k]) !== -1) {
                    phillyTeamsTonight.push(teams[k]);
                } 
            }
            console.log(phillyTeamsTonight);
        });
        
});


        
        


