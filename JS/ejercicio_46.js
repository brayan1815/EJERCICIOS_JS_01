const mayor=function(){
    num_may=0;
    for(let n=1;n<=3;n++){
        let num=parseInt(prompt("por Favor ingrese el valor "+n))
        if(num>num_may){
            num_may=num;
        }
    }
    return num_may;
}

alert("el mayor numero ingreado fue: "+mayor());