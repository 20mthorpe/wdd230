const dataLink = "data/members.json";
const cards = document.querySelector('#cards');

async function getMembers(){

    const response = await fetch(dataLink);
    const result = await response.json();

    if (response.ok) {
        console.log(result);
        displayMembers(result);
    }

}

async function displayMembers(members)
{
    members.forEach(member => {
        const card = document.createElement('section');

        const name = document.createElement('h2');
        name.textContent = `${member.name}`;

        let logo = document.createElement('img');

        logo.setAttribute('src', member.imgURL);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        //logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(logo);
        cards.appendChild(card);
    });
    //console.log(members[0].name);
}

getMembers();





async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
        //console.table(data.prophets);
        displayProphets(data.prophets);
    }
}

//displayProphets(data.prophets);

