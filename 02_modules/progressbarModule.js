let currentIndex = 0;
let interval;

function getNextSymbol(symbols = ["-", "\\", "|", "/"]) {
    if (currentIndex == symbols.length) {
        currentIndex = 0;
    }
    let nextSymbol = symbols[currentIndex];
    currentIndex++;
    return nextSymbol;
}

const startProgressbar = function (tickInSeconds, array) {
    interval = setInterval(function () {
        let symbol = getNextSymbol(array);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(symbol);

    }, tickInSeconds * 1000);
}

const stopInterval = () => clearInterval(interval);

module.exports = {
    startProgressbar,
    stopInterval
};


