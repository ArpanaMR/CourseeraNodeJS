var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="  +l + "and b=" +b);

    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than zero");

    }

    else{
        console.log("Area is "+ rect.area(l,b));
        console.log("Perimeter is "+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,3);
solveRect(4,-5);
