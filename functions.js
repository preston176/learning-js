//FUNCTIONS
//function function_name(parameter1, parameter 2)
function addnumbers(num1, num2)
{
    var addition = num1 + num2;
    console.log(addition);
}
//function call
//function_name([parameter1], [parameter2])
addnumbers(10,20);
addnumbers(30,10);

//OR INSTEAD OF console.log -

function addnumbers(num1,num2)
{
    var addition =num1 + num2;
    return addition;
}
var result1 =addnumbers(7,6);
var result2 = addnumbers(8,9);

console.log(result1);
console.log(result2);

/*POINTS TO NOTE : A FUNCTION MAY / MAY NOT RETURN A VALUE AT THE END
A FUNCTION IS A SET OF STATEMENTS USED TO PERFORM A CERTAIN TASK / TASKS WHEN EXECUTED*/