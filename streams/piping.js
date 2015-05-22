var request = require('request');
var fs = require('fs');  
var zlib = require('zlib');

var a  = request('http://www.pluralsight.com');  // Readable stream

//a.pipe(process.stdout);  // Writable stream

a.pipe(fs.createWriteStream('pluralsight.html'));  // Request the site and pipe it to the stream returned by the creWrStr.. thus creating a filel

a.pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight1.html.gz')); // chaining pipes -- zipping it
