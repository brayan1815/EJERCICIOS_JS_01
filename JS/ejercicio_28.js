const calc_suel=function(horas,pago_hora){
    let pag_suel=pago_hora*horas;
    return pag_suel;
}

let pago_hora=parseFloat(prompt("Por favor ingrese el valor de cada una de la shoras de trabajo: "));

while(true){
    let op=parseInt(prompt(`POR FAVOR INGRESE EL NUMERO QUE CORRESPONDE A LA OPCION QUE DESEA: 
        1---- Calcular sueldo de empleado
        0---- Salir`));
    
        if(op===1){
            let nombre=prompt("Por favor ingrese el nombre del empleado: ");
            let horas=parseInt(prompt("Por favor ingrese las horas trabajadas pr el empleado: "));
            alert(`El sueldo que se debera pagar al empleado ${nombre} es: ${calc_suel(horas,pago_hora)}`);
        }else if(op===0) break;
        else alert("LA OPCION INGRESADA NO ES VALIDA, POR FAVOR CUELA A INTENTARLO");
        
}
