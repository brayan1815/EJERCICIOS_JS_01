let contra=prompt("Por favor ingrese una contraseña para determinar si es segura o no");

let expre=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([^\s]){8,12}/;

if(expre.test(contra)) alert("LA contraseña es segura");
else alert("La contraseña no es segura");