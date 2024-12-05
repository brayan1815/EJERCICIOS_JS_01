const velocidad=function(distancia,tiempo){
    distancia=distancia*1000;
    tiempo=tiempo*60;

    let velocidad=distancia/tiempo;
    return velocidad;
}

let distancia=2;
let tiempo=5;

alert("La velocidad del proyectil en metros por segundo es: "+velocidad(distancia,tiempo));