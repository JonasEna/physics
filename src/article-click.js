function article_click(clicked_id) {
	document.getElementById("article-items").style.display="none";
	
	const newHTML = document.createElement('div');
	newHTML.innerHTML =	"<p>HEJ</p>";
	
	document.getElementById("main-text").appendChild(newHTML);

}