// -------------------------------------------------> Inicio Animaciones SVG <-------------------------------------------------
lottie.loadAnimation({
    container: document.getElementById('SVGDesarrollo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGDesarrollo.json'
});

lottie.loadAnimation({
    container: document.getElementById('SVGElectronica'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGElectronica.json'
});

lottie.loadAnimation({
    container: document.getElementById('SVGBaseDatos'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGBaseDatos.json'
});

lottie.loadAnimation({
    container: document.getElementById('SVGMecatronica'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGMecatronica.json'
});

lottie.loadAnimation({
    container: document.getElementById('SVGMovil'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGMovil.json'
});

lottie.loadAnimation({
    container: document.getElementById('SVGWeb'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'icons/SVGWeb.json'
});

// -------------------------------------------------> Fin Inicio Animaciones SVG <-------------------------------------------------



// -------------------------------------------------> Inicio Animaciones GSAP <-------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

/* ====================================================================================================================================
   📌 Elementos del DOM
==================================================================================================================================== */
const NavFirma = document.querySelector('.ContainerFirma');
const NavSecciones = document.querySelectorAll('nav li');

const Titulo = document.querySelector('.ContainerBienvenida .Titulo h1');
const Nombre = document.querySelector('.ContainerBienvenida .Titulo #Nombre');
const Descripcion = document.querySelector('.ContainerBienvenida .Titulo #Descripcion');

const SVGDesarrollo = document.querySelector("#SVGDesarrollo");
const SVGElectronica = document.querySelector("#SVGElectronica");
const ImgBienvenida = document.querySelector(".ContainerBienvenida img");

/* Título principal de las cartas con SplitType por caracteres */
var TituloStack = document.querySelector('.TituloCartas');
var TituloCartas = document.querySelectorAll('.ContenedorCartas .Carta .Carta-content h1');
const cartas = document.querySelectorAll(".ContenedorCartas .Carta");


/* ====================================================================================================================================
                                            🎯 Animaciones de la navegación
==================================================================================================================================== */
gsap.from(NavFirma, {
    opacity: 0,
    y: -100,
    ease: "bounce.out",
    duration: 2
});

gsap.from(NavSecciones, {
    y: -100,
    ease: "power3.out",
    stagger: 0.25
});

document.querySelectorAll('.Secciones ul li').forEach(item => {
    const icon = item.querySelector('lord-icon');

    item.addEventListener('mouseenter', () => {
        icon.setAttribute('trigger', 'loop');
    });

    item.addEventListener('mouseleave', () => {
        icon.setAttribute('trigger', 'morph');
    });
});

/* ====================================================================================================================================
                                            🙋 Animaciones de bienvenida
==================================================================================================================================== */
gsap.from(".ContainerBienvenida", {
    opacity: 0,
    y: -150,
    duration: 1.5,
    ease: "power1.out"
});

/* Título principal con SplitType por caracteres */
const TituloCaracteres = new SplitType(Titulo, { types: 'words, chars' });
TituloCaracteres.chars.forEach((char, index) => {
    const charTL = gsap.timeline();

    charTL.from(char, {
        y: gsap.utils.random(-250, 250),
        x: gsap.utils.random(-500, 500),
        rotate: gsap.utils.random(-360, 360),
        scale: gsap.utils.random(0, 5),
        opacity: 0,
        duration: 0.5,
        delay: index * 0.05,
        ease: "back.out"
    });

    charTL.from(char, {
        color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
        duration: 1
    });

    // Hover interactivo por carácter
    char.addEventListener("mouseenter", () => {
        gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-200, 200),
                x: gsap.utils.random(-200, 200),
                rotate: gsap.utils.random(-360, 360),
                scale: gsap.utils.random(0, 2),
                ease: "back.out"
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                duration: 0.5,
                ease: "back.out"
            });
    });
});

/* Nombre con animación por carácter */
const NombreChars = new SplitType(Nombre, { types: 'words, chars' });
gsap.from(NombreChars.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    ease: "back.out",
    duration: 0.6
});

/* Descripción con animación por palabra */
const DescripcionWords = new SplitType(Descripcion, { types: 'words' });
gsap.from(DescripcionWords.words, {
    opacity: 0,
    y: 1000,
    duration: 1,
    ease: "back.out"
});

/* Animaciones SVG */
gsap.fromTo(SVGDesarrollo, {
    x: -1500
}, {
    x: 0,
    duration: 2,
    ease: "power2.out"
});

gsap.fromTo(SVGElectronica, {
    x: 1500
}, {
    x: 0,
    duration: 2,
    ease: "power2.out"
});

/* Animaciones scroll y loop */
gsap.to(ImgBienvenida, {
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
});

gsap.to(ImgBienvenida, {
    scrollTrigger: {
        trigger: ".ContenedorCartas",
        toggleActions: "play reverse play reverse"
    },
    x: -1200,
    rotate: 360,
    duration: 1,
    ease: "power2.out"
});

gsap.to(".Titulo", {
    scrollTrigger: {
        trigger: ".ContenedorCartas",
        toggleActions: "play reverse play reverse"
    },
    x: 350,
    duration: 1,
    ease: "power2.out"
});

/* ====================================================================================================================================
                                            🙋 Animaciones de las cartas
==================================================================================================================================== */
const TituloStackCaracteres = new SplitType(TituloStack, { types: 'words, chars' });
const TituloCartasCaracteres = new SplitType(TituloCartas, { types: 'words, chars' });

cartas.forEach((carta) => {
    let anim;

    carta.addEventListener("mouseenter", () => {
        anim = gsap.to(carta, {
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
            scale: 1.05,
            duration: 0.6,
            ease: "sine.inOut"
        });
    });

    carta.addEventListener("mouseleave", () => {
        if (anim) anim.kill();
        gsap.to(carta, {
            boxShadow: "none",
            scale: 1,
            duration: 0.4,
            ease: "sine.inOut"
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("Hamburguesa");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
