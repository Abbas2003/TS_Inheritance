// import * as promptSync from 'prompt-sync'
// const prompt = promptSync()

// const Name = ("What is your name? ");
// console.log(`Hello, ${name}! Welcome to TypeScript`);


type abbasType = {
    name : { firstName: string, lastName: String },
    age : Number,
    Dob : DateConstructor,
    qualification: String[],
    profession: String,
    certifications: string[]
}

let abbas: abbasType;
 abbas = {
    name : { firstName: "Mohammad", lastName: "Abbas" },
    age : 20,
    Dob : Date,
    qualification: ['Matric','Intermediate'],
    profession: "Student",
    certifications: ['Python Basics','Python with AI','Web Development','Java','C']
}

console.log(abbas.name.lastName);


type fname = { firstName: string }
type lname = { lastName: string }

const fullName = { firstName: "Mohammad", lastName: "Abbas"}

let firstName: fname = fullName;
let lastName: fname = fullName;

console.log(lastName);


type Name = { FirstName: string , LastName: string };
let FullName: Name = { FirstName: "Zia", LastName: "Khan"};
let _name : Name = { FirstName: "Talha", LastName: "Jojo" }; // Last name required 

console.log(fullName);
console.log(_name);


type Book = {
    author : {
        firstname : string;
        lastname : string;
    };
    name : string;
    pages ?: number;     // Optional k liye ? use kren gen
};

const book : Book = {
    author : {
        firstname : "Nicollo",
        lastname : "Machiavelli",
    },
    name : "The Prince",
    pages : 100,
};

console.log(book);


// Union Object-Type
const book_ = Math.random() > 0.5
    ? { name: "The prince", origin: "Italy", pages: 5 }
    : { name: "The prince", origin: "Italy", words: 200 };
console.log(book_);

type PoemWithPage = { name: string, pages: number };
type PoemWithRhymes = { name: string, rhymes: boolean };

type Poem = PoemWithPage | PoemWithRhymes;
const poem: Poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 10 }
    : { name: "Her Kind", rhymes: true };
// poem.name
// poem.rhymes   // Will cause an error in Union Objects
if ("pages" in poem){
    poem.pages; 
} else {
    poem.rhymes;
}


// Discriminated Unions
type ImranInPakistan = {
    name: string;
    age: number;
    type: "Pakistan";
};
type ImranOverseas = {
    name: string;
    age: number;
    type: "Overseas";
    nickName: string;
};
type Imran = ImranInPakistan | ImranOverseas;
const imran: Imran = 
    Math.random() > 0.5
    ? {
        name: "Imran",
        age: 30,
        type: "Pakistan",
    } :  {
        name: "Imran",
        age: 20,
        type: "Overseas",
        nickName: "Alexander",
    };
if (imran.type === "Pakistan"){
    console.log(`He's is Pakistan, so we'll call him ${imran.name}`);
} else {
    console.log(`He's is not in Pakistan, so we'll call him ${imran.nickName}`);
}


