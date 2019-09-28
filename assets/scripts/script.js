
// On push of the submit button, take the value of the city

// var proTeams = [];
// var gameTonight = false;
// var cityTeamsTonight = [];
// var cityTeams = [];
// var sportsTeams = [];
// var getAvailableTeams = function (city) {
//     var queryURLTeams = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + city;
//     $.get(queryURLTeams).then(function (response) {
//         cityTeams = response.teams;
//         var leagues = ["NFL", "NBA", "NHL", "MLB"];
//         for (let i = 0; i < cityTeams.length; i++) {
//             if (leagues.indexOf(cityTeams[i].strLeague) !== -1) {
//                 proTeams.push(cityTeams[i].strTeam);
//             }
//         }
//     });
// }
var proTeams = [];
var phillyTeams = [];
var phillyTeamsTonight = [];

var beerGardenWeather;

$('#submit-button').on('click', function () {
    event.preventDefault();
    console.log("submitted");

        var userCity = $('#city-input').val().trim();
        console.log(userCity);
        var openRestaurantsArray = [];

        // const url = "https://upenn-cors-server.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=philadelphia";

        const url = "https://upenn-cors-server.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=&open_now=true&location=" + userCity;
        console.log(url);

        const settings = {
            url: url,
            method: "GET",
            headers: {
                "Authorization": "Bearer LdIoBm1aGT5mCUNt8oZHjlmAPaFP3OSz3RW5HEFW5IUcrqttybk1fSx8NQgRIwvg7G8JRyVR9-yRda_5MKXxtGFu9p1QhCMeQxCdxRZt2SqM8CiFJcIdPdUgrcGKXXYx"
            }
        };
        $.ajax(settings).then(function (response) {
            console.log("hello");
            console.log(response);
            console.log(response.businesses[1].alias)
            var openRestaurants = response.businesses;
            for (let i = 0; i < openRestaurants.length; i++) {
                openRestaurantsArray.push(openRestaurants[i].name);
                console.log(openRestaurantsArray);
            } if (beerGardenWeather = true) {
                console.log(response.businesses)

            }
        });
})





// var restaurantsDiv = $("<div>").addClass("card");

// for (var i = 0; i < response.businesses.length; i++) {



//     var businessName = response.businesses[i].name.text;
//     // var eventURL = response.businesses[i].url;
//     // var eventDateLong = response.businesses[i].start.local;
//     // var eventDate = moment(eventDateLong).format("dddd, MMMM Do YYYY, h:mm:ss a");
//     // var eventPrice = response.businesses[i].is_free;
//     // //var eventImg = response.businesses[i].logo.original.url;
//     // console.log(businessName);

//     // // Creating elements to have this info displayed
//     var businessNamePtag = $("<h3>").text(businessName);
//     // var eventDescriptionPtag = $("<p>").text(eventDescription);
//     // var eventDatePtag = $("<p>").text(eventDate);
//     // var eventURLbtn = $("<a>").attr("href", eventURL).text("Visit Site").addClass("btn btn-primary").attr("target", "_blank");

//     // if (eventPrice === true) {
//     //     var eventPricePtag = $("<p>").text("This event is free!");
//     // } else {
//     //     var eventPricePtag = $("<p>").text("This event is not free");
//     // }
//     //var eventImgPtag = $("<p>").text(eventImg);

//     eventDiv.append(businessNamePtag
//         //, eventDescriptionPtag, eventDatePtag, eventURLbtn, eventPricePtag
//     );

// }

// // Append the table row to the table body
// $("#results-area").append(eventDiv);






// var queryURL1 = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + userCity;

// $.get(queryURL1).then(function (response) {
//     phillyTeams = response.teams;
//     var leagues = ["NFL", "NBA", "NHL", "MLB"];
//     for (let i = 0; i < phillyTeams.length; i++) {
//         if (leagues.indexOf(phillyTeams[i].strLeague) !== -1) {
//             proTeams.push(phillyTeams[i].strTeam);
//         }
//     }
// });
// var date = $('#date-input').val().trim();
// const url = "https://cors-anywhere.herokuapp.com/https://api-nba-v1.p.rapidapi.com/games/date/" + date;
// const settings = {
//     url: url,
//     method: "GET",
//     headers: {
//         "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
//         "x-rapidapi-key": "1eb7eadabemshf0789dca576eb58p1442aejsnece09022835e"
//     }
// };
// $.ajax(settings).then(function (response) {
//     var games = response.api.games;
//     var teams = [];
//     var hTeam;
//     var vTeam;
//     for (let j = 0; j < games.length; j++) {
//         teams.push(games[j].hTeam.fullName);
//         teams.push(games[j].vTeam.fullName);
//     }
//     for (let k = 0; k < teams.length; k++) {
//         if (proTeams.indexOf(teams[k]) !== -1) {
//             phillyTeamsTonight.push(teams[k]);
//         }
//     }
//     console.log(phillyTeamsTonight);
// });

///////
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

// var getEventsBySport = function (sportsID, date) {
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://therundown-therundown-v1.p.rapidapi.com/sports/" + sportsID + "/events/" + date + "?include=all_periods&include=scores",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
//             "x-rapidapi-key": "1eb7eadabemshf0789dca576eb58p1442aejsnece09022835e"
//         }
//     }
//     $.ajax(settings).done(function (response) {
//         var events = response.events;
//         console.log(events);
//         for (let i = 0; i < events.length; i++) {
//             var teams = events[i].teams;
//             for (let j = 0; j < teams.length; j++) {
//                 sportsTeams.push(teams[j].name);
//             }
//         }
//         // console.log(sportsTeams);
//         for (let j = 0; j < sportsTeams.length; j++) {
//             // if (proTeams.indexOf(sportsTeams[j]) !== -1) {
//             //     if (cityTeamsTonight.indexOf(baseballTeams[j] === -1)) {
//             //     cityTeamsTonight.push(sportsTeams[j]);
//             //     }
//             // };
            
//             if (proTeams.includes(sportsTeams[j])) {
//                 gameTonight = true;
//                 console.log("Your team is playing tonight");
//                 cityTeamsTonight.push(sportsTeams[j]);
//             } else {
//                 // console.log("Your team is NOT playing tonight");
//             }
//         }
//         console.log(sportsTeams);
//     });
    

$('#submit-button').on('click', function () {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    var date = $('#date-input').val().trim();
    getAvailableTeams(userCity);
    getEventsBySport(3, date);
    console.log(proTeams);
    console.log(sportsTeams);
});


    //  $.get(queryURLBasketball).then(function(response) {
    //     cityTeams = response.teams;
    //     var leagues = ["NFL", "NBA", "NHL", "MLB"];
    //     for (let i = 0; i < cityTeams.length; i++) {
    //         if (leagues.indexOf(cityTeams[i].strLeague) !== -1) {
    //              proTeams.push(cityTeams[i].strTeam);
    //          } 
    //      }
    //  });
    //  var date = $('#date-input').val().trim();
    //  const url = "https://cors-anywhere.herokuapp.com/https://api-nba-v1.p.rapidapi.com/games/date/" + date;
    //     const settings = {
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




