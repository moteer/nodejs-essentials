const events = require("events");
const progressbar = require("../02_modules/progressbarModule");

let emitter = new events.EventEmitter();


emitter.on("myEvent", (message, user) => {
    console.log(`${user} says ${message}`);
});

process.stdin.on("data", (data) => {
    emitter.emit("myEvent", data.toString().trim(), "Erik");
});

emitter.emit("myEvent", "I dont know", "Hardcoded");
emitter.emit("myEvent", "something", "Hardcoded");
emitter.emit("myEvent", "blabla...", "Hardcoded");

progressbar.startProgressbar(0.5, [".", "..", "...", ""]);
