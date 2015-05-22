 
 process.stdin.resume();
 
 process.stdin.setEncoding('utf8');
 
 process.stdin.on('data',function(d){
     process.stdout.write('data ->' + d);
 });
 
 process.stdin.on('end',function(){
     process.stderr.write('End!\n');
 });
 
 console.log("Node is running as process " + process.pid);