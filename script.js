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
        });
    })
};
var displayCities = function(cities, searchTerm){
    resultsContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm;
    const results = cities._embedded["city:search-results"];

    for (var i = 0; i < results.length; i++){

        resultDisplay = results[i];
        var cityEl = document.createElement("div");
        cityEl.classList = "list-item";
        var titleEl = document.createElement("span");
        titleEl.textContent = resultDisplay.matching_full_name;
        cityEl.appendChild(titleEl);
        resultsContainerEl.appendChild(cityEl);
        
    }


};
cityFormEl.addEventListener("submit", formSubmitHandler);
    