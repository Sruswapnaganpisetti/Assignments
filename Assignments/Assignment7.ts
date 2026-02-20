let sentence:string = "Java programming is fun and challenging";
let splittedWords:string[]=sentence.split(" ");
console.log(splittedWords);
//count of words
let count: number=splittedWords.length;
console.log("The total number of words in the sentence: "+count);

//reverse order of sentences in string 
let reverseString:string="";
for(let i:number=splittedWords.length-1;i>=0;i--){
    reverseString+=splittedWords[i]+" ";
}
console.log(reverseString);

//Converting the first character of each word to uppercase
let captalizedString:string="";
 for (let i: number = 0; i < splittedWords.length; i++) {
    let word = splittedWords[i];

    if (word.length > 0) {
        captalizedString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
}
console.log(captalizedString);