//Var = old way

var x = 10; //globally scope
if(true){
    var x = 20
    console.log(x)
}

console.log(x) //20

//let = morden Way
 
let y = 20;
if(true){
    let y = 30
    console.log(y) //30
}

console.log(y)


//const do not change value

const z = 10;
console.log(z);
