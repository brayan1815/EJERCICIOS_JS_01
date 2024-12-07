let vent_tot=0;
while(true){
    let op=parseInt(prompt(`POR FAVOR INGRESE LA OPCION QUE DESEA:
        1. Libro---------$10.000
        2. Cuaderono-----$7.550
        3. Lapicero------$5.550
        0. Salir` ));

    if(op===0){
        break;
    }else{
        let cant=parseInt(prompt("Por favor ingrese la cantidad que desea comprar: "));
        switch(op){
            case 1:
                vent_tot+=(cant*10000);
                break;
            case 2:
                vent_tot+=(cant*7550);
                break;
            case 3:
                vent_tot+=(cant*5550);
                break;
            default:
                alert("LA OPCION INGRESADA NO ES VALIDA");
                break;
        }
    }

}

alert("EL MONTO TOTAL DE LA VENTA ES: "+vent_tot);