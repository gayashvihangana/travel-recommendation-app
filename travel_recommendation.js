const searchBtn = document.getElementById("btn-search");
const resetBtn = document.getElementById("btn-clear");
const resultDiv = document.getElementById("resultDiv");

function resetInput() {
    document.getElementById('destinationSearch').value = '';
    document.getElementById('resultDiv').innerHTML = '';
}

function handleSearch() {
  const input = document
    .getElementById("destinationSearch")
    .value.toLowerCase();
  const categoryMap = {
    beach: "beaches",
    beaches: "beaches",
    temple: "temples",
    temples: "temples",
    country: "countries",
    countries: "countries",
  };
  // console.log(input);

  const destination = categoryMap[input];
  if (!destination) {
    alert("No results found! Try searching Temple, Country or Beach.");
    resetInput();
  }

  resultDiv.innerHTML = "";

  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      const items = data[destination].slice(0, 2);
      console.log(items);

      items.forEach((item) => {
        const card = document.createElement("div");

        const image = (destination === "countries") ? item.cities[0].imageUrl : item.imageUrl;
        const name = (destination === "countries") ? item.cities[0].name : item.name;
        const description = (destination === "countries") ? item.cities[0].description : item.description;

        card.innerHTML = `
            <img src="${image}" />
            <h3>${name}</h3>
            <p>${description}</p>
        `;
        resultDiv.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

searchBtn.addEventListener("click", handleSearch);
resetBtn.addEventListener("click", resetInput);
