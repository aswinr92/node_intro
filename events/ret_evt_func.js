var EventEmitter = require('events').EventEmitter;

var getResource = function(num){
    var e = new EventEmitter();
    
    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('data',++count);
            if(count==num){
                e.emit('end',count);
                clearInterval(t);
            }
        },100)
    });
    
    return (e);
}

var r = getResource(5);

r.on('start',function(){
    console.log('I have started');
});

r.on('data',function(d){
    console.log('data->'+ d);
});

r.on('end',function(t){
    console.log('Oh!!! thats the end folks ' + t);
});