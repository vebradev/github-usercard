const name = "vebradev";

axios
  .get(`https://api.github.com/users/${name}`)
  .then(res => {
    const data = res.data;
    document.querySelector(".cards").append(cardBuilder(data));
  })
  .catch(err => {
    alert("Error: ", err.message);
  });

function cardBuilder(data) {
  // parent container
  let divCard = document.createElement("div");
  divCard.classList.add("card");

  // image
  let img = document.createElement("img");
  img.src = data.avatar_url;

  // info div
  let divCardInfo = document.createElement("div");
  divCardInfo.classList.add("card-info");

  // h3
  let h3Name = document.createElement("h3");
  h3Name.classList.add("name");
  h3Name.textContent = data.name ? data.name : `🤦‍`;

  // location paragraph
  let pLocation = document.createElement("p");
  pLocation.textContent = data.location
    ? `Location: ${data.location}`
    : `Location: 🤦‍`;

  // profile paragraph
  let pProfile = document.createElement("p");
  pProfile.textContent = `Profile: `;

  // link in profile paragraph
  let link = document.createElement("a");
  link.href = data.html_url;
  link.textContent = data.html_url;

  // folowers paragraphs
  let pFollowers = document.createElement("p");
  let pFollowing = document.createElement("p");
  pFollowers.textContent = `Folowers: ${data.followers}`;
  pFollowing.textContent = `Folowing: ${data.following}`;

  // bio paragraph
  let pBio = document.createElement("p");
  pBio.textContent = data.bio ? `Bio: ${data.bio}` : `️Bio: 🤦‍`;

  // appends
  divCard.append(img, divCardInfo);
  pProfile.append(link);
  divCardInfo.append(
    h3Name,
    pLocation,
    pProfile,
    pFollowers,
    pFollowing,
    pFollowing,
    pBio
  );

  return divCard;
}

const followersArray = [
  "borjasolerr",
  "anuoluwa",
  "krikaz",
  "Becheru888",
  "basilcea"
];

followersArray.forEach(name => {
  axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => {
      const data = res.data;
      document.querySelector(".cards").append(cardBuilder(data));
    })
    .catch(err => {
      alert("Error: ", err.message);
    });
});
