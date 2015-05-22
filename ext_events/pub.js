var util = require('util');

var EventEmitter = require('events').EventEmitter;

function Resource(m){
    var max = m;
    var self = this;
    
    process.nextTick(function(){
        var count = 0;
       self.emit('start');
       var t = setInterval(function(){
           self.emit('data',++count);
           if(count==max){
               self.emit('end', 'Ended with ' + count + ' data');
               clearInterval(t);
           }
       },10)
       
    });
}

util.inherits(Resource,EventEmitter);

var asd = 'asd';

var a= {resource:Resource,asdf:asd};

//module.exports = Resource;
//module.exports = asd;

module.exports = a;