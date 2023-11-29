const dataLink = "data/members.json";
const cards = document.querySelector('.members');

var gridButton = document.querySelector('#gridButton');
var listButton = document.querySelector('#listButton');

gridButton.addEventListener('click', function() {   
    cards.id = 'cards';
});

listButton.addEventListener('click', function() {
    cards.id = 'memberlist';
});

async function getMembers(){

    const response = await fetch(dataLink);
    const result = await response.json();

    if (response.ok) {
        //console.log(result);
        displayMembers(result);
    }

}

async function displayMembers(members)
{
    //if (cards.id == "cards") {

        members.forEach(member => {

            const card = document.createElement('section');
    
            const name = document.createElement('h2');
            name.textContent = `${member.name}`;
    
            let logo = document.createElement('img');
    
            logo.setAttribute('src', member.imgURL);
            logo.setAttribute('alt', `Logo of ${member.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '300');
            //logo.setAttribute('max-height', '300');
    
            card.appendChild(name);
            card.appendChild(logo);
            cards.appendChild(card);
        });
   //}

    //else {

        //members.forEach(member => {

            
        //});
    //}
    //console.log(members[0].name);
}

getMembers();

