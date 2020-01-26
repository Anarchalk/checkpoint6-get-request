'use strict';
const searchURL = '';

const params = {
    type: "owner",
    sort: "created"
};


function formatQueryParams(params) { 
const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
return queryItems.join('&');


function getRepo(UrlLink) {
    fetch(UrlLink)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(console.log(response.statusText));
    })
    .then(responseJson => {
        Object.keys(responseJson).forEach(index => {
            const resultsContainer = document.getElementById('results-list');
            const content = document.createElement("p");
            content.innerText = responseJson[index].owner;
            // resultsContainer.appendChild(content);
                            console.log('obj data', responseJson[index].owner)

        })
    }
        )
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = document.getElementById("js-search-term").value;
        console.log(searchTerm);
        this.searchURL = 'https://api.github.com/users/' + searchTerm + `/repos?type=${params.type}&sort=${params.sort}`;
        console.log(JSON.stringify(searchURL));
        getRepo(this.searchURL);

    }
    )}
    

$(handleSubmit)