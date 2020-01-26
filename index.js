'use strict';


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = document.getElementById("js-search-term").value;
        console.log('string', searchTerm);
        const searchUrl = 'https://api.github.com/users/'+searchTerm+'/repos'
        console.log(searchUrl);
    }
    )}

$(handleSubmit);