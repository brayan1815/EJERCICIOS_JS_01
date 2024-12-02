let nombre=prompt("Por favor ingrese su nombre: ");
let sexo= prompt("Por favor ingrese el sexo. (M)masculino (F)femenino: ")

if((sexo.toLowerCase=="f" && nombre.charAt(0).toLowerCase<"m") && (sexo.toLocaleLowerCase=="m" && nombre.charAt(0)>"n")){
    console.log("El usuario corresponde al grupo A")
}else console.log("El usuario pertenece al grupo B");

