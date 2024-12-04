let declara_renta=function(rent_anual){
    let mensaje="";
    if(rent_anual>=10000 && rent_anual<=20000){
        mensaje=`la declaracion de renta que debera pagar es: ${rent_anual*0.05}`;
    }else if(rent_anual>20000 && rent_anual<=35000){
        mensaje=`la declaracion de renta que debera pagar es: ${rent_anual*0.10}`;
    }else if(rent_anual>35000 && rent_anual<=60000){
        mensaje=`la declaracion de renta que debera pagar es: ${rent_anual*0.20}`;
    }else if(rent_anual>60000){
        mensaje=`la declaracion de renta que debera pagar es: ${rent_anual*0.45}`;
    }else if(rent_anual<10000){
        mensaje=`No debe declarar renta`;
    }
    return mensaje;
}

let rent_anual=prompt("Por favor ingrese el valor de su renta anual: ");

alert(declara_renta(rent_anual));