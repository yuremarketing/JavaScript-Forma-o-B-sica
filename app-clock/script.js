const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");



var data = new Date();

let hr = data.getHours();
let min= data.getMinutes();
let seg= data.getSeconds();


/* console.log("hora: " + hr, "\nminuto: " + min, "\nsegundo: " + seg); */


/* convertendo a data atual em graus, de forma a corresponder 
no relógio, o grau correspondente à hora, minuto e segundo de forma 
dinâmica, note que o 360 é a qtd de graus para de um círculo completo*/
let posicaoHr   = (hr*360/12)+(min*(360/60)/12);
let posicaoMim  =(min*360/60) + (seg*(360/60)/60); 
let posicaoSeg  = seg*360/60;

function executaRelogio(){

    posicaoHr  = posicaoHr+(3/360);
    posicaoMim = posicaoMim+(6/60);
    posicaoSeg = posicaoSeg+6;

    /* nota que se lera a sentença assim:
    transforme o estilo da constatnte criada */
    PONTEIROHORA.style.transform = "rotate("+posicaoHr+"deg)";
    PONTEIROMINUTO.style.transform = "rotate("+posicaoMim+"deg)";
    PONTEIROSEGUNDO.style.transform = "rotate("+posicaoSeg+"deg)";

}

var intervalo  =  setInterval(executaRelogio, 1000 );