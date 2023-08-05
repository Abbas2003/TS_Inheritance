class vehicle{
    constructor(color: string, vin: number, weight: number){
        this.color = color
        this.weight = weight
        this.vin = vin
    }
    color: string;
    readonly vin: number;
    weight: number;
    power(state: boolean){
        if (state === true){
            console.log("Engine starts");
        } else {
            console.log("Engine stops");
        }
    }
}

class MERCEDES extends vehicle{
    constructor(color: string, vin: number, weight: number, brand: string){
    super(color, vin, weight) // 
    this.brand = brand
}
    brand: string;
}

class SUV extends MERCEDES{
    constructor(color: string, vin: number, weight: number, brand: string, model: string, topSpeed: number){
        super(color, weight, vin, brand)
        this.model = model
        this.topSpeed = topSpeed
    }
    model: string;
    topSpeed: number;
}

class Core extends MERCEDES{
    constructor(color: string, vin: number, weight: number, brand: string, model: string, topSpeed: number){
        super(color, weight, vin, brand)
        this.model = model
        this.topSpeed = topSpeed
    }
    model: string;
    topSpeed: number;
}

class Coupe extends MERCEDES{
    constructor(color: string, vin: number, weight: number, brand: string, model: string, topSpeed: number){
        super(color, weight, vin, brand)
        this.model = model
        this.topSpeed = topSpeed
    }
    model: string;
    topSpeed: number;
}

class Roadster extends MERCEDES{
    constructor(color: string, vin: number, weight: number, brand: string, model: string, topSpeed: number){
        super(color, weight, vin, brand)
        this.model = model
        this.topSpeed = topSpeed
    }
    model: string;
    topSpeed: number;
}

let myVehicle = new vehicle("White",101,76)
myVehicle.power(true)

let myMercedes = new MERCEDES("White",99,87,"Mercedes")
console.log(myMercedes.brand);
console.log(myMercedes.power(false));

let mySUV = new SUV("Black",673,95,'Mercedes','SUV',330)
console.log( mySUV.topSpeed);

let myCore = new Core("White",763,87,'Mercedes','Core',290)
console.log( myCore.topSpeed);

let myCoupe = new Coupe("Silver",920,85,'Mercedes','Coupe',320)
console.log( myCoupe.topSpeed);

let myRoadster = new Roadster("Black",468,80,'Mercedes','Roadster',340)
console.log( myRoadster.topSpeed);
console.log( myRoadster.model );
















export{};