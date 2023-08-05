"use strict";
// PIAIC 
// Date: 7th July,2023
// Question#2
// let Name = "M.Abbas";
// console.log(`Hello ${Name}, Would you like to learn some TypeScript today?`);
// Question#3
// let myName = "mohammad abbas";
// console.log(`Hello ${myName.toLowerCase()}, Have a nice day`);
// console.log(`Hello ${myName.toUpperCase()}, Have a nice day`);
// console.log(`Hello ${toTitleCase(myName)}, Have a nice day`);
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
//   }
/*

// Question#4
console.log(`Hazrat Ali(as) said,"It is easier to turn a mountain into dust than to create a love in a heart that is filled with hatred"`);

// Question#5
const famous_person = "Hazrat Ali(as)";
const message = "It is easier to turn a mountain into dust than to create a love in a heart that is filled with hatred";
console.log(`${famous_person} said,"${message}"`);

// Question#6
let nameWithWhitespace: string = "\t  John Doe\n  ";
console.log("Name with whitespace:", nameWithWhitespace);

let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);

// Question#7
// Addition
let additionResult: number = 5 + 3;
console.log("Addition Result:", additionResult);

// Subtraction
let subtractionResult: number = 10 - 2;
console.log("Subtraction Result:", subtractionResult);

// Multiplication
let multiplicationResult: number = 4 * 2;
console.log("Multiplication Result:", multiplicationResult);

// Division
let divisionResult: number = 32 / 4;
console.log("Division Result:", divisionResult);

// Question#8
console.log(4+4);
console.log(12-4);
console.log(2*4);
console.log(64/8);

// Question#9
let favNum = 12;
let _message = `My favorite number is ${favNum} ;)`;
console.log(_message);

// Question#10
//Adding comments

// Question#11
let names: string[] = ["Abbas", "Sakina", "Javed", "David"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Quesion#12
let _names: string[] = ["Abbas", "Sakina", "Javed", "David"];
let Message: string = "Pleased to meet you "

for (let i = 0; i < names.length; i++) {
  console.log(Message+names[i]);
}

// Question#13
let transportation: string[] = ["Mountain bike", "Road bike", "Jeep", "Car"];

for (let i = 0; i < transportation.length; i++) {
  console.log("I would like to own a " + transportation[i] + ".");
}

*/
/*
// Question#14
let guestList: string[]= ["Lionel Messi", "Ronaldihno", "Mbappe"];

for (let i = 0; i < guestList.length; i++){
  console.log("Dear "+guestList[i]+", you are cordially invited to dinner. We would be honored to have your presence.");
}

// Question#15
let guest_List: string[]= ["Lionel Messi", "Ronaldihno", "Mbappe"];
let guestCannotMakeIt: string = guest_List[1];
// let indexToRemove: number = 1; //Supposing Ronaldihno cant make it.
let newGuest: string = "Ronaldo"; //New Guest

console.log(guestCannotMakeIt+" cannot make it to the dinner");
guest_List[1] = newGuest;  //Replace
// guest_List.splice(indexToRemove, 1, newGuest);   // Removed Ronaldihno and placed Ronaldo in its place.

for (let i = 0; i < guest_List.length; i++){
  console.log("Dear "+guest_List[i]+", you are cordially invited to dinner. We would be honored to have your presence.");
}

console.log("\n\n");
*/
/*

// Question#16
let guest_List: string[]= ["Lionel Messi", "Ronaldihno", "Mbappe"];
let guestCannotMakeIt: string = guest_List[1];
console.log(guestCannotMakeIt+" cannot make it to the dinner.");

// Updating guest list
let newGuest: string = "Ronaldo";
guest_List[1] = newGuest;

console.log("Good news ! We found a bigger dinner table.");

// Adding new guests
guest_List.unshift("Maradona");
guest_List.splice(Math.floor(guest_List.length / 2), 0, "Iniesta");
guest_List.push("Dybala");

// Print invitation messages for the new guest list
for (let i = 0; i < guest_List.length; i++) {
  console.log("Dear " + guest_List[i] + ", you are cordially invited to dinner. We would be honored to have your presence.");
}

*/
/*

// Question#17
let guest_List: string[]= ["Maradona", "Lionel Messi", "Iniesta", "Ronaldo", "Mbappe", "Dybala"];

console.log("Sorry, but we can only invite two people for dinner.");

// Removing guests until only two names remain
while (guest_List.length > 2) {
  let removedGuest: string = guest_List.pop()!; // Remove the last guest from the list
  console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
}

// Invitation message for remaining two guests
for(let i = 0; i < guest_List.length; i++){
  console.log("Dear "+guest_List[i]+", You are still invited to dinner. We look forward to your presence.");
}

while(guest_List.length){
  let empty_list: string = guest_List.pop()! ;
}
console.log("Final Guest list: "+guest_List);



// Question#18
let places: string[] = ["Germany", "England", "Thailand", "Maldvies", "China"];

// Original order
console.log("Original Order: "+places);

//  Print alphabetical order without modifying the original list
console.log("Alphabetical order: "+[...places].sort());

// Original order
console.log("Original Order: "+places);

// Print reverse alphabetical order without modifying the original list
console.log("Alphabetical order: "+[...places].sort().reverse());

// Original order
console.log("Original Order: "+places);

// Reverse the order of the list
console.log("Reverse order: "+places.reverse());

// Reverse the order of the list again
console.log("Reversing the order again: "+places.reverse());

// Sort the list in alphabetical order
console.log("Sorting the list in Alphabetical order: "+places.sort());

// Sort the list in reverse alphabetical order
console.log("Sorting the list in reverse alphabetical order: "+places.sort().reverse());

// Question#19
let guest_List: string[]= ["Maradona", "Lionel Messi", "Iniesta", "Ronaldo", "Mbappe", "Dybala"];

console.log("Sorry, but we can only invite two people for dinner.");

// Removing guests until only two names remain
while (guest_List.length > 2) {
  let removedGuest: string = guest_List.pop()!; // Remove the last guest from the list
  console.log("Sorry, " + removedGuest + ", but we can't invite you to dinner.");
}

// Invitation message for remaining two guests
for(let i = 0; i < guest_List.length; i++){
  console.log("Dear "+guest_List[i]+", You are still invited to dinner. We look forward to your presence.");
}

console.log("Number of people invited to dinner: "+guest_List.length);

// Question#20
let mountainList: string[] = ["Mount Everest", "K2", "Rakaposhi", "Hindu Kush", "Babu-sar Top", "Nanga Parbat"];
console.log("List of mountains:");
for(let i = 0; i < mountainList.length; i++){
  console.log(mountainList[i]);
}




// const car: { type: string, mileage?: number } = { // no error
//   type: "Toyota"
// };
// car.mileage = 2000;
// console.log(car);

// Q21

// Define a type for city Array
type Mountain = {
  name: string,
  country: string,
  height: number
}

// Creating array of Mountain objects
let MountainList = [
  {name: "Mount Everest", country: "Nepal", height: 8848 },
  {name: "K2", country: "Pakistan", height: 8611 },
  {name: "Nanga Parbat", country: "Pakistan", height: 8126  },
  {name: "Rakaposhi", country: "Pakistan", height: 7788 },
  {name: "Hindu-Kush", country: "India-Pakistan", height: 7708 },
  {name: "Babu-sar Top", country: "Pakistan", height: 4173 },
]

// Print information about each city
console.log("Information about mountains:");
for(let i=0; i<MountainList.length; i++){
  let Mountain = MountainList[i];
  console.log(`name: ${Mountain.name} , country: ${Mountain.country} , height: ${Mountain.height} m`);
}


// Q22
let _mountainList: string[] = ["Mount Everest", "K2", "Rakaposhi", "Hindu Kush", "Babu-sar Top", "Nanga Parbat"];

console.log(_mountainList[6]);
console.log(_mountainList[5]);



// Q23

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let bike = 'CD-125';
console.log("Is bike == 'CD-125'? I predict True.")
console.log(bike == 'CD-125')

let ship = 'Cycle';
console.log("Is ship == 'Cycle'? I predict False.")
console.log(ship !== 'Cycle')

let Car = 'Honda';
console.log("Is Car  == 'Honda'? I predict True.")
console.log(Car  == 'Honda')

let Color = 'White';
console.log("Is Color  == 'Red'? I predict False.")
console.log(Color  !== 'White')

const Dish = 'Karahi';
console.log("Is Dish  == 'Biryani'? I predict False.")
console.log(Dish  !== 'Karahi')

const brand = 'Adidas';
console.log("Is brand  == 'Nike'? I predict false.")
console.log(brand  !== 'Adidas')

let Drink = 'Sprite';
console.log("Is Drink == 'Sprite'? I predict True.")
console.log(Drink  == 'Sprite')

let bird = 'pigeon';
console.log("Is Bird == 'Pengun'? I predict False.")
console.log(bird  !== 'pigeon')

let Artist = 'Atif-Aslam';
console.log("Is Artist == 'Atif-Aslam'? I predict True.")
console.log(Artist  == 'Atif-Aslam')

// Q24
let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 20;
let array = ['1', '2', '3', '4', '5'];

// Tests for equality and inequality with strings
console.log("Is string1 is equals to string2? I predict False.");
console.log(string1 == string2); // False

console.log("Is string1 not equals to string2? I predict True.");
console.log(string1 != string2); // True

// Tests using the lower case function
console.log("Is string1 is in Lower case? I predict True.");
console.log(string1.toLowerCase() == 'hello'); // True

console.log("Is string2 is in Lower case 'WORLD'? I predict False.");
console.log(string2.toLowerCase() == 'WORLD'); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 equals to number2? I predict False.");
console.log(number1 == number2); // False

console.log("Is number1 not equals to number2? I predict True.");
console.log(number1 != number2); // True

console.log("Is number1 greater than number2? I predict False.");
console.log(number1 > number2); // False

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2); // True

console.log("Is number1 greater than equal to number2? I predict False.");
console.log(number1 >= number2); // False

console.log("Is number1 less than equal to number2? I predict True.");
console.log(number1 <= number2); // True

// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and number2 less than 30? I predict True.");
console.log(number1 > 5 && number2 < 30); // True

console.log("Is number1 less than 5 or number2 less than 30? I predict True.");
console.log(number1 < 5 || number2 < 30); // True

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3)); // True

console.log("Is 6 in the array? I predict False.");
console.log(array.includes(6)); // False

// Test whether an item is not in an array
console.log("Is 5 not in the array? I predict False.");
console.log(!array.includes(5)); // False

console.log("Is 8 not in the array? I predict True.");
console.log(!array.includes(8)); // True


let alien_color: string = "Green";"Red";"Yellow";
if(alien_color == 'Green'){
  console.log("Congratulations! You just earned 5 points.");
}
else {
  console.log("Sorry! Better luck next time.");
}

// Version 1: Alien color is 'green' (executing the if block)

let aliencolor: string = 'green';

if (aliencolor === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}

// Version 2: Alien color is 'red' (executing the else block)
let alien_Color: string = 'red';

if (alien_Color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}


// Q27
// Version 1:
const alien_Color1: string = "green";

if (alien_Color1 === "green") {
  console.log("You earned 5 points!");
} else if (alien_Color1 === "yellow") {
  console.log("You earned 10 points!");
} else if (alien_Color1 === "red") {
  console.log("You earned 15 points!");
}

// Version 2:
const alien_Color2: string = "yellow";

if (alien_Color2 === "green") {
  console.log("You earned 5 points!");
} else if (alien_Color2 === "yellow") {
  console.log("You earned 10 points!");
} else if (alien_Color2 === "red") {
  console.log("You earned 15 points!");
}

// Version 3:
const alien_Color3: string = "red";

if (alien_Color3 === "green") {
  console.log("You earned 5 points!");
} else if (alien_Color3 === "yellow") {
  console.log("You earned 10 points!");
} else if (alien_Color3 === "red") {
  console.log("You earned 15 points!");
}


// Q28
const age = 2;

if (age < 2){
  console.log("You are Baby.");

} else if(age >= 2 || age <4 ){
  console.log("You are a toddler.");

} else if(age >= 4 || age < 13){
  console.log("You are a kid.");

} else if(age >= 13 || age < 20){
  console.log("You are a teenager.");

} else if(age >= 20 || age < 65){
  console.log("You are an Adult.");

} else if(age >= 65 || age < 90){
  console.log("You are an Elder.");

}

// Q29
const Fav_fruits: string[] = ["Mango","Orange","Apple"];

if (Fav_fruits.indexOf("Strawberry") !== -1){
  console.log("I like Strawberry");
}
if (Fav_fruits.indexOf("Mango") !== -1){
  console.log("I like Mangoes");
}
if (Fav_fruits.indexOf("Orange") !== -1){
  console.log("I like Oranges");
}
if (Fav_fruits.indexOf("Grapes") !== -1){
  console.log("I like Grapes");
}
if (Fav_fruits.indexOf("Apple") !== -1){
  console.log("I like Apples");
}


// Q30

const usernames: string[] = ['Admin','Aftab','Azeem','Zafar','Alizabeth'];

for (const index in usernames){
  const username = usernames[index];

  if(username == "Admin"){
    console.log("Hello Admin, Would you like to see the reports?");
  
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
    
  }
}



// Q31
const user: string[] = [];

if (user.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of user) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Q32


Q33
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const number of numbers){
    let ordinal: string;
    if (number == 1){
      ordinal = "1st";
    } else if (number == 2){
      ordinal = "2nd";
    } else if (number == 3){
      ordinal = "3rd";
    } else {
      ordinal = `${number}th`;
    }

    console.log(ordinal);

  }



// Q34

const pizzas: string[] = ['Chicken Fajita', 'Margherita', 'Veggie'];
// Printing the name of each pizza
console.log("Pizza names:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

// Printing a sentence using the name of each pizza
console.log("\nPizza statements:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");

  

// Q35

let animals: string[] = ["Lion", "Tiger", "Jaguar"];

// Printing the name of each animal from the list
console.log("Animal's name:");

for(let i=0; i<animals.length; i++){
  console.log(animals[i]);
}
console.log("\n");

// Modifying program to print a statement with animal name
console.log("Printing a statement with animal name:");

for(let i=0; i<animals.length; i++){
  console.log(`The ${animals[i]} is a most dangerous Animal. ${animals[i]}'s are very powerful.`);
}

console.log("\n");

// at the end of your program stating what these animals have in common.
console.log("These Animals have common:");

for(let i=0; i<animals.length; i++){
  console.log(`${animals[i]} is the king of jungle.`);
}


// Q36

function make_shirt(size , message){
  console.log(`Im going to make a ${size} t-shirt.`);
  console.log(`Message on t-shirt: ${message}`);
}

make_shirt('medium','I love Pakistan');
make_shirt('Large','Coding is Life');

// Q37

function make_shirt(size='Large' , message='I love TypeScript'){
  console.log(`\nIm going to make a ${size} t-shirt.`);
  console.log(`Message on t-shirt: ${message}`);
}
make_shirt();
make_shirt('medium');
make_shirt('Small','I love PiAiC');


// Q38
function describe_city(city,county='Pakistan'){
  console.log(`\n${city} is in ${county}`);
}

describe_city("Karachi");
describe_city("Abbotabad");
describe_city("Najaf","Iraq");

// Q39

function city_county(city,country){
  console.log(`${city}, ${country}`);
}

city_county('Peshawar','Pakistan');
city_county('Islamabad','Pakistan');
city_county('NewYork','America');
*/
// Q40
// function make_album(artist,title){
//   let album: {Artist: string, title: string} = {Artist: artist , title: title}
//   return album;
// }
// make_album('Ati','Tere bin');
// Q41
// function show_megicians(magicians){
//   for(let i=0; i<magicians.length; i++){
//     console.log(magicians[i]);
//   }
// }
// const magicians = ['harry houdini', 'david blaine', 'teller'];
// console.log("Magicians name:");
// show_megicians(magicians);
// // Q42
// function makeGreat(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// function showMagicians(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician);
//   }
// }
// // Original list of magicians' names
// const magicians: string[] = ["Harry", "Hermione", "Ron"];
// // Modify the list by adding "the Great" to each name
// makeGreat(magicians);
// // Show the modified list of magicians' names
// showMagicians(magicians);
// Q43
// function makeGreat(magicians: string[]): string[] {
//   const greatMagicians: string[] = [];
//   for (const magician of magicians) {
//     greatMagicians.push(magician + " the Great");
//   }
//   return greatMagicians;
// }
// function showMagicians(magicians: string[]): void {
//   for (const magician of magicians) {
//     console.log(magician);
//   }
// }
// Original list of magicians' names
// const magicians: string[] = ['harry houdini', 'david blaine', 'teller'];
// Create a copy of the list and make it great
// const greatMagicians: string[] = makeGreat([...magicians]);
// Show the original magicians' names
// console.log("Original Magicians:");
// showMagicians(magicians);
// Show the list with "the Great" added to each name
// console.log("\nGreat Magicians:");
// showMagicians(greatMagicians);
// Q44
// function orderSandwich(...items: string[]): void {
//   console.log("Sandwich Order Summary:");
//   if (items.length > 0) {
//     items.forEach(item => {
//       console.log("- " + item);
//     });
//   } else {
//     console.log("No items specified.");
//   }
// }
// // Calling the function with different number of arguments
// orderSandwich("Ham", "Cheese", "Lettuce");
// orderSandwich("Turkey", "Tomato");
// orderSandwich("Chicken", "Mayonnaise", "Pickles", "Onions");
// Q40
// function makeAlbum(artist: string, title: string, tracks?: number): Record<string, any> {
//   const album: Record<string, any> = {
//     artist: artist,
//     title: title,
//   };
//   if (tracks) {
//     album.tracks = tracks;
//   }
//   return album;
// }
// // Creating three album dictionaries
// const album1 = makeAlbum("Artist 1", "Album 1");
// const album2 = makeAlbum("Artist 2", "Album 2", 10);
// const album3 = makeAlbum("Artist 3", "Album 3", 15);
// // Printing the album information
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Q45
// interface Car {
//   manufacturer: string;
//   model: string;
//   [key: string]: any; // Allow arbitrary number of additional properties
// }
// function createCar(manufacturer: string, model: string, ...options: any[]): Car {
//   const car: Car = {
//     manufacturer,
//     model
//   };
//   options.forEach(option => {
//     const [key, value] = option;
//     car[key] = value;
//   });
//   return car;
// }
// // Example usage
// const myCar = createCar("Tesla", "Model S", ["color", "red"], ["features", ["autopilot", "sunroof"]]);
// console.log(myCar);
// Q32
function checkUsernameAvailability(currentUsers, newUsers) {
    const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
    for (const newUser of newUsers) {
        const lowercaseNewUser = newUser.toLowerCase();
        if (lowercaseCurrentUsers.indexOf(lowercaseNewUser) !== -1) {
            console.log(`Username '${newUser}' is not available. Please enter a new username.`);
        }
        else {
            console.log(`Username '${newUser}' is available.`);
        }
    }
}
// Example usage
const currentUsers = ['Abbas', 'Baqar', 'sakina', 'Ali', 'Mohammad'];
const newUsers = ['Sakina', 'Sualeha', 'abbas', 'Sadaf', 'Mustafa'];
checkUsernameAvailability(currentUsers, newUsers);
