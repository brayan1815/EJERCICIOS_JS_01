const calc_area=function(op){
    op=op.toLowerCase();
    let area;

    if(op==="t"){
        let base=parseFloat(prompt("Por favor ingrese la medida de la base: "));
        let altura=parseFloat(prompt("Por favor ingrese la altura del triangulo: "));

        area=(base*altura)/2
    }else if(op==="c"){
        let radio=parseFloat(prompt("Por favor ingrese le radio del circulo: "));

        area=Math.PI*radio**2;
    }
    return area;
}

let op=prompt(`POR FAVOR SELECCIONE LA FIGURA DE LA CUAL DESEA CALCULAR EL AREA
T---- triangulo
C---- circulo`);

alert("El area de la figura es: "+calc_area(op));