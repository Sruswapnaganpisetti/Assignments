let paragraph:string = "Java is a popular java programming language. Java is used for webdevelopment, mobile applications, and more.";
let splittedvalues:string[]=paragraph.split(" ");
console.log(splittedvalues);
let totalCount:number=0;
let currentIndex: number = 0;
for (let i: number = 0; i < splittedvalues.length; i++) {
   let word = splittedvalues[i];

    if (word=="Java")
    {
       console.log("Index of Occurance :", currentIndex);
        totalCount++;
    }
    currentIndex += splittedvalues[i].length + 1;
}
console.log("Total number of occurrences :"+totalCount)