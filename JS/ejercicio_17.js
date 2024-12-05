const volum_esfer=function(radio){
    let volumen=(4/3)*Math.PI*radio**3;
    return volumen;
}

let radio=(parseFloat(prompt("Por favor ingrese el radio de la esfera: ")));

alert("El radio de la esfera es: "+volum_esfer(radio));