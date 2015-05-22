var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    if(req.url=== '/file.txt'){
        fs.createReadStream(__dirname+'/file.txt').pipe(res);
    }
    else{
        res.end('Hello');
    }
}).listen(8080);

console.log('Server Running!!!');