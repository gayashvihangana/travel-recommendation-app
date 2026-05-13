const searchBtn = document.getElementById("btn-search");
const resetBtn = document.getElementById("btn-reset");

fetch('travel_recommendation_api.json')
    .then(response => response.json)
    .then(data => {

    })
    .catch(error => {
        console.error('Error: ', error);
    })