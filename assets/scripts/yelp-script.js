$('#submit-button').on('click', function () {
    event.preventDefault();
    console.log("submitted");

        var userCity = $('#city-input').val().trim();
        console.log(userCity);
        // var openRestaurantsArray = [];


        const queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&open_now=true&location=" + userCity;
        console.log(queryURL);

        const settings = {
            queryURL: queryURL,
            method: "GET",
            headers: {
                "Authorization": "Bearer LdIoBm1aGT5mCUNt8oZHjlmAPaFP3OSz3RW5HEFW5IUcrqttybk1fSx8NQgRIwvg7G8JRyVR9-yRda_5MKXxtGFu9p1QhCMeQxCdxRZt2SqM8CiFJcIdPdUgrcGKXXYx"
            }
        };
        $.ajax(settings).then(function (response) {
            console.log("hello");
            console.log(response.businesses[1].alias)
            var openRestaurants = response.businesses;
            for (let i = 0; i < openRestaurants.length; i++) {
                openRestaurantsArray.push(openRestaurants.name);
                console.log(openRestaurantsArray);
            }
        });
})

        // need to push the option of this suggestion to the suggested places array

        // name
        // address
        // phone number
        // website


        // if (temperature > 65 && temperature < 85 && weather === "Clear" && windspeed < 10) {
        //     console.log("It's a beautiful sunny day, let's go outside");
        // }
        // else if (temperature < 65 && temperature > 0 && weather === "Clear") {
        //     console.log("It's nice, but a little chilly");
        // }
        // else if (temperature < 0 ) {
        //     console.log("Holy shit it's cold!");
        // }
        // else if (weather === "Snow") {
        //     console.log("Brr! It's snowing");
        // }
        // else if (weather === "Rain") {
        //     console.log("Rain is the worst");
        // }
        // else if (windspeed > 20) {
        //     console.log("Woah it's so windy out");
        // }
        // else if (temperature > 85) {
        //     console.log("Ugh, it's too hot out, let's find some AC");
        // }
        // else {
        //     console.log("There is nothing special about the weather today");
        // }







