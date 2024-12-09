let contra="BRAyan1525";

let expre=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([^\s]){8,12}/;

console.log(expre.test(contra));