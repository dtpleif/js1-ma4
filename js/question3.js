//Question 3

const creatorsUrl = "https://api.rawg.io/api/games/4200";

function handleResponse(response) {
  return response.json();
}

function createGameDetails(json) {

  const gameName = json.name;
  const gameImageUrl = json.background_image;
  const gameDescription = json.description;

  const resultContainer = document.querySelector(".container");

  let html = "";

  html += `<div class="container">
      <h1>${gameName}</h1>
      <div class="image" style="background-image: url(${gameImageUrl})"></div>
      <div class="description">${gameDescription}</div>
  </div>`;

  resultContainer.innerHTML = html;
}

function handleError(error) {
  console.log(error);
}

fetch(creatorsUrl)
  .then(handleResponse)
  .then(createGameDetails)
  .catch(handleError)
