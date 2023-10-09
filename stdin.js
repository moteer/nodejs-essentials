process.stdin.on("data", (data) => {
    if (data.toString().trim() == "exit") {
        process.exit();
    } else {
        process.stdout.write(`you did type ${data}`);
    }    
});
