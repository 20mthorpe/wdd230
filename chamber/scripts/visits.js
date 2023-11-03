let currDate = new Date().getTime();
let lastVisited = localStorage.getItem("lastVisited");
let message = '';

if (lastVisited) {
    

    let timeDif = currDate - lastVisited;
    let dayDif = timeDif / (100*3600*24);
    

    if (dayDif > 1) {
        message = `You last visited ${Math.round(dayDif).toLocaleString()} days ago`;
    } else {
        message = "Back so soon! Awesome!";
    }

} else {
    message = "Welcome! Let us know if you have any questions!";
}

document.querySelector("#welcome").textContent = message;
localStorage.setItem('lastVisited', currDate)