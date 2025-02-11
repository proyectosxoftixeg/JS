// Crear un arreglo:

let frutas = ['Manzana','Fresas','Mora','Banana','Uva','Mandarina'];
console.log(frutas);
// Longitud de un arreglo
let largo = (frutas.length);
console.log(largo);

// Acceder a un elemento de array mediante su indice
console.table(frutas);
let primerElemento = (frutas[0]);
console.log('primer elemento:',primerElemento);
let segundoElemento = (frutas[1]);
console.log('Segundo Elemento: ', segundoElemento);
let tercerElemento = (frutas[2]);
console.log('Tercer Elemento: ', tercerElemento);
let cuartoElemento = (frutas[3]);
console.log('Cuarto Elemento: ', cuartoElemento);
let quintoElemento = (frutas[4]);
console.log('Quinto Elemento: ', quintoElemento);
let sextoElemento = (frutas[5]);
console.log('Sexto Elemento: ', sextoElemento);


// Saber cual es la posicion final de un arreglo
let primero = frutas [2-2];
console.log(primero);
let ultimo = frutas[frutas.length - 1];
console.log (ultimo);

// Recorrer un array
frutas.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice,arr);
});

//Añadir un un elemento al final de un Array
let nuevaLongitud = frutas.push('Mango'); // Esto añade Mango al final del array
console.table(nuevaLongitud,frutas);
frutas.push('Granadilla');
console.table(frutas);

//Eliminar el ultimo elemento de un array
let eliminaUltimo = frutas.pop();
console.log({eliminaUltimo,frutas});

//Añadir un elemento al principio de un array
let adicionaFruta = frutas.unshift('Pera');
console.table(frutas);
console.log('Fruta Adicionada: ', adicionaFruta);

//Elimina el primer elemento de un array
let eliminaPrimerElemento = frutas.shift();//Elimina Pera del inicio del array
console.table(frutas);
console.log('Elmento Eliminado:',eliminaPrimerElemento);


//Eliminar un elemento mediante su posicion
let pos = 1;
console.log(frutas);
let frutaBorrada = frutas.splice(pos,2);
console.log({frutaBorrada, frutas});


//Encontrar un elemento mediante su posicion medinte indexOf()
let posFruta = frutas.indexOf('Uva');
console.log({posFruta,frutas});







