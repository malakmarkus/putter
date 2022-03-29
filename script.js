var searchFormEl = document.querySelector("#search-form");
var inputEl = document.querySelector("#book-name");
var resultsContainerEl = document.querySelector("#results-container");
var randomBtnEl = document.querySelector("#random");
var years =[1901, 1902, 1903, 1904, 1905, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1915, 1916, 1917, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1936, 1937, 1938, 1939, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
var randomYear = years [Math.floor(Math.random() * years.length)];

// search button logic
var submitHandler = function(event){
    event.preventDefault();
    // console.log(event)
    
    // getting the value from the search form to use in the searchBooks function
    var bookName = inputEl.value.trim();
    if(bookName){
        searchBooks(bookName);
        inputEl.value = "";
    }
    else{
        dialog.showModal();
    }
}


// books search function
var  searchBooks = function(book) {
    
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + book + "";

    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        displayBooksInfo(data, book)
        console.log(data);
        });
    });
};

var displayBooksInfo = function(books) {
    resultsContainerEl.textContent = "";
    for (var i = 0; i < books.items.length; i++ ) {
        
        //creat a container for each result
        var resultEl = document.createElement("div");
        resultEl.classList =  "list-inside";

        //getting results for the book titles
        var bookTitle = books.items[i].volumeInfo.title;

        // creat a sapn for the title
        var titleEl = document.createElement("span");
        titleEl.textContent = "Book Title: " + bookTitle;
        titleEl.classList = "search-results"

        // append to the container
        resultEl.appendChild(titleEl);



        // getting results for authors names
        var bookAuthors = books.items[i].volumeInfo.authors;

        // create a sapn for the authors
        var authorsEl = document.createElement("span")
        authorsEl.textContent = "Author(s): " + bookAuthors;
        authorsEl.classList = "search-results"
        
        // append to the container
        resultEl.appendChild(authorsEl);



        //getting results for book links
        var bookLink = books.items[i].volumeInfo.previewLink;

        //create a element
        var a = document.createElement("a");
        a.classList = "search-results"
        a.setAttribute("href", bookLink);

        a.innerHTML ="Start reading";
        resultEl.appendChild(a)



        //getting results for book images
        var bookImg = books.items[i].volumeInfo.imageLinks.thumbnail;

        // create a sapn for the link
        var imgEl = document.createElement("img");
        imgEl.classList = "search-results";
        imgEl.src = bookImg;

         // append to the container
        resultEl.appendChild(imgEl);

        //append container to the dom
        resultsContainerEl.appendChild(resultEl);
        // console.log(titleEl);

    };
};

var searchNobel = function(event) {
    event.preventDefault()
    var NobelUrl = "https://api.nobelprize.org/2.0/nobelPrize/lit/"+ randomYear +"";
    fetch(NobelUrl).then(function(response){
        response.json().then(function(data){
        displayNobelWinner(data);
        });
    });
};




var displayNobelWinner = function(data) {
    
        console.log(data);

        resultsContainerEl.textContent = "";
        for (const element of data){
            //console.log(element);

            //create a container for each result
            var nobelResultEl = document.createElement("div");
            nobelResultEl.classList = "list-inside";

            //getting results for year
            var awardYear = element.awardYear;
            //console.log(awardYear);

            //create a sapn for the year
            var awardYearEl = document.createElement("span");
            awardYearEl.textContent = "Year: " + awardYear;
            awardYearEl.classList = "search-results";

            // append to the container
            nobelResultEl.appendChild(awardYearEl);

        

            //getting results for category
            var category = element.categoryFullName.en;
            console.log(category);

            //create a sapn for the year
            var categoryEl = document.createElement("span");
            categoryEl.textContent = "Category: " + category;
            categoryEl.classList = "search-results";

            // append to the container
            nobelResultEl.appendChild(categoryEl);

            

            //getting results for Winner
            var winnerName = element.laureates[0].knownName.en;
            console.log(winnerName);

            //create a sapn for the year
            var winnerNameEl = document.createElement("span");
            winnerNameEl.textContent = "Winner: " + winnerName;
            winnerNameEl.classList = "search-results";

            // append to the container
            nobelResultEl.appendChild(winnerNameEl);

            

            //getting results for book links
            var summaryLink = ("https://www.nobelprize.org/prizes/literature/" + randomYear + "/summary/");
            console.log(summaryLink);

            // var create a element
            var a = document.createElement("a");
            a.classList = "search-results"
            a.setAttribute("href", summaryLink);

            a.innerHTML ="Winner Info";
            nobelResultEl.appendChild(a)

            //append container to the dom
            resultsContainerEl.appendChild(nobelResultEl);
        }

};
randomBtnEl.addEventListener("click", searchNobel);

searchFormEl.addEventListener("submit", submitHandler);
