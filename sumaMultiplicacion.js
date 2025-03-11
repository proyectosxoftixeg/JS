// Función para sumar y multiplicar 10 números
function operacionesConDiezNumeros() {
    // Array con 10 números
    const numeros = [5, 3, 8, 2, 7, 1, 9, 4, 6, 10];
    
    // Calcular la suma
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
    // Calcular la multiplicación
    const multiplicacion = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
    
    // Mostrar resultados
    console.log('Los números son:', numeros.join(', '));
    console.log('La suma de los números es:', suma);
    console.log('La multiplicación de los números es:', multiplicacion);
}

// Ejecutar la función
operacionesConDiezNumeros(); 