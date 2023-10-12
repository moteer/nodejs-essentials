const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("myEvent", (message, user) => {
    console.log(`${user} says ${message}`);
});

process.stdin.on("data", (data) => {
    emitter.emit("myEvent", data, "Erik");
});

emitter.emit("myEvent", "I dont know", "Hardcoded");
emitter.emit("myEvent", "something", "Hardcoded");
emitter.emit("myEvent", "blabla...", "Hardcoded");
