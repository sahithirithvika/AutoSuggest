//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar = document.getElementById("search-input");
var searchSuggestions = document.getElementById("suggestions");

searchBar.addEventListener("input", function () {
    var query = searchBar.value.trim();
    if (query === "") {
        searchSuggestions.innerHTML = "";
        return;
    }
    fetchSuggestions(query);

});

function fetchSuggestions(query) {
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8"
    fetch(fullAPI)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            showSuggestions(data);
            //console.log(data);
            //return;
        })
        .catch(function (err) {
            console.log("Error:", +err);
        })
}

function showSuggestions(data) {
    var values = data.results;
    if (data.count == 0) {
        searchSuggestions.innerHTML =
            "<div>No Matching Results Found</div>";
    }
    else {
        var htmlString = "";
        for (var i = 0; i < values.length; i++) {
            htmlString +=
                "<div class='suggestion-item'>" + values[i].text + "</div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}