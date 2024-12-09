let numero=parseInt(prompt("Por favor ingrese un numero: "));


for(let n=0;n<numero;n++){
    let arra=[];
    for(let b=0;b<=n;b++){
        arra.push(".");
    }
    let linea=arra.join('');
    console.log(linea);
}
