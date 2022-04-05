var curso = {
    título: "JavaScript: Formação Básica",
    instrutora: "Amanda Carvalho_Linkedin",
    nível: "1",
    dataDeVisualização: false,
    numeroDeVisualizações: 0,
    atualizaNumeroDeVisualizações: function(){
        return ++curso.numeroDeVisualizações;
    }
};

console.log(curso);