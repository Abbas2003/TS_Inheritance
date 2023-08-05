// Example 1
class car{
    color: string = 'Silver'
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

let mycar = new car();
console.log(mycar);
console.log(mycar.power(true));

// Example 2
class car2{
    constructor(color: string, location: string){
        this.color = color        
        this.location = location        
    }
    color: string;
    location: string;
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

let myCar = new car2("White","Pakistan")
let AdilCar = new car2('Black','California')

console.log(`My car is ${myCar.color}`);  
console.log(`My car is in ${myCar.location}`);  
console.log(`Sir Adil car is ${AdilCar.color}`);  
console.log(`Sir Adil's is in ${AdilCar.location}`);  

// Example 3
class car3{
    constructor(color: string, location: string, vin: string){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

let meriCar = new car3('Red','NaganChorangi','1A')
let teriCar = new car3('Green','FiveStar','1B')
let uskiCar = new car3('Grey','Nazimabad','1C')
 
// Example 4
class car4{
    constructor(color: string, location: string, vin: string){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

// A simple constructor
let simpleConstructor = new car4('Sky Blue','Balochistan','MainNhiBataonga')

// We can use it as a Type also and assign it to another variable
let alexanderCar: car4;

alexanderCar = {
    vin: '1D',
    color: 'Black',
    location: 'Sweden',
    owner: 'Aftab',
    power(state) {}
}

// Example 5
// Inheritance
class car5{
    constructor(color: string, location: string, vin: string){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

class mercedes extends car5 {
    alloyWheels = true
    adjustableSuspension = true
}

let MYCAR = new mercedes('Black','NewYork','5C15')
console.log(MYCAR);
MYCAR.power(false)


// Example 6
// Overridden constructors
class car6{
    constructor(color: string, location: string, vin: string){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    // We take these from users and for that we use constructor^
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean){
        if (state === true){
            console.log("Starting Engine");
        } else {
            console.log("Shutting down engine")
        }
    }
}

class Mercedes extends car6 {
    constructor(color: string, location: string, vin: string, alloyWheels: boolean){
        super(color, location, vin)  // Super will call the constructor of car6
        this.alloyWheels = alloyWheels
    }
    alloyWheels: boolean
    adjustableSuspension = true
    power(state: boolean){
        if (state === true){
            console.log("Starting Mercedes Engine");
        } else {
            console.log("Shutting down Mercedes Engine")
        }
    }
}

let CAR = new Mercedes('Black','NewYork','5C15',true)
console.log(CAR);
CAR.power(true);

// Example 7
class car7{
    constructor(color: string, location: string, vin: string){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string;
    power(state: boolean): string{
        if (state === true){
            return "Starting Engine";
        } else {
            return "Shutting down engine"
        }
    }
}

class Mehran extends car7 {
    constructor(color: string, location: string, vin: string, alloyWheels: boolean){
        super(color, location, vin)  
        this.alloyWheels = alloyWheels
    }
    alloyWheels: boolean
    adjustableSuspension = true
    power(state: boolean): string{
        if (state === true){
            console.log("Starting Mehran Engine");
            
            return "Starting Mehran's Engine";
        } else {
            return "Shutting down Mehran's Engine"
        }
    }
}
let myConstructor = new Mehran('Silver','karachi','203-A',false)
myConstructor.power(true)


// Example 8
class car8{
    constructor(color: string, location: string, vin: string | number){
        this.color = color        
        this.location = location        
        this.vin = vin
    }
    color: string;
    location: string;
    owner!: string;
    readonly vin: string | number;
    power(state: boolean): string{
        if (state === true){
            return "Starting Engine";
        } else {
            return "Shutting down engine"
        }
    }
}

class civic extends car8 {
    constructor(color: string, location: string, vin: number, alloyWheels: boolean){
        super(color, location, vin)  
        this.alloyWheels = alloyWheels
    }
    alloyWheels: boolean
    adjustableSuspension = true
    power(state: boolean): string{
        if (state === true){
            console.log("Starting Mehran Engine");
            
            return "Starting Mehran's Engine";
        } else {
            return "Shutting down Mehran's Engine"
        }
    }
}

let myCivic = new civic("Black","Islamabad",56,true)
let myCar8 = new car8("Black","Islamabad","56")
let myCar8Copy = new car8("Black","Islamabad",56)
