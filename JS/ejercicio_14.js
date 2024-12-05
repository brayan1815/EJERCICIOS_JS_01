const area_triangulo=function(base,altura){
    let area=(base*altura)/2;
    return area;
}

let base=parseInt(prompt("Por favor ingrese la base del triangulo: "));
let altura=parseInt(prompt("Por favor ingrese la altura del triangulo: "));

alert("el area del triangulo es: "+area_triangulo(base,altura));