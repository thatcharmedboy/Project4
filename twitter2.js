var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');
var client = redis.createClient();

var t = new twitter({
	consumer_key: credentials.consumer_key,
	consumer_secret: credentials.consumer_secret,
	access_token_key: credentials.access_token_key,
	access_token_secret: credentials.access_token_secret
});



t.stream(
    'statuses/filter',
    { track: ['love'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);
       	 
        	if(tweet.text.match(/cake/)){     	 
            	client.incr('cakeLove');
        	}
       	 
        	if(tweet.text.match(/eclair/)){
            	client.incr('Eclair');
        	}
        	if(tweet.text.match(/doughnut/)){     	 
            	client.incr('Doughnut');
        	}
       	 
        	if(tweet.text.match(/creamhorn/)){
            	client.incr('Creamhorn');
        	}

        	if(tweet.text.match(/pie/)){
            	client.incr('Pie');
        	}

        	if(tweet.text.match(/Pudding/)){
            	client.incr('Pudding');
        	}

        	if(tweet.text.match(/Cookies/)){
            	client.incr('Cookies');
        	}

        	if(tweet.text.match(/creamhorn/)){
            	client.incr('iceCream');
        	}

    	});
	}
);