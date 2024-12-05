const area=function(radio){
    let area=Math.PI*radio**2;
    return area;
}

const longitud=function(radio){
    let longitud=2*Math.PI*radio;
    return longitud;
}

radio=parseFloat(prompt("Por favor ingrese el radio del circulo: "));

alert(`El area del circulo es: ${area(radio)}
La longitud del cirulo es: ${longitud(radio)}`);