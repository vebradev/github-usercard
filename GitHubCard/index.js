const data = axios
  .get("https://api.github.com/users/vebradev")
  .then(res => {
    const data = res.data;
    
    document
    .querySelector(".cards")
    .append(cardBuilder(data));
  })
  .catch(err => {
    alert("Error: ", err.message);
  });


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function cardBuilder(data) {
  // parent container
  let divCard = document.createElement('div');
  divCard.classList.add('card');

  // image
  let img = document.createElement('img');
  img.src = data.avatar_url;

  // info div
  let divCardInfo = document.createElement('div');
  divCardInfo.classList.add('card-info');

  // h3
  let h3Name = document.createElement('h3');
  h3Name.classList.add('name');
  h3Name.textContent = data.name;

  // location paragraph
  let pLocation = document.createElement('p');
  pLocation.textContent = `Location: ${data.location}`;

  // profile paragraph
  let pProfile = document.createElement('p');
  pProfile.textContent = `Profile: `;

  // link in profile paragraph
  let link = document.createElement('a');
  link.href = data.html_url;
  link.textContent = data.html_url;

  // folowers paragraphs
  let pFollowers = document.createElement('p');
  let pFollowing = document.createElement('p');
  pFollowers.textContent = `Folowers: ${data.followers}`;
  pFollowing.textContent = `Folowing: ${data.following}`;

  // bio paragraph
  let pBio = document.createElement('p');
  pBio.textContent = data.bio ? `Bio: ${data.bio}` : `️Bio: 🤦‍`;

  // appends
  divCard.append(img, divCardInfo);
  pProfile.append(link);
  divCardInfo.append(h3Name, pLocation, pProfile, pFollowers, pFollowing, pFollowing, pBio);

  return divCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
