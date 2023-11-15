const linksURL = "../data/links.json";
const baseURL = "../index.html";

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
    week.links.forEach((link) => {
      //Display each link
      console.log(link);
      let newLink = document.createElement("a");
      newLink.setAttribute("href", link.url);
      newLink.textContent = link.title;
      console.log(newLink);
    });
  });
}

getData();
