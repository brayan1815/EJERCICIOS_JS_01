const calc_pag=function(tip_em,horas){
    let pago;
    if(tip_em===1){
        pago=20000*horas;
    }else if(tip_em===2){
        pago=10000*horas;
    }
    return pago;
}

let tip_em=parseInt(prompt(`POR FAVOR INGRESE EL TIPO DE EMPLEADO: 
1---- Planta
2---- Administrativo`));
let horas=parseInt(prompt("Por favor ingrese las horas trabajadas por el empleado: "));

alert("lo que se debe pagar al empleado por las horas trabajadas es: "+calc_pag(tip_em,horas));