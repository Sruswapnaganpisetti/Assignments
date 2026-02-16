let studentNames: string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82];
let newMarks:number[]=[];
// Adding 10 marks fo each 
for(let i:number=0;i<marks.length;i++){
    newMarks[i]=marks[i]+10;
} 
console.log("Updated Marks : "+newMarks);
//displaying students with marks
for(let i:number=0;i<studentNames.length;i++){
 console.log(studentNames[i]+":"+newMarks[i])
}
//calculating Average
let sum: number=0;
for(let i:number=0;i<newMarks.length;i++){
 sum+=newMarks[i];
}
let average: number=sum/newMarks.length;
console.log("Average Marks:"+average);