const allBeersList = document.getElementById('list-group')
const beerDetailDiv = document.getElementById('beer-detail')
let dataId = 0
const allBeerObjects = []

//get request to beers api
fetch('http://localhost:3000/beers')
.then(res => res.json())
.then(json => {
  //add all beer objects to array
  json.forEach(function(beer){
    const listItem = document.createElement('li');
    // listItem.setAttribute('data-id', `${dataId++}`)
    listItem.dataset.id = ++dataId
    listItem.setAttribute('class', 'list-group-item')
    listItem.innerHTML = beer.name;
    allBeersList.appendChild(listItem);
    //add event listener to each list item
    listItem.addEventListener('click', function(){
      //define selected beer
      const selectedBeerId = event.target.dataset.id
      console.log(selectedBeerId)
      fetch(`http://localhost:3000/beers/${selectedBeerId}`)
      .then(res => res.json())
      .then(json => {
        const selectedBeer = json
      beerDetailDiv.innerHTML = `<h1>${selectedBeer.name}</h1>
      <img src="${selectedBeer.image_url}">
      <h3>${selectedBeer.tagline}</h3>
      <textarea id='beer-description'>${selectedBeer.description}</textarea>
      <button id="edit-beer" class="btn btn-info">
      Save
      </button>`
      const editBeerButton = document.getElementById('edit-beer')
      editBeerButton.addEventListener('click', function(){
        const description = document.getElementById('beer-description').value
        // console.log(newBeerDescription)
        fetch(`http://localhost:3000/beers/${selectedBeer.id}`,{
          body: JSON.stringify({description}),
          method: 'PATCH',
	        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        })
      })
    })
  })
})
