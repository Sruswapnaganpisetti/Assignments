function printPattern(rows:number):void{
for (let i: number = 1; i <= rows; i++) {

    let pattern: string = "";  
    for (let j: number = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k: number = 0; k < i; k++) {
        pattern += "*";
    }

    console.log(pattern);
}
}
printPattern(5);
printPattern(6);