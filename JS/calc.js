function insereNumNoVisor(botao,visor){
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" ||botao.value == "/"){
        
        if(visor.value[visor.value.length-2] == "+" || visor.value[visor.value.length-2] == "-" || visor.value[visor.value.length-2] == "*" || visor.value[visor.value.length-2] == "/"){
            visor.value.slice(visor.value.length-1)
    }else{
        visor.value *= botao.value;
    }
    visor.value += botao.value

}

function resultadoDasOperacoes(visor) {
    visor.value = eval(visor.value);
   
}


