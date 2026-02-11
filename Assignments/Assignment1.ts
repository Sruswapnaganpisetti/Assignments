//Temperature of a city in degrees Celsius: 25.5
let temp: number =25.5;
console.log("1. Temperature of a city in degrees Celsius:"+temp);

// Whether a customer has placed an order: true or false
let state: boolean=true;
console.log("2. The state Whether a customer has placed an order:"+state );

//Person's phone number: "123-456-7890"
let phoneNo:string='"123-456-7890"'
console.log("3. Person's phone number: "+phoneNo);

//Amount of money in a customer's bank account:
let accBalance:number=1000.50;
console.log("4. Amount of money in a customer's bank account:"+accBalance);

//Person's email address: "john.doe@example.com"
let email:string ='" john.doe@example.com"'
console.log("5. Person's email address:"+email);

//Coordinates of a location
interface location{
    latitude: number,
    longitude: number
}
let locationDetails1: location = {
    latitude: 37.7749,
    longitude: -122.4194
}
console.log("6. Coordinates of a location (latitude, longitude):"+locationDetails1.latitude+"," +locationDetails1.longitude);
let locationDetails:number[]=[37.7749,-122.4194];
console.log("Coordinates of a location (latitude, longitude):"+locationDetails[0]+","+locationDetails[1]);
 
//Person's marital status:
let maritalStatus: boolean=true;
console.log("7. Person's marital status:"+maritalStatus);

//Person's occupation:
let occupation:string='"Software Enginer"';
console.log("8. Person's occupation:"+occupation);

// Person's favourite colour:
let favColour:string= '" Blue"';
console.log("9. Person's favourite colour:"+favColour);

//Current year:
let currentDate = new Date();
console.log("10. Current year:"+currentDate.getFullYear());
let currentYear:number=2023;
console.log("Current year:"+currentYear);

//Number of followers on a social media platform:
let followersCount:number=1000000;
console.log("11. Number of followers on a social media platform:"+followersCount);

//Rating of a movie:
let rating: number=7.5;
console.log("12. Rating of a movie:"+rating);

//Person's blood type: 'A'
let bloodType:string="'A'";
console.log("13. Person's blood type:"+bloodType);

//Title of a book:
let tittle: string='"To Kill a Mockingbird"';
console.log("14. Title of a book:"+tittle);

//15.Number of employees in a company: 500
let noOfemp:number=500;
console.log("15. Number of employees in a company:" +noOfemp);

//Time of an event:
console.log("Time of an event:"+currentDate.getHours());

let time: string= "2:50 PM";
console.log("16. Time of an event:"+time);

//Name of a country:
let countryName: string='"United States"';
console.log("17. Name of a country:"+countryName);

// Person's eye color: 
let eyeColour:string ='"Brown"';
console.log("18.Person's eye color:"+eyeColour);

// Person's birthplace:
let personBirthPlace:string= '"New York City"';
console.log("19. Person's birthplace:"+personBirthPlace);

// Distance between two cities:
let distance: number=200.5;
console.log("20. Distance between two cities:"+distance);
