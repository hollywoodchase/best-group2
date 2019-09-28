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
            // var openRestaurants = response.businesses;
            // for (let i = 0; i < openRestaurants.length; i++) {
            //     openRestaurantsArray.push(openRestaurants.name);
            //     console.log(openRestaurantsArray);
            // }
        });
})

        // need to push the option of this suggestion to the suggested places array

        // name
        // address
        // phone number
        // website
