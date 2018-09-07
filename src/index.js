let beerData
let beerNames = []

const ul = document.getElementById("list-group")
const div = document.getElementById('beer-detail')

getBeers()

function beerApp(data) {
  beerData = data
  storeBeerNames()
  displayBeerList()
}

function displayBeerList() {
  counter = 0
  for (let name of beerNames) {
    let index = beerData[counter]
    let url = `http://localhost:3000/beers/${beerData[counter].id}`
    let beerDisplayHtml

    let li = document.createElement('li')
    li.className = "list-group-item"
    let a = document.createElement('a')
    a.href = '#'

    let imageUrl = getImageUrl(url)

    a.addEventListener('click', function() {
        beerDisplayHtml = displayBeerDetail(index.name, imageUrl, index.tagline, index.description)
        div.innerHTML = beerDisplayHtml
    })
    counter++
    a.innerText = name
    li.appendChild(a)
    ul.appendChild(li)

  }
}

function getImageUrl(url){
  fetch(url)
  .then(res => res.json())
  .then(data => {return data.image_url})
}

function displayBeerDetail(name, imageUrl, tagline, description) {
  return `<h1>${name}</h1>
  <img src="${imageUrl}">
  <h3>${tagline}</h3>
  <textarea>${description}</textarea>
  <button id="edit-beer" class="btn btn-info">
    Save
  </button>`
}

function storeBeerNames() {
  for (let beer of beerData) {
    beerNames.push(beer.name)
  }

}

function getBeers() {
  fetch('http://localhost:3000/beers')
  .then(res => res.json())
  .then(data => beerApp(data))
}
