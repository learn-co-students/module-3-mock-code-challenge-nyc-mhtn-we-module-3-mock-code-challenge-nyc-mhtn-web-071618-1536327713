const masterList = document.getElementById('list-group');
const beerDisplay = document.getElementById('beer-detail');
let listItem = document.getElementsByClassName('list-group-item');

fetch('http://localhost:3000/beers')
.then((res) => res.json())
.then(beer => {
  beer.forEach(element => {
    // debugger
    let beerele = document.createElement('li');
    beerele.innerText = element.name;
    beerele.id = element.id;
    beerele.className = 'list-group-item';
    masterList.appendChild(beerele);
  });
  [].forEach.call(listItem, e => {
    e.addEventListener('click', (element => {
      fetch(`http://localhost:3000/beers/${element.path[0].id}`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        beerDisplay.innerHTML = '';
        let beerName = document.createElement('h1');
        beerName.innerText = data.name;
        let beerImg = document.createElement('img');
        beerImg.src = data.image_url;
        let beerTagLine = document.createElement('h3');
        beerTagLine.innerText = data.tagline;
        let beerDescription = document.createElement('textarea');
        beerDescription.value = data.description;
        let beerEdit = document.createElement('button');
        beerEdit.id = 'edit-beer';
        beerEdit.className = 'btn btn-info';
        beerEdit.innerText = 'Save';
        beerDisplay.append(beerName);
        beerDisplay.append(beerImg);
        beerDisplay.append(beerTagLine);
        beerDisplay.append(beerDescription);
        beerDisplay.append(beerEdit);
        return data
      })
      .then((data) => {
        let beerSave = document.getElementById('edit-beer')
        beerSave.addEventListener("click",(event) => {
          // debugger
          event.preventDefault();
          fetch(`http://localhost:3000/beers/${data.id}`, 
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({description: document.querySelector('textarea').value})
          })
          .catch((err) => console.log(err))
        })
      })
      .catch((err) => console.log(err))
    }))
  });
})
.catch((err) => console.log(err))
