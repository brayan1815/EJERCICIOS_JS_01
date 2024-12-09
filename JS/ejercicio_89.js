function aleatorio(){
    let mensaje="";
    let numero=Math.floor(Math.random() * (10 - 1 + 1)) + 1;;
    if(numero%2===0) mensaje=`El numero ${numero} es par`;
    else mensaje=`El numero ${numero} es impar`
    return mensaje;
}

alert(aleatorio());