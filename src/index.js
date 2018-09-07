document.addEventListener("DOMContentLoaded", function(event) {
  let url = "http://localhost:3000/beers"
  let listGroup = document.getElementById("list-group")
  let beerDetail = document.getElementById("beer-detail")

  fetch(url).then(res => res.json()).then(beers =>
    beers.forEach(beer => {
    let beerName = document.createElement("li")
    beerName.id = beer.name
    beerName.classList.add("list-group-item")
    let beerNameText = document.createTextNode(beer.name)
    beerName.appendChild(beerNameText)
    listGroup.appendChild(beerName)
    beerName.addEventListener("click", function(event) {
      event.preventDefault(event);
      beerDetail.innerHTML =
        `<h1>${beer.name}</h1>
        <img src=${beer.image_url}>
        <h3>${beer.tagline}</h3>
        <textarea id=${beer.name}-description">${beer.description}</textarea>
        <button id="edit-beer" class="btn btn-info">
          Save
        </button>`
        let targetBeer = event.target
        //could not retrieve beerDescription in order to get PATCH method to work. I tried the two methods below on lines 26 and 27.
        let beerDescription = targetBeer.querySelector("textarea").value
        // let beerDescription = document.getElementById(`${beer.name}-description`).value
        let saveButton = document.getElementById('edit-beer')

        saveButton.addEventListener("click", function(event) {
          console.log("click")
          fetch(url,
          {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'PATCH',
              body: JSON.stringify({description: beerDescription})
          }).then(res => res.json()).then(data => console.log(data))
        })

    })
  }))
  //could not retrieve beerDescription in order to get PATCH method to work. I tried the two methods on lines 26 and 27.



});
