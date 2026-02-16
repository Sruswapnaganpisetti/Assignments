let transactions: number[] = [ 50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditCount: number=0;
let debitCount: number=0;
let totalCredit: number=0;
let totalDebit: number=0;
let balance: number=0;
let suspiciousCount: number=0;
//Count credit & debit transcations and amounts
for (let i: number = 0; i < transactions.length; i++) {

    let amount: number = transactions[i];
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
    } else {
        debitCount++;
        totalDebit += amount;
    }
}
//balance
for (let i = 0; i < transactions.length; i++) {
    balance += transactions[i];
}
//Find suspicious transactions
for (let i = 0; i < transactions.length; i++) {

    if (transactions[i] > 10000 || transactions[i] < -10000) {
        console.log("Suspicious Transaction:", transactions[i]);
        suspiciousCount++;
    }
}
console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);

console.log("Total Credited Amount:", totalCredit);
console.log("Total Debited Amount:", totalDebit);

console.log("Final Balance:", balance);

console.log("Total Suspicious Transactions:", suspiciousCount);