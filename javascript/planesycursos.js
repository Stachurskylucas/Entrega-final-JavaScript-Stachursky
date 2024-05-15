
// EN ESTE DOCUMENTO SE VAN A CREAR LOS OBJETOS LITERALES DE LOS CURSOS Y PLANES Y SUS RESPECTIVAS FUNCIONES PARA MOSTRARLOS EN EL HTML PARA AHORRAR CODIGO EN EL OTRO DOCUMENTO.


//===================================================================================//

    //Creamos el array de objetos de los cursos
    const cursos = [
        {
            id: "desarrollo-web",
            nombre: "Curso de Desarollo web",
            imagen: "./img/cards/htmlycss.png",
            descripcion: "Calificado como el mejor curso de desarrollo web del 2023 por la Universidad de California, aprenderas a usar HTML, CSS, SASS, frameworks, GIT y más. El curso consta de unas 15 semanas de aprendizaje.",
            precio: 120
        },
        {
            id: "javascript",
            nombre: "Curso de JavaScript",
            imagen: "./img/cards/javascript-logo-escudo.png",
            descripcion: "El curso de JavaScript de la Universidad de Stanford, destacado en 2023, consta de 20 semanas. Explora desde los fundamentos hasta aplicaciones avanzadas con Vue.js, Node.js y GIT.",
            precio: 140
        },
        {
            id: "ciberseguridad",
            nombre: "Curso de Ciberseguridad",
            imagen: "./img/cards/cibersecurity.png",
            descripcion: "Reconocido como el mejor curso de ciberseguridad de la Universidad de Harvard en 2023, nuestro programa intensivo abarca 25 semanas. Explorarás seguridad de redes, análisis de vulnerabilidades y respuesta a incidentes.",
            precio: 120
        },
        {
            id: "ux-ui",
            nombre: "Curso de Diseño UX-UI",
            imagen: "./img/cards/ux-ui-logo.svg",
            descripcion: "Nuestro curso de UX/UI ofrece una formación completa de 20 semanas. Aprenderás a diseñar experiencias de usuario atractivas y funcionales. Con proyectos desafiantes y prácticas actualizadas.",
            precio: 100
        },
        {
            id: "python",
            nombre: "Curso de Python",
            imagen: "./img/cards/python-5.svg",
            descripcion: "El curso de Python, ofrece un programa completo de 12 semanas. Te sumergirás en el lenguaje de programación más versátil y demandado del momento. Estarás listo para dominar Python en cualquier entorno.",
            precio: 140
        },
        {
            id: "backend",
            nombre: "Curso de Desarrollo Back-end",
            imagen: "./img/cards/logos-backend.png",
            descripcion: "Nuestro curso de desarrollo backend dura 16 semanas. Desde servidores hasta bases de datos, aprenderás a construir aplicaciones sólidas. Con proyectos prácticos, destacarás en el desarrollo backend.",
            precio: 160
        }
    ];
    
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

    //Creamos una funcion para cargar los cursos y planes y escribir el html desde JS
    function cargarCursos() {

        cursos.forEach(curso => {
        const card = document.createElement("div");
        card.classList.add("courses-nebula-academy__card");
        
            if (curso.nombre === "Curso de Python") {
                card.innerHTML = `
                <section class="courses-nebula-academy__section">
                    <img src="${curso.imagen}" alt="${curso.id}" class="${curso.id}">
                    <h5>${curso.nombre}</h5>
                </section>
                <div class="p-container">
                    <p>${curso.descripcion}</p>
                </div>
                <div class="precio">
                    <p>${curso.precio}$</p>
                </div>

                <button type="button" class="fancy cursos-carrito" id="${curso.id}">Añadir al carrito
                    <span class="top-key"></span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>
                `;
            } 

            else if (curso.nombre === "Curso de Desarrollo Back-end") {
                card.innerHTML = `
                <section class="courses-nebula-academy__section backend">
                    <img src="${curso.imagen}" alt="" class="${curso.id}">
                    <h5>${curso.nombre}</h5>
                </section>
                <div class="p-container">
                    <p>${curso.descripcion}</p>
                </div>
                <div class="precio">
                    <p>${curso.precio}$</p>
                </div>

                <button type="button" class="fancy cursos-carrito" id="${curso.id}">Añadir al carrito
                    <span class="top-key"></span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>
                `;
            } 

            else {
                card.innerHTML = `
                <section class="courses-nebula-academy__section">
                    <img src="${curso.imagen}" alt="${curso.id}">
                    <h5>${curso.nombre}</h5>
                </section>
                <div class="p-container">
                    <p>${curso.descripcion}</p>
                </div>
                <div class="precio">
                    <p>${curso.precio}$</p>
                </div>

                <button type="button" class="fancy cursos-carrito" id="${curso.id}">Añadir al carrito
                    <span class="top-key"></span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>
                
                `;
            }

            cardCursos.appendChild(card);
        });

    }

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

    //Llamamos las funciones para cargar los cursos y plaenes en el html
    cargarCursos();
    cargarPlanes();

//===================================================================================//
