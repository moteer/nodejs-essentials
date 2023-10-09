let tick = 1;
let current = 1;
let tickInterval = setInterval(
    () => {
        console.log(current);
        current += tick;
    }, tick * 1000);


let seconds = 5;
setTimeout(
    () => {
        clearInterval(tickInterval);
        console.log(`Timeout after ${seconds}.`);
    }, seconds * 1000);