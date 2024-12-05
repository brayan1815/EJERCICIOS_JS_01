const calc=function(num1,num2,op){
    let resultado;
    switch(op){
        case 1:
            resultado=num1+num2;
            break;
        case 2:
            resultado=num1-num2;
            break;
        case 3:
            if(num1!=0 && num2!=0){
                resultado=num1/num2;
            }else resultado="Ninguno de los valores ingresados debe ser cero para poder realizar la division";
            break;
        case 4:
            resultado=num1*num2;
            break;
        default:
            resultado="La opcion ingresada no es valida";
    }
    return resultado;
}
let num1;
let num2;
let op;
while(true){
    op=prompt(`QUE DESEA HACER CON LOS NUMEROS: 
        1---- sumar
        2---- restar
        3---- dividir
        4---- multiplicar
        0---- Salir`);
    op=parseInt(op);

    if(op===0) break;

    num1=prompt("Por favor ingrese el primer valor:");
    num1=parseInt(num1);
    num2=prompt("Por favor ingrese el segundo valor: ");
    num2=parseInt(num2);

    alert(calc(num1,num2,op));
}