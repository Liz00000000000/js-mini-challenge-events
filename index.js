/***** Beginning of Starter Code ****/


const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.querySelector('h1')

header.addEventListener('mouseover', function toggleColor(element) {
  if (element.target.style.color === "red") {
    element.target.style.color = "black"
  } else {
    element.target.style.color = "red"
  }
})

/***** Deliverable 2 *****/
// const but = document.querySelector('#button')
// but.preventDefault()

document.addEventListener('submit', function(e){
   e.preventDefault()
  const form = document.querySelector('#new-player-form')
  // const players = document.querySelector('.player-container')
  const newPlayer = document.createElement('li')

  const newPlayerNum = form.querySelectorAll('input')[0].value 
  const newPlayerName = form.querySelectorAll('input')[1].value
  const newPlayerNickName = form.querySelectorAll('input')[2].value
  const newPlayerUrl = form.querySelectorAll('input')[3].value

  console.log(newPlayerNum, newPlayerName, newPlayerNickName)

  newPlayer.innerHTML = `<h3>${newPlayerName} (<em>${newPlayerNickName}</em>)</h3>
  <img src="${newPlayerUrl}" alt="${newPlayerName}">
  <p class="likes"> 0 likes</p>
  <button class="like-button">❤️</button>`
  playerContainer.appendChild(newPlayer)
})

/***** Deliverable 3 *****/

document.addEventListener('click', function(e){
  let playerWeLike = e.target.parentNode
  let likesToadd = playerWeLike.querySelector('.likes')
  let currentLikes = likesToadd.innerHTML
  let like = parseInt(currentLikes)
  let newLike = like + 1 
  console.log(newLike)
  // playerWeLike.likesToadd.textHTML = `${like + 1} likes`
  likesToadd.textContent = newLike

})
