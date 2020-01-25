'use strict';



const searchURL = 'https://api.github.com/users/'+searchTerm+'/repos';

function formatQueryParams(params) {
    const queryItems= Object.keys(params)
    .map(key=> `${key}=${params[key]}`)
    return queryItems.join('&');
    
}

function displayResults(responseJson) {
console.log(responseJson);
$('#results-list').empty();
$('#results-list').append(``

);

};

function getNews(query) {
    const params = {
        type: "owner",
        sort: "created"
    };
    const queryString = formatQueryParams(params)
    const url = searchURL + '?' + queryString;

    console.log(url);

    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson, maxResults))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        getNews(searchTerm);
    });
}

$(watchForm);
