// On push of the submit button, take the value of the city
var proTeams = [];
var phillyTeams = [];
var phillyTeamsTonight = [];


$('#submit-button').on('click', function () {
    event.preventDefault();


    var userCity = $('#city-input').val().trim();

    const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + userCity;

    const settings = {
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Bearer LdIoBm1aGT5mCUNt8oZHjlmAPaFP3OSz3RW5HEFW5IUcrqttybk1fSx8NQgRIwvg7G8JRyVR9-yRda_5MKXxtGFu9p1QhCMeQxCdxRZt2SqM8CiFJcIdPdUgrcGKXXYx"
        }
    };
    $.ajax(settings).then(function (response) {
        console.log("hello");
        console.log(response.businesses[1].alias)
    })
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








