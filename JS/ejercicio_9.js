const edades=function(edad){
    try{
        edad=parseInt(edad);
        let mensaje="";
        if(edad>=0){
            if(edad<4 && edad>=0){
                mensaje=`El cliente puede entrar gratis`;
            }else if(edad>=4 && edad<118){
                mensaje=`El cliente debe pagar 5$`;
            }else if(edad>18){
                mensaje`El cliente debe pagar 10$`;
            }
            return alert(mensaje);
        }else{
            throw "La edad ingresada no es valida";
        }
    }catch(error){
        return alert(error);
    }
}

let edad= prompt("Por favor ingrese la edad del cliente: ");

edades(edad);