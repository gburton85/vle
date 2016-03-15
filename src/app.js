'use strict';

var express = require('express');
var	posts = require('./mock/subjects.json');

var postsLists = Object.keys(posts).map(function(value){
	return posts[value]})

var app = express();

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates')

app.get('/', function(req, res){
	var path = req.path;
	// res.locals.path = path;
	res.render('index', {path: path});
});

app.get('/studentHome/:title?', function(req, res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.render('studentHome', {posts: postsLists})
	} else {
	var post = posts[title] || {};
	res.render('subjects', { post: post});
	}
})

app.get('/teacherHome/:title?', function(req, res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.render('teacherHome', {posts: postsLists})
	} else {
	var post = posts[title] || {};
	res.render('subjects', { post: post});
	}
})

app.get('/subjects', function(req, res){
	if (req.query.raw){
		res.json(posts);
	} else {
	res.json(postsLists);
	}
})

app.post('/login', function(req, res){
	fetch('localhost:1337/login')
})


app.listen(3000, function(){
	console.log("The frontend server is running on port 3000!")
});
