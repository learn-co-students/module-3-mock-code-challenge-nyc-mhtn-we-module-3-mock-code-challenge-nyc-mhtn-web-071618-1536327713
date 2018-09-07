document.addEventListener('DOMContentLoaded', function() {
  let holdMyBeer = document.getElementById('list-group')
  let beerHolder = document.getElementById('beer-detail')
  // console.log(holdMyBeer)
  // console.log(beerHolder)

  // console.log("beer")
  fetch('http://localhost:3000/beers')
  .then(response => response.json())
  .then(beerData => beerData.forEach(displayBeer))

  function displayBeer(beerData) {
    let beerTab = document.createElement('li')
    beerTab.setAttribute("class", "list-group-item");
    beerTab.innerText = `${beerData.name}`
    // console.log(beerTab)
    holdMyBeer.appendChild(beerTab)

    beerTab.addEventListener('click', (event) => {
      beerHolder.innerText = ""
      beerIndex = document.createElement('div')
      beerIndex.innerHTML = `<h1>${beerData.name}</h1>
                             <img src="${beerData.image_url}">
                             <h3>${beerData.tagline}</h3>
                             <textarea id="beer-text">${beerData.description}</textarea>
                             <button id="edit-beer" class="btn btn-info">Save</button>
                             `
      beerHolder.appendChild(beerIndex);
      // console.log(beerIndex)

      let beerEditButton = document.getElementById('edit-beer')
      let beerText = document.getElementById('beer-text').value
      console.log(beerText)

      beerEditButton.addEventListener('click', () => {
        // console.log(beerEditButton)
      let beerID = `${beerData.id}`
      const url = ('http://localhost:3000/beers/' + beerID)
      console.log(beerID)
      console.log(url)


        fetch(url,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: "PATCH",
          body: JSON.stringify({description: beerText})
        })
      })
    })
  }
});
