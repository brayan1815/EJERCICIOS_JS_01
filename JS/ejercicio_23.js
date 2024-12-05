const convertir=function(vel){
    vel_ms=vel/3.6;
    return vel_ms;
}

let vel=parseFloat(prompt("Por favor ingrese la velocidad em kilometros por hora: "));

alert(`la velocidad ingresada corresponde a ${convertir(vel)}m/s`)