 //var os = require("os");
 var a  = new Buffer('Hello');
 
 console.log(a);
 console.log(a.toString());
 console.log(a.toString('base64'));
 console.log(a.toString('utf-8',2,4));
 
//  console.log(os.type());
//  console.log(os.hostname());
//  console.log(os.cpus());