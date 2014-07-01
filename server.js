var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
	console.log('NumbersJS.info is listening...');
});