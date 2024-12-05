const area_rec=function(base,altura){
    let area=base*altura;
    return area;
}

let base=parseInt(prompt("Por favor ingrese la base del rectangulo: "));
let altura=parseInt(prompt("Por favor ingrese la altura del rectangulo: "));

alert("el area del rectangulo es: "+area_rec(base,altura));