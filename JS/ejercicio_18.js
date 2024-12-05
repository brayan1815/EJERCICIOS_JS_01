const expresion=function(a,b,c){
    let exp=(a+7*c) / (b+2-a) + 2*b;
    return exp;
}

let a=parseFloat(prompt("Por favor ingrese el valor para A: "));
let b=parseFloat(prompt("Por favor ingrese el valor para B: "));
let c=parseFloat(prompt("Por favor ingrese el valor para C: "));

alert("El resultado de la expresion es: "+expresion(a,b,c));
