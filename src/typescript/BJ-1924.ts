// import readline from "readline";
const readline = require("readline");

(() => {
    const DAYS_OF_THE_WEEK: { [key: number]: string } = {
        0: "SUN",
        1: "MON",
        2: "TUE",
        3: "WED",
        4: "THU",
        5: "FRI",
        6: "SAT"
    };

    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });

    rl.on("line", (ln) => {
        const [valueX, valueY] = ln.split(" ").map(v => +v);
        const dayOfWeek = new Date(`2007-${valueX}-${valueY}`).getDay();
        const day = DAYS_OF_THE_WEEK[dayOfWeek];
        console.log(day);
    }).on("close", () => {
        process.exit();
    });
})();
