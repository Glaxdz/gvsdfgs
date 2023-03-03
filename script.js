const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (eventArg) => {
    console.log("Listener called", eventArg);
});

emitter.emit('messageLogged', {id:1, url: "darbs"});