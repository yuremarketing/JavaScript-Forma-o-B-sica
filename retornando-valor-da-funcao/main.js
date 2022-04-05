/* exemplo de função, nota para chamada em vários locais
para diferêntes tratativas */


function getMaior(a,b ){
    var result;
    //nota para a declaração de array para a variável result !!
    a < b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction= 5/7;

var fracao = getMaior(firstFraction, secondFraction);

console.log(fracao)