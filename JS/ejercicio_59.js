
let edad=parseInt(prompt("Por favor ingrese su edad: "));

if(edad<=19){
    let estatura=parseInt(prompt("Por favor ingrese su estatura en centimetros: "))
    if(estatura>175){
        let peso=parseInt(prompt("Por favor ingrese su peso en kilogramos"));
        if(peso<=80 && peso>=75){
            alert("BIENVENIDO AL EQUIPO");
        }else alert("No cumple con el peso necesario para ser parte del equipo");
    }
    else alert("No cumple con la estatura necesaria para ser parte del equipo")
}else alert("No cumple con la edad necesaria para hacer parte del equipo.")