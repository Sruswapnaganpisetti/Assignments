let customerName: string= '"Swapna"';
let creditScore:number=720;
let income:number=55000;
let isEmployed: boolean= false;
let debtToIncomeRatio: number= 35.0;

console.log("The Customer Name is: "+customerName);
if( creditScore>750){
    console.log(" You are eligile for loan. Loan will Approved");
} 
else if(creditScore>650 && creditScore<750){
   console.log("There are some Additional checks to be performed");
   if(income>50000){
    console.log("We will Consider The Application");
    if ( isEmployed){
        console.log("Still You Have Chance to get Loan");
        if( debtToIncomeRatio<40){
            console.log("You Will Get The Loan");
        }
        if(debtToIncomeRatio>=40){
            console.log("Loan will Denied because of DIT");
        }
    }else{
        console.log("Loan will Denied because of Unemployement");
    }

   }
   else{
         console.log("Loan will Denied because of less income")
   }
     
}

else{
 console.log("Loan will Denied");
}