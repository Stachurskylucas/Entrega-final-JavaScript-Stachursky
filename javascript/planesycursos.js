
// EN ESTE DOCUMENTO SE VAN A CREAR LOS OBJETOS LITERALES DE LOS CURSOS Y PLANES Y SUS RESPECTIVAS FUNCIONES PARA MOSTRARLOS EN EL HTML PARA AHORRAR CODIGO EN EL OTRO DOCUMENTO.


//===================================================================================//

    //Creamos el array de los planes
    const planes = [
    
        //PLan premium
        {
            id: "card-1",
            nombre: "Plan Premium",
            imagen: "./img/cards/plan-premium.png",
            precio: 1000,
            descripcion: "El plan ideal para una web personal.",
            mantenimiento: 100, 
            caracteristicas: {
                    duracion: "1 mes",
                    rendimiento: "avanzado",
                    dominio: "estandar",
                    webs: "interactivas",
                    servicio: "lento",
                    gb: "ilimitado", 
                    comisiones: "0%",
                    disenio: "UX-UI",
            }
        },
        
        //Plan business 
        {
            id: "card-2",
            nombre: "Plan Business",
            imagen: "./img/cards/plan-business.png",
            precio: 2000, 
            descripcion: "Aumentá tu calidad con este plan perfecto para pequeñas empresas o emprendedores.",
            mantenimiento: 300,
            caracteristicas: {
                    duracion: "1 mes",
                    rendimiento: "Veloz",
                    dominio: ".com",
                    webs: "interactivas",
                    almacenamiento: "100GB",
                    servicio: "Rapido",
                    gb: "100GB",
                    comisiones: "0%",
                    disenio: "UX-UI",
                    scanner: "malware",
                    asistencia: "prioritaria",
                    revision: "semanal",
                    prioridad: "SEO",
            }
        },
        
        //Plan Deluxe
        {
            id: "card-3",
            nombre: "Plan Deluxe",
            imagen: "./img/cards/plan-deluxe.png",
            precio: 3500, 
            descripcion: "Goza de un rendimiento optimizado para tu negocio con este plan definitivo.",
            mantenimiento: 700,
            caracteristicas: {
                    duracion: "1 mes",
                    rendimiento: "Supervelóz",
                    dominio: ".com",
                    webs: "interactivas y 3D",
                    servicio: "Lúz",
                    gb: "Ilimitado",
                    comisiones: "0%",
                    disenio: "UX-UI",
                    scanner: "ciberdelincuentes",
                    asistencia: "instantanea",
                    revision: "diaria",
                    prioridad: "SEO y en redes",
            }
        },
    ];

//===================================================================================//
    
    //Creamos una funcion para cargar los cursos y escribir el html dependiendo el filtro de cada curso, por eso el parametro.
    function cargarCursos(cursos) {
        let cardCursos = document.querySelector(".courses-nebula-academy__container");

        //Esto es importante para que cada vez que carguemos los cursos se limpie el html para que no se repitan los mismos.
        cardCursos.innerHTML = "";
    
        cursos.forEach(curso => {
            
            const card = document.createElement("div");
            card.classList.add("courses-nebula-academy__card");
            card.innerHTML = `

                <section class="courses-nebula-academy__section">
                    <img loading="lazy" class="${curso.id}" src="${curso.imagen}" alt="${curso.id}">
                    <h5>${curso.nombre}</h5>
                </section>

                <div class="precio">
                    <p>${curso.precio}$</p>
                </div>

                <button type="button" class="fancy cursos-carrito" id="${curso.id}">Añadir al carrito
                    <span class="top-key"></span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>

            `;

            cardCursos.appendChild(card);
        });
    };

    //Creamos una funcion para cargar los planes y escribir el html desde JS
    function cargarPlanes() {

        planes.forEach(plan => {
            const card = document.createElement("div");
            card.classList.add("card-servicios");
            
            if (plan.id === "card-1") {
                card.classList.add("card-1")
                card.innerHTML = `

                    <div class="header">
                        <h5 class="title">${plan.nombre}</h5>
                        <p class="desc">${plan.descripcion}</p>
                        <span class="price">${plan.precio}$</span>
                    </div>

                    <img src="${plan.imagen}" alt="${plan.id}" class="imagen-plan">

                    <button type="button" id="${plan.id}" class="action planes-carrito">Añadir al carrito</button>

                    <span class="mes">${plan.mantenimiento}$/mes mantenimiento.</span>
        
                    <hr>
        
                <ul class="lists">
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                        </svg>
                        <span>Rendimiento <strong>${plan.caracteristicas.rendimiento}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                        </svg>
                        <span>Dominio<strong> ${plan.caracteristicas.dominio}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                        </svg>
                        <span>Webs <strong> ${plan.caracteristicas.webs}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                        </svg>
                        <span>Servicio<strong> ${plan.caracteristicas.servicio}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <span>GB<strong> ${plan.caracteristicas.gb}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <span>Comisiones<strong> ${plan.caracteristicas.comisiones}</strong></span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <span>Diseño<strong> ${plan.caracteristicas.disenio}</strong></span>
                    </li>
                </ul>
                `
                containerPlanes.append(card);
            }
            else if (plan.id === "card-2") {
                card.classList.add("card-2");
                card.innerHTML = `
        
                <div class="container-mas-vendido">
                    <span class="mas-vendido">
                        <p>Más vendido</p>
                    </span>
                </div>

                <div class="header">
                    <h5 class="title">${plan.nombre}</h5>
                    <p class="desc">${plan.descripcion}</p>
                    <span class="price">${plan.precio}$</span>
                </div>

                <img src="${plan.imagen}" alt="${plan.id}" class="imagen-plan">

                <button type="button" id="${plan.id}" class="action planes-carrito">Añadir al carrito</button>

                <span class="mes">${plan.mantenimiento}$/mes mantenimiento.</span>

                <hr>

                <ul class="lists">
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Rendimiento <strong>${plan.caracteristicas.rendimiento}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Dominio<strong> ${plan.caracteristicas.dominio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Webs <strong> ${plan.caracteristicas.webs}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Servicio<strong> ${plan.caracteristicas.servicio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Almacenamiento de <strong>${plan.caracteristicas.almacenamiento}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Comisiones<strong> ${plan.caracteristicas.comisiones}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Diseño<strong> ${plan.caracteristicas.disenio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Scanner de <strong>malware</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <span>Asistencia <strong>${plan.caracteristicas.asistencia}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <span>Revision<strong> ${plan.caracteristicas.revision}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <span>Prioridad en<strong> ${plan.caracteristicas.prioridad}</strong></span>
                    </li>
                </ul>

                `

                containerPlanes.appendChild(card);
            }
            else if (plan.id === "card-3") {
                card.classList.add("card-3");
                card.innerHTML = `
                
                <div class="header">
                    <h5 class="title">${plan.nombre}</h5>
                    <p class="desc">${plan.descripcion}</p>
                    <span class="price">${plan.precio}$</span>
                </div>

                <img src="${plan.imagen}" alt="${plan.id}" class="imagen-plan">

                <button type="button" id="${plan.id}" class="action planes-carrito">Añadir al carrito</button>

                <span class="mes">${plan.mantenimiento}$/mes mantenimiento.</span>

                <hr>

                <ul class="lists">
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Rendimiento <strong>${plan.caracteristicas.rendimiento}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Dominio<strong> ${plan.caracteristicas.dominio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Webs <strong> ${plan.caracteristicas.webs}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Servicio<strong> ${plan.caracteristicas.servicio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Almacenamiento <strong>${plan.caracteristicas.gb}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Comisiones<strong> ${plan.caracteristicas.comisiones}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Diseño<strong> ${plan.caracteristicas.disenio}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Scanner de <strong>${plan.caracteristicas.scanner}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Asistencia <strong>${plan.caracteristicas.asistencia}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Revision<strong> ${plan.caracteristicas.revision}</strong></span>
                    </li>
                    <li class="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                    <span>Prioridad en<strong> ${plan.caracteristicas.prioridad}</strong></span>
                    </li>
                </ul>      
                `

                containerPlanes.appendChild(card);
            }
            
        });
    };

    //Llamamos las funciones para cargar los planes en el html
    cargarPlanes();

//===================================================================================//
