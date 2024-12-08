
let tip_membresia=prompt("Por favor ingrese el tipo de membresia del cliente (A,B o C):")

let val_compra=parseFloat(prompt("Por favor ingrese el valor de la compra: "));

tip_membresia=tip_membresia.toLocaleLowerCase();

let tot;
if(tip_membresia==="a"){
    tot=val_compra-(val_compra*0.10);
}else if(tip_membresia==="b"){
    tot=val_compra-(val_compra*0.15);
}else if(tip_membresia==="c"){
    tot=val_compra-(val_compra*0.20);
}else{
    alert("LA OPCION INGRESADA NO ES VALIDA");
}

alert("EL VALOR QUE DEBE PAGAR EL CLIENTE POR SU COMPRA ES: "+tot);