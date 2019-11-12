
function about() {
	// var articles = document.getElementById("article-items");
	var about = document.getElementById("about-screen");
	var button = document.getElementById("about-button");
	// for some reason the style element is null the first click
	if (!about.style.width) {
		about.style.width = "0%";
	}
	if (about.style.width === '0%') {
		about.style.width = "400px";
		button.innerHTML = "Om <<<";
		button.style.backgroundColor = "#12131A";

	} else {
		about.style.width = "0%";
		button.innerHTML = "Om >>>";
		button.style.backgroundColor = "black";

	}
}