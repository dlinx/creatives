window.onload = function() {
	timer();
	setInterval(timer, "1000");
};
function timer() {
	var d = new Date();

	showTime(d.getHours() % 12, d.getMinutes(), d.getSeconds());
}

function showTime(hh, mm, ss) {

	hh=(hh==0)?12:hh;
	mm=(mm==0)?60:mm;
	ss=(ss==0)?60:ss;
	
	var can = document.getElementById("can");
	var ctx = can.getContext("2d");
	ctx.canvas.width=1300;

	//background
	ctx.fillStyle = "#FF8";
	ctx.fillRect(10, 10, 1200, 660);

	//Seconds
	ctx.beginPath();
	ctx.lineWidth = 280;
	ctx.strokeStyle = "#F55";
	ctx.arc(500, 340, 140, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + ss * 6));
	ctx.stroke();

	//Minutes
	ctx.beginPath();
	ctx.lineWidth = 220;
	ctx.strokeStyle = "#5F5";
	ctx.arc(500, 340, 110, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + mm * 6));
	ctx.stroke();

	//Hours
	ctx.beginPath();
	ctx.lineWidth = 180;
	ctx.strokeStyle = "#55F";
	ctx.arc(500, 340, 85, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + hh * 30));
	ctx.stroke();
}