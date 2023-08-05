// 4 types of Functions are there:
// 1. Required Parameters 2. Optional Parameters 3. Default parameters 4. Rest parameters

import { name } from "./values";

// Required Parameters Function
function hello(name: string){
    console.log(`Hello, ${name}!`);
}

hello("Abbas");

// Optional Parameters Function
function hello2(name: string, aka?: string){
    console.log(`Hello, ${name} aka ${aka}!`);
}

hello2("Abbas","Saein");

// Default Parameters Function
function hello3(name: string, aka = "Saein"){
    console.log(`Hello, ${name} aka ${aka}!`);
}

hello3("Abbas");
hello3("Arif","Badam")

// Rest Parameters Function
function hello4(name: string, ...aka: string[]) {
    console.log(`Hello, ${name} aka ${aka}!`);
}

hello4("Abbas","Saein","Chintu","Qazi Sahab","Bhai jan")

// Return types
function one(name = "Hassan"){
    return name;
}
one()

function two(age = 20):number {
    return age;
}
two()

// Arrow Function
let myFunction: (Name: string, nickName?: string) => string;

const NickName = ['Alexander','Alex','Alexander the Great'];

function AllNickName(callback: (index: number) => string) {
    for(let i=0; i<NickName.length; i++){
        console.log(callback(i))
    }
}

function getNameAt(index: number){
    return `${NickName[index]}`
}

AllNickName(getNameAt);



let returnStringOrNumber: (() => string | number) | number;

returnStringOrNumber = function(): number {return 7}
returnStringOrNumber = function(): string {return "7"}
returnStringOrNumber = 7
returnStringOrNumber = () => "Alexander"
returnStringOrNumber = () => 70



let aboutImran: (name: string) => number
aboutImran = () => 8
aboutImran = (name: string) => {
    return 90
}



const list = ["Anda","Dahi","Bread","Tamatar","Dhaniya"];
function runOnList(getListAt: (index: number) => string){
    for (let i=0; i<list.length; i+=1){
        console.log(getListAt(i));
    }
}

function getListAt(index: number){
    return `${list[index]}`;
}

runOnList(getListAt);

function logList(list: string){
    return `${list}`
}


const songs = ["Call Me", "Jolene", "The Chain"];
// song: string
// index: number
songs.forEach((song, index) => {
console.log(`${song} is at index ${index}`);
});

let abbas: (name: string) => string;
abbas = (name) => `Hello ${name.toUpperCase()}`


// Function Overloading

function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number): Date;

function createDate(dayOrTimestamp: number, month?: number, year?: number) {
    return month === undefined || year === undefined
    ? new Date(dayOrTimestamp)
    : new Date(year, month, dayOrTimestamp);
}
console.log(new Date());



let sum = (num1: number, num2: number): number => num1 + num2;
let a = sum(2,3)
console.log(a);
