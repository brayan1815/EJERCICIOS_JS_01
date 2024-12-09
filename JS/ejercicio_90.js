function convert(num){
    let tex="";
    switch(num){
        case 0:
            tex="cero";
            break;
        case 1:
            tex="uno";
            break;
        case 2:
            tex="dos";
            break;
        case 3:
            tex="tres";
            break;
        case 4:
            tex="cuatro";
            break;
        case 5: 
            tex="cinco";
            break;
        default:
            tex="El numero ingresado no es valido: ";
            break;
    } 
    return tex;
}

let num=parseInt(prompt("Por favor ingrese un numero de 1 a 5: "));

alert("La representacion textual del numero ingresado es: "+convert(num));