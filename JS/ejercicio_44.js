function convertit(pesos,dolar,euro){
    let con_dol=pesos*dolar;
    let con_eu=pesos*euro;

    let mensaje=`Los pesos ingresados equivales a ${con_dol} dolares
Los pesos ingresados equivalen a ${con_eu} euros`;

    return mensaje;
}

const dolar=0.00023;
const euro=0.00021;

let pesos=parseFloat(prompt("Por favor ingrese los pesos que desea convertir: "));

alert(convertit(pesos,dolar,euro));