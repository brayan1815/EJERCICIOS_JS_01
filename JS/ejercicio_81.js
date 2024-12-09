function mayor(array){
    let mayr=0;
    for(let n=0;n<array.length;n++){
        if(array[n]>mayr)mayr=array[n];
    }
    return mayr;
}

let array=[1,26,8,4,2,1,5,3,2,5,6,5,78,51,54];

alert("El numero mayor del array es: "+mayor(array))