let num=parseInt(prompt("Por favor ingrese la altura de la cual desea la piramide: "));

for(let n=0;n<=num;n++){
    let array=[];
    let blanco=num-n;
    for(let l=0;l<blanco/2;l++){
        array.push(' ');
    }
    for(let b=0;b<=n;b++){
        array.push("*");
    }
    for(let e=0;e<blanco/2;e++){
        array.push(' ');
    }
    array=array.join('');
    console.log(array);
}