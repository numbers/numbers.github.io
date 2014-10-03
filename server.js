var express = require('express'),
	app = express(),
	docData = require('./doc.json');


app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/examples', function(req, res) {
	res.render('examples');
});

app.get('/basic', function(req, res) {
	res.render('basic', {module: 'basic', data: docData.basic});
});
app.get('/complex', function(req, res) {
	res.render('complex', {module: 'complex', data: docData.complex});
});
app.get('/calculus', function(req, res) {
	res.render('calculus', {module: 'calculus', data: docData.calculus});
});
app.get('/dsp', function(req, res) {
	res.render('dsp', {module: 'dsp', data: docData.dsp});
});
app.get('/generate', function(req, res) {
	res.render('generate', {module: 'generate', data: docData.generate});
});
app.get('/matrix', function(req, res) {
	res.render('matrix', {module: 'matrix', data: docData.matrix});
});
app.get('/prime', function(req, res) {
	res.render('prime', {module: 'prime', data: docData.prime});
});
app.get('/random', function(req, res) {
	res.render('random', {module: 'random', data: docData.random});
});
app.get('/statistic', function(req, res) {
	res.render('statistic', {module: 'statistic', data: docData.statistic});
});


app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

var server = app.listen(3000, function() {
	console.log('NumbersJS.info is listening...');
});