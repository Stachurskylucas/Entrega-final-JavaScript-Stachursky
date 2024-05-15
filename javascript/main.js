/*
  ****************************************************************************
  ******************PRE ENTREGA 3 LUCAS STACHURSKY CODERHOUSE*****************
  ****************************************************************************
*/

    //DECLARACION DE VARIABLES QUE TRAEN ELEMENTOS DEL DOM

//==============================================================================//

    //Carrito menu
    const abrirCarritoBtn = document.getElementById('abrir-carrito');
    const cerrarCarritoBtn = document.getElementById('cerrar-menu');
    const carritoVentana = document.getElementById('carrito-ventana');
    const body = document.querySelector("body");
    const headerResponsive = document.querySelector(".navbar-toggler")
    const cerrarHeaderResponsive = document.querySelector("#close-header")

    // Función para abrir el carrito desktop
    abrirCarritoBtn.addEventListener("click", () => {
        carritoVentana.classList.add("active");
        body.classList.add("block-scroll");
        carritoVentana.style.transform = "translateX(0)";
    });

    // Función para ocultar el icono de carrito cuando se abre el header responsive
    headerResponsive.addEventListener("click", () => {

        abrirCarritoBtn.classList.add("disabled");
        
    });

    // Funcion para desocultar el icono de carrito cuando se cierra el header responsive
    cerrarHeaderResponsive.addEventListener("click", () => {
        setTimeout(() => {
            abrirCarritoBtn.classList.remove("disabled");
        }, 180);
    });

    // Función para cerrar el carrito
    cerrarCarritoBtn.addEventListener("click", () => {
        carritoVentana.classList.remove("active");
        body.classList.remove("block-scroll");
    });

//==============================================================================//

    //Carrito body
    const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
    const contenedorCarrito = document.querySelector(".body-carrito");
    const carritoVaciar = document.querySelector("#carrito-acciones-vaciar");
    const carritoAccionesTotal = document.querySelector("#carrito-acciones");
    
    const contenedorTotal = document.querySelector("#total");

    const borrarCursos = document.querySelector(".item");
    
    let cardCursos = document.querySelector(".courses-nebula-academy__container");
    const containerPlanes = document.querySelector("#Planes-nebula")

//==============================================================================//

    //Inicializo la variable para el carrito
    
    document.addEventListener("DOMContentLoaded", () => {
        
        productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
        
        mostrarHTML();
        actualizarNumerito();
    });

    //Local storage

    //setItem
    const guardarStorage = () => {
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }    

//==============================================================================//

    //Funcion para cursos agregar al carrito
    cardCursos.addEventListener("click", e => {

        if (e.target.classList.contains("cursos-carrito")) {

            const producto = e.target.parentElement;

            const infoProducto = {
                cantidad: 1,
                id: producto.querySelector(".fancy").id,
                imagen: producto.querySelector("img").src,
                nombre: producto.querySelector("h5").textContent,
                precio: producto.querySelector(".precio p").textContent,
                descripcion: producto.querySelector("p").textContent
            }

            const verificarSiExisteElElemento = productosEnCarrito.some(producto => producto.id === infoProducto.id);

            if (verificarSiExisteElElemento) {
                const elemento = productosEnCarrito.map(producto => {
                    if (producto.id === infoProducto.id) {

                        producto.cantidad++;
                        return producto;

                    } 
                    else {
                        return producto;
                    }
                });

                productosEnCarrito = [...elemento];
            } 

            else {
                    
                productosEnCarrito = [...productosEnCarrito, infoProducto];
            }

            mostrarHTML();
            actualizarNumerito();
            guardarStorage();
            mostrarAlerta();

            
        };

    });

    //Funcion para planes agregar al carrito
    containerPlanes.addEventListener("click", e => {

        if (e.target.classList.contains("planes-carrito")) {

            const planes = e.target.parentElement;

            infoProducto = {
                cantidad: 1,
                id: planes.querySelector(".planes-carrito").id,
                imagen: planes.querySelector("img").src,
                nombre: planes.querySelector("h5").textContent,
                precio: planes.querySelector(".price").textContent,
                descripcion: planes.querySelector(".desc").textContent,
            }       

            const verificarSiExisteElElemento = productosEnCarrito.some(plan => plan.nombre === infoProducto.nombre);

            if (verificarSiExisteElElemento) {

                const elemento = productosEnCarrito.map(plan => {

                    if (plan.id === infoProducto.id) {
                        plan.cantidad++;
                        return plan;
                
                    }
                    else {
                        return plan;
                    }    

                });
                productosEnCarrito = [...elemento];

            }
            else {

                productosEnCarrito = [...productosEnCarrito, infoProducto];
            }
            
            mostrarHTML();
            actualizarNumerito();
            guardarStorage();
            mostrarAlerta();
        }
    });

    //Botones de borrar productos
    contenedorCarrito.addEventListener("click", e => {
        
        if (e.target.classList.contains("tachito")) {
            
            const tachito = e.target.parentElement.parentElement;
            const id = tachito.querySelector(".tachito").id;
            
            productosEnCarrito = productosEnCarrito.filter(producto => 
                producto.id !== id
            );

            guardarStorage();
            actualizarNumerito();
            mostrarHTML();
            alertaProductoEliminado();
        };
    });
    
//============================================================================//
    
    //Funcion para mostrar en carrito en HTML
    const mostrarHTML = () => {
        
        //Mostramos por defecto carrito vacio 
        if (productosEnCarrito.length <= 0 ) {
            
            contenedorCarrito.classList.add("disabled");
            contenedorCarritoVacio.classList.remove("disabled");
            carritoVaciar.classList.add("disabled");
            carritoAccionesTotal.classList.add("disabled");
            carritoComprado.classList.add("disabled");

        } 
        //Mostramos el carrito si tiene mas de un elemento
        else if (productosEnCarrito.length > 0) {

            contenedorCarrito.classList.remove("disabled");
            contenedorCarritoVacio.classList.add("disabled");
            carritoVaciar.classList.remove("disabled");
            carritoAccionesTotal.classList.remove("disabled");
            carritoComprado.classList.add("disabled");
        }

        //Limpiamos el HTML
        contenedorCarrito.innerHTML = "";

        let total = 0;
        let totalDeProductos = 0;

        productosEnCarrito.forEach(producto => { 

            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
            
                <button id="${producto.id}" class="tachito">
                    <span class="material-symbols-outlined tachito">
                        delete
                    </span> 
                </button>
                    
                <div class="img">
                    <img class="${producto.id}" src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                    
                <div class="producto-info">
                    
                    <h6>${producto.nombre}</h6>
                    
                    <div id="cantidad-obtenida" class="cantidad-obtenida">
                        <span id="cantidad-en-curso">Cantidad: ${producto.cantidad}</span>
                    </div>
                    
                    <div class="producto-footer"> 
                    
                        <div id="cantidad-seleccionar" class="cantidad-seleccionar">
                            <input id="btnRestar" class="menor" type="button" value="-">
                            <p class="contador-de-items" id="contador">${producto.cantidad}</p>
                            <input id="btnSumar" class="mayor" type="button" value="+">
                        </div>
                        
                        <div class="precio-producto">$${parseFloat(producto.precio) * parseInt(producto.cantidad)}</div>  
                            
                    </div>
                    
                </div>                 
            `;

            contenedorCarrito.append(div);

            total = total + (parseFloat(producto.precio) * parseInt(producto.cantidad));
                    
            totalDeProductos += producto.cantidad;
        });

        contenedorTotal.innerText = `${total}$`
        
    };

    let numerito = document.querySelector(".numerito");
            
    //Funcion para actualizar numerito 
    function actualizarNumerito () {
        let nuevoNumerito = productosEnCarrito.reduce((acc, cursos) => acc + cursos.cantidad, 0);
        numerito.innerText = nuevoNumerito;
    }
    
    //------------------------------------------------------------------//

    //Funcion para vaciar carrito 
    function vaciarCarrito () {
        productosEnCarrito.length = 0; 
        mostrarHTML();
        localStorage.clear();
        actualizarNumerito();
    }
    
    //Declaracion de funcion vaciar carrito
    carritoVaciar.addEventListener("click", vaciarCarrito);

    //------------------------------------------------------------------//
            
//==============================================================================//

    //BOTONES DE SUMAR Y RESTAR EN EL CARRITO
    const sumarProductoDentroDeCarrito = document.querySelectorAll("#btnSumar");
    const restarProductoDentroDeCarrito = document.querySelectorAll("#btnRestar");

    function sumarProducto(e) {
        const item = e.target.closest(".item");

        const id = item.querySelector(".tachito").id; 
        
        const producto = productosEnCarrito.find(producto => producto.id === id);

        producto.cantidad++;

        item.querySelector("#cantidad-en-curso").textContent = `Cantidad: ${producto.cantidad}`;

        const precioTotalProducto = parseFloat(producto.precio) * parseInt(producto.cantidad);
        item.querySelector(".precio-producto").textContent = `$${precioTotalProducto}`;

        mostrarHTML();
        guardarStorage();
        actualizarNumerito();
    }

    function restarProducto(e) {

        const item = e.target.closest(".item"); 

        const id = item.querySelector(".tachito").id; 

        const producto = productosEnCarrito.find(producto => producto.id === id); 

        if (producto.cantidad > 1) {
            producto.cantidad--;

            item.querySelector("#cantidad-en-curso").textContent = `Cantidad: ${producto.cantidad}`;

            const precioTotalProducto = parseFloat(producto.precio) * parseInt(producto.cantidad);
            item.querySelector(".precio-producto").textContent = `$${precioTotalProducto}`;

            mostrarHTML();
            guardarStorage();
            actualizarNumerito();
        }
        else {
            productosEnCarrito = productosEnCarrito.filter(item => item.id !== id);

            mostrarHTML();
            guardarStorage();
            actualizarNumerito();
            alertaProductoEliminado();
        }
        
    }

    contenedorCarrito.addEventListener("click", e => {

        if (e.target.matches("#btnSumar")) {
            
            sumarProducto(e);
        } 
        else if (e.target.matches("#btnRestar")) {

            restarProducto(e);
        }
    });

//==============================================================================//


    //BOTON FINALIZAR COMPRA
    const compraFinalizada = document.getElementById("carrito-acciones-comprar");
    const carritoComprado = document.getElementById("carrito-comprado");
    const volverATienda = document.getElementById("carrito-comprado-volver");

    compraFinalizada.addEventListener("click", () => {

        productosEnCarrito.length = 0;
  
        mostrarHTML();
        actualizarNumerito();
        guardarStorage();

        contenedorCarritoVacio.classList.add("disabled");
        carritoComprado.classList.remove("disabled");
    });

    volverATienda.addEventListener("click", () => {

        //Cerrar menu 
        carritoVentana.style.transform = "translateX(110%)";
        body.classList.remove("block-scroll");

        //Limpiar carrito
        setTimeout(() => {  
            carritoComprado.classList.add("disabled");
            contenedorCarritoVacio.classList.remove("disabled");
        }, 500); 
        
    })

//==============================================================================//
    
    //FORMULARIO DEL FOOTER
    const formulario = document.getElementById("form");
    const nombreForm = document.getElementById("nombre");
    const apellidoForm = document.getElementById("apellido");
    const emailForm = document.getElementById("email");
    const parrafo = document.getElementById("advertencias")
    const empresaForm = document.getElementById("empresa");
    const textArea = document.getElementById("textarea");
    
    //OCULTAMOS LAS ADVERTENCIAS POR DEFECTO
    const parrafoContainer = document.querySelector(".advertencias-container");

    parrafoContainer.style.display = "none";

    formulario.addEventListener("submit", e => {
        e.preventDefault();

        let advertencias = "";
        let verificarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let entrar = false;

        if (nombreForm.value.length <= 2) {
            advertencias += "<p class='text'>⚠ El nombre es demasiado corto<p>";
            entrar = true;
        }
        if (apellidoForm.value.length <= 2) {
            advertencias += "<p class='text'>⚠ El apellido es demasiado corto<p>";
            entrar = true;
        }
        if (!verificarEmail.test(emailForm.value)) {
            advertencias += "<p class='text'>⚠ El email no es valido<p>";
            entrar = true;
        }
        if (empresaForm.value.length <= 2) {
            advertencias += "<p class='text'>⚠ El nombre de la empresa es obligatorio<p>";
            entrar = true;
        }
        if (textArea.value.length === "" || textArea.value.length < 30) {
            advertencias += "<p class='text'>⚠ La descripción del proyecto es obligatoria y debe tener al menos 30 caracteres<p>";
            entrar = true;
        }

        if (entrar) {
            
            parrafoContainer.style.display = "block";
            parrafo.innerHTML = advertencias;

        } else {
            Swal.fire({
                title: "Formulario enviado!",
                text: "Te contactaremos a traves de tu mail en 48hrs",
                icon: "success"
            });
            formulario.reset();
            parrafoContainer.style.display = "none";
        }
    });

//==============================================================================//

    //OTRAS FUNCIONALIDADES ESTETICAS DE LA PAGINA
    
    //Pantalla de carga

    window.addEventListener("load", () => {
        setTimeout(() => {
            
            document.getElementById("onload").classList.add("disabled");
            body.classList.remove("hidden");
            
        }, 1000); 
    })

    //Pop up sweetalert 
    
    function mostrarAlerta() {

        Toastify({
            text: "Producto agregado",
            duration: 1000,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: false, 
            style: {
                background: "rgb(2,0,36)",
                background: "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(39,39,112,1) 42%, rgba(0,212,255,1) 100%)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: "1rem"
            },
            offset: {
                x: '1.5rem', 
                y: '5rem' 
            },
            onClick: function(){}
        }).showToast();
    }

    function alertaProductoEliminado () {

        Toastify({
            text: "Producto eliminado",
            duration: 1000,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: false, 
            style: {
                background: "rgb(208,29,29)",
                background: "linear-gradient(326deg, rgba(208,29,29,1) 0%, rgba(164,0,0,1) 47%, rgba(65,0,0,1) 100%)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: "1rem"
            },
            offset: {
                x: '1.5rem', 
                y: "8rem", 
            },
            onClick: function(){}
        }).showToast();
    } 

    // Scroll Header
    
    window.addEventListener("scroll", () => {
        let header = document.querySelector("header"); ;
        header.classList.toggle("header-desktop__scroll", window.scrollY>0);
    });
    
    // Fin scroll header

    
