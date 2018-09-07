
const url = "http://localhost:3000/beers"
const listGroup = document.getElementById("list-group")
const beerDetail = document.getElementById("beer-detail")
let beerData
document.addEventListener("DOMContentLoaded", (e)=>{
  fetch(url)
    .then(resp=>resp.json())
    .then(json=>{beerData = json;showBeer();})
  listGroup.addEventListener("click", (e)=>{
    let arr = e.target.id.split("-")
    if( arr[0] === "beer" && parseInt(arr[1])>0 ){
      showBeerDetail(beerData.find(b=>b.id === parseInt(arr[1])))
    }
  })
})

function showBeer(){
  listGroup.innerHTML = beerData.map((b)=>`<li class="list-group-item" id="beer-${b.id}">${b.name}</li>`)
}


function showBeerDetail(beer){
  beerDetail.innerHTML=`<h1>${beer.name}</h1>
                        <img src="${beer.image_url}">
                        <h3>${beer.tagline}</h3>
                        <textarea id="beer_description">${beer.description}</textarea>
                        <button id="edit-beer" data-id=${beer.id} class="btn btn-info">
                          Save
                        </button>`
  let editBeer = document.getElementById("edit-beer")
  editBeer.addEventListener("click", (e)=>{
    let beer = beerData.find(b=>b.id == parseInt(e.target.dataset.id))
    let description = document.getElementById("beer_description").value
    fetch(`${url}/${beer.id}`,
          {
            method: "PATCH",
            body: JSON.stringify({"description": description}),
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          } )
          .then(resp=>resp.text())
          .then(text=>{beer.description = description;alert("save successful")})
  })
}
