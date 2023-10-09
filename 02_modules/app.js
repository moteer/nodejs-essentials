const myModule = require("./myModule");

myModule.inc();
myModule.inc();

console.log(myModule.getCount());

myModule.dec();
console.log(myModule.getCount());
