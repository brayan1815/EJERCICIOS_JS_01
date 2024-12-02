const pares=function(num){
    if(num%2===0) return "El numero ingresado es par";
    else return "El numero ingresado es impar";
}

let numero=prompt("Por favor ingrese le numero que desea validar: ");

console.log(pares(numero));