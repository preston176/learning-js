//ARRAYS
//are used to store more than one [values] 
//syntax var variablename = ["val1","val2"]
//single variable can have only single value assigned

var firstName = ["Pres","John","Joe","James"];

console.log(firstName);

//to only grab 1st item
//we use index. index starts from 0
console.log(firstName[0]);
console.log(firstName[1]);
//adding prefix to write index and the values
console.log("Index 0 - "+firstName[0]);
console.log("Index 1 - "+firstName[1]);
console.log("Index 2 - "+firstName[2]);
console.log("Index 3 - "+firstName[3]);

//if index doesnt exist, undefined would be returned i.e
console.log("Index 9 - "+firstName[9]);
