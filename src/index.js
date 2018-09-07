fetchBeerDataForList()

function fetchBeerDataForList() {
  fetch('http://localhost:3000/beers')
  .then(res => res.json())
  .then(data => {
    for(let index in data){
      const id = data[index].id
      const name = data[index].name
      const listGroup = document.getElementById('list-group')
      const newBeerLi = document.createElement('li')
      listGroup.append(newBeerLi)
      newBeerLi.className = 'list-group-item'
      newBeerLi.id = id
      newBeerLi.innerHTML = name
    }

    addEventToListItems()
  })
}

function addEventToListItems() {
  const listItems = document.getElementsByClassName('list-group-item');
  for(let i = 0; i < listItems.length; i++){
  	listItems[i].addEventListener('click', e => {
      fetchBeerDataForDetails(listItems[i].id)
    });
  }
}


function fetchBeerDataForDetails(id) {
  fetch('http://localhost:3000/beers/${id}')
  .then(res => res.json())
  .then(data => {
    for(let index in data){
      const name = data[index].name
      const tagline = data[index].tagline
      const firstBrewed = data[index].first_brewed
      const description = data[index].description
      const imageURL = data[index].image_url
      const foodPairing = data[index].food_pairing
      const brewersTips = data[index].brewers_tips
      const contributedBy = data[index].contributed_by

      const beerDetail = document.getElementById('beer-detail')
      const newBeerDiv = document.createElement('div')
      beerDetail.append(newBeerDiv)
      newBeerDiv.innerHTML = name
    }
  })
}
