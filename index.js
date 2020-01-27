'use strict';

const searchURL = '';

const params = {
    type: "owner",
    sort: "created"
};


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
            const content = document.createElement("li");
            content.innerText = responseJson[index].name;
            resultsContainer.appendChild(content);
            // const content1 = document.createElement("a");
            // content.innerHTML = responseJson[index].html_url;
            resultsContainer.appendChild(content);
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
        console.log('string', searchTerm);
        this.searchURL = 'https://api.github.com/users/' + searchTerm + `/repos?type=${params.type}&sort=${params.sort}`;
        console.log(JSON.stringify(searchURL));
        getRepo(this.searchURL);    
    }
    )}

$(handleSubmit);