document.addEventListener("DOMContentLoaded", function(event) {

let ul = document.getElementById("list-group")
let submit;

let beerNames;
let allBeers;

fetch('http://localhost:3000/beers')
  .then(function(res) {
    return res.json()
  })
  .then(function(beers) {
    allBeers = beers
    beerNames = beers.forEach(function(beer){
      let li = document.createElement("li")
      li.className = "list-group-item"
      li.dataset["id"] = beer.id
      li.appendChild(document.createTextNode(beer.name))
      ul.appendChild(li)
    })
  })


function createBeerHTML(details){
  return `<h1>${details.name}</h1>
  <img src="${details.image_url}">
  <h3>${details.tagline}</h3>
  <textarea>${details.description}</textarea>
  <button id="edit-beer" class="btn btn-info">
    Save
  </button>`

}

  function locateBeerDetails(beer){
    fetch('http://localhost:3000/beers')
      .then(function(res) {
        return res.json()
      })
      .then(function(beers) {
        let details = beers.find(thisBeer => thisBeer.id.toString() === beer.dataset.id)
        let html = createBeerHTML(details)
        let beerDetails = document.getElementById("beer-detail")
        beerDetails.innerHTML = html
        createSubmitListener()
      })
  }

  ul.addEventListener("click", function(event){
    locateBeerDetails(event.target)
  })

  function createSubmitListener(){
    submit = document.getElementById("edit-beer")
    submit.addEventListener("click", function(event){
      console.log(event)
    })
  }





})
