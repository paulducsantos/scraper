var request = require('request');
var cheerio = require('cheerio');


request('https://news.ycombinator.com/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('td.title:nth-child(3)>a').each(function(i, element){
    // console.log($(element).children('.comhead > a > .sitestr'));
    //scrape some stuff, put it in an object and add it to the result array
    var scraped = {
      title: $(element).text(),
      link: $(element).attr('href')
      // from: $(element).children('.comhead > a > .sitestr').text()
    };
    result.push(scraped);
    });
  console.log(result);
});