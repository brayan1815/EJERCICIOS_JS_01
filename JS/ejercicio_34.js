
let calc_tie=function(altura,radio,caudal){
    let vol=Math.PI*(radio**2)*altura;
    let tiem=vol/caudal;
    return tiem*60;
}

let altura=parseFloat(prompt("Por favor ingrese la altura en metros: "));
let radio=parseFloat(prompt("Por favor ingrese el radio en metros: "));
let caudal=parseFloat(prompt("Por favor ingrese el caudal:"));

alert(`El tiempo estimado para el llenado del deposito es: ${calc_tie(altura,radio,caudal)} segundos`);

