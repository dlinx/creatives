var isStart = false, startBar;
window.onload = function() {
	document.getElementById("btnStart").addEventListener("click", showStartMenu);
	startBar = document.getElementById("startPane");
	document.getElementById("btnPower").onclick = function() {
		window.close();
	};
};
function showStartMenu() {
	if (startBar.style.display == "none")
		startBar.style.display = "block";
	else
		startBar.style.display = "none";
}

window.onkeydown = function(evt) {
	console.log(evt);
	if (evt.keyCode == 91) {
		showStartMenu();
		evt.preventDefault();
		evt.stopPropagation();
	}
};
