const dataLink = "data/members.json";
const spotlight = document.querySelector("#companyspot");

//var gridButton = document.querySelector("#gridButton");
//var listButton = document.querySelector("#listButton");

async function getRandomMember() {
  const response = await fetch(dataLink);
  const result = await response.json();

  if (response.ok) {

    const silverGoldMembers = result.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');

    if (silverGoldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        const randomMember = silverGoldMembers[randomIndex];
        //console.log(randomMember);
        displayMember(randomMember);
    } else {
        console.log("No silver or gold members found.");
    }
    
  }
}

async function displayMember(member) {

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
    spotlight.appendChild(card);

}

getRandomMember();
