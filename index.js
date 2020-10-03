const rectangle = require('./rectangle');
var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="  +l + "and b=" +b);
rect(l,b,(err,rectangle)=>{
    if(err){
        console.log("ERROR:",err.message);
    }
    else{
        console.log("The area of rectangle is"+rectangle.area())
    }
});
//To show 2 second delay we put
console.log("This statemtn is after to call to rect");
}

solveRect(2,4);
solveRect(0,3);
solveRect(4,-5);
