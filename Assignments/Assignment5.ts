interface Employee{
    name:string,
    baseSalary:number,
    experience:number,
    rating:number
}
let employeeData:Employee[]=[
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];
function hikeresult(rating:number){  
    let percent: number;
    let bonus: number;
    if (rating >= 4) {
        percent = 0.15;
        bonus = 1500;
    } else if (rating >= 3) {
        percent = 0.10;
        bonus = 1200;
    } else {
        percent = 0.03;
        bonus = 300;
    }

    return { percent, bonus };
}
for(let i:number=0;i<employeeData.length;i++){
    let emp=employeeData[i];
    let variablePay=hikeresult(emp.rating);
    let reward=emp.experience >= 5 ? 5000 : 0;
    let totalHike= (emp.baseSalary*variablePay.percent)+variablePay.bonus+reward;
    let hikePercentage: number = (totalHike / emp.baseSalary) * 100;
    let rounded = Math.round(hikePercentage * 100) / 100;
    console.log(emp.name + " ==> " + hikePercentage + "%");
    console.log(emp.name + " ==> " + rounded + "%");
}
