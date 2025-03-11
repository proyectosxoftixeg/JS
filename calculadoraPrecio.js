const readline = require('readline');

// Crear interfaz para leer input del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Configuración de parámetros base
const IMPUESTO_IVA = 0.16; // 16% de IVA
const MARGEN_GANANCIA = 0.30; // 30% de margen de ganancia base

// Función para calcular el precio final
function calcularPrecioFinal(costoPrima) {
    // Cálculo del costo base con margen de ganancia
    const costoConMargen = costoPrima * (1 + MARGEN_GANANCIA);
    
    // Cálculo del precio final con impuestos
    const precioFinal = costoConMargen * (1 + IMPUESTO_IVA);
    
    return {
        precioFinal: precioFinal.toFixed(2),
        margenGananciaPorUnidad: (costoConMargen - costoPrima).toFixed(2)
    };
}

// Función para calcular ganancias totales
function calcularGananciaTotal(margenPorUnidad, unidades) {
    return (margenPorUnidad * unidades).toFixed(2);
}

// Función principal que maneja el flujo del programa
function iniciarCalculadora() {
    rl.question('Ingrese el costo de la materia prima (en pesos): ', (costoPrima) => {
        const costo = parseFloat(costoPrima);
        
        if (isNaN(costo) || costo <= 0) {
            console.log('Por favor, ingrese un valor numérico válido mayor a 0');
            rl.close();
            return;
        }

        const resultado = calcularPrecioFinal(costo);
        
        console.log('\n=== Resultados del Cálculo ===');
        console.log(`Costo de materia prima: $${costo.toFixed(2)}`);
        console.log(`Margen de ganancia por unidad: $${resultado.margenGananciaPorUnidad}`);
        console.log(`Precio final (con IVA): $${resultado.precioFinal}`);
        
        rl.question('\n¿Cuántas unidades espera vender? ', (unidades) => {
            const cantidadUnidades = parseInt(unidades);
            
            if (isNaN(cantidadUnidades) || cantidadUnidades <= 0) {
                console.log('Por favor, ingrese un número válido de unidades');
                rl.close();
                return;
            }

            const gananciaTotal = calcularGananciaTotal(parseFloat(resultado.margenGananciaPorUnidad), cantidadUnidades);
            
            console.log('\n=== Proyección de Ganancias ===');
            console.log(`Ganancia total esperada: $${gananciaTotal}`);
            console.log(`Basado en la venta de ${cantidadUnidades} unidades`);
            
            rl.close();
        });
    });
}

// Iniciar el programa
console.log('=== Calculadora de Precio y Ganancias ===\n');
iniciarCalculadora();