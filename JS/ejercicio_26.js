const conver = function(centigrados){
    let faren=(centigrados*9/5)+32;
    return faren;
}

let centigrados=parseFloat(prompt("Por favor ingrese los grados centigrados: "));

alert(`los grados centigrados ingresados equivalen a ${conver(centigrados)} farenheit`);