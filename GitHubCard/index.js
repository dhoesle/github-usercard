/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<dhoesle>
*/
// console.log(axios)
// const axios = require('axios').default;

function getUser(name){
  let thePromise = axios.get(`https://api.github.com/users/${name}`)
  
  thePromise.then(response => {
    const userData = response.data
    console.log('the response from the API, organized for us by axios',userData)
    const userCard = userCardMaker(userData)
    cards.appendChild(userCard)
  })

  .catch(error => {
    debugger
    console.log('something went wrong, hopefully the error tells us what', error);
  })

  .then(() => {
    console.log('done')
  })
}

getUser('dhoesle')
// console.log(userData)


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
  let cards = document.querySelector('.cards')

function userCardMaker(user){

  // const {avatar_url, name, login, location, html_url, followers, following, bio } = user

  let card = document.createElement('div')
  let img = document.createElement('img')
  let cardInfo = document.createElement('div')
  let userName = document.createElement('h3')
  let usersUserName = document.createElement('p')
  let userLocation = document.createElement('p')
  let profile = document.createElement('p')
  let userAddress = document.createElement('a')
  let userFollowers = document.createElement('p')
  let userFollowing = document.createElement('p')
  let userBio = document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  usersUserName.classList.add('username')

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(usersUserName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(userAddress)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  img.src = user.avatar_url
  userName.innerHTML = `${user.name}`
  usersUserName.innerHTML = `${user.login}`
  userLocation.innerHTML = `${user.location}`
  profile.innerHTML = 'Profile:'
  userAddress.innerHTML = `${user.html_url}`
  userFollowers.innerHTML = `Followers: ${user.followers}`
  userFollowing.innerHTML = `Following: ${user.following}`
  userBio.innerHTML = `Bio: ${user.bio}`


  
  return card
  

}

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray.push('tetondan')
followersArray.push('dustinmyers')
followersArray.push('justsml')
followersArray.push('luishrd')
followersArray.push('bigknell')
console.log("followersArray", followersArray)

for (i = 0; i < followersArray.length; i++) {
  getUser(followersArray[i])
}




  /*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
