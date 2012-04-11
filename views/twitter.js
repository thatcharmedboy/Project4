var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');


var client = redis.createClient();

client.exists('OBAMALOVE', function(error, exists) {
	if(error) {
    	console.log('ERROR: '+error);
	} else if(!exists) {
    	client.set('OBAMALOVE', 0);
	};
});



var t = new twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
});



t.stream(
	'statuses/filter',
{ track: ['Obama'] }
function(stream) {
    	stream.on('data', function(tweet) {
                   	 
        	var d = (tweet.created_at);
        	var month = new Date(Date.parse(d)).getMonth()+1;
        	var day = new Date(Date.parse(d)).getDate();
        	var year = new Date(Date.parse(d)).getFullYear();
			var date = ('Obama' + "-" + month + "-" + day); 

	console.log(date);
       	 
        	if(tweet.text.match(/love/)){     	 
            	client.hincrby(date, 'ObamaLove','1', redis.print);
        	}
       	 
        	if(tweet.text.match(/hate/)){
            	client.hincrby(date, 'ObamaHate', '1', redis.print);
        	}
    	});
	}
);

t.stream(
	'statuses/filter',
	{ track: ['Romney'] },
	function(stream) {
    	stream.on('data', function(tweet) {
                   	 
        	var d = (tweet.created_at);
        	var month = new Date(Date.parse(d)).getMonth()+1;
        	var day = new Date(Date.parse(d)).getDate();
        	var year = new Date(Date.parse(d)).getFullYear();
        	var date = ('Romney' + "-" + month + "-" + day);
        	console.log(date);
       	 
        	if(tweet.text.match(/love/)){     	 
            	client.hincrby(date, 'RomneyLove','1', redis.print);
        	}
       	 
        	if(tweet.text.match(/hate/)){
            	client.hincrby(date, 'RomneyHate', '1', redis.print);
        	}
	 
    	});
	}
);