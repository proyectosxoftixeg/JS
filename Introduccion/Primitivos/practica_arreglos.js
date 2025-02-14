let marcas = ['Sony','Apple','Microsoft','Intel','Google','Amazon','Nvidia'];
console.log(marcas);


// Operaciones Habituales con un Array Metodos
//Acceder a un elemento del array

let primero = (marcas[0]);
console.log(primero,marcas);
let segundo = (marcas[1]);
console.log (segundo,marcas);
let tercero = (marcas[2]);
console.log (tercero,marcas);
let cuarto = (marcas[3]);
console.log(cuarto,marcas);
let quinto = [marcas[4]];
console.log(quinto,marcas);
let sexto = (marcas[5]);
console.log(sexto,marcas);
let septimo = (marcas[6]);
console.log(septimo,marcas);

// saber la longitud de un array

let longitudMarcas = (marcas.length);
console.log("La longitud del arreglo marcas es: ",longitudMarcas);

// Conocer ultima posicion

let ultimoMarca = marcas [marcas.length -1];
console.log ('La ultima marca del array es: ',ultimoMarca, marcas);


//Recorrer un array
let recorrer = marcas.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice);
})

let recorre = marcas.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice);
})

let recorr = marcas.forEach((elemento,indice,arrerglo)=>{
    console.log(elemento,indice,arrerglo);
})




