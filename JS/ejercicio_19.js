const area_cilin=function(radio,altura){
    let area=((2*Math.PI)*radio*altura)+((2*Math.PI)*radio**2);
    return area;
}

const vol_cil=function(radio,altura){
    let vol=((Math.PI)*radio**2)*altura;
    return vol;
}

let radio=parseFloat(prompt("por favor ingrese el radio del cilindro: "));
let altura=parseFloat(prompt("Por favor ingrese la altura del cilindro: "));

alert(`el area del cilindro es: ${area_cilin(radio,altura)}
el volumen del cilindro es: ${vol_cil(radio,altura)}`)