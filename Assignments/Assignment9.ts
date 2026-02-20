let rows: number = 5;

for (let i: number = 1; i <= rows; i++) {

    let pattern: string = "";
    for (let j: number = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k: number = 1; k <= i; k++) {
        pattern += "*";
    }

    console.log(pattern);
}