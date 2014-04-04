var ctx, i = 1, speed = 0, pos = 0, x1, x2, x3, x4, y1, s1 = 0, s2 = 0, s3 = 0, s4 = 0, posX = 0;
window.onload = function() {
	ctx = document.getElementById("can").getContext("2d");
	ctx.canvas.height = 650;
	ctx.canvas.width = 500;

	createEnvironment();
	pos = ctx.canvas.width / 2;
	x1 = pos + 55;
	x2 = pos - 120;
	x3 = pos - 55;
	x4 = pos + 120;
};
function createEnvironment() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	ctx.fillRect(50, 0, 2, 650);
	ctx.fillRect(450, 0, 2, 650);

	ctx.moveTo(450, 0);
	ctx.lineTo(450, 650);

	for (var pat = -1; pat < 7; pat++)
		ctx.fillRect((ctx.canvas.width - 5) / 2, 100 * pat + i, 10, 50);

	//User Car
	ctx.fillStyle = "rgb(255,0,0)";
	ctx.fillRect(pos, ctx.canvas.height - 50, 30, 40);

	//Car 1 (X1)
	ctx.fillStyle = "rgb(0,255,0)";
	ctx.fillRect(x1, ctx.canvas.height - 50 - (s1 - posX), 30, 40);
	console.log(s1 - speed);
	//Car 2
	ctx.fillStyle = "rgb(0,0,255)";
	ctx.fillRect(x2, ctx.canvas.height - 50 - (s2 - posX), 30, 40);

	//Car 3
	ctx.fillStyle = "rgb(255,255,0)";
	ctx.fillRect(x3, ctx.canvas.height - 50 - (s3 - posX), 30, 40);

	//Car 4
	ctx.fillStyle = "rgb(255,0,255)";
	ctx.fillRect(x4, ctx.canvas.height - 50 - (s4 - posX), 30, 40);

	ctx.fillStyle = "rgb(0,0,0)";

	i += speed / 5;
	i = Math.round(i);

	if (speed > 0)
		speed -= .2;
	if (i > 100)
		i = 0;

	// speeds
	s1 += .3;
	s2 += .4;
	s3 += .5;
	s4 += .45;

	document.getElementById("speedVal").innerHTML = Math.round(speed) + " mph";

	webkitRequestAnimationFrame(createEnvironment);
}

window.onkeydown = function(evt) {
	if ((evt.which == 38 || evt.which == 39 || evt.which == 37)) {
		if (speed < 200)
			speed++;
		posX++;
	}
	if (evt.which == 37 && pos > 55)
		pos -= 2;
	if (evt.which == 39 && pos < ctx.canvas.width - 85)
		pos += 2;
	if (evt.which == 40 && speed > 0)
		speed -= 2;
};
