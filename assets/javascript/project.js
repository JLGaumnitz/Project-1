// weatherbitAPIKey = a9e56460888847cb8e5be3983a349760;
// weatherbitUrl = "https://api.weatherbit.io/v2.0/current?"
// example call for Api https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY


// eventfulAPIKey = gS6C4DppGrbXnzJ8;
//Example query for Eventful API http://api.eventful.com/json/events/search?...&where=32.746682,-117.162741&within=25

var locationZIP = "";
var withinDistance = "";

$("#submit").on("click", function(){
    event.preventDefault();
});

//weatherbit API call
$.ajax({
    url: "https://api.weatherbit.io/v2.0/current?&key=a9e56460888847cb8e5be3983a349760&postal_code=" + location + "&country=US",
    method: "GET"
})

.then(function (WbResults) {
    
    var WbResults = WbResults.data;
});

//eventful API call
$.ajax({
    url: "http://api.eventful.com/json/events/search?app_key=gS6C4DppGrbXnzJ8&date=today&location=" + location + "&within=" + withinDistance,
    method: "GET"
})

    .then(function (eResponse) {

        var eResults = eResponse.data;
    });