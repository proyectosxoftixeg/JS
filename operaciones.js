// Función para realizar las operaciones matemáticas
function realizarOperaciones(a, b) {
    // Verificar si los argumentos son números
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos argumentos deben ser números.";
    }

    // Realizar las operaciones
    const suma = a + b;
    const resta = a - b;
    const multiplicacion = a * b;
    const division = b !== 0 ? a / b : "Error: División por cero";

    // Crear el string de salida
    const resultado = `
    Operaciones con ${a} y ${b}:
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multiplicacion}
    División: ${division}
    `;

    return resultado;
}

// Ejemplo de uso
const num1 = 10;
const num2 = 5;
console.log(realizarOperaciones(num1, num2));