const volu=function(anchura,altura,longitud){
    let volumen=(4/3)*Math.PI*anchura*altura*longitud;
    return volumen;
}

let anchura=parseFloat(prompt("Por favor ingrese la anchura del elipsoide:"));
let altura=parseFloat(prompt("Por favor ingrese la altura del elipsoide:"));
let longitud=parseFloat(prompt("Por favor ingrese la longitud del elipsoide:"));

alert("el volumen dle elipsoide es: "+volu(anchura,altura,longitud));