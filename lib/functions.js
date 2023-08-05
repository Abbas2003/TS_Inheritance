"use strict";
// 4 types of Functions are there:
// 1. Required Parameters 2. Optional Parameters 3. Default parameters 4. Rest parameters
Object.defineProperty(exports, "__esModule", { value: true });
// Required Parameters Function
function hello(name) {
    console.log("Hello, ".concat(name, "!"));
}
hello("Abbas");
// Optional Parameters Function
function hello2(name, aka) {
    console.log("Hello, ".concat(name, " aka ").concat(aka, "!"));
}
hello2("Abbas", "Saein");
// Default Parameters Function
function hello3(name, aka) {
    if (aka === void 0) { aka = "Saein"; }
    console.log("Hello, ".concat(name, " aka ").concat(aka, "!"));
}
hello3("Abbas");
hello3("Arif", "Badam");
// Rest Parameters Function
function hello4(name) {
    var aka = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        aka[_i - 1] = arguments[_i];
    }
    console.log("Hello, ".concat(name, " aka ").concat(aka, "!"));
}
hello4("Abbas", "Saein", "Chintu", "Qazi Sahab", "Bhai jan");
// Return types
function one(name) {
    if (name === void 0) { name = "Hassan"; }
    return name;
}
one();
function two(age) {
    if (age === void 0) { age = 20; }
    return age;
}
two();
// Arrow Function
var myFunction;
var NickName = ['Alexander', 'Alex', 'Alexander the Great'];
function AllNickName(callback) {
    for (var i = 0; i < NickName.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return "".concat(NickName[index]);
}
AllNickName(getNameAt);
var returnStringOrNumber;
returnStringOrNumber = function () { return 7; };
returnStringOrNumber = function () { return "7"; };
returnStringOrNumber = 7;
returnStringOrNumber = function () { return "Alexander"; };
returnStringOrNumber = function () { return 70; };
var aboutImran;
aboutImran = function () { return 8; };
aboutImran = function (name) {
    return 90;
};
var list = ["Anda", "Dahi", "Bread", "Tamatar", "Dhaniya"];
function runOnList(getListAt) {
    for (var i = 0; i < list.length; i += 1) {
        console.log(getListAt(i));
    }
}
function getListAt(index) {
    return "".concat(list[index]);
}
runOnList(getListAt);
function logList(list) {
    return "".concat(list);
}
var songs = ["Call Me", "Jolene", "The Chain"];
// song: string
// index: number
songs.forEach(function (song, index) {
    console.log("".concat(song, " is at index ").concat(index));
});
var abbas;
abbas = function (name) { return "Hello ".concat(name.toUpperCase()); };
function createDate(dayOrTimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrTimestamp)
        : new Date(year, month, dayOrTimestamp);
}
console.log(new Date());
var sum = function (num1, num2) { return num1 + num2; };
var a = sum(2, 3);
console.log(a);
