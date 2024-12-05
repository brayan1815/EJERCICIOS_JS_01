const desc= function(precio){
    let tot=precio-((10/100)*precio);
    return tot;
}

while(true){
    let precio=parseFloat(prompt("Por Favor ingrese el precio del medicamento \n INGRESE 0 PARA SALIR"))

    if(precio==0) break;

    alert("El precio a pagar por el medicamento es: "+desc(precio));
}