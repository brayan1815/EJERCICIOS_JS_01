let num1=prompt("Por favor ingrese el primer valor:");
let num2=prompt("Por favor ingrese el segundo valor:");

try{
    if(num1!=0 && num2!=0){
        console.log(`El resultado de la division de los dos numeros es: ${num1/num2}`);
    }
    else{
        throw "No es posible dividir en cero";
    }
}catch(error){
    console.log(error);
}