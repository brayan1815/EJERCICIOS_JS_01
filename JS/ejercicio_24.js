let expre=/^[+-]?[0-9]+[e]?[0-9]?(\.[0-9]+[e]?[+-]?[0-9]?)?$/g;
let numero=parseFloat(prompt("Por favor ingrese el numero: "));

if(expre.test(numero)){
    alert("ES UN NUMERO EN PUNTO FLOTANTE")
}else alert("NO ES UN NUMERO EN PUNTO FLOTANTE")