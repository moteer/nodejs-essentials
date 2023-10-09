let currentIndex = 0;

function getNextSymbol(symbols = ["-", "\\", "|", "/"]) {
    if (currentIndex == symbols.length) {
        currentIndex = 0;
    }
    let nextSymbol = symbols[currentIndex];
    currentIndex++;
    return nextSymbol;
}

let milliseconds = 0.5 * 1000;

process.stdout.write(getNextSymbol());

setInterval(function () {
    let symbol = getNextSymbol();
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(symbol);

}, milliseconds);