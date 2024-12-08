 let tot=0;




for(let n=1;n<=5;n++){
    let precio=parseFloat(prompt(`Por favor ingrese el valor del producto ${n}`));
    let por_iva=parseInt(prompt("Por favor ingrese el porcentaje de IVA del producto: "))
    let iva=precio*(por_iva/100);
    let subtotal=precio+iva;

    alert(`El subotal es: ${subtotal}
    lo que se dbe pgar por IVA es: ${iva}`);

    tot+=subtotal;
}

alert("EL TOTAL A PAGAR POR LOS 5 PRODUCTOS ES: "+tot);


