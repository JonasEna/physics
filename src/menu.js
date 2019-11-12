function clickMenu(x) {
    x.classList.toggle("change");
    // var articles = document.getElementById("article-items");
    var about = document.getElementById("about-screen-position");
    var button = document.getElementById("about-button");
    // for some reason the style element is null the first click
    if (!about.style.right) {
        about.style.right = "0px";
    }
    if (about.style.right === '0px') {
        about.style.right = "300px";
        button.innerHTML = "Om <<<";
        button.style.backgroundColor = "#12131A";

    } else {
        about.style.right = "0px";
        button.innerHTML = "Om >>>";
        button.style.backgroundColor = "black";

    }
}