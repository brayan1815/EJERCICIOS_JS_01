const edad=function(edad_madre,edad_hijo){
    if(edad_madre<0 && edad_hijo<0){
        mos="Ninguna de las edades ingresadas debe ser menor de cero.";
    }else{
        let mos;
        mos="la edad de la madre al momento de dar a luz fue: "+(edad_madre-edad_hijo);   
    }
    return mos;
}

let edad_madre=parseInt(prompt("Por favor ingrese la edad de la madre actualmenet: "));
let edad_hijo=parseInt(prompt("Por favor ingrese la edad del hijo actualmenet: "))

alert(edad(edad_madre, edad_hijo));
