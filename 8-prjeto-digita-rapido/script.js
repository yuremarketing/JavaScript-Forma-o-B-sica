const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Adiciona zero inicial aos números <= 9 (apenas para estética):


// Executa um timer padrão de minuto / segundo / centésimos:


// Verifica se texto digitado com o fornecido na página:
function spellCheck() { 
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Inicia o cronômetro:
function start(){
    let textEnteredLength = testArea.value.length;/*  */
    console.log(textEnteredLength);
}

// Função de recomeçar:
function reset() {
    console.log("O botão de recomeçar foi clicado.");
}

// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);/* keypress__  para qd uma tecla qualquer for pressionada
star é uma função que foi chamada pra alimentar o addEventListener |  e false  */
testArea.addEventListener("keyup", spellCheck, false);/* adicionado keyup, para determinar o momento que solto a tecla,
chamo a função de verificação ortografica */
resetButton.addEventListener("click", reset, false);/* adicionando evento ao click do botão */





