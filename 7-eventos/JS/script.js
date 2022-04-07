/* criou 2 constantes, interessante modo de buscar um elemento
no DOM, aplicando querySelector */

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
/* garante que se o navegador não tiver suport a java script, o viositante verá o alerta
imediatamente */
ALERT.classList.add("hide");
/* criado uma função  */
function reveal(e) {
    /* Nota para .preventDefault(), ele faz com que o evento 
    só seja executado, caso haja um clickl no elemento */
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
/* Nota para o evento onclick
elemento  CTA, evento ONCLICK */
//CTA.onclick = reveal;


/* //Usando   addEventListener();
podemos empilhar vários eventos no addEventListener */
CTA.addEventListener('click', reveal, false);

