"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var vehicle = /** @class */ (function () {
    function vehicle(color, vin, weight) {
        this.color = color;
        this.weight = weight;
        this.vin = vin;
    }
    vehicle.prototype.power = function (state) {
        if (state === true) {
            console.log("Engine starts");
        }
        else {
            console.log("Engine stops");
        }
    };
    return vehicle;
}());
var MERCEDES = /** @class */ (function (_super) {
    __extends(MERCEDES, _super);
    function MERCEDES(color, vin, weight, brand) {
        var _this = _super.call(this, color, vin, weight) // 
         || this;
        _this.brand = brand;
        return _this;
    }
    return MERCEDES;
}(vehicle));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(color, vin, weight, brand, model, topSpeed) {
        var _this = _super.call(this, color, weight, vin, brand) || this;
        _this.model = model;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return SUV;
}(MERCEDES));
var Core = /** @class */ (function (_super) {
    __extends(Core, _super);
    function Core(color, vin, weight, brand, model, topSpeed) {
        var _this = _super.call(this, color, weight, vin, brand) || this;
        _this.model = model;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return Core;
}(MERCEDES));
var Coupe = /** @class */ (function (_super) {
    __extends(Coupe, _super);
    function Coupe(color, vin, weight, brand, model, topSpeed) {
        var _this = _super.call(this, color, weight, vin, brand) || this;
        _this.model = model;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return Coupe;
}(MERCEDES));
var Roadster = /** @class */ (function (_super) {
    __extends(Roadster, _super);
    function Roadster(color, vin, weight, brand, model, topSpeed) {
        var _this = _super.call(this, color, weight, vin, brand) || this;
        _this.model = model;
        _this.topSpeed = topSpeed;
        return _this;
    }
    return Roadster;
}(MERCEDES));
var myVehicle = new vehicle("White", 101, 76);
myVehicle.power(true);
var myMercedes = new MERCEDES("White", 99, 87, "Mercedes");
console.log(myMercedes.brand);
console.log(myMercedes.power(false));
var mySUV = new SUV("Black", 673, 95, 'Mercedes', 'SUV', 330);
console.log(mySUV.topSpeed);
var myCore = new Core("White", 763, 87, 'Mercedes', 'Core', 290);
console.log(myCore.topSpeed);
var myCoupe = new Coupe("Silver", 920, 85, 'Mercedes', 'Coupe', 320);
console.log(myCoupe.topSpeed);
var myRoadster = new Roadster("Black", 468, 80, 'Mercedes', 'Roadster', 340);
console.log(myRoadster.topSpeed);
console.log(myRoadster.model);
