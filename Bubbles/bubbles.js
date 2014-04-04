$(function() {
	arr = [];
	for (var i = 0; i < 5; i++) {
		setTimeout(function() {
			createBubble();
		}, i * 1000);
	}
	var i = 0;
	function createBubble() {
		var bubble = {
			pos : {
				x : 500,
				y : 500
			},
			direction : Math.abs(Math.random()*360),
			speed : 10
		};

		var tmplet = $("<div></div>");
		tmplet.addClass("bubble");
		//tmplet.text(i);
		i++;
		$("#dvBody").append(tmplet);

		arr.push({
			"elm" : tmplet,
			"param" : bubble
		});

		moveBubble();
		function moveBubble() {

			//Set next Position
			bubble.pos.x += Math.sin((Math.PI / 180) * bubble.direction) * bubble.speed;
			bubble.pos.y += Math.cos((Math.PI / 180) * bubble.direction) * bubble.speed;
			tmplet.css("left", bubble.pos.x + "px");
			tmplet.css("top", bubble.pos.y + "px");

			//Set Color
			var c = getColor(bubble.pos.x, bubble.pos.y);
			tmplet.css("box-shadow", "0px 0px 30px rgba(" + c.r + "," + c.g + "," + c.b + ",1) inset,20px 20px 30px rgba(0,0,0,.7) ");

			//Reflection X
			reflectX_Axis(bubble);
			//Reflection Y
			reflectY_Axis(bubble);

			webkitRequestAnimationFrame(moveBubble);
		}

	};
	setInterval(collideHandler,1);
	function collideHandler() {
		var posArr = [];
		for (var i = 0; i < arr.length; i++) {
			posArr.push({
				"top" : arr[i].elm.offset().top + 75,
				"left" : arr[i].elm.offset().left + 75,
				"id" : arr[i].elm.text()
			});

			$("#b" + (i + 1 ) + "x").text(arr[i].elm.offset().left);
			$("#b" + (i + 1) + "y").text(arr[i].elm.offset().top);
			$("#b" + (i + 1 ) + "d").text(arr[i].param.direction);
		}

		for (var otr = 0; otr < posArr.length; otr++)
			for (var inr = otr + 1; inr < posArr.length; inr++)
				if (isCollide(posArr[otr], posArr[inr])) {
					// console.log("Collision:" + posArr[otr].id + "=>" + posArr[inr].id);
					collide(arr[otr].param);
					collide(arr[inr].param);
					// console.log(arr[otr].param.direction,posArr[otr].id);
				}
	}

	function isCollide(point1, point2) {
		var dist = Math.sqrt((Math.pow((point1.top - point2.top), 2) + Math.pow((point1.left - point2.left), 2)));
		return (dist < 150);
	}

	function collide(bubble) {
		bubble.direction =(bubble.direction+5)%360;
	}

	function reflectX_Axis(bubble) {
		if (bubble.pos.x <= 0 || bubble.pos.x >= screen.width - 150)
			bubble.direction = 360 - bubble.direction;
	}

	function reflectY_Axis(bubble) {
		if (bubble.pos.y <= 0 || bubble.pos.y >= screen.height - 150)
			bubble.direction = 180 - bubble.direction;
	}

	function getColor(x, y) {
		var col = {
			r : Math.round(x / (1366 / 255)),
			g : Math.round(y / (768 / 255)),
			b : Math.round((x * y) / ((1366 * 768) / 255))
		};
		return col;
	};
});
