var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Example 1
var car = /** @class */ (function () {
    function car() {
        this.color = 'Silver';
    }
    car.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car;
}());
var mycar = new car();
console.log(mycar);
console.log(mycar.power(true));
// Example 2
var car2 = /** @class */ (function () {
    function car2(color, location) {
        this.color = color;
        this.location = location;
    }
    car2.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car2;
}());
var myCar = new car2("White", "Pakistan");
var AdilCar = new car2('Black', 'California');
console.log("My car is ".concat(myCar.color));
console.log("My car is in ".concat(myCar.location));
console.log("Sir Adil car is ".concat(AdilCar.color));
console.log("Sir Adil's is in ".concat(AdilCar.location));
// Example 3
var car3 = /** @class */ (function () {
    function car3(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car3.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car3;
}());
var meriCar = new car3('Red', 'NaganChorangi', '1A');
var teriCar = new car3('Green', 'FiveStar', '1B');
var uskiCar = new car3('Grey', 'Nazimabad', '1C');
// Example 4
var car4 = /** @class */ (function () {
    function car4(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car4.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car4;
}());
// A simple constructor
var simpleConstructor = new car4('Sky Blue', 'Balochistan', 'MainNhiBataonga');
// We can use it as a Type also and assign it to another variable
var alexanderCar;
alexanderCar = {
    vin: '1D',
    color: 'Black',
    location: 'Sweden',
    owner: 'Aftab',
    power: function (state) { }
};
// Example 5
// Inheritance
var car5 = /** @class */ (function () {
    function car5(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car5.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car5;
}());
var mercedes = /** @class */ (function (_super) {
    __extends(mercedes, _super);
    function mercedes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alloyWheels = true;
        _this.adjustableSuspension = true;
        return _this;
    }
    return mercedes;
}(car5));
var MYCAR = new mercedes('Black', 'NewYork', '5C15');
console.log(MYCAR);
MYCAR.power(false);
// Example 6
// Overridden constructors
var car6 = /** @class */ (function () {
    function car6(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car6.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Engine");
        }
        else {
            console.log("Shutting down engine");
        }
    };
    return car6;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(color, location, vin, alloyWheels) {
        var _this = _super.call(this, color, location, vin) // Super will call the constructor of car6
         || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = alloyWheels;
        return _this;
    }
    Mercedes.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Mercedes Engine");
        }
        else {
            console.log("Shutting down Mercedes Engine");
        }
    };
    return Mercedes;
}(car6));
var CAR = new Mercedes('Black', 'NewYork', '5C15', true);
console.log(CAR);
CAR.power(true);
// Example 7
var car7 = /** @class */ (function () {
    function car7(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car7.prototype.power = function (state) {
        if (state === true) {
            return "Starting Engine";
        }
        else {
            return "Shutting down engine";
        }
    };
    return car7;
}());
var Mehran = /** @class */ (function (_super) {
    __extends(Mehran, _super);
    function Mehran(color, location, vin, alloyWheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = alloyWheels;
        return _this;
    }
    Mehran.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Mehran Engine");
            return "Starting Mehran's Engine";
        }
        else {
            return "Shutting down Mehran's Engine";
        }
    };
    return Mehran;
}(car7));
var myConstructor = new Mehran('Silver', 'karachi', '203-A', false);
myConstructor.power(true);
// Example 8
var car8 = /** @class */ (function () {
    function car8(color, location, vin) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    car8.prototype.power = function (state) {
        if (state === true) {
            return "Starting Engine";
        }
        else {
            return "Shutting down engine";
        }
    };
    return car8;
}());
var civic = /** @class */ (function (_super) {
    __extends(civic, _super);
    function civic(color, location, vin, alloyWheels) {
        var _this = _super.call(this, color, location, vin) || this;
        _this.adjustableSuspension = true;
        _this.alloyWheels = alloyWheels;
        return _this;
    }
    civic.prototype.power = function (state) {
        if (state === true) {
            console.log("Starting Mehran Engine");
            return "Starting Mehran's Engine";
        }
        else {
            return "Shutting down Mehran's Engine";
        }
    };
    return civic;
}(car8));
var myCivic = new civic("Black", "Islamabad", 56, true);
var myCar8 = new car8("Black", "Islamabad", "56");
var myCar8Copy = new car8("Black", "Islamabad", 56);
