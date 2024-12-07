function calc_edad(año_nac,año_ac){
    let edad=año_ac-año_nac;
    return edad;
}

let año_ac=parseInt(prompt("Por favor ingrese el año actual: "));
let año_nac=parseInt(prompt("Por favor ingrese el año de nacimiento del empleado: "));

alert("La edad del empleado es: "+calc_edad(año_nac,año_ac));