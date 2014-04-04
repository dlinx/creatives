window.onload = function() {
	ctx = document.getElementById("can").getContext("2d");
	w=1366-10;
	h=768-10;
	ctx.canvas.width = w;
	ctx.canvas.height = h;
	i = 20, state = true,bt=0;

	setInterval(startBreathing, 15);

	// createHeartLine();
	function startBreathing() {
		ctx.canvas.width = w;
		createEnvironment();
		breath();
		createMyHeart();
		createHeartLine();
	}

	function createEnvironment() {
		// ctx.moveTo(w / 2, 0);
		// ctx.lineTo(w / 2, h);
// 
		// ctx.moveTo(0, h / 2);
		// ctx.lineTo(w, h / 2);

		ctx.translate(w / 2, h / 2);

		ctx.stroke();
		ctx.closePath();
	}

	function createMyHeart() {

		ctx.beginPath();

		var rg = ctx.createRadialGradient(-100, -70, 10, 0, 0, 250);
		rg.addColorStop(0, "rgba(255,150,150,1)");
		rg.addColorStop(.2, "rgba(220,0,0,1)");
		rg.addColorStop(1, "rgba(0,0,0,1)");
		ctx.fillStyle = rg;

		for (var a = -270; a < 270; a += .1) {
			var x = Math.cos((Math.PI / (180)) * -a) * a * .85;
			var y = Math.sin((Math.PI / (180)) * -a * .85) * a;
			if (a < 90 && a > -90)
				continue;
			ctx.lineTo(x + 1, y);
		}

		ctx.closePath();
		ctx.fill();
	}

	function createHeartLine() {
		ctx.beginPath();
		for (var j = -30; j < 30; j++) {
			var x = j;
			var y = heartBeat(bt+j) *1;
			ctx.lineTo(x, y);
		}
		ctx.strokeStyle="rgb(255,255,255)";
		ctx.stroke();
	}

	function breath() {
		var s = Math.abs(heartBeat(i)/1);
		ctx.scale(s, s);
		if (i < 20)
			// console.log(s)
			if (i < 20)
				state = true;
		if (i > 40)
			state = false;

		if (state)
			i++;
		else
			i--;
		if (i == 360)
			i = 0;
		bt++;
	}

	function heartBeat(b) {
		return (1 / Math.sin(1 / Math.sin((Math.PI / 45 * b) / (3))));
	}

};
