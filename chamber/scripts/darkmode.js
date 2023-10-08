const darkButton = document.querySelector("#dark");
const main = document.querySelector("main");

darkButton.addEventListener("click", () => {
	if (darkButton.textContent.includes("Dark Mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		darkButton.textContent = "Light Mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		darkButton.textContent = "Dark Mode";
	}
});
