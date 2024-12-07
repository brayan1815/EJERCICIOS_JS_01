function cobro(metros,precio){
    let total=metros*precio;
    return total;
}

let precio=parseFloat(prompt("Por favor ingrese el precio que se cobra por metro cuadrado: "));
let metros=parseInt(prompt("Por favor ingrese los metros que se desea pintar: "));

alert("El total a cobrar por el trabajo es: "+cobro(metros,precio));