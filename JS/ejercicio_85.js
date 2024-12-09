let suma=0;

while(true){
    let numero=parseInt(prompt("Por fvor ingrese un numero: (ingrese cero para salir); "))
    if(numero===0) break;
    else if(numero>0)suma+=numero;
}

alert("La suma de todos los numeros positivos ingresados es: "+ suma);