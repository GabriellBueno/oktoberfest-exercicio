AOS.init();

const data_evento = new Date("Oct 10, 2024, 19:00:00");
const time_stamp_evento = data_evento.getTime()

const horas = setInterval(function () {
    const agora = new Date();
    const time_stamp_atual = agora.getTime();

    const distancia_evento = time_stamp_evento - time_stamp_atual;

    const dia_ms = 1000 * 60 * 60 * 24;
    const hora_ms = 1000 * 60 * 60
    const minuto_ms = 1000 * 60;

    const dia_evento = Math.floor(distancia_evento / dia_ms);
    const hora_evento = Math.floor((distancia_evento % dia_ms) / hora_ms);
    const minutos_evento = Math.floor((distancia_evento % hora_ms) / minuto_ms);
    const segundos_evento = Math.floor((distancia_evento % minuto_ms) / 1000)

    console.log(dia_evento);
    console.log(hora_evento);
    console.log(minutos_evento);
    console.log(segundos_evento);

    document.getElementById('contador').innerHTML = `${dia_evento}d ${hora_evento}h ${minutos_evento}m ${segundos_evento}s`;

    if (distancia_evento < 0) {
        clearInterval(horas);
        document.getElementById('contador').innerHTML = 'Evento Expirado!'
    }
}, 1000);