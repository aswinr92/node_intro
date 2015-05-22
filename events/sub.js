var exp1 = require('./pub');

console.log(exp1.resource);

var r = new exp1.resource(5);
 
 r.on('start',function(){
    console.log('Started'); 
 });
 
 r.on('data',function(d){
    console.log('data --> ' + d); 
 });
 
 r.on('end',function(d){
     console.log(d);
 });
 