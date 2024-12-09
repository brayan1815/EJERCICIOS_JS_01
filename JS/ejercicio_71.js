let numero=parseInt(prompt("Por favor introduzc un numero entero positivo: "));

let cont=0;
if(numero<0){
    alert("El numero ingresado no es positivo.");
}else{
    for(let n=1;n<=numero;n++){
        if(numero%n===0){
            cont++;
        }
    }

    if(cont===2){
        alert("EL NUMERO INGRESADO ES PRIMO");
    }else{
        alert("EL NUMERO INGRESADO NO ES PRIMO");
    }
}