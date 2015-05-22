var request = require('request');

var a = request('http://www.pluralsight.com');

// a.on('start',function(){
//   console.log('started'); //// No start event :P
// });

a.on('data',function(d){
     console.log('data >>>>' + d);
});

a.on('end',function(){
    console.log('ended');
});