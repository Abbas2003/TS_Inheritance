// import * as promptSync from 'prompt-sync'
// const prompt = promptSync()
var abbas;
abbas = {
    name: { firstName: "Mohammad", lastName: "Abbas" },
    age: 20,
    Dob: Date,
    qualification: ['Matric', 'Intermediate'],
    profession: "Student",
    certifications: ['Python Basics', 'Python with AI', 'Web Development', 'Java', 'C']
};
console.log(abbas.name.lastName);
var fullName = { firstName: "Mohammad", lastName: "Abbas" };
var firstName = fullName;
var lastName = fullName;
console.log(lastName);
var FullName = { FirstName: "Zia", LastName: "Khan" };
var _name = { FirstName: "Talha", LastName: "Jojo" }; // Last name required 
console.log(fullName);
console.log(_name);
var book = {
    author: {
        firstname: "Nicollo",
        lastname: "Machiavelli",
    },
    name: "The Prince",
    pages: 100,
};
console.log(book);
// Union Object-Type
var book_ = Math.random() > 0.5
    ? { name: "The prince", origin: "Italy", pages: 5 }
    : { name: "The prince", origin: "Italy", words: 200 };
console.log(book_);
var poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 10 }
    : { name: "Her Kind", rhymes: true };
// poem.name
// poem.rhymes   // Will cause an error in Union Objects
if ("pages" in poem) {
    poem.pages;
}
else {
    poem.rhymes;
}
var imran = Math.random() > 0.5
    ? {
        name: "Imran",
        age: 30,
        type: "Pakistan",
    } : {
    name: "Imran",
    age: 20,
    type: "Overseas",
    nickName: "Alexander",
};
if (imran.type === "Pakistan") {
    console.log("He's is Pakistan, so we'll call him ".concat(imran.name));
}
else {
    console.log("He's is not in Pakistan, so we'll call him ".concat(imran.nickName));
}
