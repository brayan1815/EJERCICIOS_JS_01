function mayor(num1,num2){
    let respuesta="";
    if(num1>num2)respuesta="El numero mayor es "+num1;
    else if(num2>num1)respuesta="El numero mayor es "+num2;
    else respuesta="Los numeros son iguales";
    return respuesta;
}

let num1=parseFloat(prompt("Por favor ingrese el primero valor:"));
let num2=parseFloat(prompt("Por favor ingrese el segundo valor: "));

alert(mayor(num1,num2));