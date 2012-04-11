var redis = require('redis');

var client = redis.createClient();

exports.index = function(re, res){
client.get('cakeLove', function(err,count) {
		if(err) console.log(err);
		else {
			res.render('word/cakeLove', {cakeLove:count});
		}
	});

};

exports.index = function(re, res){
client.get('cakeLove', function(err,count) {
		if(err) console.log(err);
		else {
			res.render('word/cakeLove', {cakeLove:count});
		}
	});

};

exports.index = function(re, res){
client.get('cakeLove', function(err,count) {
		if(err) console.log(err);
		else {
			res.render('word/cakeLove', {cakeLove:count});
		}
	});

};

exports.index = function(re, res){
client.get('cakeLove', function(err,count) {
		if(err) console.log(err);
		else {
			res.render('word/cakeLove', {cakeLove:count});
		}
	});

};

exports.index = function(re, res){
client.get('cakeLove', function(err,count) {
		if(err) console.log(err);
		else {
			res.render('word/cakeLove', {cakeLove:count});
		}
	});

};
