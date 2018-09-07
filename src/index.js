const listGroup = document.getElementById("list-group")
// console.log(listGroup)
fetch("http://localhost:3000/beers")
.then(res => res.json())
.then(beers => beers.forEach(beer => {
  let listItem = document.createElement('li')
  listItem.innerText = beer.name
  listItem.className = "list-group-item"
  listGroup.append(listItem)
  listItem.addEventListener("click", function(event) {
    let beerDetail = document.getElementById("beer-detail")
    fetch(`http://localhost:3000/beers/${beer.id}`)
    .then(res => res.json())
    .then(beerInfo => {
      beerDetail.innerHTML =
      `<h1>${beerInfo.name}</h1>
      <img src="${beerInfo.image_url}">
      <h3>${beerInfo.tagline}</h3>
      <textarea>${beerInfo.description}</textarea>
      <button id="edit-beer" class="btn btn-info">
        Save
      </button>`
      const editButton = document.getElementById("edit-beer")
      editButton.addEventListener("click", function(event) {
        event.preventDefault()
        fetch(`http://localhost:3000/beers/${beer.id}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({description: "your new description"})
        })



    })
    })

  })

}))
