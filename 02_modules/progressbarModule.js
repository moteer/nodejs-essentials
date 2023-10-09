let currentIndex = 0;

function getNextSymbol(symbols = ["-", "\\", "|", "/"]) {
    if (currentIndex == symbols.length) {
        currentIndex = 0;
    }
    let nextSymbol = symbols[currentIndex];
    currentIndex++;
    return nextSymbol;
}

const startProgressbar = function (tickInSeconds, array) {
    setInterval(function () {
        let symbol = getNextSymbol(array);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(symbol);

    }, tickInSeconds * 1000);

}

module.exports = {
    startProgressbar
};


