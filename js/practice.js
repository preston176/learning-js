let names = [
    "james", "jonathan", "johnson"
]
console.log(names);

//shift removes first element from an array
names.shift();
console.log(names);

//pop removes last element from an array
names.pop(names);
console.log(names);


//push adds element to an array (from the rear)
names.push("man");
console.log(names);


//rounding off numbers

let num1 = 212.3293;

console.log("the number is" + num1);

//now when rounded off 2 decimal places
console.log("the number rounded to 2 dp " + num1.toFixed(2));


//get current date

let rightNow = new Date();
let dateString = rightNow.toString();

console.log("current date is " + dateString)


//concatenation

let name1 = "milner"
let name2 = "mayieka"

console.log("name1" + "name2");