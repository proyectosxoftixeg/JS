let numeros = [2,4,5,1,100,6,10];
let max = 0;

for (let i = 0; i < numeros.length; i++) {
    if(max < numeros[i] ){
        max = numeros[i];
    }
}

console.log("El valor mas grande de max es: " + max);



let arr = [1,2,3];
let maximo = 0;

for(let i=0; i < arr.length; i++){
    if(maximo < arr[i]){
        maximo = arr[i]
    }
}
console.log(maximo);

