var searchFormEl = document.querySelector("#search-form");
var inputEl = document.querySelector("#book-name");
var resultsContainerEl = document.querySelector("#results-container");

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
        alert("please enter a book name")
    }
};

// books search function
var  searchBooks = function(book) {
    
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + book + "";

    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        displayBooksInfo(data, book)
        //console.log(data);
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
        titleEl.textContent = bookTitle;

        //console.log(bookTitle);

        // append to the container
        resultEl.appendChild(titleEl);

        // getting results for authors names
        var bookAuthors = books.items[i].volumeInfo.authors;

        // creat a sapn for the authors
        var authorsEl = document.createElement("span")
        authorsEl.textContent = bookAuthors;
        
        // append to the container
        resultEl.appendChild(authorsEl);


        

        
        //getting results for book links
        var bookLink = books.items[i].volumeInfo.previewLink;
        //console.log(bookLink);

        // creat a sapn for the link
        var linkEl = document.createElement("link");

        linkEl.textContent =bookLink;

        // append to the container
        resultEl.appendChild(linkEl);


         //getting results for book images
        var bookImg = books.items[i].volumeInfo.thumbnail;

         // creat a sapn for the link
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", ""+bookImg+"");

         // append to the container
        resultEl.appendChild(imgEl);






        //append container to the dom
        resultsContainerEl.appendChild(resultEl);
        // console.log(titleEl);



    };
    //console.log(books);
};


searchFormEl.addEventListener("submit", submitHandler);

