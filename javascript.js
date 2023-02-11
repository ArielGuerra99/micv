const switch1 = document.getElementById('switch');

switch1.addEventListener('change', () => {
    document.body.classList.toggle('oscuro');
});

const btnCerrar = document.querySelector('.boton-x');
const textoP= document.querySelector('.texto-parrafo');
const ventanA = document.querySelector('.ventana');
const sombrA = document.querySelector('.sombra');
const contenedor2 = document.querySelector('.contenedor2');
const btnAbrir = document.querySelector('.boton-s');
const areaXd = document.querySelector('.areaxd')

areaXd.addEventListener("click", () => {
    textoP.classList.toggle('hidden');
    ventanA.classList.toggle('achicar');
    sombrA.classList.toggle('achicar');
    contenedor2.classList.toggle('achicarCont');
    btnCerrar.classList.toggle('hidden');
    btnAbrir.classList.add('aparecer');
});


btnAbrir.addEventListener("click", () => {
    textoP.classList.toggle('hidden');
    ventanA.classList.toggle('achicar');
    sombrA.classList.toggle('achicar');
    contenedor2.classList.toggle('achicarCont');
    btnCerrar.classList.toggle('hidden');
    btnAbrir.classList.toggle('aparecer');
});

const carrousel = document.querySelector ('.carrousel')
const punto = document.querySelectorAll ('.punto')

punto.forEach( (cadaPunto , i) => {
    punto[i].addEventListener('click',()=>{

        let posicion = i
        let operacion = posicion * -20

        carrousel.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
});


const carrouseL = document.querySelector('.carrousel');
const sombrA2 = document.querySelector('.sombra2');
const carrouselcontenedor = document.querySelector('.carrousel-contenedor');
const contenedor4 = document.querySelector('.contenedor4');
const btnCerrar2 = document.querySelector('.boton-xx');
const btnAbrir2 = document.querySelector('.boton-ss');
const areaXdd = document.querySelector('.areaxdd');
const jvm = document.getElementById ('jvm');
const ak = document.getElementById ('ak');
const caju = document.getElementById ('caju');
const cose = document.getElementById ('cose');
const rucci = document.getElementById ('rucci');
const puntos = document.querySelector ('.puntos');

areaXdd.addEventListener("click", () => {
    carrouseL.classList.toggle('achicarCont');
    carrouselcontenedor.classList.toggle('achicarCont');
    sombrA2.classList.toggle('achicarsombra');
    contenedor4.classList.toggle('achicarCont');
    btnCerrar2.classList.toggle('hidden');
    areaXdd.classList.add('hidden');
    jvm.classList.toggle('hidden');
    ak.classList.toggle('hidden');
    caju.classList.toggle('hidden');
    cose.classList.toggle('hidden');
    rucci.classList.toggle('hidden');
    puntos.classList.toggle('hidden2');
    btnAbrir2.classList.add('aparecer2');
});


btnAbrir2.addEventListener("click", () => {
    carrouseL.classList.toggle('achicarCont');
    carrouselcontenedor.classList.toggle('achicarCont');
    sombrA2.classList.toggle('achicarsombra');
    contenedor4.classList.toggle('achicarCont');
    btnCerrar2.classList.toggle('hidden');
    areaXdd.classList.remove('hidden');
    jvm.classList.toggle('hidden');
    ak.classList.toggle('hidden');
    caju.classList.toggle('hidden');
    cose.classList.toggle('hidden');
    rucci.classList.toggle('hidden');
    puntos.classList.toggle('hidden2');
    btnAbrir2.classList.toggle('aparecer2');
});
