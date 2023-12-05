const linksURL = "data/links.json";
const baseURL = "index.html";
const weekList = document.querySelector("#linklist");

async function getData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  if (response.ok) {
    displayWeeks(data.weeks);
  }
}

function displayWeeks(weeks) {

  weeks.forEach((week) => {
    //Display the week
    let newWeek = document.createElement("li");
    
    newWeek.textContent = week.week;
    weekList.appendChild(newWeek);

    let linkList = document.createElement("ul");

    week.links.forEach((link) => {
      //Display each link
      let newLinkli = document.createElement("li");

      let newLink = document.createElement("a");
      newLink.setAttribute("href", link.url);
      newLink.textContent = link.title;

      newLinkli.appendChild(newLink);
      console.log(newLinkli);
      
      linkList.appendChild(newLinkli);

    });

    newWeek.appendChild(linkList);

  });
}

getData();
