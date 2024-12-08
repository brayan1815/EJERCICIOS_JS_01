let num1=parseInt(prompt("Por favor ingrese el valor 1: "));
let num2=parseInt(prompt("Por favor ingrese el valor 2: "));
let num3=parseInt(prompt("Por favor ingrese el valor 3: "));

let num_may=0;
let num_men=num1;

if(num1===num2 && num2===num3){
    alert("Lo numreros ingresados sonm iguales");
}else{
    if(num1>num_may) num_may=num1;
    if(num2>num_may) num_may=num2;
    if(num3>num_may) num_may=num3;

    if(num2<num_men) num_men=num2;
    if(num3<num_men) num_men=num3;

    alert(`El numero mayor es: ${num_may}
El numero menor es: ${num_men}`);

}


