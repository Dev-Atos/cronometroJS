var iniciar = document.querySelector(".cronometro #iniciar")
var parar = document.querySelector(".cronometro #parar")
var zerar = document.querySelector(".cronometro #zerar")

var hora = 0
var minuto = 0
var segundo = 0

var tempo = 20
var cron

function start() {
  cron = setInterval(()=>{timer()}, tempo)
}

function pause() {
    clearInterval(cron)
}

function istop() {
  clearInterval(cron)
  hora = 0
  minuto = 0
  segundo = 0
  document.querySelector(".cronometro #tempo").innerText = '00:00:00'
}

function timer() {
  segundo++;

  if (segundo == 60) {
    segundo = 0
    minuto++

    if (minuto == 60) {
      minuto = 0;
      hora++;
    }
  }

  var format= (hora < 10 ? '0' + hora : hora) + ':' +  (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);

  document.querySelector(".cronometro #tempo").innerText = format

  //?(então) :(senao)
}

iniciar.addEventListener('click', start)
parar.addEventListener('click', pause)
zerar.addEventListener('click', istop)
