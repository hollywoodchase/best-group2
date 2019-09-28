// On push of the submit button, take the value of the city
var proTeams = [];
var gameTonight = false;
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
        console.log(events);
        for (let i = 0; i < events.length; i++) {
            var teams = events[i].teams;
            for (let j = 0; j < teams.length; j++) {
                sportsTeams.push(teams[j].name);
            }
        }
        // console.log(sportsTeams);
        for (let j = 0; j < sportsTeams.length; j++) {
            // if (proTeams.indexOf(sportsTeams[j]) !== -1) {
            //     if (cityTeamsTonight.indexOf(baseballTeams[j] === -1)) {
            //     cityTeamsTonight.push(sportsTeams[j]);
            //     }
            // };
            
            if (proTeams.includes(sportsTeams[j])) {
                gameTonight = true;
                console.log("Your team is playing tonight");
                cityTeamsTonight.push(sportsTeams[j]);
            } else {
                // console.log("Your team is NOT playing tonight");
            }
        }
        console.log(sportsTeams);
    });
    
}
$('#submit-button').on('click', function () {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    var date = $('#date-input').val().trim();
    getAvailableTeams(userCity);
    getEventsBySport(3, date);
    console.log(proTeams);
    console.log(sportsTeams);
});
