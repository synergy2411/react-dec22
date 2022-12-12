"use strict";
// Implicit Types
let xyz = 101;
// xyz = "Hello World";
// Explicit Types
let isAdmin = true;
let fn = () => { };
let username = "John Doe";
let dob = new Date("Dec 21, 1986");
// let age : any = "Thirty-Two";
// age = 32;
let age = 32;
age = "Thirty-Two";
let numbers = [2, 3, 4, 5, 6];
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let favColor = Color.RED;
class Student {
    constructor(studName, studId) {
        this.studId = studId;
        this.studName = studName;
    }
    getDetails() {
        return this.studId + " : " + this.studName;
    }
}
let foo = new Student("Foo Bar 123", 32);
console.log(foo.getDetails());
let john = {
    firstName: "John",
    lastName: "Doe",
    age: 34
};
function addAtBeginning(val, arr) {
    return [val, ...arr];
}
let strArray = addAtBeginning("Hello", ["World"]);
strArray[0];
let numArray = addAtBeginning(101, [99, 102]);
numArray[0];
let user = {
    userId: 102,
    age: "Twenty-two"
};
let userTwo = {
    userId: "U001",
    age: 22
};
