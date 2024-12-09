function par_impar(numero){
    let mensaje="";
    if(numero%2===0)mensaje="El numero es par";
    else mensaje="El numero es impar";
    return mensaje;
}

alert(par_impar(parseInt(prompt("Por favor ingrese un numero: "))));