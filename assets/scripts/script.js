var beerGardenWeather;
var userCity;
var timeNow = moment().format('h:mm a');;
var theWeather = "";
var fCategory = '';
var restaurantName = "";
var restaurantLat = "";
var restaurantLong = "";
var restName = "";
var restLat = "";
var restLong = "";

function weather(cityName) {

    let weatherToday = {};

    //WEATHER!
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIKey;
    
    console.log(queryURL);

    return $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            console.log(response);

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed + "m/h");
            console.log("Humidity: " + response.main.humidity + "%");
            console.log("Temperature: " + response.main.temp + "°(F)");
            console.log("Weather: " + response.weather[0].main);
            console.log("Description: " + response.weather[0].description);

            let windspeed = response.wind.speed;
            let humidity = response.main.humidity;
            let temperature = response.main.temp;
            let weather = response.weather[0].main;
            var weathers = ["It's a beautiful sunny day, let's go outside", "It's nice, but a little chilly", "Holy shit it's cold!", "Brr! It's snowing", "Rain is the worst", "Woah it's so windy out", "Ugh, it's too hot out, let's find some AC", "There is nothing special about the weather today"];
            let category = '';

            if (temperature > 65 && temperature < 85 && weather === "Clear" && windspeed < 10) {
                theWeather = weathers[0];
                // console.log(weathers[0]);
                category = "sandwiches";
            }
            else if (temperature < 65 && temperature > 0 && weather === "Clear") {
                theWeather = weathers[1];
                // console.log(weathers[1]);
                category = "gastropubs";
            }
            else if (temperature < 0) {
                theWeather = weathers[2];
                // console.log(weathers[2]);
                category = "comfortfood";
            }
            else if (weather === "Snow") {
                theWeather = weathers[3];
                // console.log(weathers[3]);
                category = "Diners";
            }
            else if (weather === "Rain") {
                theWeather = weathers[4];
                // console.log(weathers[4]);
                category = "fishnchips";
            }
            else if (windspeed > 20) {
                theWeather = weathers[5];
                // console.log(weathers[5]);
                category = "soup";
            }
            else if (temperature > 85) {
                theWeather = weathers[6];
                // console.log(weathers[6]);
                category = "tex-mex";
            }
            else {
                theWeather = weathers[7];
                // console.log(theWeather);
                category = "pizza";
            }

            weatherToday = {
                windspeed,
                humidity,
                temperature,
                weather,
                category
            }
            console.log(theWeather);
            return weatherToday;
        });

}
document.getElementById('weather-report').innerText = theWeather;
document.getElementById('time').innerText = "and it's " + timeNow;
document.getElementById('eat-rec').innerText = fCategory;

weather("Philadelphia");
console.log(weather);

// YELP!
function yelp(category, cityName) {

    const url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true&&categories=" + category + "&location=" + cityName;

    const settings = {
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Bearer LdIoBm1aGT5mCUNt8oZHjlmAPaFP3OSz3RW5HEFW5IUcrqttybk1fSx8NQgRIwvg7G8JRyVR9-yRda_5MKXxtGFu9p1QhCMeQxCdxRZt2SqM8CiFJcIdPdUgrcGKXXYx"
        }
    };
    return $.ajax(settings).then(function (response) {
        console.log(response);

        var randomNum = Math.floor(Math.random() * (response.businesses.length - 0)) + 1;
        console.log(randomNum);

        var restaurantName = response.businesses[randomNum].name;
        var restaurantLat = response.businesses[randomNum].coordinates.latitude;
        var restaurantLong = response.businesses[randomNum].coordinates.longitude;

        var restName = $("<h3>").text(restaurantName);
        var restLat = $("<p>").text(restaurantLat);
        var restLong = $("<p>").text(restaurantLong);

        $("#restaurant-results").append(restName, restLat, restLong);

        let coordinates = {
            latitude : restaurantLat,
            longitude : restaurantLong
        }

        console.log(coordinates);

        return coordinates;

    });

}

//EventBrite
function eventBrite(latitude, longitude) {
    var OAuthToken = "X3AL23CV25F7FKYUFWIW";
    var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=&location.longitude=" + longitude + "&location.latitude=" + latitude + "&expand=venue&token=" + OAuthToken;

    console.log(queryURL);

    return $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var eventName = response.events[0].name.text;

        var eventNameTag = $("<h3>").text(eventName);

        $("#restaurant-results").append(eventNameTag);
    })
}


$('#submit-button').on('click', function () {
    event.preventDefault();

    userCity = $('#city-input').val().trim();

    var openRestaurantsArray = [];

    const url = "https://upenn-cors-server.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=&open_now=true&location=" + userCity;

    const settings = {
        url: url,
        method: "GET",
        headers: {
            "Authorization": "Bearer LdIoBm1aGT5mCUNt8oZHjlmAPaFP3OSz3RW5HEFW5IUcrqttybk1fSx8NQgRIwvg7G8JRyVR9-yRda_5MKXxtGFu9p1QhCMeQxCdxRZt2SqM8CiFJcIdPdUgrcGKXXYx"
        }
    };
    $.ajax(settings).then(function (response) {
        var openRestaurants = response.businesses;
        for (let i = 0; i < openRestaurants.length; i++) {
            openRestaurantsArray.push(openRestaurants[i].name);
            // console.log(openRestaurantsArray);
        } if (beerGardenWeather = true) {
            // console.log(response.businesses)

        }
    });
    $('#q-page').css('display', 'none');
    $('#eat-page').css('display', 'flex');


    function yelp(city, cat) {
        console.log(city, cat, "hello");
    }
    yelp(userCity, fCategory);
});
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





