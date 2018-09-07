const beerList = document.getElementById('list-group')
const beerDetail = document.getElementById('beer-detail')
//beerNames is an HTML collection
const beerNames = document.getElementsByClassName('list-group-item')


fetch("http://localhost:3000/beers")
.then(res=> res.json())
.then(function(beerData){
  beerData.forEach(beer => {
    beerList.innerHTML +=  `<li class='list-group-item'>${beer.name}</li>`

    const beerArray = [...beerNames]

    beerArray.forEach(beerName =>{
      beerName.addEventListener('click', function(event){
        console.log('beer clicked')

        // debugger
        // beerData.find()

      // beerDetail.innerHTML =
      // `<h1>${beer.name}</h1>
      //   <img src= ${beer.image_url}>
      //   <h3>${beer.tagline}</h3>
      //   <textarea>${beer.description}</textarea>
      //   <button id="edit-beer" class="btn btn-info">
      //     Save
      //   </button>`
      })
    })

  })



})
