const horas = document.getElementById('horas')//chamando "id's"
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){//chamando função "time" a cada defeito de tempo

    let DateToday = new Date();//hora atual em millisegundos
    let hr = DateToday.getHours();//varivael hr receberá as horas d horario atual
    let min = DateToday.getMinutes();//variavel min receberá os minutos do horario atual
    let sec = DateToday.getSeconds();//variavel sec receberá os segundos do horario atual

    if (hr < 10) hr = '0' + hr;//coloca 0 na frente do numero toda vez que ele for menor que 10

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;

    horas.innerText = hr//formatação de texto, horas agora é hr
    minutos.innerText = min
    segundos.innerText = sec  
})