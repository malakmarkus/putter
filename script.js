var nameVar = document.querySelector(#idname);

idname.addEventListener("click", idk);






var getCitySearch = function () {
    // format the github api url

    var apiUrl = "https://api.teleport.org/api/cities/{?search} " + repo + "/issues?direction=asc";

    // make a get request to url
    fetch(apiUrl).then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);

                // check if api has paginated issues
                if (response.headers.get("Link")) {
                    displayWarning(repo);
                }
            });
        } else {
            // if not successful, redirect to homepage
            document.location.replace("./index.html");
        }
    });
};