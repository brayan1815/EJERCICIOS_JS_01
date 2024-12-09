function suma_binario(num1,num2){
    let suma=num1+num2;

    let sum_bin=suma.toString(2);
    return sum_bin;
}

let num1=parseFloat(prompt("Por favor ingrese el primer valor: "));
let num2=parseFloat(prompt("Por favor ingrese el segundo valor: "));

alert("La suma de los dos numeros en binario es: "+suma_binario(num1,num2))
