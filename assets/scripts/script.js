$('#submit-button').on('click', function() {
    event.preventDefault();
    var userCity = $('#city-input').val().trim();
    
    var queryURL1 = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + userCity;

    $.get(queryURL1).then(function(response) {
        var teams = response.teams;
        for (let i = 0; i < teams.length; i++) {
            console.log(teams[i]);
        }
    });
});


