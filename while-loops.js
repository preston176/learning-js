//While Loops
var names = [
    "Joe", "Pres", "John"
    , "Bob"
];

var number = 0;
while(number < 5){
    console.log(number)
    //continuously print number until number < 5
    number++; 
//increment number by 1 i.e number = number + 1
}

var condition = true;
while(condition) {
    console.log("hello");
    condition = false
}

// loop and get elements

// same as using for .. do but now using while .. do
var index = 0; 
while(index < names.length){
    console.log(names[index]);
    index++;
}