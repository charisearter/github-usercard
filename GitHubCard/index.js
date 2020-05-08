// /*
//   STEP 1: using axios, send a GET request to the following URL
//     (replacing the placeholder with your Github name):
//     https://api.github.com/users/<your name>
// */

// axios.get('https://api.github.com/users/charisearter')
// .then(response => {
//   const me = response.data
//   console.log(me)
// })
// .catch(error => {
//   console.log('Nope!')
// })
// .finally(() => {
//   console.log('finished')
// })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
let cardEntry = document.querySelector('.cards')

function getCard(gitHubName) {
axios.get(`https://api.github.com/users/${gitHubName}`)
.then((response) => {
  //use the userCardMaker function to make user cards and append to DOM
  let theUser = response.data;
    cardEntry.appendChild(userCardMaker(theUser));
  })


}//ends get Card function

//test

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    let followerInfo = response.data;
    cardEntry.appendChild(userCardMaker(followerInfo));
  })
});
git

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
function userCardMaker(user) {
  //set up elements
  const userCard = document.createElement('div')
  const userImg = document.createElement('img')
  const userInfo = document.createElement('div')
  const userH3 = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  //structure
  userCard.appendChild(userImg)
  userCard.appendChild(userInfo)
  userInfo.appendChild(userH3)
  userInfo.appendChild(userName)
  userInfo.appendChild(userLocation)
  userInfo.appendChild(userProfile)
  userInfo.appendChild(userFollowers)
  userInfo.appendChild(userFollowing)
  userInfo.appendChild(userBio)

  //add classes
  userCard.classList.add('card')
  userInfo.classList.add('card-info')
  userH3.classList.add('name')
  userName.classList.add('username')
  
  //add textcontent
  userImg.src = user["avatar_url"]
  userH3.textContent = user["name"]
  userName.textContent = user["login"]
  userLocation.textContent = `Location: ${user["location"]}`
  userProfile.textContent = `Profile: ${user["html_url"]}`
  userFollowers.textContent = `Followers: ${user.followers}`
  userFollowing.textContent = `Following ${user.following}`
  userBio.textContent = `Bio: ${user["bio"]}`

  return userCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/