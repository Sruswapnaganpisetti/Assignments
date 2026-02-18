function checkPrime(n: number): void {
    let count:number=0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
if(count==2){
    console.log("The given number is  prime");
}  
else {
    console.log("The given number not a prime");
} 
}
checkPrime(7);
checkPrime(25);
checkPrime(1);
checkPrime(0); 

