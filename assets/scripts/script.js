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

$('#submit-button').on('click', function () {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    var date = $('#date-input').val().trim();
    
});




