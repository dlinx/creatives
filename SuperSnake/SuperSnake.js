var ctx, s_Width = 90, s_direction = 2, x = 10, y = 10, s_length = [[10, 10], [20, 10], [30, 10], [40, 10]], food_x = 50, food_y = 50, isFood = false, scor, scor_val = 0;
window.onload = function() {
	ctx = document.getElementById("can").getContext("2d");
	ctx.canvas.width = 1300;
	ctx.canvas.height = 620;

	window.onkeydown = function(evt) {
		if (evt.keyCode >= 37 && evt.keyCode <= 40) {
			console.log(evt);
			//			console.log(s_direction, evt.keyCode - 37, (evt.keyCode - 37) % 2 != s_direction);
			if ((evt.keyCode - 37) % 2 != s_direction % 2)
				s_direction = evt.keyCode - 37;
		}
	};

	itrvl = setInterval(MoveSnake, 100);
	ctx.lineWidth = 5;
};
var MoveSnake = function() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	switch(s_direction) {
		//left
		case 0:
			x -= 10;
			break;
		//up
		case 1:
			y -= 10;
			break;
		//right
		case 2:
			x += 10;
			break;
		//down
		case 3:
			y += 10;
			break;
	}
	for (var i = 0; i < s_length.length; i++)
		ctx.fillRect(s_length[i][0], s_length[i][1], 10, 10);

	s_length.push([x, y]);
	s_length.shift();

	if (isFood) {
		createFood();
		isFood = !isFood;
	}
	if (x == food_x && y == food_y) {
		isFood = !isFood;
		s_length.push([x, y]);
		scor_val++;
		document.getElementById("scor").textContent = scor_val;
	}
	if (x <= -10 || y <= -10 || x >= ctx.canvas.width || y >= ctx.canvas.height) {
		clearInterval(itrvl);
		ctx.font = "70pt Arial";
		ctx.fillText("Game Over", 200, 500);
	}
	ctx.fillRect(food_x, food_y, 10, 10);
	ctx.stroke();

	// console.log(x, y, food_x, food_y);
};
function createFood() {
	food_x = Math.round((Math.random() * (ctx.canvas.width)) / 10) * 10;
	food_y = Math.round((Math.random() * (ctx.canvas.height)) / 10) * 10;
}