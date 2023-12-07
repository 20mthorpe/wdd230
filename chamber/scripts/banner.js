const banner = document.querySelector(".banner");
const bannerContent = document.querySelector("#bannercontent");
const quitBanner = document.querySelector("#quitbanner");

const now = new Date();
const day = now.getDay();

//console.log(day);

if ([1,2,3].includes(day)){
    bannerContent.textContent = "Please attend our Chamber of Commerce meet and greet! Wednesdays at 7:00pm";
}
else {
    removeBanner();
}

function removeBanner(){
    if (banner) {
        banner.remove();
    } else {
        console.log('banner not found');
    }
}

quitBanner.addEventListener('click', removeBanner);