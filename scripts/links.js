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
    weeks.forEach(week => {
        //Display the week
        lessons.forEach(lesson => {
            //Display each link
        })
    });
}
