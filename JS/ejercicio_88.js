function inver(numero){
    let inverso_aditivo=numero*(-1);
    return inverso_aditivo;
}

let numero=parseFloat(prompt("Por favor ingrese un numero: "));

alert("El inverso aditivo del numero ingresado es: "+inver(numero));