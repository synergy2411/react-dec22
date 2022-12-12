// Implicit Types

let xyz = 101;

// xyz = "Hello World";


// Explicit Types

let isAdmin: boolean = true;
let fn: Function = () => { };
let username: string = "John Doe";
let dob: Date = new Date("Dec 21, 1986");
// let age : any = "Thirty-Two";
// age = 32;
let age: string | number = 32;
age = "Thirty-Two";

let numbers: Array<number> = [2, 3, 4, 5, 6];

enum Color {
    RED, GREEN, BLUE
}

let favColor: Color = Color.RED;


interface IStudent {
    studId: number;
    studName: string;
    getDetails: () => string;
}

class Student implements IStudent {
    studName: string;
    studId: number;
    constructor(studName: string, studId: number) {
        this.studId = studId;
        this.studName = studName;
    }

    public getDetails(): string {
        return this.studId + " : " + this.studName;
    }
}

let foo = new Student("Foo Bar 123", 32);
console.log(foo.getDetails())


type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

let john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 34
}



function addAtBeginning<T>(val: T, arr: Array<T>): Array<T> {
    return [val, ...arr]
}



let strArray = addAtBeginning<string>("Hello", ["World"])
strArray[0]

let numArray = addAtBeginning<number>(101, [99, 102])
numArray[0]



interface IUser<T, U> {
    userId: T
    age: U
}


let user: IUser<number, string> = {
    userId: 102,
    age: "Twenty-two"
}


let userTwo: IUser<string, number> = {
    userId: "U001",
    age: 22
}