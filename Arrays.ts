const numberOfStudents: number[] = [700,600,550,700,900,680]

let imranNames: () => string[];
imranNames = () => ["Imran","Alexander","Alex"];

let imranData: (number | string)[];
imranData = ['Alexander',20,'Imran',34];

const totalNumOfStudents: number[][] = [
    [700,600,550,700,900,680],
    [1100,1200,1000,350,600,789],
    [1400,1200,750,1300,1200,980]
] 

const nicknames: string[] = ['Abbas','Saein','Qazi sahab','Qazi Altaf'] 
const number: number[] = [1,3,43,90]

const combine = [...nicknames,...number]    // ... It is a spread operator (Iterate things from array)
console.log(combine);


function lognames(greeting: string, ...Nicknames: string[]) {   // ... Rest operator (Store things in Array)
    for(const Nickname of Nicknames){
        console.log(`${greeting}, ${Nickname}`);
    }
}
lognames('Ahlan wa sahlaan','Ami','Abu','Abbas','Sakina','Qasim','Fatima','Hussain','Farhan')


let Nickname: string[] = ['Abbas','Saein','Qazi sahab','Qazi Altaf']
let preferences: number[] = [1,2,3,4]
function LogName(greetings: string, ...Nicknames: (string|number) []){
    for(const Nickname of Nicknames){
        console.log(`${greetings} ${Nickname}`);
    }
}
LogName("Hey!",...Nickname)
LogName("Hey!",...preferences)


let myTuple: [number,string]
myTuple = [22,'Pakistan']

let data: (number | string)[]
data = ['Abbas',809,'Karachi']

let [preference, Name, inCountry] = [1,'Abbas',true]

let [id, Names, Attendence] = 
Math.random() > 0.5 ? [1,'Abbas',true] : [2,'Sakina',false];
