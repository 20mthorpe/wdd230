const darkButton = document.querySelector("#dark");
const main = document.querySelector("main");

darkButton.addEventListener("click", () => {
	if (darkButton.textContent.includes("Dark Mode")) {
		main.style.background = "black";
		main.style.color = "white";
		darkButton.textContent = "Light Mode";
	} else {
		main.style.background = "white";
		main.style.color = "black";
		darkButton.textContent = "Dark Mode";
	}
});
