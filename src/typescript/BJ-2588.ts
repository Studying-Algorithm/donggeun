// import readline from "readline";
const readline = require("readline");

(() => {
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });

    rl.on("line", (ln) => {
        let [valueX, valueY] = ln.split(" ").map(v => +v);
        const oneNum=valueY%10;
        const tenNum=Math.floor((valueY%100)/10);
        const hundredNum=Math.floor(valueY/100);

        console.log(valueX*oneNum);
        console.log(valueX*tenNum);
        console.log(valueX*hundredNum);
        console.log(valueX*valueY);
    }).on("close", () => {
        process.exit();
    });
})();
