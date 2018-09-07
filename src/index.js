
function fetchBeers(){
    fetch('http://localhost:3000/beers').
    then(apiData=>apiData.json()).
    then(beers=>{
        beers.forEach(function(beer){
            document.getElementById('list-group').innerHTML+= `
            <li class="list-group-item">${beer.name}</li>
            `
            
        })
    })
}

let beers = fetchBeers()

function addListListener(){
    wholeList = document.getElementById('list-group')

    wholeList.addEventListener('click',showDetails)

    function showDetails(event){
        
        fetch('http://localhost:3000/beers').
        then(apiData=>apiData.json()).
        then(function(beers){
           let clickedBeer =  beers.filter(function(beer){return beer.name === event.target.innerText})
           let detailDiv = document.getElementById('beer-detail') 
            detailDiv.innerHTML = `
            <h1>${clickedBeer[0].name}</h1>
            <img src=${clickedBeer[0].image_url}>
            <h3>${clickedBeer[0].tagline}</h3>
            <textarea>${clickedBeer[0].description}</textarea>
            <button id="edit-beer" class="btn btn-info">
              Save
            </button>
            `
           
        })    
    }
}
        
        
        
   


addListListener()








// document.getElementById('beer-detail')