document.addEventListener("DOMContentLoaded", () => {
  const URL_NAME = "http://localhost:3000/beers"

fetch(URL_NAME)
.then( response => response.json())
.then( json => {
  console.log ("the json ran!")
  console.log (json)
  const list = document.getElementById('list-group')
  const htmlBeerName = document.getElementById('beer-name')
  const htmlBeerImg = document.getElementById('beer-img')
  const htmlBeerTagLine = document.getElementById('beer-tag-line')
  const htmlBeerDescription = document.getElementById('beer-description')
  const body = document.body


for (let i=0; i < json.length; i++){
  const beerName = document.createElement('li')
  beerName.innerText = json[i].name
  const beerTagLine = document.createElement('ul')
  beerTagLine.innerText = json[i].tagline


  list.append(beerName)
  list.append(beerTagLine)


list.addEventListener("click", function(){
  console.log("did something happen?")


  const chosenBeerName = document.createElement('h1')
  chosenBeerName.innerText = json[i].name

  const chosenBeerImg = document.createElement('img')
  chosenBeerImg.src = json[i].image_url

  const chosenBeerTagLine = document.createElement('h3')
  chosenBeerTagLine.innerText = json[i].tagline

  const chosenBeerDescription = document.createElement('p')
  chosenBeerDescription.innerText = json[i].description

  htmlBeerName.append(chosenBeerName)
  htmlBeerImg.append(chosenBeerImg)
  htmlBeerTagLine.append(chosenBeerTagLine)
  htmlBeerDescription.append(chosenBeerDescription)

})
}


})
//I commented this out because it causes an error when left in. But
//editing the beer description requires some form of Patch below.
//
// fetch(URL_NAME, {
//   method: "PATCH",
//   body: JSON.stringify({description:description}),
//   headers: {
//     "Content-Type": "application/json"
//   }
//
// })

})
