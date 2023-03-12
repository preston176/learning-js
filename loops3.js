//Loops
var names = [
    "pres", "John", "Reece", "Peter"
]
console.log("for i")
for (var i = 0; i < names.length; i++)
{
    console.log(names[i]);
}

//alternatively 
console.log("for of");
for (const name of names){
    console.log(name);
}

//or
console.log("forEach");
names.forEach(function(name)
{
    console.log(name)
})
