var sec=0
var min=0
var hour=0
var intervalo

function doisdigitos(digit){//função criada para quando cada par de digito for menor que 10, manter um zero na frente
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}    

function start(){//funcao chamada quando botao iniciar é clicado 
    contador()
    intervalo=setInterval(contador,1000)//função setInterval chamando função contador a cada periodo de tempo, sendo esse tempo correspondente a 1 segundo
}

function pause(){
    clearInterval(intervalo)//para o cronometro mas não apaga as variaveis
}

function stop(){
    clearInterval(intervalo)//para o cronometro e apaga as variaveis
    sec=0
    min=0
    document.getElementById('contador').innerText='00:00:00'//insere o valor tratado no elemento contador seguido de uma formatação de texto
}

function contador(){//logica if else sendo aplicada pra entender quando acrescentar valor nos numeros seguintes
    sec++//incrementa +1 na variavel sec
    if(sec==60){
        min++//incrementa +1 na variavel min
        sec=0
        if(min==60){
        min=0
        hour++//incrementa +1 na variavel hour
    }
}    
    document.getElementById('contador').innerText=doisdigitos(hour)+':'+doisdigitos(min)+':'+doisdigitos(sec)//concatenação de variaveis do elemento contador
}
