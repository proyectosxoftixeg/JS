// Datos de productos (simulados)
const productos = [
    {
        id: 1,
        nombre: "Raqueta Pro Master",
        precio: 2499.99,
        categoria: "raquetas",
        imagen: "https://via.placeholder.com/300",
        descripcion: "Raqueta profesional de alta calidad"
    },
    {
        id: 2,
        nombre: "Shorts Deportivos",
        precio: 599.99,
        categoria: "ropa",
        imagen: "https://via.placeholder.com/300",
        descripcion: "Shorts cómodos y ligeros"
    },
    {
        id: 3,
        nombre: "Pelotas de Tenis (Pack 3)",
        precio: 199.99,
        categoria: "accesorios",
        imagen: "https://via.placeholder.com/300",
        descripcion: "Pack de 3 pelotas de tenis profesionales"
    },
    // Añade más productos aquí
];

// Estado del carrito
let carrito = [];

// Elementos del DOM
const productosGrid = document.getElementById('productsGrid');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');

// Función para mostrar productos
function mostrarProductos(categoria = 'todos') {
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);

    productosGrid.innerHTML = productosFiltrados.map(producto => `
        <div class="product-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="price">$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="add-to-cart">
                Agregar al Carrito
            </button>
        </div>
    `).join('');
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    // Actualizar contador
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;

    // Actualizar items en el modal
    cartItemsContainer.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px;">
            <div class="cart-item-details">
                <h4>${item.nombre}</h4>
                <p>$${item.precio.toFixed(2)} x ${item.cantidad}</p>
            </div>
            <button onclick="eliminarDelCarrito(${item.id})" class="remove-item">&times;</button>
        </div>
    `).join('');

    // Actualizar total
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para eliminar del carrito
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index > -1) {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
    }
}

// Event Listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase activa de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase activa al botón clickeado
        button.classList.add('active');
        // Filtrar productos
        mostrarProductos(button.dataset.category);
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Mensaje enviado correctamente');
    contactForm.reset();
});

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarCarrito();
});