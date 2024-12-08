function area(lado1,lado2){
    let mensaje=``;
    if(lado1>0 && lado2>0){
        mensaje=`El area del rectangulo es: ${lado1*lado2}`;
    }else{
        mensaje=`No se puede calcular el area con valores negativos`;
    }
    return mensaje;
}

let lado1=parseFloat(prompt("Por favor ingrese la medida del lado 1:"));
let lado2=parseFloat(prompt("Por favor ingrese la medida del lado 2:"));

alert(area(lado1,lado2));
