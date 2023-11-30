const dataLink = "data/members.json";
const cards = document.querySelector("#members");

var gridButton = document.querySelector("#gridButton");
var listButton = document.querySelector("#listButton");

gridButton.addEventListener("click", function () {
  cards.classList.add("cards");
  cards.classList.remove("memberlist");
});

listButton.addEventListener("click", function () {
  cards.classList.add("memberlist");
  cards.classList.remove("cards");
});

async function getMembers() {
  const response = await fetch(dataLink);
  const result = await response.json();

  if (response.ok) {
    //console.log(result);
    displayMembers(result);
  }
}

async function displayMembers(members) {
  members.forEach((member) => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = `${member.name}`;

    let logo = document.createElement("img");
    let displayAddress = document.createElement("h4");
    let displayPhone = document.createElement("h4");
    let addressLines = [];

    logo.setAttribute("src", member.imgURL);
    logo.setAttribute("alt", `Logo of ${member.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "300");
    //logo.setAttribute('max-height', '300');

    //member.address.forEach((line) => {addressLines.push(line)});
    for(let line in member.address) {
      if (member.address[line] != ""){
        addressLines.push(" "+member.address[line]);
      }
    }
    //console.log(addressLines);

    displayAddress.textContent = addressLines;

    displayPhone.textContent = member.phone;
    
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(displayAddress);
    card.appendChild(displayPhone);
    cards.appendChild(card);
  });
}

getMembers();
