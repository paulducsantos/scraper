var request = require('request');
var cheerio = require('cheerio');


request('https://news.ycombinator.com/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $([YOUR SELECTOR HERE]).each(function(i, element){

    //scrape some stuff, put it in an object and add it to the result array

    });
  console.log(result);
});