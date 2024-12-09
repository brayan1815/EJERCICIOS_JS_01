let numero=parseInt(prompt("Por favor ingrese un numero: "));
let array_num=[];

for(let n=1;n<=numero;n+=2){
    array_num.push(n);
}

alert(`Los numeros impares separados por comas son : 
    ${array_num}`);