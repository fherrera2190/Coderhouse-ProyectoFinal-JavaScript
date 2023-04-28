// Declarcion de let y const
let productos = [
    {
        id: 1,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Clásica",
        descripcion: "Hamburguesa clásica con carne de res, lechuga, tomate y queso.",
        imagen: "../recursos/productos/ham1.jpg",
        precio: 1000
    },
    {
        id: 2,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Doble Carne",
        descripcion: "Hamburguesa doble con carne de res, lechuga, tomate y queso.",
        imagen: "../recursos/productos/ham2.jpg",
        precio: 1000
    },
    {
        id: 3,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Falafel",
        descripcion: "Hamburguesa vegetariana con falafel, lechuga, tomate, cebolla y hummus.",
        imagen: "../recursos/productos/ham3.jpg",
        precio: 1000
    },
    {
        id: 4,
        categoria: "hamburguesa",
        nombre: "Hamburguesa BBQ bacon",
        descripcion: "Hamburguesa con carne de res, tocino, queso cheddar y cebolla.",
        imagen: "../recursos/productos/ham4.jpg",
        preci: 1000
    },
    {
        id: 5,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Portobello",
        descripcion: "Hamburguesa vegetariana con hongos Portobello y cebolla caramelizada.",
        imagen: "../recursos/productos/ham5.jpg",
        precio: 1000
    },
    {
        id: 6,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Queso Azul",
        descripcion: "Hamburguesa con carne de res, queso azul y cebolla salteada.",
        imagen: "../recursos/productos/ham6.jpg",
        precio: 1000
    },
    {
        id: 7,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Hawaiiana",
        descripcion: "Hamburguesa con carne de res, queso, piña y jamón.",
        imagen: "../recursos/productos/ham7.jpg",
        precio: 1000
    },
    {
        id: 8,
        categoria: "hamburguesa",
        nombre: "Hamburguesa Portobello con queso",
        descripcion: "Hamburguesa vegetariana con hongos Portobello, cebolla caramelizada, queso de cabra, rúcula y pesto.",
        imagen: "../recursos/productos/ham8.jpg",
        precio: 1000
    },
    {
        id: 9,
        categoria: "hamburguesa",
        nombre: "Hamburguesa de Pollo",
        descripcion: "Hamburguesa de pollo con lechuga, tomate y queso.",
        imagen: "../recursos/productos/ham9.jpg",
        precio: 1000
    },
    {
        id: 10,
        categoria: "hamburguesa",
        nombre: "Hamburguesa de Pescado",
        descripcion: "Hamburguesa de pescado con lechuga, tomate, cebolla y salsa tártara.",
        imagen: "../recursos/productos/ham10.jpg",
        precio: 1000
    },
    {
        id: 11,
        categoria: "lomo",
        nombre: "Lomo Clásico",
        descripcion: "Sándwich de lomo de res con lechuga, tomate y mayonesa.",
        imagen: "../recursos/productos/lomo1.jpg",
        precio: 1000
    },
    {
        id: 12,
        categoria: "lomo",
        nombre: "Lomo Completo",
        descripcion: "Sándwich de lomo de res con lechuga, tomate, huevo frito, jamón y queso.",
        imagen: "../recursos/productos/lomo2.jpg",
        precio: 1000
    },
    {
        id: 13,
        categoria: "milanesa",
        nombre: "Sandwich Milanesa Napolitana",
        descripcion: "Sándwich de milanesa de carne con salsa de tomate, queso y jamón.",
        imagen: "../recursos/productos/mil1.jpg",
        precio: 1000
    },
    {
        id: 14,
        categoria: "mila",
        nombre: "Sandwich de Milanesa Vegetariano",
        descripcion: "Sándwich de milanesa vegetariana con berenjena, tomate y queso.",
        imagen: "../recursos/productos/mil2.jpg",
        precio: 1000
    },
    {
        id: 15,
        categoria: "lomo",
        nombre: "Lomo BBQ",
        descripcion: "Sándwich de lomo de res con salsa BBQ, cebolla y queso.",
        imagen: "../recursos/productos/lomo3.jpg",
        precio: 1000
    },
    {
        id: 16,
        categoria: "milanesa",
        nombre: "Sanwich de Milanesa Caprese",
        descripcion: "Sándwich de milanesa de pollo con tomate, mozzarella y albahaca.",
        imagen: "../recursos/productos/mil3.jpg",
        precio: 1000
    },
    {
        id: 17,
        categoria: "bebidas",
        nombre: "Coca-Cola",
        descripcion: "Bebida carbonatada de cola con sabor dulce y refrescante.",
        imagen: "../recursos/productos/beb1.jpg",
        precio: 1000
    },
    {
        id: 18,
        categoria: "bebidas",
        nombre: "Pepsi",
        descripcion: "Bebida carbonatada de cola con sabor dulce y refrescante.",
        imagen: "../recursos/productos/beb2.jpg",
        precio: 1000
    },
    {
        id: 19,
        categoria: "bebidas",
        nombre: "Sprite",
        descripcion: "Bebida carbonatada con sabor a limón y sin cafeína.",
        imagen: "../recursos/productos/beb3.jpg",
        precio: 1000
    },
    {
        id: 20,
        categoria: "bebidas",
        nombre: "Cerveza Quilmes",
        descripcion: "Cerveza rubia argentina con sabor suave y refrescante.",
        imagen: "../recursos/productos/beb4.jpg",
        precio: 1000
    },
    {
        id: 21,
        categoria: "bebidas",
        nombre: "Cerveza Corona",
        descripcion: "Cerveza mexicana con sabor ligero y refrescante.",
        imagen: "../recursos/productos/beb5.jpg",
        precio: 1000
    },
    {
        id: 22,
        categoria: "bebidas",
        nombre: "Agua Mineral",
        descripcion: "Agua mineral natural sin gas.",
        imagen: "../recursos/productos/beb6.jpg",
        precio: 1000
    }
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let productosEnCarrito = [];

///cuando recien se carga el documento
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos(productos);
    const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
    if (productosEnCarritoLS != null) {
        productosEnCarrito = productosEnCarritoLS;
    }
    mostrarItemsCarrito();
});

function crearTarjeta(producto) {
    const div = document.createElement("div");
    div.classList.add("col-12", "col-sm-12", "col-lg-4", "col-xl-4", "col-xxl-4");
    div.innerHTML = `
        <div class="producto m-3 card text-center bg-card p-2">
          <img
            src="${producto.imagen}"
            class="card-img-top"
            alt="${producto.nombre}"
          />
          <div class="card-body">
            <h3 class="card-title">$${producto.precio}</h3>
            <h4>${producto.nombre}</h4> 
            <p class="card-text">
            ${producto.descripcion}
            </p>
            <a id="${producto.id}" class="btn btn-primary producto-agregar">Agregar Carrito</a>
          </div>            
        </div>
    `;
    return div
}

function crearFila() {
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = '';
    return div
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    let contador = 0;
    let row = crearFila();
    productosElegidos.forEach((producto, indice) => {
        if (contador < 3) {
            row.append(crearTarjeta(producto))
            contador++;
            if (indice === productosElegidos.length - 1) {
                contenedorProductos.append(row);
            }
        } else {
            contenedorProductos.append(row);
            row = crearFila();
            row.append(crearTarjeta(producto));
            contador = 1;
        }
    })
    actualizarBotonesAgregar();
}
// SECCION PEDIDOS
function cargarProductoPedido(producto) {
    const div = document.createElement('div');
    div.classList.add("d-flex", "align-items-center", "justify-content-around", "m-2");
    div.innerHTML = `
            <img src="${producto.imagen}" class="img-pedido" alt="" />
            <p class="m-0 fs-2">${producto.nombre}</p>
            <div class="border border-1 border-dark bg-white fs-5 m-0 pedido-cantidad text-center">${producto.cantidad}</div>
            <div class="border border-1 border-dark bg-white fs-5 m-0 pedido-cantidad text-center">${producto.precio}</div>
            <div class="botones-pedido d-flex flex-column">
            <a class="text-decoration-none" href="#">Eliminar</a>
            </div>
    `
    return div;
}

function mostrarPedido(productosEnCarrito) {
    const div = document.createElement('div')
    div.classList.add('pedido');
    let precioTotal = 0;
    productosEnCarrito.forEach(producto => {
        div.append(cargarProductoPedido(producto));
        precioTotal += producto.cantidad * producto.precio;
    })
    div.innerHTML += `
    <hr>
    <div class='d-flex align-items-center justify-content-end'>
        <p class="m-0">Total con Envio</p>
        <div class="border border-1 border-dark bg-white fs-4 m-4 pedido-cantidad text-center">${precioTotal}</div>
    </div>
    `;
    contenedorProductos.append(div);
}

// LINKS ASIDE
const comidayBebidas = document.getElementById('todos');
comidayBebidas.addEventListener('click', (e) => {
    tituloPrincipal.innerHTML = "Comidas y Bebidas";
    contenedorProductos.innerHTML = "";
    cargarProductos(productos);
});

const botonSandwich = document.getElementById('hamburguesa');
botonSandwich.addEventListener('click', (e) => {
    contenedorProductos.innerHTML = "";
    const cargarProductosSanwdich = productos.filter(producto => producto.categoria === e.currentTarget.id);
    tituloPrincipal.innerHTML = e.currentTarget.id;
    cargarProductos(cargarProductosSanwdich);
});

const botonEmpanadas = document.getElementById('lomo');
botonEmpanadas.addEventListener('click', (e) => {
    const cargarProductosEmpanads = productos.filter(producto => producto.categoria === e.currentTarget.id);
    tituloPrincipal.innerHTML = e.currentTarget.id;
    cargarProductos(cargarProductosEmpanads);
});

const botonMilansesa = document.getElementById('milanesa');
botonMilansesa.addEventListener('click', (e) => {
    const cargarProductosMilanesa = productos.filter(producto => producto.categoria === e.currentTarget.id);
    tituloPrincipal.innerHTML = e.currentTarget.id;
    cargarProductos(cargarProductosMilanesa);
});

const botonBebidas = document.getElementById('bebidas');
botonBebidas.addEventListener('click', (e) => {
    const cargarProductosBebidas = productos.filter(producto => producto.categoria === e.currentTarget.id);
    tituloPrincipal.innerHTML = e.currentTarget.id;
    cargarProductos(cargarProductosBebidas);
});

const botonPedido = document.getElementById('pedido');
botonPedido.addEventListener('click', (e) => {
    tituloPrincipal.innerHTML = "Tu Pedido";
    contenedorProductos.innerHTML = "";
    mostrarPedido(productosEnCarrito);
});

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}