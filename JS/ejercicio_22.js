const pago=function(minutos){
    let pago=minutos*355;
    pago=pago+((20/100)*pago);

    return pago;
}

let minutos=parseInt(prompt("Por favor ingrese los minutos que hablo por telefono: "));

alert("lo que se dbe pagar por los minutos con iva incluiso es: "+pago(minutos))