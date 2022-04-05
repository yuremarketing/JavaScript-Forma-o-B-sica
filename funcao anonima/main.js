/* exemplo de função anônima, que são funções 
que por não terem nomes declarados, devem estar vincualadas a uma 
variável, evento ou algo semelhante. 
*/


a = 5/7;
b= 18/25;

var theBiggest = function(){

    var result;
    a>b? result = ['a', a] : result = ['b', b];
    console.log(result);
};
theBiggest();
///////