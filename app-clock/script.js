const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");


var data = new Date();

let hr = data.getHours();
let min= data.getMinutes();
let seg= data.getSeconds();


console.log("hora: " + hr, "\nminuto: " + min, "\nsegundo: " + seg);


/* nota que se lera a sentença assim:
transforme o estilo da constatnte criada */
PONTEIROHORA.style.transform = "rotate("+hr+"deg)";
PONTEIROMINUTO.style.transform = "rotate("+min+"deg)";
PONTEIROSEGUNDO.style.transform = "rotate("+seg+"deg)";