let cadena=prompt("Ingrese una frase: ");

let expresion=/\"[a-zA-Z0-9\.\*\s\+]+\"/;

if(expresion.test(cadena)){
    alert("Es una cadena de doble comillas. ");
}else alert("No es una cadena de dobles comillas");