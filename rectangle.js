module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0){
        setTimeout(()=>
        //Contained in error message od error object
        callback(new Error("Rectangle dimensions should be greater than zero"),
        null),
        2000);
      
    }
    else{
        setTimeout(()=>
        callback(null,
        {
            //Javascript object, contatining 2 propeties, area and perimeter
            perimeter:(x,y) => (2*(x+y)),
            area:(x,y) => (x*y)
        }),
        2000);
      

    }
}





