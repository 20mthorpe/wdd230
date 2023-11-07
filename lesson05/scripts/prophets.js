const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
        console.table(data.prophets);
    }
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const portrait = document.createElement('img');
        
        card.appendChild(fullName);
        cards.appendChild(card);
    });
}

getProphetData();

