//Question 2

const creatorsUrl = "https://api.rawg.io/api/creators";

function handleResponse(response) {
  return response.json();
}

function handleJson(json) {

  const results = json.results;
  const resultContainer = document.querySelector(".results");

  let html = "";

  results.forEach(function(result) {
    html += `<div class="game">
        <h2>${result.name}</h2>
        <img src=${result.image} alt=${result.name}>
    </div>`
  });

  resultContainer.innerHTML = html;
}

function handleError(error) {
  console.log(error);
}

fetch(creatorsUrl)
  .then(handleResponse)
  .then(handleJson)
  .catch(handleError)
