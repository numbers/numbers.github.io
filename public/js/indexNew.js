
window.onload = function() {

	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	ctx.fillStyle = "rgb(125,125,125)"

	var x = 0,
		y = 0;

	var drawLines = setInterval(function() {
		ctx.fillRect(x, 80, 2, 5);
		ctx.fillRect(x, 160, 2, 5);
		ctx.fillRect(80, y, 5, 2);
		ctx.fillRect(160, y, 5, 2);
		if (x === 300) {
			drawLetters();
			clearInterval(drawLines);
		}
		x += 2;
		y += 2;
	}, 1);

	var drawLetters = function() {

		var xN = 20,
			yN = 80;

		var drawN = setInterval(function() {
			ctx.fillRect(xN, 30, 4, 4);
			ctx.fillRect(20, yN, 4, 4);
			if (yN > 30) ctx.fillRect(80, 110-yN, 4, 4);

			if (yN === 20) {
				clearInterval(drawN);
			}
			xN += 2;
			yN -= 2;
		}, 1);


	}


}