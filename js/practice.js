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
console.log("the number is" + num1.toFixed(2));
