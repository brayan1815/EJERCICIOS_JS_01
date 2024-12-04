let puntos;

const fun_eval=function(puntos){
    let mensaje;
    puntos=parseFloat(puntos);
    try{
        if((puntos*10)%2===0){
            if(puntos===0.0){
                mensaje=`El rendimiento del empleado es INACEPTABLE, y la cantidad de dinero que recibira es: ${2400*puntos}`;
            }
            if(puntos===0.2){
                mensaje=`El rendimiento del empleado es BUENO, y la cantidad de dinero que recibira es: ${2400*puntos}`;
            } 
            if(puntos===0.4){
                mensaje=`El rendimiento del empleado es ACEPTABLE, y la cantidad de dinero que recibira es: ${2400*puntos}`;
            }          
            if(puntos>=0.6){
                mensaje=`El rendimiento del empleado es MERITORIO, y la cantidad de dinero que recibira es: ${2400*puntos}`;
            }
            return alert(mensaje);
        }
        else{
            throw "El puntaje ingresado no es valido";
        }    
    }catch(error){
        return alert(error);
    }
}

while(true){
    let op=prompt(`INGRESE LA OPCION QUE DESEA: 
        1---- Ingresar puntaje de empleado
        0---- Salir`);
    op=parseInt(op);
    if(op==1){
        puntos=prompt("Por favor ingrese los puntos obtenidos por el empleado: ");
        fun_eval(puntos);
    }else if(op==0) break;
    else alert("La opcion ingresada no es valida;")
}