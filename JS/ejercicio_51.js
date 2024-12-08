let pag_tot=0;

while(true){
    let op=parseInt(prompt(`POR FAVOR INGRESE LA OPCION QUE DESEA: 
1---- Agregar venta
0---- Salir`))

    if(op===1){
        let cuenta=parseFloat(prompt("Por favor ingrese el valor a pagar: "));

        if(cuenta>130000){
            cuenta=cuenta-(0.15*cuenta);
            alert("Recibe un descuento del 15%");
        }

        pag_tot+=cuenta;
    }else if(op==0) break;
    else alert("La opcion ingresada no es valida");
}

alert("LOs pagos totales realizados en el restaurante durante el dia fueron de: "+pag_tot);