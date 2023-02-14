//Strings
var brand = "Nike";
console.log(typeof brand); // returns datatype i.e. string
console.log(brand.length); // will return length of sequence of characters
console.log(brand.toUpperCase); //converts the string to UPPERCASE
console.log(brand.substring(0,2)); //displays only the first 2 characters of the string
//joining strings
var a = "Pres";
var b = "ton";
console.log(a +""+b);

//alternative method of joining strings
console.log(`${a}${b.toUpperCase()}`);

//refer to more methods in MDN Javascript reference developer.mozilla.org