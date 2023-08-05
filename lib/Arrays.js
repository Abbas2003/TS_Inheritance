var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numberOfStudents = [700, 600, 550, 700, 900, 680];
var imranNames;
imranNames = function () { return ["Imran", "Alexander", "Alex"]; };
var imranData;
imranData = ['Alexander', 20, 'Imran', 34];
var totalNumOfStudents = [
    [700, 600, 550, 700, 900, 680],
    [1100, 1200, 1000, 350, 600, 789],
    [1400, 1200, 750, 1300, 1200, 980]
];
var nicknames = ['Abbas', 'Saein', 'Qazi sahab', 'Qazi Altaf'];
var number = [1, 3, 43, 90];
var combine = __spreadArray(__spreadArray([], nicknames, true), number, true); // ... It is a spread operator (Iterate things from array)
console.log(combine);
function lognames(greeting) {
    var Nicknames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Nicknames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, Nicknames_1 = Nicknames; _a < Nicknames_1.length; _a++) {
        var Nickname_1 = Nicknames_1[_a];
        console.log("".concat(greeting, ", ").concat(Nickname_1));
    }
}
lognames('Ahlan wa sahlaan', 'Ami', 'Abu', 'Abbas', 'Sakina', 'Qasim', 'Fatima', 'Hussain', 'Farhan');
var Nickname = ['Abbas', 'Saein', 'Qazi sahab', 'Qazi Altaf'];
var preferences = [1, 2, 3, 4];
function LogName(greetings) {
    var Nicknames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Nicknames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, Nicknames_2 = Nicknames; _a < Nicknames_2.length; _a++) {
        var Nickname_2 = Nicknames_2[_a];
        console.log("".concat(greetings, " ").concat(Nickname_2));
    }
}
LogName.apply(void 0, __spreadArray(["Hey!"], Nickname, false));
LogName.apply(void 0, __spreadArray(["Hey!"], preferences, false));
