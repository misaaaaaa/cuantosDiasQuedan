let dias = document.getElementById("dias");

// dias.innerHTML = "4";

const fechaInicio = new Date('11/03/2026');
const fechaFinal = new Date('11/03/2030');

const diferenciaFecha = Math.abs(fechaFinal - fechaInicio);

// 1000 ms * 60 s * 60 m * 24 h
const diffDays = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));

dias.innerHTML = diffDays;
