// On push of the submit button, take the value of the city
var proTeams = [];
// var gameTeams = [];
var cityTeamsTonight = [];
var cityTeams = [];
var sportsTeams = [];
var getAvailableTeams = function (city) {
    var queryURLTeams = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + city;
    $.get(queryURLTeams).then(function (response) {
        cityTeams = response.teams;
        var leagues = ["NFL", "NBA", "NHL", "MLB"];
        for (let i = 0; i < cityTeams.length; i++) {
            if (leagues.indexOf(cityTeams[i].strLeague) !== -1) {
                proTeams.push(cityTeams[i].strTeam);
            }
        }
    });

}

var getEventsBySport = function (sportsID, date) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://therundown-therundown-v1.p.rapidapi.com/sports/" + sportsID + "/events/" + date + "?include=all_periods&include=scores",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
            "x-rapidapi-key": "1eb7eadabemshf0789dca576eb58p1442aejsnece09022835e"
        }
    }
    $.ajax(settings).done(function (response) {
        var events = response.events;
        for (let i = 0; i < events.length; i++) {
            var teams = events[i].teams;
            for (let j = 0; j < teams.length; j++) {
                sportsTeams.push(teams[j].name);
            }
        }
        for (let j = 0; j < sportsTeams.length; j++) {
            if (proTeams.indexOf(sportsTeams[j]) !== -1) {
                // if (cityTeamsTonight.indexOf(baseballTeams[j] === -1)) {
                cityTeamsTonight.push(sportsTeams[j]);
                // }
            };
        }
        console.log(cityTeamsTonight);
    });
}
$('#submit-button').on('click', function () {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    var date = $('#date-input').val().trim();
    getAvailableTeams(userCity);
    getEventsBySport(3, date);
});

     $.get(queryURLBasketball).then(function(response) {
        cityTeams = response.teams;
        var leagues = ["NFL", "NBA", "NHL", "MLB"];
        for (let i = 0; i < cityTeams.length; i++) {
            if (leagues.indexOf(cityTeams[i].strLeague) !== -1) {
                 proTeams.push(cityTeams[i].strTeam);
             } 
         }
     });
     var date = $('#date-input').val().trim();
     const url = "https://cors-anywhere.herokuapp.com/https://api-nba-v1.p.rapidapi.com/games/date/" + date;
        const settings = {
    //         url: url,
    //         method: "GET",
    //         headers: {
    //             "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	//             "x-rapidapi-key": "1eb7eadabemshf0789dca576eb58p1442aejsnece09022835e"
    //         }
    //     };
    //     $.ajax(settings).then(function (response) {
    //         var games = response.api.games;
    //         var teams = [];
    //         var hTeam;
    //         var vTeam;
    //         for (let j = 0; j < games.length; j++) {
    //             teams.push(games[j].hTeam.fullName);
    //             teams.push(games[j].vTeam.fullName);
    //         }
    //         for (let k = 0; k < teams.length; k++) {
    //             if (proTeams.indexOf(teams[k]) !== -1) {
    //                 cityTeamsTonight.push(teams[k]);
    //             } 
    //         }
    //         console.log(cityTeamsTonight);
    //     });







