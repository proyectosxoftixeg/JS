// Obtener referencias a los elementos del DOM
const costoPrimaInput = document.getElementById('costoPrima');
const margenGananciaInput = document.getElementById('margenGanancia');
const ivaInput = document.getElementById('iva');
const unidadesInput = document.getElementById('unidades');
const calcularBtn = document.getElementById('calcular');
const calcularGananciasBtn = document.getElementById('calcularGanancias');
const resultadosDiv = document.getElementById('resultados');
const gananciasTotalDiv = document.getElementById('gananciasTotal');

// Variables para almacenar los resultados
let resultadoCalculos = {
    costoPrima: 0,
    margenPorUnidad: 0,
    precioFinal: 0
};

// Función para formatear números como moneda
const formatearMoneda = (numero) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(numero);
};

// Función para calcular el precio final
const calcularPrecioFinal = () => {
    const costoPrima = parseFloat(costoPrimaInput.value) || 0;
    const margenGanancia = parseFloat(margenGananciaInput.value) / 100;
    const iva = parseFloat(ivaInput.value) / 100;

    if (costoPrima <= 0) {
        alert('Por favor, ingrese un costo de materia prima válido');
        return false;
    }

    // Cálculo del costo base con margen de ganancia
    const costoConMargen = costoPrima * (1 + margenGanancia);
    
    // Cálculo del precio final con impuestos
    const precioFinal = costoConMargen * (1 + iva);
    
    // Almacenar resultados
    resultadoCalculos = {
        costoPrima: costoPrima,
        margenPorUnidad: costoConMargen - costoPrima,
        precioFinal: precioFinal
    };

    // Mostrar resultados
    document.getElementById('costoDisplay').textContent = formatearMoneda(costoPrima);
    document.getElementById('margenDisplay').textContent = formatearMoneda(resultadoCalculos.margenPorUnidad);
    document.getElementById('precioFinalDisplay').textContent = formatearMoneda(precioFinal);
    
    resultadosDiv.style.display = 'block';
    return true;
};

// Función para calcular ganancias totales
const calcularGananciasTotales = () => {
    const unidades = parseInt(unidadesInput.value) || 0;
    
    if (unidades <= 0) {
        alert('Por favor, ingrese un número válido de unidades');
        return;
    }

    const gananciaTotal = resultadoCalculos.margenPorUnidad * unidades;
    
    document.getElementById('gananciaTotalDisplay').textContent = formatearMoneda(gananciaTotal);
    document.getElementById('unidadesDisplay').textContent = `${unidades} unidades`;
    
    gananciasTotalDiv.style.display = 'block';
};

// Event listeners
calcularBtn.addEventListener('click', calcularPrecioFinal);
calcularGananciasBtn.addEventListener('click', calcularGananciasTotales);

// Validación de inputs numéricos
const validarInput = (event) => {
    const valor = parseFloat(event.target.value);
    if (valor < 0) {
        event.target.value = 0;
    }
};

costoPrimaInput.addEventListener('change', validarInput);
margenGananciaInput.addEventListener('change', validarInput);
ivaInput.addEventListener('change', validarInput);
unidadesInput.addEventListener('change', validarInput);