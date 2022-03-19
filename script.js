var cityFormEl = document.querySelector("#city-search");
var cityInputEl = document.querySelector("#city-name");
var resultsContainerEl = document.querySelector("#results-container");
var citySearchTerm = document.querySelector("#city-search-term")
// capture user input value
var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    if (cityName) {
        getCityInfo(cityName);
        cityInputEl = "";
    }
    else {
        alert("sorry! we don't have enough information about your city yet")
    }
}
// city search function
var  getCityInfo = function(city) {
    var apiUrl = "https://api.teleport.org/api/cities/?search=" + city +""
    fetch(apiUrl).then(function(response){ response.json().then(function(data){
        displayCities(data, city)
        console.log(data);
        });
    })
};
var displayCities = function(cities, searchTerm){
    resultsContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm;
    console.log(cities);
    console.log(searchTerm);
    for (var i = 0; i < cities.length; i++){

        resultDisplay = cities[i].search-results;
        var cityEl = document.createElement("div");
        cityEl.classList = "list-item";
        var titleEl = document.createElement("span");
        titleEl.textContent = resultDisplay;
        cityEl.appendChild(titleEl);
        resultsContainerEl.appendChild(cityEl);
        
    }


};
cityFormEl.addEventListener("submit", formSubmitHandler);
    